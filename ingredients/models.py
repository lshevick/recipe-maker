from django.db import models
from django.conf import settings

# Create your models here.

class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField(blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    measure_amount = models.IntegerField()
    measure_unit = models.CharField(max_length=255)

    def __str__(self):
        return self.name