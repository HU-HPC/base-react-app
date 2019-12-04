from .instructor_response import from_data


def from_query(data):
    return [from_data(item) for item in data]

