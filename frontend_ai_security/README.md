# Frontend – AI‑Security

Le frontend d’AI‑Security fournit l’interface utilisateur permettant d’accéder aux fonctionnalités du système : tableau de bord, visualisation des menaces, gestion des modules, authentification, et interactions avec le backend.

Ce module est développé en **React / Vite** (ou Next.js selon votre architecture) et communique directement avec l’API backend AI‑Security.

---

## Structure du projet

frontend/
├── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages principales
│   ├── hooks/             # Hooks personnalisés
│   ├── services/          # Appels API
│   ├── assets/            # Images, icônes, styles
│   └── utils/             # Fonctions utilitaires
├── public/                # Fichiers statiques
├── package.json
├── vite.config.js         # Configuration Vite
└── README.md

---

## Installation & Lancement

### Installer les dépendances

```bash
npm install
npm run dev

http://localhost:5173

export const 

API_URL = "http://localhost:3000";

Technologies utilisées

React – Interface utilisateur

Vite – Build rapide et moderne

Axios / Fetch – Appels API

TailwindCSS / CSS Modules – Styles (selon votre setup)

Jest + React Testing Library – Tests frontend

ESLint + Prettier – Qualité du code

Tests
Les tests frontend utilisent :

Jest

React Testing Library

Exécution :

bash
npm run test

Sécurité Frontend
Validation des entrées utilisateur

Protection contre XSS via React

Gestion sécurisée des tokens (localStorage ou cookies sécurisés)

Appels API protégés (headers, authentification)

Désactivation des scripts non autorisés

npm run build
dist/

