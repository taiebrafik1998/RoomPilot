from django.urls import path
from .views import LocataireListCreateAPIView,LocataireRetrieveDestroyAPIView

urlpatterns = [
    path('tenants/', LocataireListCreateAPIView.as_view(), name='locataire-list-create'),
    path('tenants/<int:pk>/', LocataireRetrieveDestroyAPIView.as_view(), name='locataire-detail'),
]
