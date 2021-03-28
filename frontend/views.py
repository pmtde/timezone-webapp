from django.shortcuts import render

# Create your views here.

def timezone(request):
    return render(request, 'frontend/index.html')
