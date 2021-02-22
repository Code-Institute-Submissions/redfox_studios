from django.shortcuts import render


def about(request):
    """
    View to render about page
    """
    return render(request, 'about/about.html')
