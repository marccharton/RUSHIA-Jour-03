'use client'

import { useState } from 'react'
import { Task } from '@/types'
import TaskForm from '@/components/TaskForm'
import TaskStats from '@/components/TaskStats'
import TaskList from '@/components/TaskList'

/**
 * Tâches initiales de l'application
 * Ces tâches sont chargées au démarrage de l'application
 * Elles reflètent l'avancement réel du projet RUSH-IA Jour 03
 */
const initialTasks: Task[] = [
  // Tâches terminées - Migration et exploration des technologies
  { id: 1, label: "Configurer le projet dans Cursor", done: true },
  { id: 2, label: "Migrer le projet statique (HTML/CSS/JS) vers Next.js", done: true },
  { id: 3, label: "Explorer Parcel dans un projet séparé", done: true },
  { id: 4, label: "Explorer Vite dans un projet séparé", done: true },
  { id: 5, label: "Créer la structure Next.js avec App Router", done: true },
  { id: 6, label: "Migrer les styles CSS vers globals.css", done: true },
  { id: 7, label: "Créer les composants React modulaires", done: true },
  { id: 8, label: "Migrer toute la logique JavaScript vers React hooks", done: true },
  { id: 9, label: "Ajouter des commentaires explicatifs partout", done: true },
  { id: 10, label: "Configurer TypeScript pour le projet", done: true },
  { id: 11, label: "Organiser les types dans un dossier dédié", done: true },
  { id: 12, label: "Configurer le déploiement sur Vercel", done: true },
  { id: 13, label: "Corriger les dépendances pour Vercel", done: true },
  { id: 14, label: "Ajouter les liens GitHub et documentation", done: true },
  
  // Tâches à faire - Exploration Next.js avec nouvelles fonctionnalités
  
  // Gestion d'utilisateur
  { id: 15, label: "Configurer Supabase pour le backend", done: false },
  { id: 16, label: "Créer le système d'authentification (inscription/connexion)", done: false },
  { id: 17, label: "Implémenter la gestion de session utilisateur", done: false },
  { id: 18, label: "Créer les pages d'inscription et de connexion", done: false },
  
  // Backend et base de données
  { id: 19, label: "Configurer la connexion à la base de données Supabase", done: false },
  { id: 20, label: "Créer le schéma de base de données pour les utilisateurs", done: false },
  { id: 21, label: "Créer le schéma de base de données pour les tâches", done: false },
  { id: 22, label: "Migrer le stockage des tâches vers Supabase", done: false },
  
  // Emails et notifications
  { id: 23, label: "Configurer l'envoi d'emails avec Supabase", done: false },
  { id: 24, label: "Créer le template d'email de confirmation d'inscription", done: false },
  { id: 25, label: "Implémenter l'envoi d'email lors de l'inscription", done: false },
  { id: 26, label: "Ajouter la vérification d'email pour activer le compte", done: false },
  
  // Améliorations et autres
  { id: 27, label: "Créer un système de récupération de mot de passe", done: false },
  { id: 28, label: "Ajouter un profil utilisateur avec édition", done: false },
  { id: 29, label: "Implémenter la persistance des tâches par utilisateur", done: false },
  { id: 30, label: "Documenter les autres projets (Parcel, Vite)", done: false }
]

/**
 * Composant principal de l'application Todolist
 * Gère l'état global des tâches et coordonne les différents composants
 * 
 * Utilise 'use client' car ce composant nécessite des interactions utilisateur
 * (React hooks pour gérer l'état)
 */
export default function Home() {
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

  return (
    <div className="app">
      {/* En-tête de l'application */}
      <header className="app-header">
        <h1>Ma todolist</h1>
        <p className="app-subtitle">
          Petit projet Next.js pour le rush{' '}
          <a
            href="https://github.com/marccharton/RUSHIA-Jour-03"
            target="_blank"
            rel="noopener noreferrer"
            className="subtitle-link"
          >
            RUSH‑IA – Jour 03
          </a>
          .
        </p>
      </header>

      {/* Contenu principal */}
      <main className="app-main">
        {/* Section pour ajouter une nouvelle tâche */}
        <section className="task-input">
          <h2>Ajouter une tâche</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        {/* Section des statistiques (compteurs) */}
        <section className="task-stats">
          <TaskStats
            todoCount={todoCount}
            doneCount={doneCount}
            totalCount={totalCount}
          />
        </section>

        {/* Section des listes de tâches (À faire / Terminées) */}
        <section className="task-lists">
          <div className="task-column">
            <h2>À faire</h2>
            <TaskList
              tasks={todoTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          </div>

          <div className="task-column">
            <h2>Terminées</h2>
            <TaskList
              tasks={doneTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              isDoneList={true}
            />
          </div>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="app-footer">
        <a
          href="https://github.com/marccharton/RUSHIA-Jour-03"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          RUSH‑IA – Jour 03
        </a>
        <span className="separator">•</span>
        <span>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Next.js
          </a>
          {' / '}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            React
          </a>
          {' / '}
          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            TypeScript
          </a>
        </span>
      </footer>
    </div>
  )
}

