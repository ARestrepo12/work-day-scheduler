
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

const task1 = document.getElementById('9')
const task2 = document.getElementById('10')
const task3 = document.getElementById('11')
const task4 = document.getElementById('12')
const task5 = document.getElementById('1')
const task6 = document.getElementById('2')
const task7 = document.getElementById('3')
const task8 = document.getElementById('4')
const task9 = document.getElementById('5')



// Date function
const displayDate = document.getElementById('currentDay')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
displayDate.innerHTML = today

//save to local storage
save1.addEventListener('click', function() {
    localStorage.setItem('task1description', `${task1.value}` )
  });

save2.addEventListener('click', function() {
    localStorage.setItem('task2description', `${task2.value}` )
  });

save3.addEventListener('click', function() {
    localStorage.setItem('task3description', `${task3.value}` )
  });

save4.addEventListener('click', function() {
    localStorage.setItem('task4description', `${task4.value}` )
  });

save5.addEventListener('click', function() {
    localStorage.setItem('task5description', `${task5.value}` )
  });

save6.addEventListener('click', function() {
    localStorage.setItem('task6description', `${task6.value}` )
  });

save7.addEventListener('click', function() {
    localStorage.setItem('task7description', `${task7.value}` )
  });

save8.addEventListener('click', function() {
    localStorage.setItem('task8description', `${task8.value}` )
  });

save9.addEventListener('click', function() {
    localStorage.setItem('task9description', `${task9.value}` )
  });


//appending local storage to page
var localtask1 = localStorage.getItem('task1description');
task1.append(localtask1);