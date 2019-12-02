from flask import Flask, json, g, request
from flask_cors import CORS
from src.project.respository.postgres import PostgresRepository

app = Flask(__name__)

CORS(app)


@app.route("/instructors", methods=["GET"])
def index():
    data = PostgresRepository.find_all_instructors()
    return json_response(data)


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


print("fooo")