<?php



    // Only process POST reqeusts.

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields and remove MORALspace.

        $name = strip_tags(trim($_POST["name"]));

				$name = str_replace(array("\r","\n"),array(" "," "),$name);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $subject = trim($_POST["subject"]);
        $number = trim($_POST["number"]);
        $website = trim($_POST["website"]);
        $message = trim($_POST["message"]);



        // Check that data was sent to the mailer.

        if ( empty($name)  OR empty($number) OR empty($website) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Set a 400 (bad request) response code and exit.

            http_response_code(400);

            echo "Please complete the form and try again.";

            exit;

        }

        $recipient = "basictheme400@gmail.com";

        $sender = "New contact from $name";

        $head = " /// ThemePure \\\ ";

        $email_content = "$head\n\n\n";

        $email_content .= "Name: $name\n";

        $email_content .= "Email: $email\n\n";

        $email_content .= "Subject: $subject\n\n";

        $email_content .= "Number: $number\n\n";

        $email_content .= "Website: $websiite\n\n";

        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $sender, $email_content, $email_headers)) {

            http_response_code(200);

            echo "Thank You! Your message has been sent.";

        } else {

            // Set a 500 (internal server error) response code.

            http_response_code(500);

            echo "Oops! Something went wrong and we couldn't send your message.";

        }



    } else {

        // Not a POST request, set a 403 (forbidden) response code.

        http_response_code(403);

        echo "There was a problem with your submission, please try again.";

    }



?>

