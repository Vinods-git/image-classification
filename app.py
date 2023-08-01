
from flask import (Flask, redirect, render_template, request,
                   send_from_directory, url_for)
from proccess import classify
app = Flask(__name__)

@app.after_request
def add_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add("Access-Control-Allow-Credentials", True)
    response.headers.add("Content-Type", "application/json")
    return response

@app.route('/')
def index():
   return "Server Started"

@app.route('/image', methods=['POST'])
def hello():
   request.files['image'].save('image.jpg')
   return classify()


if __name__ == '__main__':
   app.run(debug=False)
