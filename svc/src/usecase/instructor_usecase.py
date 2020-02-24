from src.respository.instructor_repository import InstructorPostgresRepository

repo = InstructorPostgresRepository()


def create_instructor(instructor):
    repo.create_instructor(instructor)
    return True


def get_instructor(id):
    result = repo.get_instructor(id)
    return result


def delete_instructor(id):
    repo.delete_instructor(id)
    return True
