from rest_framework import serializers

from .models import Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Ingredient
        fields = '__all__'