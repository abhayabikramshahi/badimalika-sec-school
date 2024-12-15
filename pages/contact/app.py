from flask import Flask, render_template, request, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flashing messages

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get data from the form
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # Simple validation
        if not name or not email or not message:
            flash('Please fill out all fields.', 'error')
        else:
            # Handle form submission (you can save it in a database or send an email)
            flash('Message sent successfully!', 'success')
            # For debugging, you can print the form data
            print(f'Name: {name}, Email: {email}, Message: {message}')
    
    return render_template('co.html')

if __name__ == '__main__':
    app.run(debug=True)
