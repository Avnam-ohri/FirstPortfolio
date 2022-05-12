<?php
if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "avnamohri@outlook.com";
    $headers ="From: ".$email;
    $txt = "You have reccived a mail from ".$name. "\n\n".$message;

    mail($mailTo,$txt,$headers);
    header("Location: index.html?mailsend");
}
?>