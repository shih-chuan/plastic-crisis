<?php
header('Content-Type: application/json; charset=UTF-8');
@$qID = $_POST["qID"];
@$value = $_POST["value"];
// load file
$data = file_get_contents('js/surveyData.json');
// decode json to associative array
$json_arr = json_decode($data, true);
//count++
$json_arr[$qID]['count']+=1;
if ($_SERVER['REQUEST_METHOD'] == "POST") {
  switch($qID){
    case 0:
    case 1:
    case 2:
    case 4:
    case 5:
    case 6:
      if($value == 'Yes'){
        $json_arr[$qID]['yes']+=1;
      }else{
        $json_arr[$qID]['no']+=1;
      }
      echo json_encode(array(
        'value' => $value,
        'nSample' => $json_arr[$qID]['count'],
        'yes' => $json_arr[$qID]['yes'],
        'no' => $json_arr[$qID]['no'],
        'writable' => is_writable('js/surveyData.json')
      ));
      break;
    case 3:
      if($value == 'plasticBag'){
        $json_arr[$qID]['plasticBag']+=1;
      }else if($value == 'box'){
        $json_arr[$qID]['box']+=1;
      }else if($value == 'ownBag'){
        $json_arr[$qID]['ownBag']+=1;
      }else if($value == 'hand'){
        $json_arr[$qID]['hand']+=1;
      }
      echo json_encode(array(
        'value' => $value,
        'nSample' => $json_arr[$qID]['count'],
        'plasticBag' => $json_arr[$qID]['plasticBag'],
        'box' => $json_arr[$qID]['box'],
        'ownBag' => $json_arr[$qID]['ownBag'],
        'hand' => $json_arr[$qID]['hand'],
        'writable' => is_writable('js/surveyData.json')
      ));
      break;
  }

}
file_put_contents('js/surveyData.json', json_encode($json_arr));
?>