🎓 Projet Gestion Scolaire (RSSI) - Fullstack Dockerisé
Ce projet est une application de gestion d'étudiants et de professeurs utilisant une architecture micro-services conteneurisée.
Architecture Technique :
•	Backend : Django 5 (API REST avec Django Rest Framework)
•	Frontend : React.js
•	Base de données : PostgreSQL
•	Administration BDD : pgAdmin 4
•	Conteneurisation : Docker & Docker Compose
________________________________________
📋 Prérequis
Avant de commencer, assurez-vous d'avoir installé :
•	Docker Desktop (et qu'il est lancé).
•	Git (pour cloner le projet).
________________________________________
🚀 Installation et Lancement (Pas à pas)
Suivez ces étapes pour lancer le projet complet en quelques minutes.
1. Cloner le projet
Ouvrez votre terminal et récupérez le code :
Bash
git clone <LIEN_DE_VOTRE_REPO_GITHUB_ICI>
cd <NOM_DU_DOSSIER_DU_PROJET>
2. Lancer les conteneurs
À la racine du projet (là où se trouve le fichier docker-compose.yml), exécutez :
Bash
docker-compose up --build
Attendez quelques minutes que les 4 services (db, pgadmin, backend, frontend) soient téléchargés et démarrés.
3. Initialiser la Base de Données
Une fois que le terminal affiche que le serveur tourne, ouvrez un nouveau terminal (laissez le premier tourner) et lancez ces commandes pour créer les tables :
Bash
docker-compose exec backend python manage.py migrate
4. Créer un Administrateur (Superuser)
Pour accéder à l'interface d'administration Django, créez un compte admin :
Bash
docker-compose exec backend python manage.py createsuperuser
(Suivez les instructions : entrez un nom, ignorez l'email, et choisissez un mot de passe).
________________________________________
🌐 Accès aux Services
Une fois lancé, voici les adresses pour accéder aux différentes parties du projet :
Service	Adresse	Description
Frontend (React)	http://localhost:3000
L'interface utilisateur principale (Login/Dashboard).
Backend (API)	http://localhost:8000
Le serveur Django.
Admin Django	http://localhost:8000/admin/
Gestion des utilisateurs et données brutes.
pgAdmin	http://localhost:5050
Interface graphique pour gérer la base PostgreSQL.
________________________________________
🔐 Identifiants par défaut
pgAdmin (Gestion BDD)
•	Email : admin@admin.com
•	Mot de passe : root
Base de Données (PostgreSQL)
Ces infos sont gérées automatiquement par Docker, mais utiles pour pgAdmin :
•	Host : db (⚠️ Important : ne pas mettre localhost)
•	User : user
•	Password : password
•	Database : madb
________________________________________
🛠 Configuration de pgAdmin (Première fois)
Si vous voulez voir les tables dans pgAdmin :
1.	Connectez-vous sur http://localhost:5050.
2.	Clic droit sur Servers > Register > Server...
3.	Onglet General : Nom = Ma Base Docker.
4.	Onglet Connection :
o	Host name/address : db
o	Username : user
o	Password : password
5.	Sauvegardez.

