from flask_restx import Model, Resource, Namespace, fields
from utils.apiModels import createResponseSuccessWrapperModel, createResponseFailWrapperModel
from lib.gameScoreBoardDB import GameScoreBoardDB

api = Namespace('scoreboard', description="For getting and updating times of a played a game of sudoku")

responseModel_fail = createResponseFailWrapperModel(api)
responseModel_success_no_return = createResponseSuccessWrapperModel(api)

gamescoreboard = GameScoreBoardDB()

getGameScoreBoardController_response = api.model("getGameScoreBoardController_response",{
    "id": fields.Integer(description="id of score"),
    "game": fields.String(description="Name of game"),
    "player_name": fields.String(description="Name of player"),
    "finished_in_seconds": fields.Integer(description="Time it took for player to finish the game in seconds"),
})
getGameScoreBoardController_response_wrapped = createResponseSuccessWrapperModel(api, getGameScoreBoardController_response)

postGameScoreBoardController_params = api.model("postGameScoreBoardController_params",{
    "game": fields.String(description="Name of game", required=True),
    "player_name": fields.String(description="Name of player", required=True),
    "finished_in_seconds": fields.Integer(description="Time it took for player to finish the game in seconds", required=True),
})

@api.route("")
class GameScoreBoardController(Resource):

    @api.response(code=200, description="success", model=getGameScoreBoardController_response_wrapped)
    @api.response(code=400, description="error", model=responseModel_fail)
    @api.response(code=401, description="unauthorized", model=responseModel_fail)
    @api.response(code=500, description="server error", model=responseModel_fail)
    def get(self):
        return gamescoreboard.getScoreBoard()

    @api.expect(postGameScoreBoardController_params)
    @api.response(code=200, description="success", model=responseModel_success_no_return)
    @api.response(code=400, description="error", model=responseModel_fail)
    @api.response(code=401, description="unauthorized", model=responseModel_fail)
    @api.response(code=500, description="server error", model=responseModel_fail)
    def post(self):
        return gamescoreboard.postScoreToBoard(api.payload)
    