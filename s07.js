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
    },
    xxx: html1

}
function page2controller(response){
    console.log('page2controller 1')
    fs.readFile('.index.html','utf8',function(error,data);
    console.log('page2controller2');
    console.log('page2controller2 error')
}





function html1 (response){
    console.log('ths is c');
    response.writeHead(200 , headers.html);
    response.write(
        `<html>
                  <head>

                  </head>
              <body>
                  <h1>hi</h1>

              </body>
        <html>`
    )
    response.end();
}
let routes={
    x:funcx,
    y:funcy,
    page1:page1controller,
    page2:page2controller,
}

function requestHandler (request, response){
    
    console.log('request url: ', request.url);
    console.log('request method: ', request.method);
 
    let firstpart=request.url.split('/')[1];

    console.log(firstpart);

     obj[firstpart](response);

    

}