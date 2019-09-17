function generate() {
	var result = ''
	capital = document.getElementsByName('capital')[0].value
	small = document.getElementsByName('small')[0].value
	number = document.getElementsByName('number')[0].value
	chars = document.getElementsByName('chars')[0].value
	characters = capital + small + number + chars
	var charactersLength = characters.length;
	length = document.getElementsByName('length')[0].value

	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	document.getElementById('generatedPassword').setAttribute('style', "display:block;")
	document.getElementById('password').setAttribute('value', result);
}

function date() {
	var d = new Date();
	document.write(d.getFullYear())
}

