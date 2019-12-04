from src.respository.instructor_repository import InstructorPostgresRepository


def create_instructor(instructor):
    repo = InstructorPostgresRepository()
    repo.create_instructor(instructor)
    return True
