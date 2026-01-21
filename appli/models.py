from django.db import models

# Create your models here.

class Etudiant(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    filiere = models.CharField(max_length=100)
    niveau_etude = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.prenom} {self.nom}"

class Prof(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    matiere_enseigne = models.CharField(max_length=100)
    annee_exp = models.IntegerField()

    def __str__(self):
        return f"{self.prenom} {self.nom}"
