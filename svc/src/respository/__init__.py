import sqlalchemy as db
from sqlalchemy.orm import sessionmaker


engine = db.create_engine('postgres://user:pass@0.0.0.0:5432/postgres')  # postgres://user:pass@0.0.0.0:5432
connection = engine.connect()
metadata = db.MetaData()

db_name = 'postgres'

from .instructor_repository import *
from .course_repository import *
from .research_repository import *