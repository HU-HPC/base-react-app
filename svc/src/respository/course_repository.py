import sqlalchemy as db
from sqlalchemy.orm import sessionmaker

db_name = 'postgres'


class CoursePostgresRepository(object):
    def __init__(self):
        self.engine = db.create_engine('postgres://user:pass@0.0.0.0:5432/postgres')  # postgres://user:pass@0.0.0.0:5432
        self.connection = self.engine.connect()
        self.metadata = db.MetaData()
        self.instructor_table = db.Table('course', self.metadata, autoload=True, autoload_with=self.engine)
        Session = sessionmaker()
        Session.configure(bind=self.engine)
        self.session = Session()

    def create(self):
        return