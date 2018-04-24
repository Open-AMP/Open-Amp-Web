var express = require('express');
var tools = require('./jscov');
var router = express.Router();
const request = require('request');

var _chromeDebuggingClient = require("chrome-debugging-client");

var _fs = require("fs");

/* GET home page. */
// router.get('/', function(req, res, next) {




// var urldata = 'www.wikipedia.org';
// var url="https://"+urldata.toString();
// var name=url.split('//')[1].split(".")[0];


// var fs = _interopRequireWildcard(_fs);
// var jdata = " " ;

// function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// (0, _chromeDebuggingClient.createSession)(async function (session) {
//   let browser = await session.spawnBrowser('exact', {
//   executablePath: '/usr/bin/google-chrome-stable'
//   });
//   var api = await session.createAPIClient("localhost", browser.remoteDebuggingPort);
//   var tabs = await api.listTabs();
//   var tab = tabs[0];
//   var client = await session.openDebuggingProtocol(tab.webSocketDebuggerUrl);
//   await client.send("Profiler.enable");
//   await client.send("Page.enable");
//   await client.send("Profiler.startPreciseCoverage", {
//     callCount: true
//   });
//   await client.send("Page.navigate", {
//     url
//   });
//   await new Promise(function (resolve) {
//     return client.on("Page.loadEventFired", resolve);
//   });
//   await new Promise(function (resolve) {
//     return setTimeout(resolve, 1000);
//   });
//   var result = await client.send("Profiler.takePreciseCoverage");
  
//  	jdata = JSON.stringify(result);

//  res.render('index', { data: jdata});
//   //fs.writeFileSync(`${name}-JSCov1.json`, JSON.stringify(result, null, 2));


// }).catch(function (err) {
//   console.error(err);
// });


 
//  console.log( jdata);

 
// });


// router.post('/', function(req, res, next) {

// var url = req.body.url


//  res.render('index', { data: url});
// });

router.get('/', function (req, res) {
  res.render('index', {data: 'madan', error: null});
})

router.post('/', function (req, res) {
  var urldata= req.body.url;

if(urldata == null){

  res.render('index', {data: 'madan', error: null});
}
// var urldata = 'www.wikipedia.org';
var url="https://"+urldata;
var name=url.split('//')[1].split(".")[0];
console.log(urldata);
console.log(name);


var fs = _interopRequireWildcard(_fs);
var jdata = " " ;
console.log(name);
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _chromeDebuggingClient.createSession)(async function (session) {
  let browser = await session.spawnBrowser('exact', {
  executablePath: '/usr/bin/google-chrome-stable'
  });
  var api = await session.createAPIClient("localhost", browser.remoteDebuggingPort);
  var tabs = await api.listTabs();
  var tab = tabs[0];
  var client = await session.openDebuggingProtocol(tab.webSocketDebuggerUrl);
  await client.send("Profiler.enable");
  await client.send("Page.enable");
  await client.send("Profiler.startPreciseCoverage", {
    callCount: true
  });
  await client.send("Page.navigate", {
    url
  });
  await new Promise(function (resolve) {
    return client.on("Page.loadEventFired", resolve);
  });
  await new Promise(function (resolve) {
    return setTimeout(resolve, 1000);
  });
  var result = await client.send("Profiler.takePreciseCoverage");
  
 	jdata = JSON.stringify(result);






        res.render('index', {data: jdata, error: null});



}).catch(function (err) {
  console.error(err);
});
 

});

module.exports = router;



