from rest_framework import serializers
from .models import Locataire
from chambres.models import Chambre

class LocataireSerializer(serializers.ModelSerializer):
    room = serializers.PrimaryKeyRelatedField(queryset=Chambre.objects.all())
    class Meta:
        model = Locataire
        fields = '__all__'# tous les champs sont exposer
