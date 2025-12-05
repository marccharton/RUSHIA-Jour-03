'use client'

import TaskForm from '@/components/TaskForm'
import TaskStats from '@/components/TaskStats'
import TaskList from '@/components/TaskList'
import { useTasks } from '@/hooks/useTasks'

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
    toggleTask,
    deleteTask,
    todoCount,
    doneCount,
    totalCount,
    todoTasks,
    doneTasks
  } = useTasks()

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

