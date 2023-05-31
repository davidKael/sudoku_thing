import psycopg2
from .dbconnection import conn
from flask import make_response, jsonify

class GameScoreBoardDB():
    def getScoreBoard(self):
        try:
            cur = conn.cursor()

            query = """
                SELECT * FROM gamescoreboard;
            """
            cur.execute(query)
            result = cur.fetchall()

            return make_response(jsonify({"status":"success", "message":"Scores in scoreboard fetched", "result":result}), 200)


        except (Exception, psycopg2.DatabaseError) as error:


            return make_response(jsonify({"status":"error", "message":"DATABASE ERROR"}), 500)

    
    def postScoreToBoard(self, newGameScore):
        try:
            cur = conn.cursor()

            game = newGameScore.get("game")
            player_name = newGameScore.get("player_name")
            finished_in_seconds = newGameScore.get("finished_in_seconds")

            if game is None or player_name is None or finished_in_seconds is None:
                return make_response(jsonify({"status":"error", "message":"Missing Data"}), 400)

            query = """
                INSERT INTO gamescoreboard (game, player_name, finished_in_seconds) VALUES (%s, %s, %s);
            """
            cur.execute(query, (game, player_name, finished_in_seconds))
            conn.commit()

            return make_response(jsonify({"status":"success", "message":"Score added to scoreboard"}), 200)


        except (Exception, psycopg2.DatabaseError) as error:

            conn.rollback()

            return make_response(jsonify({"status":"error", "message":"DATABASE ERROR"}), 500)
