from rest_framework.routers import DefaultRouter
from .views import ProfesseurViewSet

# this router replaace all the commented code below
router = DefaultRouter()
router.register(r'', ProfesseurViewSet, basename='myApp')
urlpatterns = router.urls


# from django.urls import path
# from .views import (ArticleDetailView, ArticleListView,
#                     ArticleCreateView, ArticleDeleteView, ArticleUpdateView)


# # url.py is where we put the urls
# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),  # pk refere to primary key
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view()),
#     path('<pk>/delete/', ArticleDeleteView.as_view())
# ]
