<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $message = htmlspecialchars($_POST['Textarea']);

    // Server-side validation (ensure no empty fields)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Email details
        $to = "your-email@example.com"; // Change to your email
        $subject = "New Message from $name";
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "Content-Type: text/html; charset=UTF-8";

        // Create the email body
        $body = "<html>
                    <head>
                        <title>$subject</title>
                    </head>
                    <body>
                        <p><strong>Name:</strong> $name</p>
                        <p><strong>Email:</strong> $email</p>
                        <p><strong>Message:</strong><br>$message</p>
                    </body>
                </html>";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "<p>Message sent successfully!</p>";
        } else {
            echo "<p>Error sending message. Please try again later.</p>";
        }
    } else {
        echo "<p>All fields are required. Please fill in the missing information.</p>";
    }
}
?>
