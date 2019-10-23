function generate() {
	var result = ''
	var capital = document.getElementsByName('capital')[0].value
	var small = document.getElementsByName('small')[0].value
	var number = document.getElementsByName('number')[0].value
	var chars = document.getElementsByName('chars')[0].value
	var characters = capital + small + number + chars
	var charactersLength = characters.length;
	length = document.getElementsByName('length')[0].value
	
	if(length > 1000) {
	
		return;
		
	}

	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	document.getElementById('generatedPassword').setAttribute('style', "display:block;");
	
	document.getElementById('password').setAttribute('value', result);
}

function date() {
	var d = new Date();
	document.write(d.getFullYear())
}
