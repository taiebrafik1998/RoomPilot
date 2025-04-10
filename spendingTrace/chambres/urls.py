from django.urls import path
from .views import ChambreListCreateAPIView, ChambreRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('rooms/', ChambreListCreateAPIView.as_view(), name='chambres-list-create'),
    path('rooms/<int:id>/', ChambreRetrieveUpdateDestroyAPIView.as_view(), name='chambre-detail'),
]
