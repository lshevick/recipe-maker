# Generated by Django 4.0.5 on 2022-06-28 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_recipe_cook_temp'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='cook_unit',
            field=models.CharField(default='F', max_length=255),
        ),
        migrations.AddField(
            model_name='recipe',
            name='notes',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
