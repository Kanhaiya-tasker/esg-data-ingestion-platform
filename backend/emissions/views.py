from rest_framework.decorators import api_view

from rest_framework.response import Response

from .models import EmissionRecord

from .serializers import EmissionRecordSerializer

from .services import process_csv


@api_view(['GET'])
def get_records(request):

    records = EmissionRecord.objects.all().order_by('-id')

    serializer = EmissionRecordSerializer(records, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def upload_csv(request):

    file = request.FILES['file']

    source_type = request.data.get('source_type')

    process_csv(file, source_type)

    return Response({
        "message": "CSV uploaded successfully"
    })


@api_view(['PATCH'])
def approve_record(request, id):

    record = EmissionRecord.objects.get(id=id)

    record.status = "approved"

    record.save()

    return Response({
        "message": "Record approved successfully"
    })