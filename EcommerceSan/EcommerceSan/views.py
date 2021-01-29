from django.views.generic import ListView, DetailView, View, TemplateView
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.shortcuts import render

from django.http import JsonResponse

def HomeView(request):
    context = {}
    return render(request,'index.html',context)