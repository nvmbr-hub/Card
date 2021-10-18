function topcolor(){
    let color = document.getElementById('color').value;
	let bg = document.querySelector("body");
	bg.style.setProperty('--sb-color', color);
 }
 function downcolor(){
    let color = document.getElementById('color_v2').value;
	let bg = document.querySelector("body");
	bg.style.setProperty('--sa-color', color);
 }
