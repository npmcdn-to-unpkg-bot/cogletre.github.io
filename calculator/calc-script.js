var finEquation = "0";
var finVal;


$( document ).ready( function() {
	
	document.getElementById("display-box").innerHTML = finEquation;
});

function numClick( input ) {
	
	finEquation = finEquation + input.toString();
	
	document.getElementById("display-box").innerHTML = finEquation;
};

function clearEquation() {
	
	finEquation = "0";
	
	document.getElementById("display-box").innerHTML = finEquation;
};

function equationEquals() {
	finVal = eval( finEquation );
	
	document.getElementById("display-box").innerHTML = finVal;
	
	finEquation = "0";
};