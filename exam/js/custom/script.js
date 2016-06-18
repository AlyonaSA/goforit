function imgBg(block, img) {
	var srcImg = $(img).attr('src');
	$(block).css({'background-image': 'url('+srcImg+')'});
}

var $grid = $('.grid');
function isotopInit() {
	$grid.isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
}

function ajaxRequest(search) {
	$.ajax({
		url: 'https://pixabay.com/api/?key=2759134-506c7acc2acce58e7989ad63e&q='+search+'&image_type=photo&per_page=7',

	  // url: 'http://api.pixplorer.co.uk/image?word='+search+'&amount=5&size=tb',
	  success: function(data) {
	  	console.log(data);
	    for (var i = 0; i < data.hits.length; i++) {
	    	var listItem = '<div class="grid-item">'+
                '<img src="'+data.hits[i].userImageURL+'">'+
                    '<div class="grid-name"><span>'+data.hits[i].tags+'</span></div>'+
            '</div>';
	    	//console.log(data.images[i]);
	    	$('.js-grid').append(listItem);
	    }
    	isotopInit();
	  }
	});
}

(function($){
	$(function(){

		imgBg('.js-headerBg', '.js-headerImg');

		$('.fade').slick({
		dots: false,
		// arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});
		
		ajaxRequest('yellow+snow');

		$('body').on('click', '.search__button', function(e){
			e.preventDefault();
			$grid.isotope('destroy');
			var valueSearch = $('.search__input').val().replace(" ","+");
			$('.grid').find('.grid-item').remove();
			ajaxRequest(valueSearch);
		});
	});
})(jQuery);



// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 300
// });



// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 300
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });

// $(window).load(function() {

//     // $('.grid').masonry({
//     //   // options
//     //   itemSelector: '.grid-item',
//     //   columnWidth: 300
//     //   gutter: 10
//     // });

//     // init Masonry
//     var $grid = $('.grid').masonry({
//       // options
//       itemSelector: '.grid-item',
//       columnWidth: '.grid-sizer',
//       percentPosition: true,
//       gutter: 20
//     });

//     // layout Masonry after each image loads
//     $grid.imagesLoaded().progress( function() {
//       $grid.masonry('layout');
//     });

//     $('.fade img').imagefill();
//     $('.grid-item').imagefill();

// });

// $(function() {

//     var baseURL = 'https://pixabay.com/api/';
//     var APIKey = '2661500-a86fdddd1f5dc433c40ef8f43';

//     var $searchInput = $('.search__input');
//     var $resultBlock = $('.result-block');

//     $('.search__form').on('submit', function(e) {
//         e.preventDefault();


//         var query = $searchInput.val();

//         $.ajax({
//             url: baseURL,
//             type: 'GET',
//             dataType: 'jsonp',
//             data: {
//                 key: APIKey,
//                 q: query,
//                 per_page: 7
//             }
//         })
//         .done(function(data) {
//             showResults(data);
//         });
        
//     })


// });

// function showResults(results) {
  
//   var images = results.hits;

//   if (images.length === 0) {
//     $('.search__message').text('No Image found');
//     return;
//   }
  
//   $('.grid-item')
//   .fadeOut('400')
//   .each(function(index, el) {

//     var title = images[index].tags;
//     var imageSrc = images[index].webformatURL
    
//     $(this).find('span').text(title);

//     $(this).find('.ideas__img').attr('src', imageSrc)
//       // when image loaded
//     .load(function() {
//       $('.grid-item').imagefill()
//         // some animation
//       .fadeIn();
//     });
//   });
// };  


