const btn = document.querySelector(".calculate");

btn.addEventListener("click", () => {
	
	//Get required elements
	var h;
	var d1 = document.querySelector("#d1");
	var d2 = document.querySelector("#d2");
	var h = document.querySelector("#hl");
	var hlRadios = document.getElementsByName("input-options");
	
	//output elements
	var r1Output = document.querySelector("#r1");
	var r2Output = document.querySelector("#r2");
	var angleOutput = document.querySelector("#angle");
	
	//Get all inputs
	d1 = d1.value;
	d2 = d2.value;
	h = h.value;

	//Calculating Output
	var r1;
	var r2;
	var fullCirc;
	var frustumCirc;
	const halfD1 = d1/2;
	const halfD2 = d2/2;
	const aSide = halfD2-halfD1;
	const aSide_squared = aSide * aSide;
	
	// Define h
	if (hlRadios[1].checked) {
		h = Math.sqrt((h * h) + aSide_squared);
		console.log(h)
	}
	
	//Calculate
	r2 = 2 * ((halfD2 / halfD1) * h );
	r1 = r2 - h;
	fullCirc = 2 * Math.PI * r2;
	frustumCirc = Math.PI * d2;
	angle = (frustumCirc / fullCirc) * 360;
	
	console.log(fullCirc)
	console.log(frustumCirc)
	
	//Outputs
	r1Output.innerHTML = r1;
	r2Output.innerHTML = r2;
	angleOutput.innerHTML = angle;
	
});


/*
Inputs
d1
d2
L/h

Outputs:
solve h = sqrt( (L^2) + ((d2/2)-(d1/2)) )
solve L = sqrt( (h^2) - ((d2/2)-(d1/2)) )
r1 = r2-h
r2 = ((d2/d1)*h)*2
angle = (frustumCirc/fullCirc)*360

vars
fullCirc = 2 * pi * (d2/2)
frustumCirc = pi * d2

*/