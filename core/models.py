from django.db import models
from django.conf import settings
from django.shortcuts import reverse

class Contact(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False)
    email = models.EmailField(max_length = 200, null=True, blank=False)
    phone_number = models.CharField(max_length=200, null=True, blank=False)
    order_number = models.IntegerField( null=True, blank=False)
    message = models.TextField(max_length=200, null=True, blank=False)

    def __str__(self):
        return self.name