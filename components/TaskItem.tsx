'use client'

import { Task } from '@/types'

/**
 * Props du composant TaskItem
 */
interface TaskItemProps {
  /** La tâche à afficher */
  task: Task
  /**
   * Fonction callback appelée quand l'utilisateur coche/décoche la tâche
   * Reçoit l'ID de la tâche en paramètre
   */
  onToggle: (id: number) => void
  /**
   * Fonction callback appelée quand l'utilisateur supprime la tâche
   * Reçoit l'ID de la tâche en paramètre
   */
  onDelete: (id: number) => void
}

/**
 * Composant élément de tâche individuelle
 * 
 * Affiche une seule tâche avec :
 * - Une checkbox pour marquer comme terminée/à faire
 * - Le label (texte) de la tâche
 * - Un indicateur de statut ("à faire" ou "terminée")
 * - Un bouton de suppression
 * 
 * Ce composant est "présentationnel" : il reçoit les données et les callbacks,
 * et délègue les actions au composant parent
 */
export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  /**
   * Gestionnaire d'événement pour la checkbox
   * Appelle la fonction onToggle avec l'ID de la tâche
   */
  const handleToggle = () => {
    onToggle(task.id)
  }

  /**
   * Gestionnaire d'événement pour le bouton de suppression
   * Appelle la fonction onDelete avec l'ID de la tâche
   */
  const handleDelete = () => {
    onDelete(task.id)
  }

  return (
    <li
      className={`task-item ${task.done ? 'task-item--done' : ''}`}
      data-id={task.id}
    >
      {/* Checkbox pour cocher/décocher la tâche */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleToggle}
        aria-label={`Marquer la tâche "${task.label}" comme ${task.done ? 'à faire' : 'terminée'}`}
      />

      {/* Label de la tâche avec style conditionnel si terminée */}
      <span className={`task-label ${task.done ? 'task-label--done' : ''}`}>
        {task.label}
      </span>

      {/* Indicateur de statut (à faire / terminée) */}
      <span className="task-meta">{task.done ? 'terminée' : 'à faire'}</span>

      {/* Bouton de suppression */}
      <button
        className="task-delete"
        type="button"
        onClick={handleDelete}
        aria-label={`Supprimer la tâche "${task.label}"`}
      >
        ×
      </button>
    </li>
  )
}

