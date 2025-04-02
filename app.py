from flask import Flask, render_template
import re 

# Create the Flask app
app = Flask(__name__)

# Route for the homepage
@app.route('/')
def root():
    return render_template('index.html')

@app.route('/test')
def test():
    return render_template('testing.html')

# Run the Flask app
if __name__ == '__main__':
    # Set the app to be accessible on the network
    app.run(host='0.0.0.0', port=8080, debug=True)
