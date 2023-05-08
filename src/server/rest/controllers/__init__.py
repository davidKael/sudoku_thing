from flask_restx import Api
from .testcontroller import api as TestControllerApi
from .testothercontroller import api as TestOtherApi



api = Api(
    title="TestRest"  
)

api.add_namespace(TestControllerApi)
api.add_namespace(TestOtherApi)