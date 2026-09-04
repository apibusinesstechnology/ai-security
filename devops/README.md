# AI‑Security – DevOps

Ce dossier regroupe l’ensemble des outils DevOps utilisés pour automatiser, déployer, monitorer et sécuriser l’infrastructure du logiciel **AI‑Security**.  
Il inclut l’Infrastructure as Code, la conteneurisation, le monitoring, la sécurité, et les pipelines CI/CD.

---

## Structure du dossier DevOps

devops/
├── ansible/              # Automatisation et configuration des serveurs
├── docker/               # Dockerfiles et images personnalisées
├── docker-compose.yml    # Stack locale (backend, frontend, monitoring)
├── grafana/              # Dashboards et provisioning
├── prometheus/           # Monitoring et alerting
├── terraform/            # Infrastructure as Code (cloud)
└── scripts/              # Scripts utilitaires (bash, powershell)

---

## Infrastructure as Code (IaC)

### Terraform

Terraform gère l’infrastructure cloud d’AI‑Security :

- Réseaux (VPC, sous-réseaux)
- Machines virtuelles (VM / EC2)
- Bases de données
- Load balancers
- Règles de sécurité (Security Groups)
- Stockage (buckets)

Commandes principales :

```bash
terraform init
terraform plan
terraform apply
terraform destroy
