from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('ingredients/', include('ingredients.urls', namespace='ingredients')),
    path('recipes/', include('recipes.urls', namespace='recipes')),
    path('steps/', include('steps.urls', namespace='steps')),
]