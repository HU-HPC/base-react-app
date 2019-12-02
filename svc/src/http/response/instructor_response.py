keys = ['id', 'first_name', 'last_name', 'email']


def from_data(data):
    return dict(zip(keys, data))
