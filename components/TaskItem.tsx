'use client'

import { useState, useRef, useEffect } from 'react'
import { Task } from '@/types'

/**
 * Props du composant TaskItem
 */
interface TaskItemProps {
  /** La tâche à afficher */
  task: Task
  /**
   * Fonction callback appelée quand l'utilisateur coche/décoche la tâche
   * Reçoit l'UUID de la tâche en paramètre
   */
  onToggle: (id: string) => void
  /**
   * Fonction callback appelée quand l'utilisateur supprime la tâche
   * Reçoit l'UUID de la tâche en paramètre
   */
  onDelete: (id: string) => void
  /**
   * Fonction callback appelée quand l'utilisateur modifie le label de la tâche
   * Reçoit l'UUID de la tâche et le nouveau label en paramètres
   */
  onUpdate?: (id: string, newLabel: string) => void
  /**
   * ID de la tâche nouvellement ajoutée (pour l'animation)
   */
  isNewlyAdded?: boolean
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
export default function TaskItem({ task, onToggle, onDelete, onUpdate, isNewlyAdded = false }: TaskItemProps) {
  // État pour gérer le mode édition
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.label)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mettre à jour editValue quand task.label change
  useEffect(() => {
    setEditValue(task.label)
  }, [task.label])

  // Focus sur l'input quand on passe en mode édition
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

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

  /**
   * Active le mode édition (seulement si la tâche n'est pas terminée)
   */
  const handleStartEdit = () => {
    if (!task.done && onUpdate) {
      setIsEditing(true)
    }
  }

  /**
   * Sauvegarde les modifications
   */
  const handleSaveEdit = () => {
    const trimmed = editValue.trim()
    if (trimmed && trimmed !== task.label && onUpdate) {
      onUpdate(task.id, trimmed)
    } else {
      // Annuler si le label est vide ou inchangé
      setEditValue(task.label)
    }
    setIsEditing(false)
  }

  /**
   * Annule l'édition
   */
  const handleCancelEdit = () => {
    setEditValue(task.label)
    setIsEditing(false)
  }

  /**
   * Gère la touche Enter pour sauvegarder et Escape pour annuler
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <li
      className={`task-item ${task.done ? 'task-item--done' : ''} ${isNewlyAdded ? 'task-item--newly-added' : ''}`}
      data-id={task.id}
    >
      {/* Checkbox pour cocher/décocher la tâche */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleToggle}
        aria-label={`Marquer la tâche "${task.label}" comme ${task.done ? 'à faire' : 'terminée'}`}
      />

      {/* Label de la tâche ou input d'édition */}
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="task-label-edit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span 
          className={`task-label ${task.done ? 'task-label--done' : ''} ${!task.done && onUpdate ? 'task-label--editable' : ''}`}
          onDoubleClick={handleStartEdit}
          title={!task.done && onUpdate ? 'Double-cliquez pour éditer' : ''}
        >
          {task.label}
        </span>
      )}

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

