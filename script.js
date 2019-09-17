function generate() {
	capital = document.getElementsByName('capital')[0].value
	small = document.getElementsByName('small')[0].value
	number = document.getElementsByName('number')[0].value
	chars = document.getElementsByName('chars')[0].value
	all = capital + small + number + chars
	alert(all)
}

function date() {
	var d = new Date();
	document.write(d.getFullYear())
}