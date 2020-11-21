from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('api/', include('posts.urls')),
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
]
