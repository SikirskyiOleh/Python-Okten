from django.urls import path, include

from .views import home, add

urlpatterns = [
    path('', home),
    path('/create/<int:year>/<str:model>/', add)
]
