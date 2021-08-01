from django import forms
from .models import Contact

class ContactForm(forms.Form):
    
    name = forms.CharField(label='', required= True, widget= forms.TextInput(
        attrs={
            "class": "elementor-field elementor-size-md elementor-field-textual",
            "placeholder": "Nombre completo",
            "size": "1",
            "type": "text",
            }
        ))
    email = forms.EmailField(widget= forms.EmailInput(
        attrs={
            "class": "elementor-field elementor-size-md elementor-field-textual",
            "placeholder": "E-mail",
            "size": "1",
            "type": "email",
            }
        ))
    phone_number = forms.CharField(widget= forms.NumberInput(
        attrs={
            "class": "elementor-field elementor-size-md elementor-field-textual",
            "placeholder": "Número de teléfono móvil",
            "size": "1",
            "type": "tel",
            }
        ))
    order_number = forms.IntegerField(widget= forms.NumberInput(
        attrs={
            "class": "elementor-field elementor-size-md elementor-field-textual",
            "placeholder": "Número de orden",
            }
        ))
    message = forms.CharField(widget= forms.Textarea(
        attrs={
            "class": "elementor-field elementor-size-md elementor-field-textual",
            "placeholder": "Mensaje",
            "rows":"4",
            }
        ))
