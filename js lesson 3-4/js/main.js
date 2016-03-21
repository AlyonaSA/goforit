var data = {
	'pageTitle': 'Тест по программированию',
	'questions': [{
		'questionName': '1. Вопрос №1',
		'questionList': [{
			'title': 'Вариант ответа №1'
		},
		{
			'title': 'Вариант ответа №2'
		},
		{
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'questionName': '2. Вопрос №2',
		'questionList': [{
			'title': 'Вариант ответа №1'
		},
		{
			'title': 'Вариант ответа №2'
		},
		{
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'questionName': '3. Вопрос №3',
		'questionList': [{
			'title': 'Вариант ответа №1'
		},
		{
			'title': 'Вариант ответа №2'
		},
		{
			'title': 'Вариант ответа №3'
		}]
	}],
	'buttonName': 'Проверить мои результаты',
}
	var page = {
	buildPage: function(){
		var wrapper = document.createElement('form');
		wrapper.className ='wrapper';
		document.body.appendChild(wrapper);

		var titlePage = document.createElement('h2');
		titlePage.innerHTML = data.pageTitle;
		wrapper.appendChild(titlePage);
	},
	buildList: function() {
		for(var i = 0; i < data.questions.length; i++) {
			var questionBox = document.createElement('div');
			questionBox.className = 'questionBox';
			document.querySelector('.wrapper').appendChild(questionBox);

			var titleQuestion = document.createElement('h3');
			titleQuestion.innerHTML = data.questions[i].questionName;
			questionBox.appendChild(titleQuestion);

			var listWrap = document.createElement('ul');
			questionBox.appendChild(listWrap);

			for(var j = 0; j < data.questions[i].questionList.length; j++) {
				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);

				var label = document.createElement('label');
				listItem.appendChild(label);

				var input = document.createElement('input');
				input.setAttribute('type', 'checkbox');
				input.setAttribute('title', data.questions[i].questionList[j].title);
				label.appendChild(input);

				var p = document.createElement('span');
				label.appendChild(p);

				p.innerHTML = data.questions[i].questionList[j].title;
			}
		}
	},
	buildButton: function() {
		var questionBox = document.querySelector('.wrapper');
		var button = document.createElement('input');
		button.setAttribute('type', 'submit');
		button.value = data.buttonName;
		questionBox.appendChild(button);
	},
	pageInit: function() {
		this.buildPage();
		this.buildList();
		this.buildButton();
	}
}

page.pageInit();

console.log(data);