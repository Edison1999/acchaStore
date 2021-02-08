from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView, name='home_page'),
    path('compras/', views.ProductView, name='product_page'),
    path('contacto/', views.ContactoView, name='contacto_page'),
    path('nosotros/', views.NosotrosView, name='nosotros_page'),
    path('checkout/', views.CheckoutView, name='checkout_page'),
]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
