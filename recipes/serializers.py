from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Recipe
        fields = '__all__'