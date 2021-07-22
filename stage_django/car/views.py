from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CarModel
from .serializer import CarSerializer


# class MyView(APIView):
#     def get(self, *args, **kwargs):
#         params = self.request.query_params
#         name = params.get('name')
#         print(name)
#         return Response('hello get')
#
#     def post(self, *args, **kwargs):
#         return Response('hello post')
#
#     def put(self, *args, **kwargs):
#         return Response('hello put')
#
#     def patch(self, *args, **kwargs):
#         return Response('hello patch')
#
#     def delete(self, *args, **kwargs):
#         return Response('hello delete')
#
#
# class MyViewSecond(APIView):
#     def get(self, *args, **kwargs):
#         print(kwargs.get('id'))
#         return Response('hello')

class CarCreateListView(APIView):
    def get(self, *args, **kwargs):
        qs = CarModel.objects.all()
        serializer = CarSerializer(qs, many=True)
        return Response(serializer.data)

    def post(self, *args, **kwargs):
        body = self.request.data
        serializer = CarSerializer(data=body)
        if not serializer.is_valid():
            return Response(serializer.errors)
        serializer.save()
        return Response(serializer.data)


class RetrieveDeleteView(APIView):
    def get(self, *args, **kwargs):
        pk = kwargs.get('pk')
        try:
            data = CarModel.objects.get(pk=pk)
        except Exception as e:
            return Response('Not found')
        serializer = CarSerializer(data)
        return Response(serializer.data)

    def delete(self, *args, **kwargs):
        pk = kwargs.get('pk')
        try:
            data = CarModel.objects.get(pk=pk)
        except Exception as e:
            return Response('Not found')
        data.delete()
        return Response('deleted')
