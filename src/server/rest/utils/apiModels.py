from flask_restx import Resource, fields, Model, Namespace
from flask import Response, Flask, make_response

def createResponseSuccessWrapperModel(api:Namespace, model:Model=None,):

    if model is not None:
        wrappedModel = {
            "status": fields.String(description="Status of request", example="success"),
            "message":fields.String(description="Message", example="Request a success"), 
            "result": fields.List(fields.Nested(model))
        }
        return api.model(f"{model.name}_wrapper", wrappedModel)
    else:
        wrappedModel = {
            "status": fields.String(description="Status of request", example="success"),
            "message":fields.String(description="Message", example="Request a success, no result to return")
        }    
        return api.model(f"response_success_no_result_wrapper", wrappedModel)   

    

def createResponseFailWrapperModel(api:Namespace):
    wrappedModel = {
        "status": fields.String(description="Status of request", example="error"), 
        "message":fields.String(description="Error Message")
    }        

    return api.model("error_wrapper", wrappedModel)
