
var tasks = {};


// Date function
const displayDate = document.getElementById('currentDay')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
displayDate.innerHTML = today

var saveTask = function () {
    localStorage.setItem("textarea", JSON.stringify);
};





document.querySelectorAll('save').forEach(item => {
    item.addEventListener('click', test)
  })

function test () {
    console.log("clicked")
}
