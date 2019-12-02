from src.respository.postgres import PostgresRepository


def create_instructor(instructor):
    repo = PostgresRepository()
    repo.create_instructor(instructor)
    return True