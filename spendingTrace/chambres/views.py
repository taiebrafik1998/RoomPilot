from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Chambre
from .serializers import ChambreSerializer

class ChambreListCreateAPIView(generics.ListCreateAPIView):
    queryset = Chambre.objects.all()
    serializer_class = ChambreSerializer

class ChambreRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chambre.objects.all()
    serializer_class = ChambreSerializer
    lookup_field = 'id'