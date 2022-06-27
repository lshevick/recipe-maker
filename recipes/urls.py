from django.urls import path

from .views import RecipeListAPIView, RecipeDetailAPIView

app_name = 'recipes'

urlpatterns = [
    path('', RecipeListAPIView.as_view()),
    path('<int:pk>/', RecipeListAPIView.as_view()),
]
