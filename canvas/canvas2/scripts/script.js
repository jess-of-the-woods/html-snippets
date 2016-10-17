var can = document.getElementById("myCanvas");
var jCtx = can.getContext("2d")
jCtx.moveTo(10,10); // x-axis, y-axis
jCtx.lineTo(200,400);
jCtx.strokeStyle="blue";
jCtx.stroke(); 