const COLOR_LIST = ["red","green","yellow","pink","brown","purple","cyan","blue","orange"];

function punto(x,y){
    var p = {
        x:x,
        y:y
    };
    return p;
}

function puntoMedio(p,q){
    var m = {
        x: Math.round((p.x+q.x)/2),
        y: Math.round((p.y+q.y)/2)
    };
    return m;
}

function getRandomColor(){
    return COLOR_LIST[Math.floor(COLOR_LIST.length * Math.random())];
}

function dibujarPunto(ctx,p,size){
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(p.x,p.y,size,size);
}

function $(id){
    return document.getElementById(id);
}

function get(id){
    return Math.round(document.getElementById(id).value);
}

function main(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var interval;

    $("start").addEventListener("click",function(){

        const size = get("size");
        const vertex = [punto(get("a-x"),get("a-y")),punto(get("b-x"),get("b-y")),punto(get("c-x"),get("c-y"))];

        let p = punto(get("s-x"),get("s-y"));

        dibujarPunto(ctx,p,size);

        interval = setInterval(function(){
            var q = vertex[Math.floor(3*Math.random())];
            p = puntoMedio(p,q);
            dibujarPunto(ctx,p,size);
        },get("speed"));
    });

    $("stop").addEventListener("click",function(){
        clearInterval(interval);
    });

    $("reset").addEventListener("click",function(){
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,600,600);
    });
}

window.addEventListener("DOMContentLoaded",main);