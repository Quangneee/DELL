/*
Chức năng kịch bản：Unlock Appraven
Phản hồi：https://t.me/MynameisDell
*/

var url = $request.url;
var obj = JSON.parse($response.body);
const tmp1 = '/AppRaven/app';
const tmp2 = '/AppRaven/social';
const tmp3 = '/AppRaven/buy';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp2) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp3) != -1) {
	obj={"success":true,"message":"1896165181","isReceiptValid":true,"isSubscriptionActive":true};
	body = JSON.stringify(obj);
}
$done({body});
obj.entitlement.storage={
      "used": 0,
      "limit": 1154487209165,
      "display_limit": 1099511627776,
      "warn": 992137445376
    };
obj.avatar.placeholder=true;
body = JSON.stringify(obj); 
$done({body});
