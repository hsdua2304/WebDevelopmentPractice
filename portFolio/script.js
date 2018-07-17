var scroller = null;
var marginY = 0;
var destination = null;
var speed = 13;

function initScroll(elementID){
  destination = document.getElementById(elementID).offsetTop;
  // marginY = marginY + speed;
  scroller = setTimeout(function(){
    initScroll(elementID);
    },1);
  if(marginY < destination){
    marginY = marginY + speed;
    if (marginY >= destination) {
      clearTimeout(scroller);
    }
  }else{
    marginY = marginY-speed;
    if(marginY <= destination){
      clearTimeout(scroller);
    }
  }
  window.scroll(0, marginY);
 }

if(screen.width >= 600){
    var sidenav = document.getElementById('sidenav')
    sidenav.addEventListener("mouseover", openNav);
    sidenav.addEventListener("mouseout",closeNav);

    function openNav(){
      var sidenav = document.getElementById('sidenav');
      sidenav.style.width =  '275px';
      sidenav.style.boxShadow = '5px 5px 20px #1f1f1f';
      document.getElementById('logo').innerHTML ='Harmandeep Singh';
      document.getElementById('about').innerHTML =' About';
      document.getElementById('education').innerHTML ='Education';
      document.getElementById('work').innerHTML ='Work Experience';
      document.getElementById('skills').innerHTML ='Skills';
      document.getElementById('contact').innerHTML ='Contact';
  }
    function closeNav(){
    var sidenav = document.getElementById('sidenav');
    sidenav.style.width =  '90px';
    sidenav.style.boxShadow = '0px 0px 0px white';
    document.getElementById('logo').innerHTML ='';
    document.getElementById('about').innerHTML ='';
    document.getElementById('education').innerHTML ='';
    document.getElementById('work').innerHTML ='';
    document.getElementById('skills').innerHTML ='';
    document.getElementById('contact').innerHTML ='';
  }
}
