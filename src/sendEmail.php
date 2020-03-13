<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json;charset=utf-8');

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $naam = $params->naam;
        $voornaam = $params->voornaam;
        $telefoon = $params->telefoon;
        $message = $params->message;

        $recipient = 'sedric.lodonou@atlemo.be';
        $subject = 'Atlemo contactformulier: ' . $params->onderwerp;
        $headers = "From: $naam $voornaam <$email>";
        $body = "Bericht:\n" . $message . "\n\nTelefoonnummer: " . $telefoon;

        $result = [];
        if (mail($recipient, $subject, $body, $headers)) {
          $result['sent'] = true;
        } else {
          $result['sent'] = false;
        }
        $json = json_encode($result);
        echo $json;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
