from django.urls import path, include

from .views import home, add

urlpatterns = [
    path('', home),
    path('/calc/<int:first>/<str:value>/<int:second>', add)
]
