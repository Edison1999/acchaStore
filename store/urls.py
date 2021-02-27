from django.urls import path
from .views import (
    remove_from_cart,
    add_to_cart,
    ProductView,
)

app_name = 'store'

urlpatterns = [
    path('product/<pk>/', ProductView.as_view(), name='product'),
    path('add-to-cart/<pk>/', add_to_cart, name='add-to-cart'),
    path('remove-from-cart/<pk>/', remove_from_cart, name='remove-from-cart')
]