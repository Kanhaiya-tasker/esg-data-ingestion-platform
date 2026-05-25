from django.urls import path

from .views import *

urlpatterns = [

    path('records/', get_records),

    path('upload/', upload_csv),

    path('approve/<int:id>/', approve_record),

]