// Get form by id
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');
// var deleteBtn = document.querySelector('.delete');

form.addEventListener('submit',addItem);

// itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

// deleteBtn.addEventListener('click',removeItem);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var item = {name : newItem};

  if(localStorage.getItem('items') === null){
    items = [];

    items.push(item);

    localStorage.setItem('items',JSON.stringify(items));
  }else{
    var items = JSON.parse(localStorage.getItem('items'));

    items.push(item);

    localStorage.setItem('items',JSON.stringify(items));
  }

  // var li = document.createElement('li');
  // var deleteBtn = document.createElement('button');
  //
  // li.className = 'list-group-item';
  // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //
  //
  // li.appendChild(document.createTextNode(newItem))
  // deleteBtn.appendChild(document.createTextNode('X'));
  //
  // itemList.appendChild(li);
  // li.appendChild(deleteBtn);

  fetchItems();
// clear the form after adding the element
  document.getElementById('addForm').reset();
  document.getElementById('item').focus();
}

function removeItem(itemValue){

  var items = JSON.parse(localStorage.getItem('items'));
    for(var i = 0; i < items.length; i++){
      if(items[i].name === itemValue){
        items.splice(i,1);
      }
    }
    localStorage.setItem('items',JSON.stringify(items));
    fetchItems();
}

function filterItems(e){
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function(item){

    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
}

function fetchItems(){
  var items = JSON.parse(localStorage.getItem('items'));

  var itemResult = document.getElementById('items');

  itemResult.innerHTML = '';
  for(var i = 0; i < items.length; i++){
    var itemValue = items[i].name;
    itemResult.innerHTML += '<li class="list-group-item">'+ itemValue +
                            '<a onclick = "removeItem(\'' + itemValue + '\')" class="btn btn-danger btn-sm float-right delete">X</a></li>';
  }
}
