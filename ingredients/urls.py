from django.urls import path
from .views import IngredientListAPIView, IngredientDetailAPIView

app_name = 'ingredients'

urlpatterns = [
    path('', IngredientListAPIView.as_view()),
    path('<int:pk>/', IngredientDetailAPIView.as_view()),
]
