from rest_framework import serializers

from .models import Step

class StepSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Step
        fields = '__all__'