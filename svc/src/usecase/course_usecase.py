from src.respository import CoursePostgresRepository


class CourseUsecase:
    def __init__(self):
        self.repo = CoursePostgresRepository()

    def create(self, course):
        id = self.repo.create_course(course)
        return id

    def delete(self, id):
        self.repo.delete_course(id)

    def update(self, id, field, value):
        self.repo.update_course(id, field, value)
