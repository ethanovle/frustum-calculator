//Button	
const btn = document.querySelector(".calculate");

//Functions
function nPowerOf(input, n) {
	var num = input;
	for (let i = 1; i < n; i++) {
		num *= input
	}
	return num;
}

//Event Handler
btn.addEventListener("click", () => {
	
	//Input Elements
	var h;
	var d1 = document.querySelector("#d1");
	var d2 = document.querySelector("#d2");
	var h = document.querySelector("#hl");
	var hlRadios = document.getElementsByName("input-options");
	
	//Output Elements
	var r1Output = document.querySelector("#r1");
	var r2Output = document.querySelector("#r2");
	var angleOutput = document.querySelector("#angle");

	//Get Inputs
	d1 = d1.value;
	d2 = d2.value;
	h = h.value;

	//Output Variables
	var r1;
	var r2;
	var fullCirc;
	var frustumCirc;
	const halfD1 = d1/2;
	const halfD2 = d2/2;
	const aSide = halfD2-halfD1;
	
	// Define h
	if (hlRadios[1].checked) {
		h = Math.sqrt((h * h) + nPowerOf(aSide, 2));
	}
	
	//Calculate
	r2 = 2 * ((halfD2 / halfD1) * h );
	r1 = r2 - h;
	fullCirc = 2 * Math.PI * r2;
	frustumCirc = Math.PI * d2;
	angle = (frustumCirc / fullCirc) * 360;
	
	//Outputs
	r1Output.innerHTML = r1;
	r2Output.innerHTML = r2;
	angleOutput.innerHTML = angle;
	
	//Input Visualization (Coming soon) 
	
	//Output Visualization (Coming Soon)
	
});
