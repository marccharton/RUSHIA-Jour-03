import { createClient } from '@supabase/supabase-js'

/**
 * Configuration et initialisation du client Supabase
 * 
 * Ce fichier crée et exporte une instance du client Supabase
 * configurée avec les variables d'environnement.
 * 
 * Les variables d'environnement sont chargées depuis .env.local :
 * - NEXT_PUBLIC_SUPABASE_URL : L'URL de votre projet Supabase
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY : La clé publique anonyme de votre projet Supabase
 * 
 * Note : Le préfixe NEXT_PUBLIC_ est nécessaire pour exposer ces variables
 * au client (navigateur) dans Next.js.
 */

// Récupération des variables d'environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Vérification que les variables d'environnement sont définies
if (!supabaseUrl) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

/**
 * Client Supabase pour les opérations côté client
 * 
 * Ce client peut être utilisé dans les composants React
 * pour interagir avec Supabase (authentification, base de données, etc.)
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

