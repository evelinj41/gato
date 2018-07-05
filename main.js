var fabricaDeGatos = function(patas, colorPelaje){
	this.patas = patas;
	this.colorPelaje = colorPelaje;

	this.hablar= function(){
		alert('miauuu miauuu');
	}
}

//felix el gato
var felix = new fabricaDeGatos (2, "#000");
felix.hablar = function(){
alert('soy felix');
}
felix.hablar();


var garfield = new fabricaDeGatos(4, "#f37c22");
felix.hablar = function(){
	alert('quiero lasagna');
} 
 garfield.hablar();

