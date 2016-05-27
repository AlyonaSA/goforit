{
    'use strict';
        var data = {
            pageTitle: 'Тест',

            categories: [{
               questionName: "Вопрос 1",
         variant: [{
            answer: 'Вариант ответа №1',
            rigth: true
         }, {
            answer: 'Вариант ответа №2',
            rigth: false
         }, {
            answer: 'Вариант ответа №3',
            rigth: false
         }],
                inputName: ['11', '12', '13']
            }, {
                questionName: "Вопрос 2",
         variant: [{
            answer: 'Вариант ответа №1',
            rigth: true
         }, {
            answer: 'Вариант ответа №2',
            rigth: false
         }, {
            answer: 'Вариант ответа №3',
            rigth: false
         }],
                inputName: ['21', '22', '23']
            }, {
                questionName: "Вопрос 3",
         variant: [{
            answer: 'Вариант ответа №1',
            rigth: true
         }, {
            answer: 'Вариант ответа №2',
            rigth: false
         }, {
            answer: 'Вариант ответа №3',
            rigth: false
         }],
                inputName: ['31', '32', '33']
            }],
            result: "Проверить мои результаты"
        };

        localStorage.setItem('data', JSON.stringify(data));
        var page = localStorage.getItem('data');
        var myData = JSON.parse(page);

        var tmpl = _.template(document.getElementById('list-template').innerHTML);

        var result = tmpl({
            data: data
        });
        document.write(result);



        var overlay;
        var modal = document.querySelector('.js-modal');
        var close = modal.querySelector('.js-close');
        var resultOutput = modal.querySelector('.js-result');
        var verifyBtn = document.querySelector('.js-verify');
        var block = document.querySelectorAll('.block');
        var allInput = [];
        var rightAnswers = [];
        var givenAnswers = [];
        var resultVerify;

        verifyBtn.addEventListener('click', showModal)

        function findAllInput(){
            for (let k = 0; k < block.length; k++) {
                for (let i = 0; i < block[k].querySelectorAll('input[type="checkbox"]').length; i++) {
                    allInput.push(block[k].querySelectorAll('input[type="checkbox"]')[i]);
                };
            };
        };

        function userAnswer(){
            for (let i = 0; i < myData.categories.length; i++) {
                for (let j = 0; j < myData.categories[i].variant.length; j++) {
                    var currentAnswer = myData.categories[i].variant[j].rigth;
                    rightAnswers.push(currentAnswer);
                };
            };
        };

        function AnswerPush(){
            for (let i = 0; i < allInput.length; i++) {
                if (allInput[i].checked) {
                    givenAnswers.push(true);
                } else {
                    givenAnswers.push(false);
                };
                allInput[i].checked = false
            };
        };

        function verifyFunc(){
            resultVerify = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
        };

        function Display(){
            if (resultVerify) {
                resultOutput.innerHTML = 'Результат: Отлично! Молодец.'
            } else {
                resultOutput.innerHTML = 'Результат: Плохо! Попробуй еще.';
            };
        };

        function hideModal() {
            overlay.remove();
            modal.classList.remove('show');
        };

        function cleanArrs(){
            allInput = [];
            rightAnswers = [];
            givenAnswers = [];
        };

        function showModal(event) {
            event.preventDefault();
            close.addEventListener('click', hideModal)
            overlay = document.createElement('div');
            overlay.className = "overlay";
            document.body.appendChild(overlay);
            modal.classList.add("show");
            
            cleanArrs();

            findAllInput();
            userAnswer();
            AnswerPush();
            verifyFunc();
            Display();
        };
}
