# Dossier de Tests – AI‑Security

Ce dossier contient l’ensemble des tests automatisés du projet **AI‑Security**.  
Il regroupe les tests unitaires, les tests d’intégration, les tests de régression (sentinel), la couverture de code et les tests de mutation.

Les tests sont exécutés avec **Jest**, et la qualité du code est renforcée par **Stryker** (mutation testing).

---

## Structure du dossier `test/`

dossier_test/
├── unit_test/             # Tests unitaires
├── integration_test/      # Tests d'intégration
├── regression_test/
│     └── sentinel/        # Tests sentinel (régression critique)
└── utils/                 # Helpers, mocks, outils de test

---

##  Types de tests

### 1. Tests unitaires (`unit_test/`)

Les tests unitaires vérifient le comportement des fonctions isolées du backend.

Exécution :
```bash

npm run test:unit
npm run test:integration
npm run test:sentinel
npm run test:coverage
npm run mutate
stryker.conf.json
npm run test
npm run test:all

Ce pipeline exécute :

Tests unitaires

Tests d’intégration

Couverture

Tests sentinel

Outils utilisés
Jest – Framework de tests

Supertest – Tests API (si utilisé)

Stryker – Mutation testing

Husky – Prévention des commits avec tests échoués

ESLint – Qualité du code

Prettier – Formatage

Qualité & Sécurité
Les tests sont intégrés dans le pipeline CI/CD :

Chaque commit déclenche les tests unitaires

Chaque merge déclenche les tests d’intégration + sentinel

Les mutations Stryker garantissent la solidité des tests

Les seuils de couverture empêchent les régressions

Auteur
Pierre Richard Saint Louis – API Business Technology 

Fondateur & Architecte du projet AI‑Security.