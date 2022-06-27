from xmlrpc.client import Boolean
from django.db import models
from django.conf import settings
from django.forms import BooleanField

# Create your models here.

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    image = models.ImageField(upload_to='recipes/', blank=True)
    is_public = models.BooleanField(default=False)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    yield_amount = models.IntegerField()
    yield_type = models.CharField(max_length=255)
    cook_temp = models.IntegerField()

    def __str__(self):
        return self.name