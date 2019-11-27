import sqlalchemy as db
from sqlalchemy.orm import sessionmaker


db_name = 'postgres'


class PostgresRepository(object):
    def __init__(self):
        self.engine = db.create_engine('postgres://user:pass@0.0.0.0:5432/postgres')  # postgres://user:pass@0.0.0.0:5432
        self.connection = self.engine.connect()
        self.metadata = db.MetaData()
        self.instructor_table = db.Table('instructor', self.metadata, autoload=True, autoload_with=self.engine)
        Session = sessionmaker()
        Session.configure(bind=self.engine)
        self.session = Session()

    def find_all_instructors(self):
        query = db.select([self.instructor_table]).where(self.instructor_table.columns.deleted == False)
        ResultProxy = self.connection.execute(query)
        ResultSet = ResultProxy.fetchall()
        print(ResultSet)
        return ResultSet

    def create_instructor(self, instructor):
        query = db.insert(self.instructor_table).values(first_name=instructor.first_name, last_name=instructor.last_name, email=instructor.email)
        self.connection.execute(query)

    def delete_instructor(self, id):
        query = self.instructor_table.update().where(self.instructor_table.columns.id == id).values(deleted=True)
        self.connection.execute(query)

    def update_instructor(self, id, field, value):
        instructor = self.instructor_table.update().where(self.instructor_table.columns.id == id)
        query = None
        if field == "email":
            query = instructor.values(email=value)
        elif field == "first_name":
            query = instructor.values(first_name=value)
        elif field == "last_name":
            query = instructor.values(last_name=value)

        self.connection.execute(query) if (query is not None) else print("Nothing to update")


foo = PostgresRepository()

foo.find_all_instructors()
foo.update_instructor(1, "email", "mshaalan@gmail.com")
foo.find_all_instructors()
foo.update_instructor(1, "email", "mshaalan@harrisburgu.edu")
foo.find_all_instructors()


