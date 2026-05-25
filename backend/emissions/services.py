import pandas as pd

from .models import EmissionRecord

from .validators import check_suspicious


def process_csv(file, source_type):

    df = pd.read_csv(file)

    for _, row in df.iterrows():

        try:

            status = check_suspicious(source_type, row)

            activity_type = ""
            quantity = 0
            unit = ""

            if source_type == "sap":

                activity_type = row.get('fuel_type', 'fuel')

                quantity = float(row.get('quantity', 0))

                unit = "liters"


            elif source_type == "utility":

                activity_type = "electricity"

                quantity = float(row.get('kwh', 0))

                unit = "kwh"


            elif source_type == "travel":

                activity_type = "flight"

                quantity = float(row.get('distance', 0))

                unit = "km"


            EmissionRecord.objects.create(

                source_type=source_type,

                activity_type=activity_type,

                quantity=quantity,

                unit=unit,

                activity_date="2026-01-01",

                status=status,

                raw_data=row.to_dict()
            )

        except Exception as e:

            print("ERROR:", e)