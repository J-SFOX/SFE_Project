from rest_framework import serializers
from myApp.models import Professeur
from myApp.models import Etudiant
from myApp.models import Cour
from myApp.models import Event


class ProfesseurSerializers(serializers.ModelSerializer):
    class Meta:
        model = Professeur
        fields = ('id', 'fname', 'lname', 'password', 'email', 'username')


class EtudiantSerializers(serializers.ModelSerializer):
    class Meta:
        model = Etudiant
        fields = '__all__'


class CourSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cour
        fields = ('id', 'Titre_C', 'Element_C',
                  'Filiere_C', 'Module_C', 'Prof_C', 'Semestre', 'PDF_C', 'Video_C')


class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'Titre_E', 'Version_E',
                  'Club_E', 'Desc_E', 'Image_E')
