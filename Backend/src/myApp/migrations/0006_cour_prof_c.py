# Generated by Django 2.2.12 on 2020-05-21 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0005_auto_20200513_2228'),
    ]

    operations = [
        migrations.AddField(
            model_name='cour',
            name='Prof_C',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
