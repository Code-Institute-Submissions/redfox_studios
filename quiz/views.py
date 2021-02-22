from django.shortcuts import render

# Create your views here.


def quiz(request):
    """
    View to render quiz page
    """
    return render(request, 'quiz/quiz.html')
