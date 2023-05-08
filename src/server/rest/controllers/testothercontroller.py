from flask_restx import Model, Resource, Namespace, fields
from utils.apiModels import createResponseSuccessWrapperModel, createResponseFailWrapperModel

api = Namespace('test-other', description="Just for checking other things on the rest is working")

responseModel_fail = createResponseFailWrapperModel(api)
responseModel_success_no_return = createResponseSuccessWrapperModel(api)


testother_response = api.model("testother_response",{
    "input": fields.String(description="Some text input given by user"),
    "message": fields.String(description="The message returned")
})




@api.route("/<string:input>")
class TestOtherController(Resource):

    responseModel_success = createResponseSuccessWrapperModel(api, testother_response)

    @api.response(code=200, description="success", model=responseModel_success)
    @api.response(code=400, description="error", model=responseModel_fail)
    @api.response(code=401, description="unauthorized", model=responseModel_fail)
    @api.response(code=500, description="server error", model=responseModel_fail)
    def get(self, input):
        return {
            'status':'success',
            'message':'yeeesss',
            'result': [
                {
                    'input': input,
                    'massage': "Message from the backend!!"
                }
            ]

        }
    