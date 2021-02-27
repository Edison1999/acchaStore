from django.views.generic import ListView, DetailView, View, TemplateView
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.shortcuts import render
from .models import Contact
from .forms import ContactForm

from django.http import JsonResponse

def HomeView(request):
    context = {}
    return render(request,'index.html',context)

def ContactView(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            print(form.cleaned_data)
            Contact.objects.create(**form.cleaned_data)
    # if a GET (or any other method) we'll create a blank form
    form = ContactForm()
    
    context ={
        'form':form
    }

    return render(request, 'contacto.html', context)

def NosotrosView(request):
    context = {}
    return render(request,'nosotros.html',context)


