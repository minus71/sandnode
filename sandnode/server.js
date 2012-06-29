console.info('server starting');
var io = require('socket.io').listen(7180);
var esc = require('esc');
io.sockets.on('connection', function (socket) {
  // connection message
  io.sockets.emit('this', { will: 'be received by everyone'});

  socket.on('msg', function(from,msg){
		console.info('message "'+msg+'" received from '+from);
		msg=esc(msg);
		io.sockets.emit('msg',from+' said: '+msg);
	});

  socket.on('disconntect',function(){
     io.sockets.emit('user disconnected');
  });
  // 

});

