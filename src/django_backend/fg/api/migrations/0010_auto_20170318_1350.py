# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-03-18 13:50
from __future__ import unicode_literals

from django.db import migrations, models
import fg.api.helpers


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20170318_1343'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image_thumb',
            field=models.ImageField(default='default.jpg', upload_to=fg.api.helpers.path_and_rename_thumb),
        ),
        migrations.AddField(
            model_name='image',
            name='image_web',
            field=models.ImageField(default='default.jpg', upload_to=fg.api.helpers.path_and_rename_web),
        ),
    ]
