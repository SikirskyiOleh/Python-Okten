# from rest_framework.response import Response
# from rest_framework.views import APIView


# class MyView(APIView):
#     def get(self, *args, **kwargs):
#         params = self.request.query_params
#         name = params.get('name')
#         print(name)
#         return Response('hello from get')
#
#
# def post(self, *args, **kwargs):
#     return Response('post')
#
#
# def put(self, *args, **kwargs):
#     return Response('put')
#
#
# def patch(self, *args, **kwargs):
#     return Response('patch')
#
#
# def delete(self, *args, **kwargs):
#     return Response('delete')
#
#
# class MyViewSecond(APIView):
#     def get(self, *args, **kwargs):
#         print(kwargs.get('id'))
#         return Response('Ok')

# lh:8000/cars GET all
# lh:8000/cars POST create
# lh:8000/cars/:id GET get one
# lh:8000/cars/:id PUT update all
# lh:8000/cars/:id PATCH update few fields
# lh:8000/cars/:id DELETE delete item
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CarModel
from .serializers import CarSerializer


class CarCreateListView(APIView):
    def get(self, *args, **kwargs):
        qs = CarModel.objects.all()
        serializer = CarSerializer(qs, many=True)
        return Response(serializer.data)
