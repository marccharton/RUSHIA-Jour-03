'use client'

import { useState } from 'react'
import { Task } from '@/types'
import { initialTasks } from '@/data/initialTasks'

/**
 * Hook personnalisé pour gérer la logique des tâches
 * 
 * Encapsule toute la logique de gestion des tâches :
 * - État des tâches et compteur d'ID
 * - Fonctions de manipulation (ajout, toggle, suppression)
 * - Calculs dérivés (statistiques, listes filtrées)
 * 
 * @returns Un objet contenant l'état et les fonctions de gestion des tâches
 */
export function useTasks() {
  // État React pour stocker la liste des tâches
  // useState retourne [valeur, fonctionPourModifierLaValeur]
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  
  // Compteur pour générer des IDs uniques pour les nouvelles tâches
  const [nextId, setNextId] = useState<number>(initialTasks.length + 1)

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

    // Créer un nouvel objet Task avec un ID unique
    const newTask: Task = {
      id: nextId,
      label: trimmed,
      done: false
    }

    // Mettre à jour l'état : ajouter la nouvelle tâche en tête de liste
    // setTasks([newTask, ...tasks]) crée un nouveau tableau avec newTask en premier
    setTasks([newTask, ...tasks])
    
    // Incrémenter le compteur d'ID pour la prochaine tâche
    setNextId(nextId + 1)
  }

  /**
   * Inverse l'état "done" d'une tâche (complétée <-> à faire)
   * 
   * @param id - L'identifiant de la tâche à modifier
   */
  const toggleTask = (id: number) => {
    // map() crée un nouveau tableau en transformant chaque élément
    // On inverse la propriété 'done' de la tâche correspondant à l'ID
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  /**
   * Supprime une tâche de la liste
   * 
   * @param id - L'identifiant de la tâche à supprimer
   */
  const deleteTask = (id: number) => {
    // filter() crée un nouveau tableau en gardant seulement les tâches
    // dont l'ID est différent de celui à supprimer
    setTasks(tasks.filter(task => task.id !== id))
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
    // Fonctions de manipulation
    addTask,
    toggleTask,
    deleteTask,
    // Statistiques
    todoCount,
    doneCount,
    totalCount,
    // Listes filtrées
    todoTasks,
    doneTasks
  }
}

