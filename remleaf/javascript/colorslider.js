var rslider = document.getElementById("rRange");
var routput = document.getElementById("routvalue");
var gslider = document.getElementById("gRange");
var bslider = document.getElementById("bRange");
var rcolor=0,gcolor=0,bcolor=0;
goutput.innerHTML = gslider.value;
}
boutput.innerHTML = bslider.value;
bslider.oninput = function(){
	boutput.innerHTML = this.value;
	bcolor = this.value;
	document.getElementById("heading").style.color = "rgb("+rcolor.toString()+","+gcolor.toString()+","+bcolor.toString()+")";
}

//---------------do-not-edit-down-below--------------------------------------------------
slider.oninput = function() {
}
//function mouseUp(){document.getElementById("myRange").value=50; document.getElementById("outvalue").innerHTML = document.getElementById("myRange").value;};
*/