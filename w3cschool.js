/*
w3cschool VIP UNLOCK

^https:\/\/appapi\.w3cschool\.cn\/api\/myapp\/isLogin url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/w3cschool.js
*/

var body = $response.body;
var obj = JSON.parse(body);
 obj.viptype = 1;
 obj.viplevel = "1";
 obj.vipexpire = "2030-10-10 10-10-10";
 body = JSON.stringify(obj);
}
$done({body});
