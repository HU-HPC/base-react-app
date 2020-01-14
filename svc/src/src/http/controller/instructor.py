from flask import request
from ..response.instructor_list_response import from_query
from ..controller import json_response
from src import app
from src.respository.instructor_repository import InstructorPostgresRepository
from src.entity.instructor import Instructor
from src.usecase.instructor_usecase import create_instructor as create, get_instructor as get, delete_instructor as delete

repo = InstructorPostgresRepository()


@app.route("/instructor", methods=["GET"])
def list_instructors():
    if len(request.args) != 0:
        params = request.args.to_dict()
        data = get(params['id'])
    else:
        data = repo.find_all_instructors()
    response = from_query(data)
    return json_response(response)


@app.route("/instructor", methods=["POST"])
def create_instructor():
    j = request.get_json()
    instructor = Instructor(j["first_name"], j["last_name"], j["email"])
    create(instructor)
    return json_response(request.form)


@app.route("/instructor/<string:id>", methods=["DELETE"])
def delete_instructor(id):
    delete(id)
    return json_response(True)






