from django.urls import path
from .views import (
    remove_from_cart,
    add_to_cart,
    productView,
    add_to_cart,
    orderSummaryView,
    checkoutView,

)

app_name = 'store'

urlpatterns = [
    path('product/<pk>/', productView, name='product'),
    path('order-summary/', orderSummaryView, name='order-summary'),
    path('checkout/', checkoutView, name='checkout'),
    path('add-to-cart/<pk>/', add_to_cart, name='add-to-cart'),
    path('remove-from-cart/<pk>/', remove_from_cart, name='remove-from-cart'),
]