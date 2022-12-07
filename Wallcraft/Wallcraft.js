/*
Chức năng kịch bản：Unlock Wallcraft
Phản hồi：https://t.me/MynameisDell
*/

var body = $response.body;
var objc = JSON.parse(body);

objc.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

body = JSON.stringify(objc);
$done({ body });
