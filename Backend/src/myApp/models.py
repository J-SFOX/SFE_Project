from djongo import models

# Create your models here.


class Professeur(models.Model):
    username = models.username = models.CharField(max_length=40)
    email = models.email = models.EmailField(max_length=120)
    password = models.password = models.CharField(max_length=40)
    lname = models.lname = models.CharField(max_length=40)
    fname = models.fname = models.CharField(max_length=40)

    def __str__(self):
        return self.fname


class Etudiant(models.Model):
    E_username = models.E_username = models.CharField(max_length=40)
    E_email = models.E_email = models.EmailField(max_length=120)
    E_password = models.E_password = models.CharField(max_length=40)
    E_lname = models.E_lname = models.CharField(max_length=40)
    E_fname = models.E_fname = models.CharField(max_length=40)
    E_filiere = models.E_filiere = models.CharField(max_length=40)

    def __str__(self):
        return self.E_fname

# this function for building the file path


def upload_video_path(instance, filename):
    return '/'.join(['cours', str(instance.Titre_C), 'Video', filename])


def upload_PDF_path(instance, filename):
    return '/'.join(['cours', str(instance.Titre_C), 'PDF', filename])


class Cour(models.Model):
    Titre_C = models.CharField(max_length=300)
    Element_C = models.CharField(max_length=50)
    Filiere_C = models.CharField(max_length=100)
    Module_C = models.CharField(max_length=200)
    Semestre = models.IntegerField()
    PDF_C = models.FileField(blank=True,
                             upload_to=upload_PDF_path, null=True)
    Video_C = models.FileField(blank=True,
                               upload_to=upload_video_path, null=True)

    def __str__(self):
        return self.Titre_C

    def delete(self, *args, **kwargs):
        self.PDF_C.delete()
        self.Video_C.delete()
        super().delete(*args, **kwargs)
