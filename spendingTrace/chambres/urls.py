from django.urls import path
from .views import ChambreListCreateAPIView, ChambreRetrieveUpdateDestroyAPIView, PhotoUploadView

urlpatterns = [
    path('rooms/', ChambreListCreateAPIView.as_view(), name='chambres-list-create'),
    path('rooms/<int:id>/', ChambreRetrieveUpdateDestroyAPIView.as_view(), name='chambre-detail'),
    path('photos/upload/', PhotoUploadView.as_view(), name='photo-upload'),
]
