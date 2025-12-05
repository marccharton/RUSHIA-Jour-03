/**
 * Props du composant TaskStats
 * Définit les compteurs à afficher
 */
interface TaskStatsProps {
  /** Nombre de tâches à faire (non terminées) */
  todoCount: number
  /** Nombre de tâches terminées */
  doneCount: number
  /** Nombre total de tâches */
  totalCount: number
}

/**
 * Composant d'affichage des statistiques des tâches
 * 
 * Affiche trois compteurs :
 * - À faire : nombre de tâches non terminées
 * - Terminées : nombre de tâches complétées
 * - Total : nombre total de tâches
 * 
 * Ce composant est "présentationnel" : il reçoit juste les données à afficher
 * et ne gère pas de logique métier
 */
export default function TaskStats({
  todoCount,
  doneCount,
  totalCount,
}: TaskStatsProps) {
  return (
    <div className="stats-container">
      {/* Compteur des tâches à faire */}
      <span className="stat-item">
        <span className="stat-label">À faire :</span>
        <span id="todo-count" className="stat-value">
          {todoCount}
        </span>
      </span>

      {/* Séparateur visuel */}
      <span className="stat-separator">•</span>

      {/* Compteur des tâches terminées */}
      <span className="stat-item">
        <span className="stat-label">Terminées :</span>
        <span id="done-count" className="stat-value">
          {doneCount}
        </span>
      </span>

      {/* Séparateur visuel */}
      <span className="stat-separator">•</span>

      {/* Compteur du total */}
      <span className="stat-item">
        <span className="stat-label">Total :</span>
        <span id="total-count" className="stat-value">
          {totalCount}
        </span>
      </span>
    </div>
  )
}

