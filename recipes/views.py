from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Recipe
from .serializers import RecipeSerializer

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