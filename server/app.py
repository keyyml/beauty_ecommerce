from config import app

@app.route('/')
def index():
    return ''

# run python app.py
if __name__ == '__main__':
    app.run(port=5555, debug=True)