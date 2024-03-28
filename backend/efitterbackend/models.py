from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    height = models.FloatField()
    weight = models.FloatField()
    bust_measurement = models.FloatField()
    waist_measurement = models.FloatField()
    hip_measurement = models.FloatField()

class Retailer(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    website_url = models.URLField()

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

class ExtractedPurchaseInformation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    retailer = models.ForeignKey(Retailer, on_delete=models.CASCADE)
    date_of_purchase = models.DateField()
    items = models.JSONField()  

class SizeRecommendation(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    retailer = models.ForeignKey(Retailer, on_delete=models.CASCADE)
    size_rec = models.CharField(max_length=10)

class ProductComposition(models.Model):
    name = models.CharField(max_length=100)
    composition_type = models.CharField(max_length=50)  # Man-made or Natural
    description = models.TextField()
    water_usage = models.FloatField()
    carbon_footprint = models.FloatField()

class StyleGuruPersona(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
