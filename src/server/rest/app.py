from flask import Flask
from controllers import api
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:4200", "http://localhost:5433"])

api.init_app(app)




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')