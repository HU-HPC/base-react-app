import os
from sqlalchemy import create_engine
from sqlalchemy import Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

base = declarative_base()

class InstructorSchema(base):
    __tablename__ = 'instructor'

    def __init__(self):
        id = Column(String, primary_key=True)
        first_name = Column(String)
        last_name = Column(String)
        email = Column(String)