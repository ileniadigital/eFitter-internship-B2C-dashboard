"""
URL configuration for efitterbackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, RetailerViewSet, CategoryViewSet, ExtractedPurchaseInformationViewSet, SizeRecommendationViewSet, ProductCompositionViewSet, StyleGuruPersonaViewSet

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'userprofiles', UserProfileViewSet)
router.register(r'retailers', RetailerViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'extractedpurchaseinformations', ExtractedPurchaseInformationViewSet)
router.register(r'sizerecommendations', SizeRecommendationViewSet)
router.register(r'productcompositions', ProductCompositionViewSet)
router.register(r'stylegurupersonas', StyleGuruPersonaViewSet)

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]