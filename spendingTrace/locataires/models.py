from django.db import models
from chambres.models import Chambre  #  importer le modèle depuis l'app chambres

# Create your models here.
class Locataire(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=50)
    # room = models.CharField(max_length=50)
    room = models.ForeignKey(Chambre, on_delete=models.SET_NULL, null=True, related_name='locataires')

def __str__(self):
    return f"{self.name} ({self.room})"
