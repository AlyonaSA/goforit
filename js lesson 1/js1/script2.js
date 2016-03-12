var arr = [];

for (var i = 0; i < 5; i++) {
	var names = prompt('Введите имя');
	arr[i] = names;
	console.log('Имя:', arr);
};

var user = prompt('Введите имя пользователя');

function find(arr) {
	for (i = 0; i < arr.length; i++) {
     if ( arr[i] == user ) 
     return true;
  }

  	return false;
}
	if( find(arr) == true ) {
		alert('Вы успешно вошли, ' + user);
	} else {
		alert('Ошибка');
	}
	


