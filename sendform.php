<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->isSMTP();                                     //
$mail->Host = 'smtp.lemurteam.com';                  //
$mail->Port = 465;                                   //
$mail->SMTPSecure = 'ssl';                           // Ввести параметры SMTP срвера
$mail->SMTPAuth = true;                              //
$mail->Username = "communication@lemurteam.ru";      //
$mail->Password = "communication-password";          //

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language');
$mail->isHTML(true);

$mail->setFrom('communication@lemurteam.ru', 'Communicator');        // Ввести данные отправителя
$mail->addAddress('support@lemurteam.ru');
$mail->Subject = 'Обратная связь';

$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$communication = $_POST['communication'];
$body = '<p>' . $name . ' ' . $phone . ' ' . $communication . '</p>';

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Error'
} else {
    $message = 'Complite'
}

$response = ['message' = $message];

header('Content-type: application/json');
echo json_encode($response);
?>
