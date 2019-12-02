from flask import json
from ..response.instructor_list_response import from_query

from src import app
from src.respository.postgres import PostgresRepository

repo = PostgresRepository()


@app.route("/instructors", methods=["GET"])
def instructor():
    data = repo.find_all_instructors()
    response = from_query(data)
    return json_response(response)


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


