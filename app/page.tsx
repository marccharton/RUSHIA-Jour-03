'use client'

import { useState, useEffect } from 'react'
import TaskForm from '@/components/TaskForm'
import TaskStats from '@/components/TaskStats'
import TaskList from '@/components/TaskList'
import ConfirmModal from '@/components/ConfirmModal'
import { useTasks } from '@/hooks/useTasks'
import { Task } from '@/types'

/**
 * Composant principal de l'application Todolist
 * Coordonne les différents composants de l'interface
 * 
 * Utilise 'use client' car ce composant nécessite des interactions utilisateur
 * La logique de gestion des tâches est déléguée au hook useTasks
 */
export default function Home() {
  // Utilisation du hook personnalisé pour gérer toute la logique des tâches
  const {
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    todoCount,
    doneCount,
    totalCount,
    todoTasks,
    doneTasks,
    loading,
    error,
    newlyAddedTaskId
  } = useTasks()

  // État pour gérer la modale de confirmation de suppression
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)
  
  // État pour gérer l'affichage du message de succès
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  /**
   * Gère la demande de suppression d'une tâche
   * Ouvre la modale de confirmation
   */
  const handleDeleteRequest = (id: string) => {
    // Trouver la tâche à supprimer dans toutes les tâches
    const task = [...todoTasks, ...doneTasks].find(t => t.id === id)
    if (task) {
      setTaskToDelete(task)
    }
  }

  /**
   * Confirme la suppression de la tâche
   */
  const handleConfirmDelete = () => {
    if (taskToDelete) {
      const taskLabel = taskToDelete.label
      deleteTask(taskToDelete.id)
      setTaskToDelete(null)
      
      // Afficher le message de succès
      setSuccessMessage(`Tâche "${taskLabel}" supprimée avec succès`)
    }
  }

  /**
   * Efface automatiquement le message de succès après 3 secondes
   */
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [successMessage])

  /**
   * Annule la suppression
   */
  const handleCancelDelete = () => {
    setTaskToDelete(null)
  }

  return (
    <div className="app">
      {/* Modale de confirmation de suppression */}
      <ConfirmModal
        isOpen={taskToDelete !== null}
        title="Supprimer la tâche ?"
        message={taskToDelete ? `Êtes-vous sûr de vouloir supprimer "${taskToDelete.label}" ?` : ''}
        confirmText="Supprimer"
        cancelText="Annuler"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

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
        {/* Affichage de l'état de chargement */}
        {loading && (
          <section className="task-loading">
            <p>Chargement des tâches...</p>
          </section>
        )}

        {/* Affichage des erreurs */}
        {error && (
          <section className="task-error">
            <p style={{ color: 'red' }}>Erreur : {error}</p>
          </section>
        )}

        {/* Affichage du message de succès */}
        {successMessage && (
          <section className="task-success">
            <p>{successMessage}</p>
          </section>
        )}

        {/* Section pour ajouter une nouvelle tâche */}
        <section className="task-input">
          <h2>Ajouter une tâche</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        {/* Section des statistiques (compteurs) */}
        {!loading && (
          <section className="task-stats">
            <TaskStats
              todoCount={todoCount}
              doneCount={doneCount}
              totalCount={totalCount}
            />
          </section>
        )}

        {/* Section des listes de tâches (À faire / Terminées) */}
        {!loading && (
          <section className="task-lists">
            <div className="task-column">
              <h2>À faire</h2>
              <TaskList
                tasks={todoTasks}
                onToggleTask={toggleTask}
                onDeleteTask={handleDeleteRequest}
                onUpdateTask={updateTask}
                newlyAddedTaskId={newlyAddedTaskId}
              />
            </div>

            <div className="task-column">
              <h2>Terminées</h2>
              <TaskList
                tasks={doneTasks}
                onToggleTask={toggleTask}
                onDeleteTask={handleDeleteRequest}
                isDoneList={true}
                newlyAddedTaskId={newlyAddedTaskId}
              />
            </div>
          </section>
        )}
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

