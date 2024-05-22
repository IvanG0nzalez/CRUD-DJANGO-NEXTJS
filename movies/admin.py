from django.contrib import admin

from movies.models import Movie

class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'director', 'genre', 'release_date', 'duration', 'rating', 'state', 'external_id')

admin.site.register(Movie, MovieAdmin)
