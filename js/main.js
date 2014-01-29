require(['$api/models'], function(models){
	var hist = [];
	var i=0;
	var ww, wh, imgh;
	if (document.readyState === "complete") {
		init;
	}
	else {
		window.addEventListener("load", init, false);
	}
	function init(){
		resize();
		player = models.player;
		player.addEventListener('change', change);
	}
	function change(){
		track = player.track;
		if(track.playable & hist[hist.length-1]!=track){
			hist.push(track);
			$("#main").prepend("<div id='t"+i+"' class='art'><a class='img' id='"+i+"' href='"+track.album.uri+"'><img src='"+track.imageForSize(imgh)+"'><div id='i"+i+"' class='info'>"+track.name+"<br/>"+track.artists[0].name+"</div></a></div>");
			$("#i"+i).hide();
			$("a").hover(function(){
				console.log("enter"+i);
				$(this).children(".info").show();
			}, function(){
				console.log("leave"+i);
				$(this).children(".info").hide();
			});
			i++;
		}
	}
	function resize() {
		ww = window.innerWidth;
		wh = window.innerHeight;
		imgh = 300;
	}
});