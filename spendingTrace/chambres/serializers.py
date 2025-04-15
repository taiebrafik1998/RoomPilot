from rest_framework import serializers
from .models import Chambre, Photo

class ChambreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chambre
        fields = '__all__'

# gérer les champs image, caption, chambre
class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'
