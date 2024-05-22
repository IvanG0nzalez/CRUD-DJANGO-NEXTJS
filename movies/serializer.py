from rest_framework import serializers
from movies.models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'director', 'genre', 'release_date', 'duration', 'rating', 'state', 'external_id')
