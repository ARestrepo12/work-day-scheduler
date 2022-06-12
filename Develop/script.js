console.log ('hello world');

// Date function
const displayDate = document.getElementById('currentDay')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
displayDate.innerHTML = today