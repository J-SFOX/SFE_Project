

from myApp.models import Professeur
from .serializers import ProfesseurSerializers
from rest_framework import viewsets

# this View Set replace all the commented views


class ProfesseurViewSet(viewsets.ModelViewSet):
    serializer_class = ProfesseurSerializers
    queryset = Professeur.objects.all()


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
