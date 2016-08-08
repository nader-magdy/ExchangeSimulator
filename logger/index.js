var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');

var filePath = "C:\\NLog\\nlog.log";
var logId = 1;


function generateLog (rowData)
{
	var data = rowData.split('|');
	return {
		Id : 0,
		Date : data[0],
		Type : data[1],
		Class : data[2],
		Message : data[3]
	}
}

function loadLog()
{
	var logs = [];
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (!err){
			var rows = data.split('\n');
			logId = 1;
			var rownumber = 0;
			for(var i=0 ;i< rows.length - 1; i++)
			{
				var delimeter = rows[i].charAt(24);
				var date = rows[i].substring(0, 10);
				if(Date.parse(date) && delimeter == "|")
				{
					rownumber = 0;
					logs.push(generateLog(rows[i]));
				}
				else
				{
					if(rownumber != 0){
						rows[rownumber] = rows[rownumber] + rows[i];
					}
					else
					{
						rows[i - 1] = rows[i - 1] + rows[i];
						rownumber = i - 1;
					}
				}
			}
			logs.sort(function(a,b){
				return new Date(b.Date) - new Date(a.Date);
		    });
			for(var i=0 ;i< logs.length; i++)
			{
				logs[i].Id = logId++;
			}
			io.emit('chat message', JSON.stringify(logs));
		}
		else{
			console.log(err);
		}
	});
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
	  loadLog();
  });
});

fs.watchFile(filePath, (curr, prev) => {
  loadLog();
  //logs in cmd window not browser console window
  console.log(`the current mtime is: ${curr.mtime}`);  
  console.log(`the previous mtime was: ${prev.mtime}`);
});

http.listen(5958, function(){
  console.log('listening on *:5958');
});


