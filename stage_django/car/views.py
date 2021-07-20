from django.shortcuts import render

# Create your views here.
cars = [
    {'model': 'BMW', 'year': 2000},
    {'model': 'mers', 'year': 2017},
    {'model': 'audi', 'year': 2009},
    {'model': 'a', 'year': 2012}
]


def home(request):
    return render(request, 'index.html', {'cars': cars})


def add(request, *args, **kwargs):
    return render(request, 'index.html', {'cars': cars})
