var cursorID = "";
var terminateJob = 'false';
var count = 0;
var firstCall = true;

while(terminateJob === 'false') {

if(firstCall) {
    var myRequest = new Request("https://baas-ug008mr.apigee.net/jnjdn/jnjprod/productcollection2s?access_token=YWMtAZyxDu9mEeal1IW3WhdFDAAAAVpLD75088yo0HcRHWKENSRHssyd9mktQNA&ql=countryCode='SGP' and brandCode='TSP'&limit=1000", "GET");
    firstCall=false;
} else {
    var myRequest = new Request("https://baas-ug008mr.apigee.net/jnjdn/jnjprod/productcollection2s?access_token=YWMtAZyxDu9mEeal1IW3WhdFDAAAAVpLD75088yo0HcRHWKENSRHssyd9mktQNA&ql=countryCode='SGP' and brandCode='TSP'&limit=1000&cursor="+cursorID, "GET");
}

var response1 =httpClient.send(myRequest);
response1.waitForComplete();
var response2 = response1.getResponse();
if((response2 === undefined) || (response2 === "") || (response2 === {}) || (response2 === [])) {
    	terminateJob = 'true';
    }
else {
var response3 = JSON.parse(response2.content);
print(JSON.stringify("response3",response3));
var response4 = response3.count;
    cursorID = response3.cursor;
    count = count + response4;
    context.setVariable("count",count);
if(response3.cursor === undefined) {
	        terminateJob = 'true';
	        context.setVariable("count",count);
	    }
}
}