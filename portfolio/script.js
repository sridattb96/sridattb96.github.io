$( document ).ready(function() {
	$(".title").animate({opacity: 1}, 1000);
	$(".description").animate({opacity: 1}, 1000);
	$("#main-img").animate({opacity: 1}, 1000);

	populate()
});

function populate(){
	for (var i = 0; i < projects.length; i++){

		var content = $('.content')
		var ele = $('<div class="proj-ele"></div>')

		var info = $('<div class="proj-info"></div>')
		$('<div class="proj-title">' + projects[i]["title"] + '</div>').appendTo(info)
		$('<div class="proj-caption">' + projects[i]["platform"] + ' / ' + projects[i]["date"] + '</div>').appendTo(info)
		$('<div class="proj-description">' + projects[i]["description"] + '</div>').appendTo(info)

		var tools = $('<ul class="tools"></ul>')
		var toolarr = projects[i]["tools"].split(",")
		for (var j = 0; j < toolarr.length; j++){
			$('<li>' + toolarr[j].trim() + '</li>').appendTo(tools)
		}
		tools.appendTo(info)

		var img = $('<div class="proj-img"></div>')
		// $('<img src="' + projects[i]["image"] + '">').appendTo(img)
		$('<img src="./img/cropped-coming-soon.png">').appendTo(img)

		if (i % 2 === 0){ 
			info.addClass("float-left")
			img.addClass("float-right")
		} else {  
			info.addClass("float-right")
			img.addClass("float-left")
		}

		info.appendTo(ele)
		img.appendTo(ele)
		ele.appendTo(content)
	}
}



