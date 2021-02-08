from django.views.generic import ListView, DetailView, View, TemplateView
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.shortcuts import render

from django.http import JsonResponse

def HomeView(request):
    context = {}
    return render(request,'index.html',context)

def ProductView(request):
    context = {}
    return render(request,'compras.html',context)

def ContactoView(request):
    context = {}
    return render(request,'contacto.html',context)

def NosotrosView(request):
    context = {}
    return render(request,'nosotros.html',context)

def CheckoutView(request):
    context = {}
    return render(request,'store/checkout.html',context)

