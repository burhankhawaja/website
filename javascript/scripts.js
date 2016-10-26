//var canvas;
//function move(context, x, y) {
//    'use strict';
//    context.translate(x, y);
//}
//function draw() {
//    'use strict';
//    
//    canvas = document.getElementById('canvas');
//    canvas.style.border = '1px solid hsla(0,0%,90%,1)';
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        setInterval(move(ctx, 1, 1), 50);
//        
//
//        // TOP LEFT
//        ctx.fillStyle = 'hsla(280,80%,60%,1)';
//        ctx.fillRect(50, 50, 100, 100);
//        
//        // TOP RIGHT
//        ctx.fillStyle = 'hsla(150,80%,60%,1)';
//        ctx.fillRect(150, 50, 100, 100);
//        
//        // BOTTOM LEFT
//        ctx.fillStyle = 'hsla(150,80%,60%,1)';
//        ctx.fillRect(50, 150, 100, 100);
//        
//        // BOTTOM RIGHT 
//        ctx.fillStyle = 'hsla(280,80%,60%,1)';
//        ctx.fillRect(150, 150, 100, 100);
//        
//        // CLEAR 
//        ctx.clearRect(100, 100, 100, 100);
//        
//    }
//}



window.onload = function () {
    'use strict';
//    draw();
    var mouseX = 0, mouseY = 0;
    document.onmousemove = function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    }

    setInterval(showCoords, 100);
    
    function showCoords(){
        document.getElementById('coordX').innerHTML = mouseX; // here 'coordX' is an id of paragraph tag set in html
        document.getElementById('coordY').innerHTML = mouseY; // here 'coordX' is an id of paragraph tag set in html
    } 
};