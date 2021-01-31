from django.shortcuts import render

# Create your views here.


def show_bag(request):

    return render(request, 'bag/bag.html')
