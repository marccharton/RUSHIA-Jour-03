import { Task } from '@/types'

/**
 * Tâches initiales de l'application
 * 
 * Ces tâches sont chargées au démarrage de l'application.
 * Elles reflètent l'avancement réel du projet RUSH-IA Jour 03.
 * 
 * Ce fichier est isolé pour faciliter la maintenance et la modification
 * des tâches initiales sans toucher à la logique du composant principal.
 */
export const initialTasks: Task[] = [
  // Tâches terminées - Migration et exploration des technologies
  { id: 1, label: "Configurer le projet dans Cursor", done: true },
  { id: 2, label: "Migrer le projet statique (HTML/CSS/JS) vers Next.js", done: true },
  { id: 3, label: "Explorer Parcel dans un projet séparé", done: true },
  { id: 4, label: "Explorer Vite dans un projet séparé", done: true },
  { id: 5, label: "Créer la structure Next.js avec App Router", done: true },
  { id: 6, label: "Migrer les styles CSS vers globals.css", done: true },
  { id: 7, label: "Créer les composants React modulaires", done: true },
  { id: 8, label: "Migrer toute la logique JavaScript vers React hooks", done: true },
  { id: 9, label: "Ajouter des commentaires explicatifs partout", done: true },
  { id: 10, label: "Configurer TypeScript pour le projet", done: true },
  { id: 11, label: "Organiser les types dans un dossier dédié", done: true },
  { id: 12, label: "Configurer le déploiement sur Vercel", done: true },
  { id: 13, label: "Corriger les dépendances pour Vercel", done: true },
  { id: 14, label: "Ajouter les liens GitHub et documentation", done: true },
  
  // Tâches à faire - Exploration Next.js avec nouvelles fonctionnalités
  
  // Gestion d'utilisateur
  { id: 15, label: "Configurer Supabase pour le backend", done: false },
  { id: 16, label: "Créer le système d'authentification (inscription/connexion)", done: false },
  { id: 17, label: "Implémenter la gestion de session utilisateur", done: false },
  { id: 18, label: "Créer les pages d'inscription et de connexion", done: false },
  
  // Backend et base de données
  { id: 19, label: "Configurer la connexion à la base de données Supabase", done: false },
  { id: 20, label: "Créer le schéma de base de données pour les utilisateurs", done: false },
  { id: 21, label: "Créer le schéma de base de données pour les tâches", done: false },
  { id: 22, label: "Migrer le stockage des tâches vers Supabase", done: false },
  
  // Emails et notifications
  { id: 23, label: "Configurer l'envoi d'emails avec Supabase", done: false },
  { id: 24, label: "Créer le template d'email de confirmation d'inscription", done: false },
  { id: 25, label: "Implémenter l'envoi d'email lors de l'inscription", done: false },
  { id: 26, label: "Ajouter la vérification d'email pour activer le compte", done: false },
  
  // Améliorations et autres
  { id: 27, label: "Créer un système de récupération de mot de passe", done: false },
  { id: 28, label: "Ajouter un profil utilisateur avec édition", done: false },
  { id: 29, label: "Implémenter la persistance des tâches par utilisateur", done: false },
  { id: 30, label: "Documenter les autres projets (Parcel, Vite)", done: false }
]

