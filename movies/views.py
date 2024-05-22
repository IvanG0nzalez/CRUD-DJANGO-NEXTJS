from django.http import Http404
from rest_framework import generics
from movies.serializer import MovieSerializer
from movies.models import Movie

class MovieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def get_object(self):
        queryset = self.get_queryset()
        external_id = self.kwargs.get('external_id')
        obj = queryset.filter(external_id=external_id).first()
        if obj is None:
            raise Http404
        return obj
    
class MovieListView(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
