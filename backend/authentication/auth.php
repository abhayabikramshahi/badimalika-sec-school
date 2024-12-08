<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize user inputs
    $name = htmlspecialchars(trim($_POST['Name']));
    $email = htmlspecialchars(trim($_POST['Email']));
    $message = htmlspecialchars(trim($_POST['Textarea']));

    // Error array to store validation messages
    $errors = [];

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Validate email
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    // If there are no errors, proceed to send the email
    if (empty($errors)) {
        // Email configuration
        $to = 'example@example.com'; // Replace with your email
        $subject = 'New Contact Form Message';
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

        $emailBody = "You have received a new message from your website contact form.\n\n";
        $emailBody .= "Name: $name\n";
        $emailBody .= "Email: $email\n\n";
        $emailBody .= "Message:\n$message\n";

        // Send the email
        if (mail($to, $subject, $emailBody, $headers)) {
            $successMessage = "Your message has been sent successfully!";
        } else {
            $errors[] = "Failed to send the message. Please try again later.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f9;
        }

        form {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .formmm {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group, .form-group-full {
            display: flex;
            flex-direction: column;
        }

        label {
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
        }

        input[type="text"], 
        input[type="email"], 
        textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus, 
        input[type="email"]:focus, 
        textarea:focus {
            border-color: #4caf50;
            outline: none;
        }

        textarea {
            resize: none;
            height: 100px;
        }

        .form-group-full {
            grid-column: span 2;
            margin-top: 20px;
        }

        .btn {
            text-align: center;
            margin-top: 20px;
        }

        button {
            padding: 12px 25px;
            font-size: 16px;
            color: #fff;
            background-color: #4caf50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #388e3c;
        }

        .success-message {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
        }

        .error-message {
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<?php 
// Display success message
if (!empty($successMessage)) {
    echo '<div class="success-message">' . $successMessage . '</div>';
}

// Display error messages
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo '<div class="error-message">' . $error . '</div>';
    }
}
?>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
    <div class="formmm">
        <div class="form-group">
            <label for="name">Your Name *</label>
            <input type="text" name="Name" id="name" placeholder="Enter your name" value="<?php echo isset($name) ? $name : ''; ?>">
        </div>
        <div class="form-group">
            <label for="email">Your Email Address *</label>
            <input type="email" name="Email" id="email" placeholder="Enter your email" value="<?php echo isset($email) ? $email : ''; ?>">
        </div>
    </div>
    <div class="form-group-full">
        <label for="email-message">Message *</label>
        <textarea name="Textarea" id="email-message" placeholder="Enter your message"><?php echo isset($message) ? $message : ''; ?></textarea>
    </div>
    <div class="btn">
        <button type="submit">Send Message</button>
    </div>
</form>

</body>
</html>
