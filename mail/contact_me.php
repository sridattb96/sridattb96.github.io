
<?php

//Check for empty fields
// if(empty($_POST['name'])  		||
//    empty($_POST['email']) 		||
//    empty($_POST['phone']) 		||
//    empty($_POST['message'])	||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
// 	echo "No arguments Provided!";
// 	return false;
//    }
	
// $name = $_POST['name'];
// $email_address = $_POST['email'];
// $phone = $_POST['phone'];
// $message = $_POST['message'];
	
// // Create the email and send the message
// $to = 'sbhamidi@ucdavis.edu'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
// $email_subject = "Website Contact Form:  $name";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: sridattb.96@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";	

// // // $smtp = Mail::factory('smtp', array(
// // //         'host' => 'ssl://smtp.gmail.com',
// // //         'port' => '465',
// // //         'auth' => true,
// // //         'username' => 'sridattb.96@gmail.com',
// // //         'password' => 'ttriforce5'
// // //     ));

// // mail($to,$email_subject,$email_body,$headers);
// // return true;			

// $from_email = 'sridattb.96@gmail.com'
// $my_name = 'noreply'
// $mail = new PHPMailer();  // create a new object
//    $mail->IsSMTP(); // enable SMTP
//    $mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
//    $mail->SMTPAuth = true;  // authentication enabled
//    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
//    $mail->Host = 'smtp.gmail.com';
//    $mail->Port = 465; 
//    $mail->Username = 'sridattb.96';  
//    $mail->Password = 'ttriforce5';           
//    $mail->SetFrom($from_email, $my_name);
//    $mail->Subject = $email_subject;
//    $mail->Body = $email_body;
//    $mail->AddAddress($to);
//    if(!$mail->Send()) {
//       return false;
//    } else {
//       return true;
//    }

// include_once "vendor/autoload.php";
// include_once "vendor/Swift_SmtpTransport.php";
// include_once "vendor/Mailer.php";
// include_once "vendor/Message.php";


 /*
  * Create the body of the message (a plain-text and an HTML version).
  * $text is your plain-text email
  * $html is your html version of the email
  * If the reciever is able to view html emails then only the html
  * email will be displayed
  */ 
 // $text = "Hi!\nHow are you?\n";
 // $html = "<html>
 //       <head></head>
 //       <body>
 //           <p>Hi!<br>
 //               How are you?<br>
 //           </p>
 //       </body>
 //       </html>";
 // // This is your From email address
 // $from = array('hello123@gmail.com' => 'Name To Appear');
 // // Email recipients
 // $to = array('sridattb.96@gmail.com'=>'Destination 1 Name');
 // // Email subject
 // $subject = 'Example PHP Email';
 // // Login credentials
 // $username = 'sridattb.96';
 // $password = 'ttriforce5';

 // // Setup Swift mailer parameters
 // $transport = Swift_SmtpTransport::newInstance('smtp.sendgrid.net', 587);
 // $transport->setUsername($username);
 // $transport->setPassword($password);
 // $swift = Swift_Mailer::newInstance($transport);

 // // Create a message (subject)
 // $message = new Swift_Message($subject);

 // // attach the body of the email
 // $message->setFrom($from);
 // $message->setBody($html, 'text/html');
 // $message->setTo($to);
 // $message->addPart($text, 'text/plain');

 // send message 
 // if ($recipients = $swift->send($message, $failures))
 // {
 //     // This will let us know how many users received this message
 //     echo 'Message sent out to '.$recipients.' users';
 //     return true;
 // }
 // // something went wrong =(
 // else
 // {
 //     echo "Something went wrong - ";
 //     print_r($failures);
 //     return false;
 // }
//Web API

// Use PHP's curl function to send email using the SendGrid Web API.

// <?php

//  $url = 'https://api.sendgrid.com/';
//  $user = 'USERNAME';
//  $pass = 'PASSWORD'; 

//  $params = array(
//       'api_user' => $user,
//       'api_key' => $pass,
//       'to' => 'john@contoso.com',
//       'subject' => 'testing from curl',
//       'html' => 'testing body',
//       'text' => 'testing body',
//       'from' => 'anna@contoso.com',
//    );

//  $request = $url.'api/mail.send.json';

//  // Generate curl request
//  $session = curl_init($request);

//  // Tell curl to use HTTP POST
//  curl_setopt ($session, CURLOPT_POST, true);

//  // Tell curl that this is the body of the POST
//  curl_setopt ($session, CURLOPT_POSTFIELDS, $params);

//  // Tell curl not to return headers, but do return the response
//  curl_setopt($session, CURLOPT_HEADER, false);
//  curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

//  // obtain response
//  $response = curl_exec($session);
//  curl_close($session);

//  // print everything out
//  print_r($response);



?>