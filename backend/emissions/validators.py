import pandas as pd


def check_suspicious(source_type, row):

    if source_type == "sap":

        quantity = row.get('quantity', 0)

        if quantity > 10000:
            return "suspicious"

    elif source_type == "utility":

        kwh = row.get('kwh', 0)

        if kwh < 0:
            return "suspicious"

    elif source_type == "travel":

        airport = row.get('to_airport')

        if pd.isna(airport) or airport == "":
            return "suspicious"

    return "pending"