
var http = require('http');  
var url = require('url');                             //Holds the url
var fs = require('fs');                               // Holds the required file


myDateTime = function () {                             // Create a date time function
    return Date();
};
  
  /*  http://localhost:8080 */
http.createServer(function (req, res) {                   //Creates a server object

  fs.readFile('myfirstnode.html', function(err, data) {      //Reads a file
     
     res.writeHead(200, {'Content-Type': 'text/html'});   //HTTPS header to display as HTML
	 res.write(data);          /*  http://localhost:8080/?year=2017&month=July   */
	 
	res.write("I am Anusha");                           //writes a response 
    res.write("The date and time are currently: " + myDateTime()); //Execute a datetime function
	
	
	/* res.write(req.url);          //holds the part of url which comes domain name 
	 */
	
	var q = url.parse(req.url, true).query; 
    var txt = q.year + " " + q.month;             /*  http://localhost:8080/?year=2017&month=July   */
    res.write(txt);
	
	/* Appends the file */
	
	 fs.appendFile('myfirsttext.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!'); 
});  

        /*write a file  */
     fs.writeFile('myfirstnode.html', 'Hello content!', function (err) {
     if (err) throw err;
       console.log('Saved!');
   }); 
   
   var rs = fs.createReadStream('./myfirstnode.html');
rs.on('open', function () {
  console.log('The file is open');
});
	res.end();                                 //Ends the response 
	
  });


}).listen(8080);                             //the server object listens on port 8080

