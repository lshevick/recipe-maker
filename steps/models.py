from django.db import models
from django.conf import settings
from ingredients.models import Ingredient
from recipes.models import Recipe

# Create your models here.


class Step(models.Model):
    ingredients = models.JSONField(blank=True)
    text = models.TextField(unique=False, blank=False, max_length=900)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.text