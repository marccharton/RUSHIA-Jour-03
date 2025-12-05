'use client'

import { useState, FormEvent } from 'react'

/**
 * Props du composant TaskForm
 * Définit les propriétés que le composant parent doit passer
 */
interface TaskFormProps {
  /**
   * Fonction callback appelée quand l'utilisateur soumet le formulaire
   * Reçoit le texte de la tâche en paramètre
   */
  onAddTask: (label: string) => void
}

/**
 * Composant formulaire pour ajouter une nouvelle tâche
 * 
 * Ce composant gère :
 * - L'input pour saisir le texte de la tâche
 * - La soumission du formulaire
 * - La réinitialisation du champ après ajout
 */
export default function TaskForm({ onAddTask }: TaskFormProps) {
  // État React pour stocker la valeur de l'input
  // On utilise useState pour créer un "état contrôlé" (controlled component)
  const [inputValue, setInputValue] = useState<string>('')

  /**
   * Gestionnaire d'événement appelé lors de la soumission du formulaire
   * 
   * @param e - L'événement de soumission du formulaire
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Empêcher le comportement par défaut du formulaire (rechargement de page)
    e.preventDefault()

    // Appeler la fonction callback avec le texte saisi
    onAddTask(inputValue)

    // Réinitialiser le champ input après ajout
    setInputValue('')

    // Remettre le focus sur l'input pour faciliter l'ajout d'une nouvelle tâche
    // On utilise setTimeout car le DOM n'est pas encore mis à jour
    setTimeout(() => {
      const input = document.getElementById('task-input') as HTMLInputElement
      if (input) {
        input.focus()
      }
    }, 0)
  }

  return (
    <form id="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        {/* Input contrôlé : sa valeur est liée à l'état React */}
        <input
          type="text"
          id="task-input"
          placeholder="Ex : Revoir le README, tester la todolist..."
          autoComplete="off"
          required
          value={inputValue}
          // onChange met à jour l'état à chaque frappe
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </div>
    </form>
  )
}

