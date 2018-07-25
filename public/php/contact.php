<?php
    $name = $_POST['name'];
    $visitorEmail = $_POST['email'];
    $message = $_POST['message'];

    $emailFrom = 'haizler.co.il';
    $emailSubject = "New Form Submission";
    $emailBody = "User Name: $name.\n".
                    "User Email: $visitorEmail.\n".
                    "User Message: $message.\n";

    $to = "jordiamir@gmail.com";
    $headers = "From: $emailFrom \r\n";
    $headers .= "Replay-To: $visitorEmail \r\n";
    mail($to,$emailSubject,$emailBody,$headers);
    header("Location: contact.html");
?>