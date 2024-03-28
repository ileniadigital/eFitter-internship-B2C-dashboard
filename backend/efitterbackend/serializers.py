from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined', 'last_login']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'age', 'gender', 'height', 'weight', 'bust_measurement', 'waist_measurement', 'hip_measurement']

class RetailerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retailer
        fields = ['id', 'name', 'description', 'website_url']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ExtractedPurchaseInformationSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    retailer = RetailerSerializer(read_only=True)
    
    class Meta:
        model = ExtractedPurchaseInformation
        fields = ['id', 'user', 'retailer', 'date_of_purchase', 'items']

class SizeRecommendationSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(read_only=True)
    retailer = RetailerSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = SizeRecommendation
        fields = ['id', 'category', 'user_profile', 'retailer', 'size_rec']

class ProductCompositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductComposition
        fields = ['id', 'name', 'type', 'description', 'water_usage', 'carbon_footprint']

class StyleGuruPersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = StyleGuruPersona
        fields = ['id', 'name', 'description']
