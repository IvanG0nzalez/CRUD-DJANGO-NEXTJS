from rest_framework import serializers
from movies.models import Movie, Genre, Director

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('name', 'external_id')

class DirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = ('names', 'last_names', 'date_of_birth', 'nationality', 'external_id')

class MovieSerializer(serializers.ModelSerializer):
    genres = serializers.ListField(
        child=serializers.UUIDField(format='hex_verbose'), write_only=True
    )
    directors = serializers.ListField(
        child=serializers.UUIDField(format='hex_verbose'), write_only=True
    )
    genre_list = GenreSerializer(many=True, read_only=True, source='genres')
    director_list = DirectorSerializer(many=True, read_only=True, source='directors')
    class Meta:
        model = Movie
        fields = ('title', 'directors', 'genres', 'release_date', 'duration', 'rating', 'external_id', 'genre_list', 'director_list')

    def create(self, validated_data):
        genres_data = validated_data.pop('genres')
        directors_data = validated_data.pop('directors')
        movie = Movie.objects.create(**validated_data)
        movie.genres.set(Genre.objects.filter(external_id__in=genres_data))
        movie.directors.set(Director.objects.filter(external_id__in=directors_data))
        return movie

    def update(self, instance, validated_data):
        genres_data = validated_data.pop('genres', None)
        directors_data = validated_data.pop('directors', None)

        if genres_data is not None:
            instance.genres.set(Genre.objects.filter(external_id__in=genres_data))
        if directors_data is not None:
            instance.directors.set(Director.objects.filter(external_id__in=directors_data))

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
