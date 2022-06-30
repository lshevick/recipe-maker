from django.urls import path

from .views import RecipeListAPIView, RecipeDetailAPIView, RecipeStepListAPIView

app_name = 'recipes'

urlpatterns = [
    path('', RecipeListAPIView.as_view()),
    path('<int:pk>/', RecipeDetailAPIView.as_view()),
    path('<int:recipe>/steps/', RecipeStepListAPIView.as_view()),
]
