var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Face
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(0,100);
ctx.lineTo(200, 100);
ctx.lineTo(200,0);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

// Sunglasses
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.arc(50, 25, 40, 0, Math.PI);
ctx.arc(150, 25, 40, 0, Math.PI);
ctx.closePath();
ctx.fillStyle = 'lightBlue';
ctx.fill();
ctx.stroke();

// Smile
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.arc(100, 70, 20, 0, Math.PI-.3);
ctx.closePath();
ctx.fillStyle = 'lightYellow';
ctx.fill();
ctx.stroke();

