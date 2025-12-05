/**
 * Type TypeScript pour une tâche dans l'application Todolist
 * 
 * Correspond au schéma de la table Supabase 'tasks' :
 * - id : UUID généré automatiquement par Supabase
 * - user_id : UUID de l'utilisateur propriétaire (peut être null pour les tâches non associées)
 * - label : texte/description de la tâche
 * - done : statut de la tâche (true = terminée, false = à faire)
 * - created_at : date de création (générée automatiquement)
 * - updated_at : date de dernière modification (générée automatiquement)
 */
export interface Task {
  id: string // UUID
  user_id: string | null // UUID de l'utilisateur, null si non associé
  label: string
  done: boolean
  created_at: string // ISO timestamp
  updated_at: string // ISO timestamp
}

