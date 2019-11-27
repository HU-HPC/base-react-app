from flask import Flask, json, g, request
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


@app.route("/instructor", methods=['GET'])
def list_instructors():
    json_response(Instructor(g.user).find_all)


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}