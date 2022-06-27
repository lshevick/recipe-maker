from pickle import Unpickler
from tkinter import CASCADE
from django.db import models
from django.conf import settings
from recipes.models import Recipe

# Create your models here.


class Step(models.Model):
    text = models.TextField(unique=False, blank=False, max_length=900)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.text