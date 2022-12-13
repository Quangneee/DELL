/*
Chức năng kịch bản：Unlock Camscanner
Phản hồi：https://t.me/MynameisDell
*/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1687017600"}}};
$done({body: JSON.stringify(obj)});
