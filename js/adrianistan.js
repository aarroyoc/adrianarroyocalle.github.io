/*
City JavaScript for Adrianistan
*/
var zones=new Array;
var box=false;
function Zone(title,x,y,width,height,text){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text=text;
	this.title=title;
	this.zoomIt=function(){
		zoom.to({
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height
		});
	}
	return this;
}
function Text(url)
{
	this.url=url;
	return this;
}
var pages=[{
	name: "Home",
	url: "html/home.html"
},
{
	name: "Advertising",
	url: "html/adpv.html"
},
{
	name: "Projects",
	url: "html/projects.html"
},
{
	name: "Biography",
	url: "html/biography.html"
},
{
	name: "Videos",
	url: "html/videos.html"
},
{
	name: "Pictures",
	url: "html/pictures.html"
},
{
	name: "Interests",
	url: "html/interests.html"
},
{
	name: "Events",
	url: "html/events.html"
},
{
	name: "Contact",
	url: "html/contact.html"
}];
var show=false;
var pageCount=0;
function Refresh()
{
	var frame=document.getElementById("iframe-content");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	frame.src=pages[pageCount].url;
	var prevPage=pageCount-1;
	var nextPage=pageCount+1;
	if(prevPage<0)
		prevPage=pages.length-1;
	prev.textContent=pages[prevPage].name;
	if(nextPage>pages.length-1)
		nextPage=0;
	next.textContent=pages[nextPage].name;
}
window.addEventListener("load",function(){
	var msgbox=document.getElementById("message-box");
	var frame=document.getElementById("iframe-content");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	prev.addEventListener("click",function(evt){
		evt.stopPropagation();
		pageCount--;
		if(pageCount<0)
			pageCount=pages.length-1;
		Refresh();
	});
	next.addEventListener("click",function(evt){
		evt.stopPropagation();
		pageCount++;
		if(pageCount>pages.length-1)
			pageCount=0;
		Refresh();
	});
	document.addEventListener("click",function(evt){
		if(show)
		{
			show=false;
			msgbox.style.visibility="hidden";
		}else{	
			show=true;
			msgbox.style.height=window.innerHeight*3/4+"px";
			msgbox.style.visibility="visible";
			frame.style.width=window.innerWidth/2+"px";
			frame.style.height=window.innerHeight*3/4+"px";
			
			Refresh();
		}
	});
	//var biography=new Text("html/biography.html");
	//zones.push(new Zone("Biography",100,100,200,200,biography));
	

	/*document.addEventListener("click",function(evt){
		var x=evt.clientX; //or screenX?
		var y=evt.clientY;
		zones.forEach(function(zone){
			if(x<zone.x+100 && x>zone.x-100)
				if(y<zone.y+100 && y>zone.y-100)
				{
					zone.zoomIt();
					var msgbox=document.getElementById("message-box");
					var iframe=document.getElementById("iframe-content");
					if(box)
					{
						box=false;
						msgbox.style.visibility="hidden";
					}else
					{
						box=true;
						iframe.src=zone.text.url;
						msgbox.style.visibility="visible";
						msgbox.style.bottom=zone.y-50+"px";
						msgbox.style.left=zone.x+50+"px";
						msgbox.style.width=zone.width/2+"px";
						msgbox.style.height=zone.height/2+"px";
						iframe.style.width=zone.width/2+"px";
						iframe.style.height=zone.height/2+"px";
					}
				}
		});
	});*/
	/*document.addEventListener("mouseover",function(evt){
		var x=evt.clientX; //or screenX?
		var y=evt.clientY;
		console.log("Mouse: "+x+"-"+y);
		zones.forEach(function(zone){
			if(x<zone.x+100 && x>zone.x-100)
				if(y<zone.y+100 && y>zone.y-100)
				{
					zone.zoomIt();
				}
		});
					
	});
	
	document.addEventListener("mouseout",function(evt){
		var x=evt.clientX; //or screenX?
		var y=evt.clientY;
		console.log("Mouse: "+x+"-"+y);
		zones.forEach(function(zone){
			if(x<zone.x+100 && x>zone.x-100)
				if(y<zone.y+100 && y>zone.y-100)
				{
					zone.zoomIt();
				}
		});
	});*/
});
function moveToZone(index)
{
	zoom.to({
		x: zones[index].x,
		y: zones[index].y,
		width: zones[index].width,
		height: zones[index].height
	});
	//DISPLAY TEXT
}
