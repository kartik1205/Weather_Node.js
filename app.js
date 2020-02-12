var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=47461253b323658f4fff7fb8fc9eda2c&units=metric'
var server= http.createServer(function(request,response){

    var request=require('request');
    request(url,function(err,res,body)
    {
       var data=JSON.parse(body);

       response.write("<html><body><div id='container'>");
       response.write("<h1>"+'City Name - : ' + data['name']+ '<br>' + "</h1>");
       response.write("<h2>"+ 'Temperature - : '+ data.main['temp']+'C'+'<br>'+"</h2>");
       response.write("<h2>"+'SunSet Time- :'+ new Date(data.sys['sunset']*1000)+"</h2>");
       response.write("</div></body></html>");
    
        response.end();


    });
   
}
).listen(8801);