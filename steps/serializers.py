from rest_framework import serializers

from .models import Step

class StepSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Step
        field = '__all__'