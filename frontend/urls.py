from django.urls import path
from .views import timezone


urlpatterns = [
    path('', timezone, name='timezone')
]
