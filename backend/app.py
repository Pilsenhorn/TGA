from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def get_data():
    return jsonify({
        "message": "Zdravíme z backendu!"
    })

if __name__ == "__main__":
    app.run(debug=True)

