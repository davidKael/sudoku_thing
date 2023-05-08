from flask_restx import Model, Resource, Namespace, fields
from utils.apiModels import createResponseSuccessWrapperModel, createResponseFailWrapperModel
from lib.test_db import TestDB

api = Namespace('test', description="Just for checking the rest is working")

responseModel_fail = createResponseFailWrapperModel(api)
responseModel_success_no_return = createResponseSuccessWrapperModel(api)


getTestControllerbyid_response = api.model("getTestControllerbyid_response",{
    "testID": fields.Integer(description="Given id returned"),
    "message": fields.String(description="The message returned")
})

testDB = TestDB()

@api.route("")
class TestController(Resource):

    @api.response(code=200, description="success", model=responseModel_success_no_return)
    @api.response(code=400, description="error", model=responseModel_fail)
    @api.response(code=401, description="unauthorized", model=responseModel_fail)
    @api.response(code=500, description="server error", model=responseModel_fail)
    def get(self):
        return testDB.getTest()

@api.route("/<int:id>")
class TestControllerById(Resource):

    responseModel_success = createResponseSuccessWrapperModel(api, getTestControllerbyid_response)

    @api.response(code=200, description="success", model=responseModel_success)
    @api.response(code=400, description="error", model=responseModel_fail)
    @api.response(code=401, description="unauthorized", model=responseModel_fail)
    @api.response(code=500, description="server error", model=responseModel_fail)
    def get(self, id):
        return {
            'status':'success',
            'message':'so good',
            'result': [
                {
                    'testID': id,
                    'massage': "Message from the backend!!"
                }
            ]

        }
    