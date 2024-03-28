from django.contrib import admin
from django.urls import path, include
from .models import *

admin.site.register(UserProfile)
admin.site.register(Retailer)
admin.site.register(Category)
admin.site.register(ExtractedPurchaseInformation)
admin.site.register(SizeRecommendation)
admin.site.register(ProductComposition)
admin.site.register(StyleGuruPersona)

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('efitterbackend.urls'))
]