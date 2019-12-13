def from_request(r):
    return CreateCourseRequest(r.form.get("code"), r.form.get("name"), r.form.get("instructor_id"))


class CreateCourseRequest:
    def __init__(self, code, name, instructor_id):
        self.request={"code": code, "name": name, "instructor_id": instructor_id}