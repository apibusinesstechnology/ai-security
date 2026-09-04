# AI‑Security – Application Desktop (Electron)

L’application Desktop d’AI‑Security permet d’exécuter le logiciel localement sur Windows avec une interface native, rapide et sécurisée.  
Elle sert de point d’accès professionnel pour les environnements où une application web n’est pas suffisante.

---

## Fonctionnalités principales

- Application Windows construite avec **Electron**
- Dashboard de sécurité local
- Connexion directe au backend AI‑Security
- Affichage en temps réel des alertes et menaces détectées
- Notifications système Windows
- Mode hors‑ligne pour certaines fonctionnalités
- Intégration avec API (Express)
- Sécurité renforcée côté client

---

## Structure du projet

desktop/
├── src/
│   ├── main/
│   │   └── electron.js        # Processus principal
│   ├── renderer/
│   │   └── ui/                # Interface utilisateur
│   └── assets/                # Icônes, images, ressources
├── package.json
├── electron-builder.yml       # Configuration build (si utilisée)
└── README.md

---

## Installation & Lancement

### Installer les dépendances

```bash
npm install
npm start
npm run build
dist/

{
  "backend_url": "http://localhost:3000"
}
desktop/config/app.config.json
