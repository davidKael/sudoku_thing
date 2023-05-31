from flask_restx import Api
from .gameScoreBoardController import api as gamescoreController


api = Api(
    title="Sudoku"  
)

api.add_namespace(gamescoreController)
