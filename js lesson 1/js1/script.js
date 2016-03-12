var num = prompt('Введите число');
var stepen = prompt('Введите степень');

function pow(num, stepen){
var result = 1;
for (var i = 0; i < stepen; i++) {
	result = result * num;
};
return result;
}
if (stepen < 0) {
	console.log('Степень не может быть меньше нуля');
} else {
	console.log(pow(num, stepen));
}
