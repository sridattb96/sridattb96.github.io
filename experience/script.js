
$( document ).ready(function() {
	$(".title").animate({opacity: 1}, 1000);
	$(".description").animate({opacity: 1}, 1000);
	$("#main-img").animate({opacity: 1}, 1000);

	populate()
});

function populate(){
	for (var i = 0; i < experiences.length; i++){

		var content = $('.content')

		var ele = $('<div class="exp-ele col-md-6"></div>')

		$('<img src="' + experiences[i]["image"] + '">').appendTo(ele)
		$('<div class="exp-title">' + experiences[i]["title"] + '</div>').appendTo(ele)
		$('<div class="exp-position">' + experiences[i]["position"] + '</div>').appendTo(ele)
		$('<div class="exp-duration">' + experiences[i]["duration"] + '</div>').appendTo(ele)
		$('<div class="exp-description">' + experiences[i]["description"] + '</div>').appendTo(ele)

		ele.appendTo(content)
	}
}



