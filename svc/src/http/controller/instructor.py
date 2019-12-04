from flask import request
from ..response.instructor_list_response import from_query
from ..controller import json_response
from src import app
from src.respository.instructor_repository import InstructorPostgresRepository
from src.entity.instructor import Instructor
from src.usecase.instructor_usecase import create_instructor as create

repo = InstructorPostgresRepository()


@app.route("/instructor", methods=["GET"])
def list_instructors():
    data = repo.find_all_instructors()
    response = from_query(data)
    return json_response(response)


@app.route("/instructor", methods=["POST"])
def create_instructor():
    r = request
    instructor = Instructor(r.form.get("first_name"), r.form.get("last_name"), r.form.get("email"))
    create(instructor)
    return json_response(request.form)


@app.route("/instructor/<string:id>", methods=["DELETE"])
def delete_instructor(id):
    r = request
    print(id)
    return json_response({"id": id})





