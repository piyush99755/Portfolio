<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = 'piyushtadvi4@gmail.com';
        $mail->Password = 'wgle xqot icab mjnt';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('piyushtadvi4@gmail.com', 'Piyush');
        $mail->addAddress('piyushtadvi4@gmai.com', 'Piyush');

        $mail->isHTML(true);
        $mail->Subject = 'Test Email via Gmail SMTP';
        $mail->Body = '<b>Hello!</b> This is a test email sent using Gmail SMTP and PHPMailer.';
        $mail->AltBody = 'Hello! This is a test email sent using Gmail SMTP and PHPMailer.';

        if($mail->send()){
            echo 'Email has been sent successfully!';
        }else{
            echo 'Email could not be sent!';
        }

    }
    catch(Exception $e) {
        echo "Error: {$mail->ErrorInfo}";

    }
}



?>