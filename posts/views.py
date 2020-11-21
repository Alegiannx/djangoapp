from django.shortcuts import render

posts = [
    'post1',
    'post2',
    'post3',
    'post4',
]


def getPosts(request):
    return posts


def getPost(request, id):
    return posts[id]
