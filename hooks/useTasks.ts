'use client'

import { useState, useEffect } from 'react'
import { Task } from '@/types'
import { supabase } from '@/lib/supabase'

/**
 * Hook personnalisé pour gérer la logique des tâches
 * 
 * Encapsule toute la logique de gestion des tâches :
 * - Récupération des tâches depuis Supabase
 * - État des tâches et état de chargement
 * - Fonctions de manipulation (ajout, toggle, suppression)
 * - Calculs dérivés (statistiques, listes filtrées)
 * 
 * @returns Un objet contenant l'état et les fonctions de gestion des tâches
 */
export function useTasks() {
  // État React pour stocker la liste des tâches
  // useState retourne [valeur, fonctionPourModifierLaValeur]
  const [tasks, setTasks] = useState<Task[]>([])
  
  // État pour gérer le chargement des tâches
  const [loading, setLoading] = useState<boolean>(true)
  
  // État pour gérer les erreurs
  const [error, setError] = useState<string | null>(null)

  /**
   * Récupère les tâches depuis Supabase
   * 
   * Pour l'instant, récupère toutes les tâches.
   * Plus tard, on pourra filtrer par user_id lors de l'implémentation de l'authentification.
   */
  const fetchTasks = async () => {
    try {
      setLoading(true)
      setError(null)

      // Récupérer toutes les tâches depuis la table 'tasks'
      // On trie par created_at décroissant pour avoir les plus récentes en premier
      const { data, error: fetchError } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) {
        throw fetchError
      }

      // Convertir les données en format Task
      // Supabase retourne les données avec les mêmes noms de colonnes
      if (data) {
        setTasks(data as Task[])
      } else {
        setTasks([])
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des tâches:', err)
      setError(err instanceof Error ? err.message : 'Erreur inconnue lors du chargement des tâches')
      setTasks([])
    } finally {
      setLoading(false)
    }
  }

  // Charger les tâches au montage du composant
  useEffect(() => {
    fetchTasks()
  }, [])

  /**
   * Génère un UUID v4 simple pour les nouvelles tâches
   * En production, les UUID seront générés par Supabase
   * 
   * @returns Un UUID v4 sous forme de string
   */
  const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  /**
   * Ajoute une nouvelle tâche à la liste
   * 
   * @param label - Le texte de la tâche à ajouter
   */
  const addTask = (label: string) => {
    // Trim pour enlever les espaces avant/après
    const trimmed = label.trim()
    
    // Ne pas ajouter de tâche vide
    if (!trimmed) return

    // Générer un UUID pour la nouvelle tâche
    const now = new Date().toISOString()

    // Créer un nouvel objet Task avec un UUID et les timestamps
    const newTask: Task = {
      id: generateUUID(),
      user_id: null, // Sera défini lors de l'intégration avec l'authentification
      label: trimmed,
      done: false,
      created_at: now,
      updated_at: now
    }

    // Mettre à jour l'état : ajouter la nouvelle tâche en tête de liste
    // setTasks([newTask, ...tasks]) crée un nouveau tableau avec newTask en premier
    setTasks([newTask, ...tasks])
  }

  /**
   * Inverse l'état "done" d'une tâche (complétée <-> à faire)
   * Met à jour la base de données Supabase pour persister le changement
   * 
   * @param id - L'identifiant UUID de la tâche à modifier
   */
  const toggleTask = async (id: string) => {
    // Trouver la tâche à modifier
    const taskToUpdate = tasks.find(task => task.id === id)
    if (!taskToUpdate) {
      return
    }

    // Nouvel état de la tâche (inversé)
    const newDoneState = !taskToUpdate.done
    const now = new Date().toISOString()

    // Mise à jour optimiste de l'état local (pour une meilleure UX)
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: newDoneState, updated_at: now } : task
    ))

    try {
      // Mettre à jour le champ "done" dans Supabase
      const { error: updateError } = await supabase
        .from('tasks')
        .update({ done: newDoneState })
        .eq('id', id)

      if (updateError) {
        throw updateError
      }
    } catch (err) {
      // En cas d'erreur, annuler le changement optimiste
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, done: taskToUpdate.done, updated_at: taskToUpdate.updated_at } : task
      ))

      // Afficher une erreur à l'utilisateur
      setError(err instanceof Error ? err.message : 'Erreur lors de la mise à jour de la tâche')
      setTimeout(() => setError(null), 5000)
    }
  }

  /**
   * Supprime une tâche de la liste
   * Met à jour la base de données Supabase pour persister la suppression
   * 
   * @param id - L'identifiant UUID de la tâche à supprimer
   */
  const deleteTask = async (id: string) => {
    // Trouver la tâche à supprimer pour pouvoir la restaurer en cas d'erreur
    const taskToDelete = tasks.find(task => task.id === id)
    if (!taskToDelete) {
      return
    }

    // Mise à jour optimiste : supprimer la tâche de l'état local immédiatement
    setTasks(tasks.filter(task => task.id !== id))

    try {
      // Supprimer la tâche dans Supabase
      const { error: deleteError } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)

      if (deleteError) {
        throw deleteError
      }
    } catch (err) {
      // En cas d'erreur, restaurer la tâche dans l'état local
      setTasks([...tasks, taskToDelete])

      // Afficher une erreur à l'utilisateur
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression de la tâche')
      setTimeout(() => setError(null), 5000)
    }
  }

  // Calcul des statistiques des tâches
  // Ces valeurs sont recalculées à chaque fois que 'tasks' change
  const todoCount = tasks.filter(task => !task.done).length
  const doneCount = tasks.filter(task => task.done).length
  const totalCount = tasks.length

  // Séparer les tâches en deux listes : à faire et terminées
  const todoTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter(task => task.done)

  return {
    // État
    tasks,
    loading,
    error,
    // Fonctions de manipulation
    addTask,
    toggleTask,
    deleteTask,
    fetchTasks, // Exposer la fonction pour permettre un rechargement manuel
    // Statistiques
    todoCount,
    doneCount,
    totalCount,
    // Listes filtrées
    todoTasks,
    doneTasks
  }
}

