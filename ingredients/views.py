from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Ingredient
from .serializers import IngredientSerializer


# Create your views here.

class IngredientListAPIView(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class IngredientDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)