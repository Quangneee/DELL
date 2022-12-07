/*
Chức năng kịch bản：Unlock WPSOffice
Phản hồi：https://t.me/MynameisDell
*/

var a='{\x22result\x22:\x22ok\x22,\x22privilege\x22:[],\x22total_cost\x22:0,\x22level\x22:88,\x22wealth\x22:0,\x22exp\x22:0 ,\x22vip\x22:{\x22has_ad\x22:0,\x22enabled\x22:[]},\x22total_buy\x22:0}';var b=JSON['parse'](a);const c=new Array ('data_recover','ocr','pdf2doc','pdf_merge','pdf_sign','pdf_split');const d=new Array(['siêu thành viên',0x28],['Thành viên WPS',0x14], ['viên trấu',0xc]);const e=0x70db6800;b['server_time']=e;b['userid']=e;b['vip']['tên']=d[0x0] [0x0];b['vip']['memberid']=d[0x0][0x1];b['vip']['expire_time']=e;for(i=0x0;i<c['length '];i++){b['privilege'][i]={'times':0x0,'expire_time':e,'spid':c[i]};}for(o=0x0;o<d[ 'độ dài'];o++){b['vip']['đã bật'][o]={'name':d[o][0x0],'expire_time':e,'memberid':d[o][0x1]};}console['log']('\x0aR ·E\x20WPS\x20Script\x20Log:\x0aWPS đã được mở khóa cho đến năm 2030\ có thể tận hưởng '+c['length']+'+ dịch vụ thành viên');$done({body : JSON['stringify'] ( b)});
