import type { Metadata } from 'next'
import './globals.css'

/**
 * Métadonnées de la page - utilisées pour le SEO et l'onglet du navigateur
 */
export const metadata: Metadata = {
  title: 'RUSH-IA – Todolist Jour 03',
  description: 'Todolist Next.js pour le rush RUSH-IA – Jour 03',
}

/**
 * Layout racine de l'application Next.js
 * Ce composant enveloppe toutes les pages de l'application
 * 
 * @param children - Le contenu de la page (ici, notre page principale)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

