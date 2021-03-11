# Generated by Django 3.1.5 on 2021-03-11 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('email', models.EmailField(max_length=200, null=True)),
                ('phone_number', models.CharField(max_length=200, null=True)),
                ('order_number', models.IntegerField(null=True)),
                ('message', models.TextField(max_length=200, null=True)),
            ],
        ),
    ]
