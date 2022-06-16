
var tasks = {};
const save1 =document.getElementById('save1')
const save2 =document.getElementById('save2')
const save3 =document.getElementById('save3')
const save4 =document.getElementById('save4')
const save5 =document.getElementById('save5')
const save6 =document.getElementById('save6')
const save7 =document.getElementById('save7')
const save8 =document.getElementById('save8')
const save9 =document.getElementById('save9')
const message = document.getElementById('9')



// const message = save1, save2, save3, save4, save5, save6, save7, save8, save9

// Date function
const displayDate = document.getElementById('currentDay')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
displayDate.innerHTML = today

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
// };

// window.localStorage.setItem("tasks","message.value")


// save button 
// document.querySelectorAll('.save').forEach(item => {
//     item.addEventListener('click', test)
//   })

// function test () {
//     console.log(message.value)
// }

save1.addEventListener('click', function() {
    localStorage.setItem('task1desc', `${message.value}` )
  });
