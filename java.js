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





var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides      = document.getElementsByClassName("mySlides");
	var dots        = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");

	if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
	
  for (i = 0; i < slides.length; i++) {
  	slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}
