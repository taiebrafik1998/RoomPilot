# Generated by Django 5.2 on 2025-04-15 15:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chambres', '0002_chambre_description_chambre_loyer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='chambres/photos/')),
                ('caption', models.CharField(blank=True, max_length=255)),
                ('chambre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='chambres.chambre')),
            ],
        ),
    ]
