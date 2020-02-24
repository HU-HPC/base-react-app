from flask import json

def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


from .instructor import *
from .course import *
from .research import *
