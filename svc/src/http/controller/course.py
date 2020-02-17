from flask import request
from ..response.instructor_list_response import from_query
from ..controller import json_response
from src import app
from src.respository import CoursePostgresRepository
from ..request import from_request
from src.entity.course import from_request_object
from src.usecase.course_usecase import CourseUsecase

repo = CoursePostgresRepository()


@app.route("/course", methods=["GET"])
def list_course():
    data = repo.find_all_courses()
    response = from_query(data)
    return json_response(response)


@app.route("/course", methods=["POST"])
def create_course():
    r = request
    ccr = from_request(request)
    course = from_request_object(ccr)
    cu = CourseUsecase()
    id = cu.create(course)
    return json_response({"course_id": id})


@app.route("/course/<string:id>", methods=["DELETE"])
def delete_course(id):
    r = request
    print(id)
    return json_response({"id": id})





