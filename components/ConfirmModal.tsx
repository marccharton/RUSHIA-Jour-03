'use client'

/**
 * Props du composant ConfirmModal
 */
interface ConfirmModalProps {
  /** Indique si la modale est ouverte */
  isOpen: boolean
  /** Titre de la modale */
  title: string
  /** Message de confirmation */
  message: string
  /** Texte du bouton de confirmation */
  confirmText?: string
  /** Texte du bouton d'annulation */
  cancelText?: string
  /** Fonction appelée lors de la confirmation */
  onConfirm: () => void
  /** Fonction appelée lors de l'annulation */
  onCancel: () => void
}

/**
 * Composant modale de confirmation
 * 
 * Affiche une modale pour confirmer une action (comme la suppression d'une tâche)
 */
export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
  onConfirm,
  onCancel
}: ConfirmModalProps) {
  // Ne rien afficher si la modale n'est pas ouverte
  if (!isOpen) return null

  // Gérer la fermeture avec la touche Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel()
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={onCancel}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button
            type="button"
            className="modal-button modal-button--cancel"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="modal-button modal-button--confirm"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

