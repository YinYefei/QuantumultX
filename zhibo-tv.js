/**
  * @supported CCA72BB5
  */

var body = $response.body;
var obj = JSON.parse(body);
obj.data.anchor["userHas"] = "1";
body = JSON.stringify(obj);
$done({body});
