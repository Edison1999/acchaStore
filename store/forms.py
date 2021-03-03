from django import forms
from .models import OrderItem

class OrderItemForm(forms.Form):
    
    label_title = forms.CharField(label='', required= True, widget= forms.TextInput(
        attrs={
            "class": "tmcp-field tm-epo-field tmcp-textfield tcenabled",
            "placeholder": "Escribe aquí tu título",
            "type": "text",
            }
        ))
    label_artist = forms.CharField(widget= forms.TextInput(
        attrs={
            "class": "tmcp-field tm-epo-field tmcp-textfield tcenabled",
            "placeholder": "Escribe aquí el nombre del artista",
            "type": "text",
            }
        ))
    minutes_start = forms.CharField(widget= forms.TextInput(
        attrs={
            "class": "tmcp-field tm-epo-field tmcp-textfield tcenabled",
            "placeholder": "1:28",
            "type": "text",
            }
        ))
    minutes_end = forms.CharField(widget= forms.TextInput(
        attrs={
            "class": "tmcp-field tm-epo-field tmcp-textfield tcenabled",
            "placeholder": "1:28",
            "type": "text",
            }
        ))
    image_upload = forms.ImageField(widget= forms.FileInput(
        attrs={
            "class": "tmcp-field tm-epo-field tmcp-upload tcenabled tc-nodt",
            "placeholder": "Imagen",
            "accept": ".jpg, .jpeg, .jpe, .gif, .png, .bmp, .tiff, .tif, .ico, .heic, .asf, .asx, .wmv, .wmx, .wm, .avi, .divx, .flv, .mov, .qt, .mpeg, .mpg, .mpe, .mp4, .m4v, .ogv, .webm, .mkv, .3gp, .3gpp, .3g2, .3gp2, .txt, .asc, .c, .cc, .h, .srt, .csv, .tsv, .ics, .rtx, .css, .htm, .html, .vtt, .dfxp, .mp3, .m4a, .m4b, .aac, .ra, .ram, .wav, .ogg, .oga, .flac, .mid, .midi, .wma, .wax, .mka, .rtf, .js, .pdf, .swf, .class, .tar, .zip, .gz, .gzip, .rar, .7z, .exe, .psd, .xcf, .doc, .pot, .pps, .ppt, .wri, .xla, .xls, .xlt, .xlw, .mdb, .mpp, .docx, .docm, .dotx, .dotm, .xlsx, .xlsm, .xlsb, .xltx, .xltm, .xlam, .pptx, .pptm, .ppsx, .ppsm, .potx, .potm, .ppam, .sldx, .sldm, .onetoc, .onetoc2, .onetmp, .onepkg, .oxps, .xps, .odt, .odp, .ods, .odg, .odc, .odb, .odf, .wp, .wpd, .key, .numbers, .pages",
            }
        ))
    glass_base = forms.BooleanField(widget= forms.CheckboxInput(
        attrs={
            "class": "tmcp-fee-field tm-epo-field tmcp-checkbox tcenabled",
            "placeholder": "Imagen",
            "accept": ".jpg, .jpeg, .jpe, .gif, .png, .bmp, .tiff, .tif, .ico, .heic, .asf, .asx, .wmv, .wmx, .wm, .avi, .divx, .flv, .mov, .qt, .mpeg, .mpg, .mpe, .mp4, .m4v, .ogv, .webm, .mkv, .3gp, .3gpp, .3g2, .3gp2, .txt, .asc, .c, .cc, .h, .srt, .csv, .tsv, .ics, .rtx, .css, .htm, .html, .vtt, .dfxp, .mp3, .m4a, .m4b, .aac, .ra, .ram, .wav, .ogg, .oga, .flac, .mid, .midi, .wma, .wax, .mka, .rtf, .js, .pdf, .swf, .class, .tar, .zip, .gz, .gzip, .rar, .7z, .exe, .psd, .xcf, .doc, .pot, .pps, .ppt, .wri, .xla, .xls, .xlt, .xlw, .mdb, .mpp, .docx, .docm, .dotx, .dotm, .xlsx, .xlsm, .xlsb, .xltx, .xltm, .xlam, .pptx, .pptm, .ppsx, .ppsm, .potx, .potm, .ppam, .sldx, .sldm, .onetoc, .onetoc2, .onetmp, .onepkg, .oxps, .xps, .odt, .odp, .ods, .odg, .odc, .odb, .odf, .wp, .wpd, .key, .numbers, .pages",
            }
        ))
