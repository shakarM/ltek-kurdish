from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)


@app.get("/")
def index_get():
    routes = []
    for rule in app.url_map.iter_rules():
        routes.append({"Route": rule.rule})
    return jsonify(routes)


@app.route("/register", methods=["GET"])
def register():

    reply = {"answer": "This is the Reqiter URL"}
    return jsonify(reply)


@app.route("/register/profile", methods=["GET"])
def registerProfile():

    reply = {"answer": "response"}
    return jsonify(reply)


@app.route("/login", methods=["GET"])
def login():

    reply = {"answer": "This is the Login URL"}
    return jsonify(reply)


@app.route("/reports", methods=["GET"])
def reports():

    reply = {"answer": "reports"}
    return jsonify(reply)


@app.route("/reports/post", methods=["GET"])
def reportPost():

    reply = {"answer": "response"}
    return jsonify(reply)


@app.route("/getResponse", methods=["GET"])
def getResponse():

    reply = {"answer": "response"}
    return jsonify(reply)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)


#  user Login maybe Skip
#  profile
