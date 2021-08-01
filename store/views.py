from django.contrib import messages                       
from django.shortcuts import render, get_object_or_404, redirect                      
from django.views.generic import ListView, DetailView, View                     
from django.utils import timezone                       
from .models import Item, OrderItem, Order
import json
import datetime
from django.http import JsonResponse
from .forms import OrderItemForm
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required

def productView(request,pk):  
    form = OrderItemForm()
    items = Item.objects.get(pk=1)
    context ={
        'items':items,
        'form':form
    }
    return render(request, 'compras.html', context)


@login_required(login_url="/account/login/")
def add_to_cart(request, pk):
    form = OrderItemForm(request.POST, request.FILES)
    item = get_object_or_404(Item, pk = pk )
    print("-----------------------------------------------")
    print(item)
    order_qs = Order.objects.filter(customer=request.user, complete=False)
    if form.is_valid():
        data = form.cleaned_data
        print(data)
        order_item = OrderItem.objects.create(
            product=item,
            label_title = data["label_title"],
            label_artist = data["label_artist"],
            minutes_start = data["minutes_start"],
            minutes_end = data["minutes_end"],
            image_upload =data['image_upload'],
            glass_base= data["glass_base"],
        )
        order_item.save()
        if order_qs.exists():   
            order = order_qs[0]
            order.itemsOrdered.add(order_item)
            order.save()
            messages.info(request, "This item was added to your cart.")
            return redirect(item)  
        else:
            ordered_date = timezone.now()
            order = Order.objects.create( customer=request.user, start_date=ordered_date)
            order.itemsOrdered.add(order_item)
            order.save()
            messages.info(request, "This item was added to your cart.")
            return redirect(item)
    else:
        context ={}
        return render(request, 'error/error.html', context)
  
@login_required(login_url="/account/login/")
def orderSummaryView(request):
    try:
        order = Order.objects.get(customer =request.user, complete= False)   
        context ={
            'order': order,
        }
        return render(request, 'store/cart.html', context)

    except ObjectDoesNotExist:
        items = Item.objects.get(pk=1)
        context ={
            'items':items,
        }
        return render(request, 'store/cart.html', context)

@login_required(login_url="/account/login/")
def remove_from_cart(request, pk):
    # item = get_object_or_404(Item, pk=pk)
    order_qs = Order.objects.filter(customer=request.user, complete=False)
    
    if order_qs.exists():
        order = order_qs[0]
        print(order)
        if order.itemsOrdered.filter(pk=pk).exists():
            print(order.itemsOrdered.filter(pk=pk))
            order_item = OrderItem.objects.filter(
                pk=pk,
            )[0]
            order.itemsOrdered.remove(order_item)
            order.save()
            order_item.delete()
            print(order.itemsOrdered.all())
            if not order.itemsOrdered.all():
                order.delete()
            messages.info(request, "Item \""+order_item.label_title+"\" remove from your cart")
            return redirect("store:order-summary")
        else:
            messages.info(request, "This Item is not in your cart")
            return redirect("store:order-summary")
    else:
        #add message doesnt have order
        messages.info(request, "You do not have an Order")
        return redirect("store:order-summary")

def checkoutView(request):  
    context ={
        
    }
    return render(request, 'store/checkout/checkout.html', context)