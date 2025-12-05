-- Requêtes SQL pour insérer les tâches initiales dans Supabase
-- Copiez-collez ces requêtes dans l'éditeur SQL de Supabase

-- Tâches terminées - Migration et exploration des technologies
INSERT INTO tasks (id, user_id, label, done, created_at, updated_at) VALUES
('00000000-0000-0000-0000-000000000001', NULL, 'Configurer le projet dans Cursor', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000002', NULL, 'Migrer le projet statique (HTML/CSS/JS) vers Next.js', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000003', NULL, 'Explorer Parcel dans un projet séparé', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000004', NULL, 'Explorer Vite dans un projet séparé', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000005', NULL, 'Créer la structure Next.js avec App Router', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000006', NULL, 'Migrer les styles CSS vers globals.css', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000007', NULL, 'Créer les composants React modulaires', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000008', NULL, 'Migrer toute la logique JavaScript vers React hooks', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000009', NULL, 'Ajouter des commentaires explicatifs partout', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000010', NULL, 'Configurer TypeScript pour le projet', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000011', NULL, 'Organiser les types dans un dossier dédié', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000012', NULL, 'Configurer le déploiement sur Vercel', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000013', NULL, 'Corriger les dépendances pour Vercel', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000014', NULL, 'Ajouter les liens GitHub et documentation', true, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),

-- Tâches à faire - Exploration Next.js avec nouvelles fonctionnalités

-- Gestion d'utilisateur
('00000000-0000-0000-0000-000000000015', NULL, 'Configurer Supabase pour le backend', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000016', NULL, 'Créer le système d''authentification (inscription/connexion)', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000017', NULL, 'Implémenter la gestion de session utilisateur', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000018', NULL, 'Créer les pages d''inscription et de connexion', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),

-- Backend et base de données
('00000000-0000-0000-0000-000000000019', NULL, 'Configurer la connexion à la base de données Supabase', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000020', NULL, 'Créer le schéma de base de données pour les utilisateurs', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000021', NULL, 'Créer le schéma de base de données pour les tâches', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000022', NULL, 'Migrer le stockage des tâches vers Supabase', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),

-- Emails et notifications
('00000000-0000-0000-0000-000000000023', NULL, 'Configurer l''envoi d''emails avec Supabase', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000024', NULL, 'Créer le template d''email de confirmation d''inscription', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000025', NULL, 'Implémenter l''envoi d''email lors de l''inscription', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000026', NULL, 'Ajouter la vérification d''email pour activer le compte', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),

-- Améliorations et autres
('00000000-0000-0000-0000-000000000027', NULL, 'Créer un système de récupération de mot de passe', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000028', NULL, 'Ajouter un profil utilisateur avec édition', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000029', NULL, 'Implémenter la persistance des tâches par utilisateur', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
('00000000-0000-0000-0000-000000000030', NULL, 'Documenter les autres projets (Parcel, Vite)', false, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z');

