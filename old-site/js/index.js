var pos=0;
var articles;
function changePage(position)
{
	var transfomer;
	articles=document.getElementById("articles");
	switch(position)
	{
		case 0:
			transformer="";
		break;
		case 1:
			transformer="rotateY(-90deg)";
		break;
		case 2:
			transformer="rotateY(-90deg) rotateZ(90deg)";
		break;
		case 3:
			transformer="rotateY(180deg) rotateZ(90deg)";
		break;
		case 4:
			transformer="rotateY(90deg) rotateX(90deg)";
		break;
		case 5:
			transformer="rotateX(90deg)";
		break;
	}
	if(articles.style.transform!=undefined)
		articles.style.transform=transformer;
	else if(articles.style.webkitTransform!=undefined)
		articles.style.webkitTransform=transformer;
	else if(articles.style.mozTransform!=undefined)
		articles.style.mozTransform=transformer;
}

window.addEventListener("load",function(){
	articles=document.getElementById("articles");
	document.getElementById("about").addEventListener("click",function(e){
		e.preventDefault();
		changePage(0);
	});
	document.getElementById("projects").addEventListener("click",function(e){
		e.preventDefault();
		changePage(1);
	});
	articles.addEventListener("click",function(e){
		pos++;
		if(pos==6)
			pos=0;
		changePage(pos);
	});
});
