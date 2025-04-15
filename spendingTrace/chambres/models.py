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
    loyer = models.DecimalField(max_digits=8, decimal_places=2, default=0.00)  
    description = models.TextField(blank=True) 

    def __str__(self):
        return f"{self.name} - {self.type}"


class Photo(models.Model):
    chambre = models.ForeignKey("Chambre", on_delete=models.CASCADE, related_name="photos")
    image = models.ImageField(upload_to='chambres/photos/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Photo de {self.chambre.name}"