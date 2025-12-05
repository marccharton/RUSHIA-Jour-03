import { Task } from '@/types'

/**
 * Tâches initiales de l'application
 * 
 * Ces tâches sont chargées au démarrage de l'application.
 * Elles reflètent l'avancement réel du projet RUSH-IA Jour 03.
 * 
 * Ce fichier est isolé pour faciliter la maintenance et la modification
 * des tâches initiales sans toucher à la logique du composant principal.
 * 
 * Note : Les UUID sont fixes pour maintenir la cohérence. En production,
 * ces tâches seront chargées depuis Supabase avec des UUID générés par la base.
 */

// Timestamp de référence pour les tâches initiales
const baseTimestamp = new Date('2024-01-01T00:00:00Z').toISOString()

export const initialTasks: Task[] = [
  // Tâches terminées - Migration et exploration des technologies
  { id: '00000000-0000-0000-0000-000000000001', user_id: null, label: "Configurer le projet dans Cursor", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000002', user_id: null, label: "Migrer le projet statique (HTML/CSS/JS) vers Next.js", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000003', user_id: null, label: "Explorer Parcel dans un projet séparé", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000004', user_id: null, label: "Explorer Vite dans un projet séparé", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000005', user_id: null, label: "Créer la structure Next.js avec App Router", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000006', user_id: null, label: "Migrer les styles CSS vers globals.css", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000007', user_id: null, label: "Créer les composants React modulaires", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000008', user_id: null, label: "Migrer toute la logique JavaScript vers React hooks", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000009', user_id: null, label: "Ajouter des commentaires explicatifs partout", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000010', user_id: null, label: "Configurer TypeScript pour le projet", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000011', user_id: null, label: "Organiser les types dans un dossier dédié", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000012', user_id: null, label: "Configurer le déploiement sur Vercel", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000013', user_id: null, label: "Corriger les dépendances pour Vercel", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000014', user_id: null, label: "Ajouter les liens GitHub et documentation", done: true, created_at: baseTimestamp, updated_at: baseTimestamp },
  
  // Tâches à faire - Exploration Next.js avec nouvelles fonctionnalités
  
  // Gestion d'utilisateur
  { id: '00000000-0000-0000-0000-000000000015', user_id: null, label: "Configurer Supabase pour le backend", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000016', user_id: null, label: "Créer le système d'authentification (inscription/connexion)", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000017', user_id: null, label: "Implémenter la gestion de session utilisateur", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000018', user_id: null, label: "Créer les pages d'inscription et de connexion", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  
  // Backend et base de données
  { id: '00000000-0000-0000-0000-000000000019', user_id: null, label: "Configurer la connexion à la base de données Supabase", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000020', user_id: null, label: "Créer le schéma de base de données pour les utilisateurs", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000021', user_id: null, label: "Créer le schéma de base de données pour les tâches", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000022', user_id: null, label: "Migrer le stockage des tâches vers Supabase", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  
  // Emails et notifications
  { id: '00000000-0000-0000-0000-000000000023', user_id: null, label: "Configurer l'envoi d'emails avec Supabase", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000024', user_id: null, label: "Créer le template d'email de confirmation d'inscription", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000025', user_id: null, label: "Implémenter l'envoi d'email lors de l'inscription", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000026', user_id: null, label: "Ajouter la vérification d'email pour activer le compte", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  
  // Améliorations et autres
  { id: '00000000-0000-0000-0000-000000000027', user_id: null, label: "Créer un système de récupération de mot de passe", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000028', user_id: null, label: "Ajouter un profil utilisateur avec édition", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000029', user_id: null, label: "Implémenter la persistance des tâches par utilisateur", done: false, created_at: baseTimestamp, updated_at: baseTimestamp },
  { id: '00000000-0000-0000-0000-000000000030', user_id: null, label: "Documenter les autres projets (Parcel, Vite)", done: false, created_at: baseTimestamp, updated_at: baseTimestamp }
]

