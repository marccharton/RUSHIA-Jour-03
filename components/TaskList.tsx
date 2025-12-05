'use client'

import { Task } from '@/types'
import TaskItem from './TaskItem'

/**
 * Props du composant TaskList
 */
interface TaskListProps {
  /** Liste des tâches à afficher */
  tasks: Task[]
  /**
   * Fonction callback appelée quand l'utilisateur coche/décoche une tâche
   * Reçoit l'ID de la tâche en paramètre
   */
  onToggleTask: (id: number) => void
  /**
   * Fonction callback appelée quand l'utilisateur supprime une tâche
   * Reçoit l'ID de la tâche en paramètre
   */
  onDeleteTask: (id: number) => void
  /**
   * Indique si c'est la liste des tâches terminées
   * Utilisé pour appliquer des styles différents
   */
  isDoneList?: boolean
}

/**
 * Composant liste de tâches
 * 
 * Affiche une liste de tâches (à faire ou terminées) en utilisant
 * le composant TaskItem pour chaque tâche.
 * 
 * Ce composant est "présentationnel" : il reçoit les données et les callbacks,
 * et délègue le rendu de chaque tâche au composant TaskItem
 */
export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  isDoneList = false,
}: TaskListProps) {
  return (
    <ul
      className={`task-list ${isDoneList ? 'task-list--done' : ''}`}
      aria-label={isDoneList ? 'Tâches terminées' : 'Tâches à faire'}
    >
      {/* 
        map() transforme chaque tâche en composant TaskItem
        key={task.id} est nécessaire pour que React puisse identifier
        chaque élément lors des mises à jour de la liste
      */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  )
}

