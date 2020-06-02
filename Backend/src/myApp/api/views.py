from myApp.models import Professeur
from myApp.models import Etudiant
from myApp.models import Cour
from myApp.models import Event
from .serializers import ProfesseurSerializers
from .serializers import EtudiantSerializers
from .serializers import CourSerializers
from .serializers import EventSerializers
from rest_framework import (viewsets, generics)
from django.http import HttpResponse
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage
from rest_framework.decorators import action
# this View Set replace all the commented views


class ProfesseurViewSet(viewsets.ModelViewSet):
    queryset = Professeur.objects.all()
    serializer_class = ProfesseurSerializers


class EtudiantViewSet(viewsets.ModelViewSet):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializers


class CourViewSet(viewsets.ModelViewSet):
    queryset = Cour.objects.all()
    serializer_class = CourSerializers

    def post(self, request, *args, **kwargs):
        Titre_C = request.data['Titre_C']
        Element_C = request.data['Element_C']
        Filiere_C = request.data['Filiere_C']
        Module_C = request.data['Module_C']
        Prof_C = request.data['Prof_C']
        Semestre = request.data['Semestre']
        PDF_C = request.data['PDF_C']
        Video_C = request.data['Video_C']
        Cour.objects.create(Titre_C=Titre_C, Element_C=Element_C,
                            Filiere_C=Filiere_C, Module_C=Module_C, Semestre=Semestre, PDF_C=PDF_C, Video_C=Video_C)
        return HttpResponse({'message': 'Cour created'}, status=200)

    def put(self, request, pk):
        if(pk):
            cour = Cour.objects.get(id=pk)
            Titre_C = request.data['Titre_C']
            Element_C = request.data['Element_C']
            Filiere_C = request.data['Filiere_C']
            Module_C = request.data['Module_C']
            Prof_C = request.data['Prof_C']
            Semestre = request.data['Semestre']
            PDF_C = request.data['PDF_C']
            Video_C = request.data['Video_C']
            cour.put(Titre_C=Titre_C, Element_C=Element_C,
                     Filiere_C=Filiere_C, Module_C=Module_C, Semestre=Semestre, PDF_C=PDF_C, Video_C=Video_C)
        return({'message': 'cour updated'})


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializers

    def post(self, request, *args, **kwargs):
        Titre_E = request.data['Titre_E']
        Version_E = request.data['Version_E']
        Club_E = request.data['Club_E']
        Desc_E = request.data['Desc_E']
        Image_E = request.data['Image_E']
        Event.objects.create(Titre_E=Titre_E, Version_E=Version_E,
                             Club_E=Club_E, Desc_E=Desc_E, Image_E=Image_E)
        return HttpResponse({'message': 'Event created'}, status=200)

    def put(self, request, pk):
        if(pk):
            event = Event.objects.get(id=pk)
            Titre_E = request.data['Titre_E']
            Version_E = request.data['Version_E']
            Club_E = request.data['Club_E']
            Desc_E = request.data['Desc_E']
            Image_E = request.data['Image_E']
            event.put(Titre_E=Titre_E, Version_E=Version_E,
                      Club_E=Club_E, Desc_E=Desc_E, Image_E=Image_E)
        return({'message': 'Event updated'})

        # def post(self, request, *args, **kwargs):
        # from rest_framework.generics import (
        #     ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView)
        # class ArticleListView(ListAPIView):
        #     queryset = Article.objects.all()  # return all the articles
        #     serializer_class = ArticleSerializers
        # class ArticleDetailView(RetrieveAPIView):
        #     queryset = Article.objects.all()
        #     serializer_class = ArticleSerializers
        # class ArticleCreateView(CreateAPIView):
        #     queryset = Article.objects.all()
        #     serializer_class = ArticleSerializers
        # class ArticleUpdateView(UpdateAPIView):
        #     queryset = Article.objects.all()
        #     serializer_class = ArticleSerializers
        # class ArticleDeleteView(DestroyAPIView):
        #     queryset = Article.objects.all()
        #     serializer_class = ArticleSerializers
