<?php
if (isset($_POST['submit'])){
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    $mailTo = "avnamohri@outlook.com";
    $headers ="From: ".$email;
    $txt = "You have reccived a mail from ".$name. "\n\n".$message;

    mail($mailTo,$txt,$headers);
    header("Location: index.php?mailsend");
}
?>