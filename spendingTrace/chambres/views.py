from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Chambre
from .serializers import ChambreSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Photo
from .serializers import PhotoSerializer

class ChambreListCreateAPIView(generics.ListCreateAPIView):
    queryset = Chambre.objects.all()
    serializer_class = ChambreSerializer

class ChambreRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chambre.objects.all()
    serializer_class = ChambreSerializer
    lookup_field = 'id'

class PhotoUploadView(generics.CreateAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    parser_classes = [MultiPartParser, FormParser]