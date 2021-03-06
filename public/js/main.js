var canvas = document.getElementById('canvas'),
			ctx = canvas.getContext("2d");

var socket = new io.connect('localhost', {port: 8080});
socket.on('message', function(data){
	animation(data);
});

ctx.textAlign = "center";
var lastData = 0;
function animation(data){
	data = parseInt(data);
	var step = 1,
		interval = setInterval(function(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "red";
			ctx.fillRect(0, 100, 50, - Math.round(lastData + (data - lastData) / 9 * step));

			ctx.fillStyle = "black";
			ctx.fillText(data +"%", 25, 50);

			if (step === 10){
				clearInterval(interval);
				lastData = data;
			}

			step++;
		}, 100);
}