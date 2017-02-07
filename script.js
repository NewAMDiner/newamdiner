window.onload = function() {
var posts = tumblr_api_read.posts;
var postlen = tumblr_api_read.posts.length;
var	container = document.getElementById('tumblrdump');
var	photocontainer = document.getElementById('photodump');
var menudate = document.getElementById('menu');
var lookforphoto = true;


for(i in posts){

	if (posts[i].type == "regular"){
		var date = posts[i].date.split(" ");
		container.innerHTML = "<h1> Menu </h1> <p> Last updated: " + date[2] + ", " + date[1] + " " + date[3] + "</p>" +
		posts[i]['regular-body'];
	}
	else if (posts[i].type == "photo" && lookforphoto == true){
		console.log(posts[i]);
		lookforphoto = false;
		if (posts[i].photos.length >= 1)
		photocontainer.innerHTML += '<a href="http://newamericadiner.tumblr.com/tagged/newam"><img src="' + posts[i].photos[0]['photo-url-400'] + '"></a>';
		else if (posts[i].photos.length == 0)
		photocontainer.innerHTML += '<a href="http://newamericadiner.tumblr.com/tagged/newam"><img src="' + posts[i]['photo-url-400'] + '"></a>';

	}
}
}
