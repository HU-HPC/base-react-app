from src.respository import engine, connection, metadata, db, sessionmaker, db_name


class InstructorPostgresRepository(object):
    def __init__(self):
        self.instructor_table = db.Table('instructor', metadata, autoload=True, autoload_with=engine)
        Session = sessionmaker()
        Session.configure(bind=engine)
        self.session = Session()

    def find_all_instructors(self):
        query = db.select([self.instructor_table]).where(self.instructor_table.columns.deleted == False)
        ResultProxy = connection.execute(query)
        ResultSet = ResultProxy.fetchall()
        return ResultSet

    def create_instructor(self, instructor):
        query = db.insert(self.instructor_table).values(first_name=instructor.first_name, last_name=instructor.last_name, email=instructor.email)
        connection.execute(query)

    def delete_instructor(self, id):
        query = self.instructor_table.update().where(self.instructor_table.columns.id == id).values(deleted=True)
        connection.execute(query)

    def update_instructor(self, id, field, value):
        instructor = self.instructor_table.update().where(self.instructor_table.columns.id == id)
        query = None
        if field == "email":
            query = instructor.values(email=value)
        elif field == "first_name":
            query = instructor.values(first_name=value)
        elif field == "last_name":
            query = instructor.values(last_name=value)

        connection.execute(query)   # if (query is not None) else print("Nothing to update")
