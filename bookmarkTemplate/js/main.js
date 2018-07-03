document.getElementById('myform').addEventListener('submit',saveBookmark);

function saveBookmark(e){

  //variable to get sitename and url from the webpage
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName,siteUrl)){
    return false;
  }

  //create a JSON Object to store values
  var bookmark = {
    name : siteName,
    url : siteUrl
  };

  // check if bookmarks is present in local Storage
  if(localStorage.getItem('bookmarks') === null){
    //initialise array
    bookmarks = [];
    //add element to array
    bookmarks.push(bookmark);
    //add element to local storage after converting JSON to String
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }else{
    //get bookmarks from localStorage after paring string to JSON
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //push new object to array
    bookmarks.push(bookmark);
    //re-set the JSON to String and update the local storage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    document.getElementById('myform').reset();

    fetchBookmarks();

    e.preventDefault();
  }
}


  function deleteBookmark(url){
    //fetch bookmarks for the local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //find the bookmarks from local storage
    for(var i = 0; i < bookmarks.length; i++){
      if(bookmarks[i].url == url){
        bookmarks.splice(i,1);
      }
    }
    //save the updated bookmarks in the string format
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    //Re-fetch bookmarks
    fetchBookmarks();
  }

  function fetchBookmarks(){
    //fetching bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //fetch bookmarkResult from document
    var bookmarksResult = document.getElementById('bookmarksResult');

    bookmarksResult.innerHTML = '';
    for(var i =0; i<bookmarks.length;i++){
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;

      bookmarksResult.innerHTML +=   '<div class="card">' +
                                      '<div class="card-body">'+
                                        '<h5 class="card-title">'+name+'</h5>'+
                                        '<a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a>' +
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +
                                      '</div>'+
                                    '</div>';
    }
  }

  function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
      alert('Please fill in the form.');
      return false;0
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
      alert('Please enter valid URL.');
      return false;
    }
    return true;
  }


  // localStorage.setItem('test','Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));
  //
  //
  //
  // e.preventDefault();
