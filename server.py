
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from main import chat

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route('/suggestions')
def suggestions():
    text = request.args.get('appid')
    if text:
        abc = chat(text)
    return {
        'text': text,
        "response": abc
    }


if __name__ == '__main__':
   app.run(port=5002)
