from djongo import models

# Create your models here.


class Professeur(models.Model):
    # id_prof = models.id_prof = models.AutoField(primary_key=True)
    username = models.username = models.CharField(max_length=40)
    email = models.email = models.EmailField(max_length=120)
    password = models.password = models.CharField(max_length=40)
    lname = models.lname = models.CharField(max_length=40)
    fname = models.fname = models.CharField(max_length=40)

    def __str__(self):
        return self.username
