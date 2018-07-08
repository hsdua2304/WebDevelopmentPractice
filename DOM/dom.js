// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links[0]);


// GETELEMENTSBYID
// console.log(document.getElementById('header-title'));

// GETELEMENTBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');

// Gives Error
// items.style.backgroundColor = 'red';
// Correct Way
// items[1].style.backgroundColor = 'red';

// Create Div
var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'divID';

newDiv.setAttribute('title','I am Div');

var newDivText = document.createTextNode('Hello I am Div and added by Javascipt.');

newDiv.appendChild(newDivText);
// console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);


// Events

// var button = document.getElementById('button');

// button.addEventListener('click',buttonClick);

function buttonClick(e){
  // console.log('Button Clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  // console.log(e);
  //
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);

  // console.log(e.type);

// Gives position of the mouse with respect to the body of the page
  // console.log(e.clientX);
  // console.log(e.clientY);
  //
  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove',runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(e.type);
  box.innerHTML = '<h3> X Position : ' + e.offsetX + '</h3>' +
                  '<h3> Y Position : ' + e.offsetY + '</h3>';
  box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+70+')';
}
