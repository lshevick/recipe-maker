from rest_framework import generics

from .models import Step
from .serializers import StepSerializer

# Create your views here.

class StepListAPIView(generics.ListCreateAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer