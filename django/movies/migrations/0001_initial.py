# Generated by Django 5.0.6 on 2024-05-22 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('director', models.CharField(max_length=100)),
                ('genre', models.CharField(max_length=50)),
                ('release_date', models.DateField()),
                ('duration', models.IntegerField()),
                ('rating', models.DecimalField(blank=True, decimal_places=1, max_digits=3, null=True)),
                ('state', models.BooleanField(default=True)),
            ],
        ),
    ]