# Generated by Django 4.0.5 on 2022-06-28 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('steps', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='step',
            name='ingredients',
            field=models.JSONField(blank=True, default=1),
            preserve_default=False,
        ),
    ]
