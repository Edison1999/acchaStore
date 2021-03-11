from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.HomeView, name='home'),
    path('contacto/', views.ContactView, name='contacto_page'),
    path('nosotros/', views.NosotrosView, name='nosotros_page'),
    path('terminos_condiciones/', views.TermsConditionView, name='terminos_condiciones'),
]