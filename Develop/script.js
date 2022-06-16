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
if (localtask1 !== null) {
    task1.append(localtask1);
}

var localtask2 = localStorage.getItem('task2description');
if (localtask2 !== null) {
   task2.append(localtask2); 
}

var localtask3 = localStorage.getItem('task3description');
if (localtask3 !== null) {
    task3.append(localtask3);
}

var localtask4 = localStorage.getItem('task4description');
if (localtask4 !== null) {
    task4.append(localtask4);
}

var localtask5 = localStorage.getItem('task5description');
if (localtask5 !== null) {
    task5.append(localtask5);
}

var localtask6 = localStorage.getItem('task6description');
if (localtask6 !== null) {
  task6.append(localtask6);  
}

var localtask7 = localStorage.getItem('task7description');
if (localtask7 !== null) {
    task7.append(localtask7);
}

var localtask8 = localStorage.getItem('task8description');
if (localtask8 !== null) {
   task8.append(localtask8); 
}

var localtask9 = localStorage.getItem('task9description');
if (localtask9 !== null) {
    task9.append(localtask9);
}
