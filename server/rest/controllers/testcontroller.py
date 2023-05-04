from flask_restx import Resource, Namespace


api = Namespace('test', description="Just for checking the rest is working")

@api.route("")
class TestController(Resource):
    def get(self):
        return {'result': 'message from the backend'}

@api.route("/<int:id>")
class TestControllerById(Resource):
    def get(self, id):
        return {'value': f'Hello, World! {id}' }
    