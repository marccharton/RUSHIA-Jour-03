/**
 * Type TypeScript pour une tâche dans l'application Todolist
 * 
 * Définit la structure d'une tâche :
 * - id : identifiant unique de la tâche
 * - label : texte/description de la tâche
 * - done : statut de la tâche (true = terminée, false = à faire)
 */
export interface Task {
  id: number
  label: string
  done: boolean
}

