from src.respository import engine, connection, metadata, db, sessionmaker, db_name


class CoursePostgresRepository(object):
    def __init__(self):
        self.course_table = db.Table('course', metadata, autoload=True, autoload_with=engine)
        Session = sessionmaker()
        Session.configure(bind=engine)
        self.session = Session()

    def find_all_courses(self):
        query = db.select([self.course_table]).where(self.course_table.columns.deleted == False)
        ResultProxy = connection.execute(query)
        ResultSet = ResultProxy.fetchall()
        return ResultSet

    def create_course(self, course):
        query = db.insert(self.course_table).values(name=course.name, code=course.code, instructor_id=course.instructor_id)
        result = connection.execute(query)
        return result.inserted_primary_key[0]

    def delete_course(self, id):
        query = self.course_table.update().where(self.course_table.columns.id == id).values(deleted=True)
        connection.execute(query)
    
    def update_course(self, id, field, value):
        course = self.course_table.update().where(self.course_table.columns.id == id)
        query = None
        if field == "code":
            query = course.value(code=value)
        elif field == "name":
            query = course.value(name=value)
        elif field == "instructor_id":
            query = course.values(instructor_id=value)
        else:
            raise Exception("No accepted value")
            
        connection.execute(query)

