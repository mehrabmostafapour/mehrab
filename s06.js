let http = require('http');
let server = http.createServer(requestHandler);
  server.listen(8037);

let headers ={'Content-type':'text/plain'}

    function requestHandler (x,response){
     console.log('request| url:',requset.url);
     console.log('request method:',requset.method);
     console.log(typeof x.writeHead);

     requset.writeHeader(200,headers);
     requset.write('salam'+requset.url);
     requset.end();
    
}