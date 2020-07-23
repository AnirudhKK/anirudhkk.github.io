<?php
$myemail='iamanirudh,ak@gmail.com'
$name = $_POST['name']; 
$email_address = $_POST['email']; 
$mobile_number = $_POST['mobile']
$message = $_POST['message'];

$to = $myemail;

$email_subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".
"Mobile No. : $mobile\n".
"Email: $email_address\n Message \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

header('Location: contact.html');
?>