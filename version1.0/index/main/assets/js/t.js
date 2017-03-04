function openWindow(obj){
	document.getElementById('white_content_img').src=obj.src;
	document.getElementById('white_content').style.display='block';
	document.getElementById('black_overlay').style.display='block';
}
function closeWindow(){
	var es = document.getElementById('white_content').style.display='none';
	document.getElementById('black_overlay').style.display='none';
}
