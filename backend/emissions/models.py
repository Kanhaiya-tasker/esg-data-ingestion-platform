from django.db import models


class EmissionRecord(models.Model):

    SOURCE_CHOICES = [
        ('sap', 'SAP'),
        ('utility', 'Utility'),
        ('travel', 'Travel'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('suspicious', 'Suspicious'),
    ]

    source_type = models.CharField(
        max_length=20,
        choices=SOURCE_CHOICES
    )

    activity_type = models.CharField(max_length=100)

    quantity = models.FloatField()

    unit = models.CharField(max_length=20)

    activity_date = models.DateField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    raw_data = models.JSONField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.source_type} - {self.activity_type}"