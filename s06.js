let http=require('http');
let server =http.createServer(requestHandler);
server.listen(8037);

console.log('server is running');
let headers={'Content-Type':'Text/Plain'};
let headersHtml={'Content-Type':'Text/Plain'};

let headers1= {
    text:{'Content-Type':'Text/Plain'},
    html:{'Content-Type':'Text/Html'}
}

let c=3;
let e=2;

let obj={

    s: function(){

        console.log(c+e);

    },

    m: function(){

        console.log(c-e);

    },

    "favicon.ico":function(){

        console.log('favicon');
    }

}
function html1 (request){
    response.log('ths is c');
    response.writeHead(200 , headers);
    response.write(
        `<html>
                  <head>

                  </head>
              <body>
                  <h1>hi</h1>
              </body>
        <html>`
    )
}

function requestHandler (request, response){
    
    console.log('request url: ', request.url);
    console.log('request method: ', request.method);
 
    let firstpart=request.url.split('/')[1];

    console.log(firstpart);

     obj[firstpart]();

    response.writeHead(200,headers);
    response.write('salam '+request.url);
    response.end();

}