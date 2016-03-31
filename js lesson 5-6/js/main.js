var init = 0;
var toObjHours, toObjMinutes, toObjSeconds;
var time = [0, 0, 0, 0];
var dateTimeObj = new Date();
var totalTime = 0; // общее вермя
var miliseconds = 0;
	seconds = 0,
	minutes = 0,
	hours = 0;
	stepAllSeconds = 0;

var milisecondsDOM = document.querySelector('.js-miliseconds');
var secondsDOM = document.querySelector('.js-seconds');
var minutesDOM = document.querySelector('.js-minutes');
var hoursDOM = document.querySelector('.js-hours');

var btnStart = document.querySelector('.js-start');
var btnSplit = document.querySelector('.js-split');
var btnReset = document.querySelector('.js-reset');

var lastTime = 0;
var start = false;


function startTimer() {
	if(init == 0) {
		//console.log(totalTime);
		start = true;
		var nowTimeObj = new Date();
		totalTime = nowTimeObj.getTime()-dateTimeObj.getTime() + lastTime; //пересчитывает время учитывая нажатия паузы
		var allTime = totalTime - (stepAllSeconds*1000);  //отнимает кол-во милисекунд (олтайм єто кол-во милисекунд)

		if(allTime > 999) {
			seconds++;
			stepAllSeconds++;
		}
		if(seconds > 59) {
			minutes++;
			seconds = 0;
		}
		if(minutes > 59) {
			hours++;
			minutes = 0;
		}	

		if(allTime <= 9) {
			miliseconds = '00' + String(allTime).substr(0,1);//стринг чтобі не прыгали цифры
		}
		else if(allTime <= 99) {
			miliseconds = '0' + String(allTime).substr(0,2); //подстрока(начальній индекс, сколько єлементов нужно взять), сабстр собирает строку
		}
		else {
			miliseconds = String(allTime).substr(0,3);
		}

		if(seconds <=9) {toObjSeconds = '0' + seconds;}
		else {toObjSeconds = seconds;}

		if(minutes <=9) {toObjMinutes = '0' + minutes;}
		else {toObjMinutes = minutes;}

		if(hours <=9) {toObjHours = '0' + hours;}
		else {toObjHours = hours;}


		time = [toObjHours, toObjMinutes, toObjSeconds, miliseconds];

		milisecondsDOM.innerHTML = time[3];
		secondsDOM.innerHTML = time[2];
		minutesDOM.innerHTML = time[1];
		hoursDOM.innerHTML = time[0];
	}

	//console.log(totalTime);
	setTimeout(function(){startTimer()},1);
}

function pauseTimer() {
	if(start) {
	if (init == 0) {
		init = 1; 
		btnStart.addEventListener('click', startTimer);
		btnStart.innerHTML = 'Cont..';
	}
	else {
		init = 0;
		lastTime = totalTime;
		dateTimeObj = new Date();
		btnStart.addEventListener('click', startTimer);
		btnStart.innerHTML = 'Pause';
	}
	//console.log(totalTime);
	}
	else {
		startTimer();
	btnStart.addEventListener('click', startTimer);
		btnStart.innerHTML = 'Pause';
	}
		
}
		
	

function splitTimer() {
	if (hours == 0 && minutes == 0 && seconds == 0 && miliseconds == 0) {} 
		else {
		console.log(time);
		var splitPoint = document.createElement('p');
		splitPoint.innerHTML = time[0] +':'+ time[1] +':'+ time[2] +':'+ time[3];
		document.querySelector('.split').appendChild(splitPoint);
	}
}

function clearTimer() {
	init = 1;
	totalTime = 0;
	miliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	stepAllSeconds = 0;
	time = ['00','00','00','000'];
	milisecondsDOM.innerHTML = time[3];
	secondsDOM.innerHTML = time[2];
	minutesDOM.innerHTML = time[1];
	hoursDOM.innerHTML = time[0];
	var myNode = document.querySelector('.split'); //удаляется сплит (все промоежутки которіе мі остановили)
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
	btnStart.addEventListener('click', startTimer);
		btnStart.innerHTML = 'Start';
	
}

btnStart.addEventListener('click', pauseTimer);
btnReset.addEventListener('click', clearTimer);
btnSplit.addEventListener('click', splitTimer);
