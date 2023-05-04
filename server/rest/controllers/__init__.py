from flask_restx import Api
from .testcontroller import api as TestControllerApi



api = Api(
    title="TestRest"  
)

api.add_namespace(TestControllerApi)