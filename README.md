# RUSH-IA – Jour 033 : Todolist Next.js

Projet personnel réalisé dans le cadre du **rush "RUSH-IA" – Jour 3**, dont l’objectif est de :
- découvrir l’outil **Cursor** et le **vibe coding** ;
- prendre en main l’interface et le workflow IA ;
- produire rapidement un petit projet tout en **gardant la maîtrise de ce qu’on génère**.

Ce dépôt correspond à une **todolist simple en Next.js/React/TypeScript**, migrée depuis une version HTML/CSS/JavaScript vanilla pour découvrir le framework Next.js.

---

## Présentation du projet

Ce projet est une **application web de liste de tâches (todolist)** minimaliste, développée avec **Next.js 14**, **React** et **TypeScript** :
- affichage d’une liste de tâches ;
- possibilité de **cocher/décocher** une tâche ;
- **séparation visuelle** entre tâches terminées et tâches restantes ;
- possibilité **d’ajouter une nouvelle tâche** ;
- **suppression de tâches** via un bouton dédié sur chaque tâche ;
- **compteur de tâches** affichant le nombre de tâches à faire et terminées.

Pas de base de données externe : les données sont **stockées en mémoire** côté client (state React), afin de garder une stack simple et facilement maîtrisable.

---

## Démo (capture d’écran)

Un aperçu de l’interface de la todolist :

![Capture d’écran de la todolist](img/Capture%20d%E2%80%99%C3%A9cran%202025-12-02%20165054.png)

---

## Contexte "RUSH-IA" – Jour 3

- **Type de projet** : projet perso dans le cadre d’un rush d’apprentissage.
- **Thème du jour** : migration d'un projet vanilla vers Next.js.
- **Objectif principal** : transformer un projet HTML/CSS/JS simple en application Next.js moderne, en conservant toutes les fonctionnalités.
- **Règle du jour** : *garder exactement les mêmes fonctionnalités, juste changer la technologie*.

---

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Bibliothèque UI** : React 18
- **Langage** : TypeScript
- **Styling** : CSS global
- **Données** : stockage en mémoire (state React)
- **Architecture** : Composants React modulaires

---

## Installation

Le projet nécessite Node.js (version 18 ou supérieure) et npm (ou yarn, pnpm).

Étapes :

```bash
# Cloner le dépôt
git clone <URL_DU_DEPOT>
cd RUSHIA-Jour-03

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

---

## Lancement du projet

### Mode développement

Pour lancer l'application en mode développement avec hot-reload :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Mode production

Pour créer une build de production :

```bash
npm run build
npm run start
# ou
yarn build
yarn start
# ou
pnpm build
pnpm start
```

L'interface affichera une **todolist simple** avec :
- ajout de tâche via un champ dédié ;
- liste des tâches à faire ;
- liste des tâches terminées (séparation visuelle en deux colonnes) ;
- possibilité de cocher/décocher les tâches ;
- suppression de tâches via un bouton de suppression sur chaque élément ;
- compteur dynamique affichant le nombre de tâches à faire et terminées.

---

## Structure du projet

Le projet suit la structure **Next.js 14 avec App Router** :

```
RUSHIA-Jour-03/
├── app/                    # Dossier App Router de Next.js
│   ├── layout.tsx         # Layout racine de l'application
│   ├── page.tsx           # Page principale (composant Todolist)
│   └── globals.css        # Styles CSS globaux
├── components/            # Composants React réutilisables
│   ├── TaskForm.tsx       # Formulaire d'ajout de tâche
│   ├── TaskStats.tsx      # Composant des statistiques (compteurs)
│   ├── TaskList.tsx       # Liste de tâches
│   └── TaskItem.tsx       # Élément de tâche individuelle
├── package.json           # Dépendances et scripts npm
├── tsconfig.json          # Configuration TypeScript
├── next.config.js         # Configuration Next.js
└── README.md              # Ce fichier
```

### Architecture des composants

- **`app/page.tsx`** : Composant principal qui gère l'état global des tâches et coordonne les sous-composants
- **`components/TaskForm.tsx`** : Formulaire pour ajouter une nouvelle tâche
- **`components/TaskStats.tsx`** : Affichage des compteurs (À faire, Terminées, Total)
- **`components/TaskList.tsx`** : Liste de tâches (à faire ou terminées)
- **`components/TaskItem.tsx`** : Élément individuel de tâche avec checkbox et bouton de suppression

---

## Fonctionnalités

### Ajout de tâches
- Champ de saisie avec validation
- Ajout en tête de liste
- Réinitialisation automatique du champ après ajout

### Gestion des tâches
- Coche/décoche pour marquer une tâche comme terminée/à faire
- Déplacement visuel automatique entre les colonnes "À faire" et "Terminées"
- Suppression individuelle via bouton dédié

### Statistiques
- Compteur dynamique des tâches à faire
- Compteur dynamique des tâches terminées
- Compteur du total de tâches
- Mise à jour en temps réel lors de toute modification

---

## Code commenté

Tous les fichiers du projet contiennent des **commentaires explicatifs détaillés** :
- Commentaires JSDoc pour les fonctions et composants
- Explications des concepts React (hooks, state, props)
- Documentation des fonctionnalités et de leur logique
- Guide de compréhension de l'architecture Next.js

---

## Auteurs

- **marccharton**
- **owlynn**

---

## Migration depuis HTML/CSS/JS vanilla

Ce projet a été migré depuis une version HTML/CSS/JavaScript vanilla vers Next.js. Les fonctionnalités restent **identiques**, seule la technologie a changé :

- ✅ Même design et styles CSS
- ✅ Même fonctionnalités (ajout, toggle, suppression, compteurs)
- ✅ Même comportement utilisateur
- ✅ Architecture modulaire avec composants React
- ✅ TypeScript pour la sécurité de type
- ✅ Commentaires explicatifs ajoutés partout

---

## Objectifs pédagogiques

**Objectifs du jour 3**
- Migrer un projet vanilla vers Next.js
- Découvrir l'architecture Next.js avec App Router
- Comprendre les composants React et la gestion d'état
- Utiliser TypeScript dans un projet Next.js
- Maintenir toutes les fonctionnalités existantes
- Ajouter des commentaires explicatifs pour faciliter la compréhension

---

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React pour la production
- [React](https://react.dev/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Superset typé de JavaScript

---

Ce README pourra être enrichi au fil du rush si nécessaire (captures d’écran, détails techniques supplémentaires, etc.).
