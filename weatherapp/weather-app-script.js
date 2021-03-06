var zipCode;
var startDate,endDate,currentDate;

var currDayTemp;
var currTempArray = [];

var weatherURL;
var weatherXmlHttp = new XMLHttpRequest();

var tempScript = null;

var totalTemp = 0;
var totalDays = 0;

var avgTemp;


//Callback function for JSONP request to WeatherSource.com API
function readWeather(weatherData) {
	
	if(tempScript){
		document.getElementsByTagName('head')[0].removeChild(tempScript);
		tempScript = null;
	}

	var tempObj = weatherData[0];

	currDayTemp = parseInt(tempObj.tempAvg);
		
	totalTemp += currDayTemp;
	totalDays++;
	
	avgTemp = parseInt(totalTemp/totalDays);
	
	document.getElementById("avg-temp-output").innerHTML = avgTemp + "&deg;";
}



function dispTemp() {
	
	zipCode = document.getElementById("zipCode").value;
	
	startDate = new Date(document.getElementById("dateOne").value);
	endDate = new Date(document.getElementById("dateTwo").value);
	
	currentDate = startDate;
	
		
	while(currentDate.getDate() <= endDate.getDate()){
		currDateStr = currentDate.toDateString();
		
		weatherURL = "https://api.weathersource.com/v1/6bde010b79d7f87f0397/history_by_postal_code.json?_callback=readWeather&period=day&postal_code_eq="+zipCode+"&country_eq=US&timestamp_eq="+currDateStr+"T12:00+00:00&fields=tempAvg";
		
		tempScript = document.createElement("script");
		tempScript.src = weatherURL;
		
		document.getElementsByTagName('head')[0].appendChild(tempScript);
		
		currentDate.setDate(currentDate.getDate() + 1);
	}
	
	document.getElementById("city-zip").innerHTML = zipCode;
	
	zipCode = null;
	avgTemp = 0;
	totalDays = 0;
	totalTemp = 0;
	currDayTemp = 0;
	startDate = null;
	endDate = null;
	currentDate = null;
}