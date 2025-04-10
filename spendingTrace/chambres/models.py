from django.db import models

# Create your models here.

class Chambre(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50, choices=[
        ('chambre', 'Chambre'),
        ('studio', 'Studio'),
        ('appartement', 'Appartement'),
    ])
    available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.type}"

