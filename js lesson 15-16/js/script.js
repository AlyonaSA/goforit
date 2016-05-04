function GoogleCallback(jqueryObj, data) {

	var resultObj = data.results;
	//console.log('data', resultObj);
	$('.js-result').find('li').remove();

	for (var i = 0; i < resultObj.length; i++) {
		console.log(resultObj[i]);
		var item = '<li class="item">' +
			'<a class="link" href="' + resultObj[i].url + '" target="_blank">' + resultObj[i].title + '</a>' +
			'<p class="content">' + resultObj[i].content + '</p>' +
			'</li>';

		$('.js-result').append(item);
	}
}

$(function() {
	function search() {
		var inputTxt = $('.js-input').val();

		$.ajax({
			// AJAX-specified URL
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + inputTxt + '&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			// Handle the success event
			success: function(data) {
				// console.log(data);
			}
		});
	}

	$('body').on('click', '.js-btn', function() {
		search();
	});
	$(document).keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
			search();
		}
	});
});

// second part
function Human() {
	this.name = 'Alyona',
	this.age = '19',
	this.sex = 'woman',
	this.height = 173,
	this.weight = 54
}

function Worker() {
	this.job = 'Grid Dynamics',
	this.salaty = 300000,
	this.working = function() {
		console.log('work');
	}
}

function Student() {
	this.education = 'KHIBS',
	this.grant = 600,
	this.watch = function() {
		console.log('watch');
	}
}

Worker.prototype = new Human();
Student.prototype = new Human();
Student.prototype = new Worker();

var newStudent = new Student('KNU', 787);
var newWorker = new Worker('SC', 40000);
var newHuman = new Human('Violetta', '20', 'woman', 165, 45)

console.log('newStudent', newStudent.education);
console.log('newWorker', newWorker.job);
console.log('newHuman', newHuman.name);