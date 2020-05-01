from rest_framework import serializers
from myApp.models import Professeur


class ProfesseurSerializers(serializers.ModelSerializer):
    class Meta:
        model = Professeur
        fields = ('id', 'fname', 'lname', 'password', 'email', 'username')
