````markdown name=README.md
# 🎓 Projet Gestion Scolaire (RSSI) — Fullstack Dockerisé

Ce projet est une application de gestion d'étudiants et de professeurs basée sur une architecture micro-services conteneurisée.

## Architecture technique
- Backend : Django 5 + Django REST Framework (API REST)
- Frontend : React.js
- Base de données : PostgreSQL
- Administration BDD : pgAdmin 4
- Conteneurisation : Docker & Docker Compose

---

## Installation et lancement (pas à pas)

1. Cloner le dépôt

git clone https://github.com/themj07/exoDevForDocker.git
cd exoDevForDocker


2. Lancer les conteneurs
Placez-vous à la racine du projet (là où se trouve `docker-compose.yml`) puis :

docker-compose up --build

Attendez quelques minutes le temps que les services démarrent : `db`, `pgadmin`, `backend`, `frontend`.

3. Initialiser la base de données
Ouvrez un nouveau terminal (laissez le premier en cours d'exécution) et exécutez :

docker-compose exec backend python manage.py migrate


4. Créer un administrateur (superuser)
Pour accéder à l'interface d'administration Django :

docker-compose exec backend python manage.py createsuperuser

Suivez les instructions (nom d'utilisateur, mot de passe).

---

## Accès aux services

| Service         | Adresse                  | Description                                  |
|-----------------|--------------------------|----------------------------------------------|
| Frontend (React)| http://localhost:3000    | Interface utilisateur (Login / Dashboard)    |
| Backend (API)   | http://localhost:8000    | Serveur Django / API REST                    |
| Admin Django    | http://localhost:8000/admin/ | Interface d'administration Django       |
| pgAdmin         | http://localhost:5050    | Interface graphique pour PostgreSQL          |

---

## Identifiants par défaut

pgAdmin
- Email : `admin@admin.com`
- Mot de passe : `root`

PostgreSQL (infos utiles pour pgAdmin)
- Host : `db` (Important : ne pas mettre `localhost`)
- User : `user`
- Password : `password`
- Database : `madb`

---

## Configuration de pgAdmin (première utilisation)
1. Ouvrez http://localhost:5050 et connectez-vous avec les identifiants pgAdmin ci-dessus.  
2. Clic droit sur **Servers** > **Register** > **Server...**  
3. Onglet **General** : `Name = Ma Base Docker`  
4. Onglet **Connection** :
   - Host name/address : `db`
   - Username : `user`
   - Password : `password`  
5. Sauvegardez.

---

## Commandes utiles

- Afficher les logs d'un service :
```bash
docker-compose logs -f backend
```

- Relancer et reconstruire (force rebuild) :
```bash
docker-compose up --build --remove-orphans
```

- Exécuter une commande dans le conteneur backend :
```bash
docker-compose exec backend <commande>
# ex: docker-compose exec backend python manage.py loaddata initial_data.json
```

---

## Dépannage rapide
- Si les conteneurs ne démarrent pas : vérifiez que Docker Desktop est lancé et que les ports 3000, 8000, 5050 et le port PostgreSQL ne sont pas occupés.
- Si la migration échoue, affichez les logs du backend : `docker-compose logs backend` puis exécutez `python manage.py migrate` dans le conteneur.
- Pour tout problème lié à la base : connectez-vous à pgAdmin et vérifiez la connexion au serveur `db`.

