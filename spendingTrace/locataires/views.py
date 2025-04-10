from django.shortcuts import render
from rest_framework import generics
from .models import Locataire
from .serializers import LocataireSerializer

# Create your views here.
class LocataireListCreateAPIView(generics.ListCreateAPIView):
    queryset = Locataire.objects.all()
    serializer_class = LocataireSerializer

#suppression locataire
class LocataireRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    queryset = Locataire.objects.all()
    serializer_class = LocataireSerializer