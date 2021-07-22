from django.urls import path, include

from .views import CarCreateListView

urlpatterns = [
    path('', CarCreateListView.as_view(), name='car_list_create'),
]
