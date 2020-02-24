
from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from flask_debug import Debug
app = Flask('project')
app.config['SECRET_KEY'] = 'random'
app.debug = True
toolbar = DebugToolbarExtension(app)
Debug(app)
from src.http.controller import *
