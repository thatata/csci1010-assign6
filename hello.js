/*
Listens to drop down list selection and updates the text and icon 
based on the corresponding JSON file. If the JSON file does not 
exist, instead set it to the Hello World default.
*/
window.addEventListener("load", function(e) {
	document.querySelector('#selectList').addEventListener("change", function(evt) {
	  // The drop down list
	  var selectList = document.querySelector("#selectList");
	  // The selected ID
	  var selectListValue = selectList.options[selectList.selectedIndex].value;
	  // Finds the ID variable in the .json files
	  var variable = window[selectListValue];
	  // If the .json file exists and is correct, it will update the text and the icon
	  // If not, it will default to the hello world text and icon
	  if( variable ) {
		  var data = JSON.parse(variable);
		  document.querySelector('#text').textContent = "Hello " +data[0].name+ "!";
		  document.querySelector('#icon').src= data[0].icon;
	  }else{
	  	 document.querySelector('#text').textContent = "Hello World!";
	  	 document.querySelector('#icon').src= "resources/hello_world.png";
	  }
	});
});
