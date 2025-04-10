# Generated by Django 5.2 on 2025-04-06 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chambre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(choices=[('chambre', 'Chambre'), ('studio', 'Studio'), ('appartement', 'Appartement')], max_length=50)),
                ('available', models.BooleanField(default=True)),
            ],
        ),
    ]
