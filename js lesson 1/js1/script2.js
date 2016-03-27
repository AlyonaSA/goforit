var arr = [];

for (var i = 0; i < 5; i++) {
	var names = prompt('Введите имя');
	arr[i] = names;
	console.log('Имя:', arr);
};

var user = prompt('Введите имя пользователя');

function find(arr) {
	for (var j = 0; j < arr.length; j++) {
     if ( arr[j] == user ) 
     return true;
  }

  	return false;
}
console.log(find(arr));
	if( find(arr) == true ) {
		alert('Вы успешно вошли, ' + user);
	} else {
		alert('Ошибка');
	}
	


