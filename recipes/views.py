from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Recipe
from .serializers import RecipeSerializer
from steps.models import Step
from steps.serializers import StepSerializer

# Create your views here.


class RecipeListAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RecipeDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RecipeStepListAPIView(generics.ListCreateAPIView):
    serializer_class = StepSerializer

    def get_queryset(self):
        recipe = self.kwargs['recipe']
        return Step.objects.filter(recipe=recipe)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class StepDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer