"use strict";

var ctx;
var color;
var colorList = [63,1,21,112,176,240,277,323];

function $(id){
    return document.getElementById(id);
}

function rand(min,max){
    return Math.random()*(max-min)+min;
}

function drawBranch(startX,startY,len,angle,branchWidth,hsl){
    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "hsl("+color+",100%,"+hsl+"%)";
    ctx.lineWidth = branchWidth;
    ctx.translate(startX,startY);
    ctx.rotate(angle* Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-len);
    ctx.stroke();

    if(len < 5){
        ctx.restore();
        return;
    }

    var factor = rand(0.6,0.9);
    var angle = rand(-30,0);
    drawBranch(0, -len, len*factor, angle,branchWidth*factor,hsl*1.2);
    factor = rand(0.6,0.9);
    angle = rand(0,30);
    drawBranch(0, -len, len*factor, angle,branchWidth*factor,hsl*1.2);

    ctx.restore();
}

function main(){
    var canvas = $("canvas");
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight*3/4;
    ctx = canvas.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    color = colorList[Math.floor(rand(0,colorList.length))];
    drawBranch(width/4,height*3/4,100,0,10,10);
}

window.addEventListener("load",main);