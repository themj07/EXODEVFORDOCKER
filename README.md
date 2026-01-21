# exoDevForDocker
 C'est un petit projet de visualisation de prof et etudiant. Il sert à s'exercer sur comment conteneuriser une appli web et la faire communiquer avec une bd postgreSQL
 elle aussi conteuneurisé.
Le projet a été fait avec django comme framework backend, html/css/js pour le front. 
# Pour lancer le projet:
- créer un environnement virtuel avec: python -m venv venv
- Aciver l'environnement virtuel avec: venv/scripts/activate
- Installé les packages grace au requirement: pip install -r requirements.txt
- Lancer le serveur avec: python manage.py runserver

# Autre commandes
- Pour créer un super user: python manage.py createsuperuser
- Pour faire des migration:
   * python manage.py makemigrations
   * python manage.py migrate
