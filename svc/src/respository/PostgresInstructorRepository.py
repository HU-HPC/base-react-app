import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from svc.src.entity.instructor import instructor


class PostgresInstructorRepository(object):
    def __init__(self):
        postgres_params = os.environ.get("POSTGRES_URL")  # postgres://user:pass@0.0.0.0:5432
        self.db = create_engine(postgres_params)
        Session = sessionmaker(self.db)
        self.session = Session()

    def insert_instructor(self, instructor):
        self.session.add(instructor)
        self.session.commit()

    def get_all_instructors(self):
        self.session.query(instructor)

    def update_instructor(self, instructor, field, new_data):
        instructor.__setitem__(self, field, new_data)
        self.session.commit()

    def remove_instructor(self, instructor):
        self.session.delete(instructor)
        self.session.commit()
