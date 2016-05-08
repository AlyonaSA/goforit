$(function() {
   'use strict;'

   var data = {
      pageTitle: 'Тест по программированию',

      questions: [{
         questionName: "Вопрос 1",
         variant: [{
            answer: 'Вариант ответа №1',
            status: true
         }, {
            answer: 'Вариант ответа №2',
            status: false
         }, {
            answer: 'Вариант ответа №3',
            status: false
         }],
         inputName: ['11', '12', '13']
      }, {
         questionName: 'Вопрос 2',
         variant: [{
            answer: 'Вариант ответа №1',
            status: false
         }, {
            answer: 'Вариант ответа №2',
            status: true
         }, {
            answer: 'Вариант ответа №3',
            status: false
         }],
         inputName: ['21', '22', '23']
      }, {
         questionName: "Вопрос 3",

         variant: [{
            answer: 'Вариант ответа №1',
            status: false
         }, {
            answer: 'Вариант ответа №2',
            status: false
         }, {
            answer: 'Вариант ответа №3',
            status: true
         }],
         inputName: ['31', '32', '33']
      }],
      result: "Проверить мои результаты"
   };
   localStorage.setItem('data', JSON.stringify(data));
   var page = localStorage.getItem('data');
   var myData = JSON.parse(page);
 

   var html = $('#test').html();
   var $body = $('body');

   var content = tmpl(html, {
      data: myData
   });

   $body.append(content);

   var $cover;
   var $modal = $('.js-modal');
   var $close = $('.js-close');
   var $result = $('.js-result');

   function showModal(e) {
      e.preventDefault();
      $close.one('click', hideModal);

      $cover = $('<div class="cover"></div>');
      $body.append($cover);
      $modal.addClass('show');

      $('.block').each(function() {
         var $that = $(this);
         $that.find('input[type="checkbox"]');
      });

      var statusAnswers = [];
      for (var i = 0; i < myData.questions.length; i++) {
         for (var j = 0; j < myData.questions[i].variant.length; j++) {
            var currentAnswer = myData.questions[i].variant[j].status;
            statusAnswers.push(currentAnswer);
         }
      }

      var givenAnswers = [];
      $('input[type="checkbox"]').each(function() {
         if ($(this).prop('checked')) {
            givenAnswers.push(true);
         } else {
            givenAnswers.push(false);
         }
      });

      var result = JSON.stringify(givenAnswers) === JSON.stringify(statusAnswers);
      if (result) {
         $result.text('Результат: Отлично! Молодец.')
      } else {
         $result.text('Результат: Плохо! Попробуй еще.');
      }

      $('input[type="checkbox"]').each(function() {
         $(this).removeAttr("checked");
      });

   };

   function hideModal() {
      $cover.remove();
      $modal.removeClass('show')
   }

   $('.js-submit').on('click', showModal);
});






