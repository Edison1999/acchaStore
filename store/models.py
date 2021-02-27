from django.db import models
from django.conf import settings
from django.shortcuts import reverse
from django.contrib.auth.models import User


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length = 200, null=True)
    email = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name

class Item(models.Model) :
    item_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    discount_price = models.DecimalField(max_digits=9, decimal_places=2, null=True, blank=True)
    description = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.item_name

    def get_absolute_url(self):
        return reverse("core:product", kwargs={
            "pk" : self.pk
        })

    def get_add_to_cart_url(self) :
        return reverse("core:add-to-cart", kwargs={
            "pk" : self.pk
        })

    def get_remove_from_cart_url(self) :
        return reverse("core:remove-from-cart", kwargs={
            "pk" : self.pk
        })


class Order(models.Model) :
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
    
    def get_total_price(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        return total


class OrderItem(models.Model) :
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    product = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    label_title = models.CharField(max_length=50, null=True)
    label_artist = models.CharField(max_length=50, null=True)
    minutes_start = models.CharField(max_length=15, null=True)
    minutes_end = models.CharField(max_length=15, null=True)
    image_upload = models.ImageField(null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.quantity} of {self.product.item_name}"
    
    def get_total_item_price(self):
        return self.quantity * self.product.price

    def get_discount_item_price(self):
        return self.quantity * self.product.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_discount_item_price()

    def get_final_price(self):
        if self.item.discount_price:
            return self.get_discount_item_price()
        return self.get_total_item_price()

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url


class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address

