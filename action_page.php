<?php
$fp = fopen("data.txt", "a") or die("Unable to open file!");
$data = $_POST['name'] . '-' . $_POST['email'] . "\r\n" . '-' . $_POST['mobile'];
fwrite($fp, $data);
fclose($fp);
header('Location: contact.html');
?>