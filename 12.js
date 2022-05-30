window.onload = init;

function init() {
	let images = document.getElementsByTagName('img');
	for (let i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reBlur;
	}
}

function showAnswer(eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = name + '.jpg';
	image.src = name;
}

function reBlur(eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = name + 'blur.jpg';
	image.src = name;
}
