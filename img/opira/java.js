function show(id_img){
	var id = String(id_img);
	var img_base = document.getElementById(id);
	var light = document.getElementById("lightbox");
	var img = new Image();
	img.onload = function(){
	  light.removeChild(light.lastChild);
	  light.appendChild(img);
	};
	img.src = img_base.src;
	abrirBox();

}
function abrirBox(){
	document.getElementById("overlay").style.display = "block";
}
function fecharBox(){
	document.getElementById("overlay").style.display = "none";
}

