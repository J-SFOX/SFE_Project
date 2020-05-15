from django.contrib import admin
from .models import Professeur
from .models import Cour
from .models import Etudiant

admin.site.register(Professeur)
admin.site.register(Cour)
admin.site.register(Etudiant)

# Register your models here.
