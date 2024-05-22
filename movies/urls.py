from django.urls import path
from rest_framework.documentation import include_docs_urls
from movies.views import MovieDetailView, MovieListView

urlpatterns = [
    path('api/v1/movies/', MovieListView.as_view(), name='movie-lost'),
    path('api/v1/movies/<uuid:external_id>/', MovieDetailView.as_view(), name='movie-detail'),
    path('docs/', include_docs_urls(title="Movies API"))
]
