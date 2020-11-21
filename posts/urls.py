from django.urls import path

from . import views

app_name = 'posts'
urlpatterns = [
    path('posts', views.getPosts, name='posts'),
    path('post/<int:id>', views.getPost, name='post'),
]
