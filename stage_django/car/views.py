from django.shortcuts import render

# Create your views here.
res = 0


def home(request):
    return render(request, 'index.html')


def add(request, first, value, second):
    if value == '*':
        res = first * second
    elif value == 'div':
        res = first / second
    elif value == '+':
        res = first + second
    elif value == '-':
        res = first - second
    return render(request, 'index.html', res)
