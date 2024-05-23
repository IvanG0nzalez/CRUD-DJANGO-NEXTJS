from django.http import Http404
from rest_framework import generics
from movies.serializer import MovieSerializer, DirectorSerializer, GenreSerializer
from movies.models import Movie, Director, Genre

class GenreRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    def get_object(self):
        queryset = self.get_queryset()
        external_id = self.kwargs.get('external_id')
        obj = queryset.filter(external_id=external_id).first()
        if obj is None:
            raise Http404
        return obj
    
class GenreListCreateView(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class DirectorRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

    def get_object(self):
        queryset = self.get_queryset()
        external_id = self.kwargs.get('external_id')
        obj = queryset.filter(external_id=external_id).first()
        if obj is None:
            raise Http404
        return obj
    
class DirectorListCreateView(generics.ListCreateAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

class MovieRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def get_object(self):
        queryset = self.get_queryset()
        external_id = self.kwargs.get('external_id')
        obj = queryset.filter(external_id=external_id).first()
        if obj is None:
            raise Http404
        return obj
    
class MovieListCreateView(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
