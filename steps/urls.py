from django.urls import path
from .views import StepListAPIView

app_name = 'steps'

urlpatterns = [
    path('steps/', StepListAPIView.as_view()),
]
