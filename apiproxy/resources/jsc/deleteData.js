for(var i=0;i<50;i++)
{var myRequest2 = new Request("https://baas-ug008mr.apigee.net/jnjdn/jnjdev/stores?access_token=YWMtRh1MGO0Eea0wOspJwCkfAAAAVo7bT9-IZe-WflXY02XA-mmAT8vtnm2Vvw&limit=226", 'DELETE');
var exchange=httpClient.send(myRequest2);
exchange.waitForComplete();
}