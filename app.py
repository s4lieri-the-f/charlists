from flask import Flask, render_template, request, jsonify
from datetime import datetime
import requests
import os

app = Flask(__name__, template_folder="./static/templates")

@app.route("/")
def home():
    return render_template("charlists/yukari.html")

if __name__ == "__main__":
    print(os.getcwd())
    app.run(host="0.0.0.0", port=8080, debug=True)