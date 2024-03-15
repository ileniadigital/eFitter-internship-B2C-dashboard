from rest_framework import viewsets
from .models import *
from .serializers import *

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class RetailerViewSet(viewsets.ModelViewSet):
    queryset = Retailer.objects.all()
    serializer_class = RetailerSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ExtractedPurchaseInformationViewSet(viewsets.ModelViewSet):
    queryset = ExtractedPurchaseInformation.objects.all()
    serializer_class = ExtractedPurchaseInformationSerializer

class SizeRecommendationViewSet(viewsets.ModelViewSet):
    queryset = SizeRecommendation.objects.all()
    serializer_class = SizeRecommendationSerializer

class ProductCompositionViewSet(viewsets.ModelViewSet):
    queryset = ProductComposition.objects.all()
    serializer_class = ProductCompositionSerializer

class StyleGuruPersonaViewSet(viewsets.ModelViewSet):
    queryset = StyleGuruPersona.objects.all()
    serializer_class = StyleGuruPersonaSerializer

