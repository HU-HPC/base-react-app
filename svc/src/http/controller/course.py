from flask import request
from ..response.instructor_list_response import from_query
from ..controller import json_response
from src import app
from src.respository import CoursePostgresRepository
from src.entity.course import Course
from src.usecase.course_usecase import create

repo = CoursePostgresRepository()


@app.route("/course", methods=["GET"])
def list_course():
    data = repo.find_all_courses()
    response = from_query(data)
    return json_response(response)


@app.route("/course", methods=["POST"])
def create_course():
    r = request
    course = Course(r.form.get("code"), r.form.get("name"), r.form.get("instructor"), r.form.get("semester"))
    create(course)
    return json_response(request.form)


@app.route("/course/<string:id>", methods=["DELETE"])
def delete_course(id):
    r = request
    print(id)
    return json_response({"id": id})





