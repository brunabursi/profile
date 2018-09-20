/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Slowly Scroll

jQuery(document).ready(function($) { 
  $(".scroll").click(function(event){        
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
 });
});

// $(document).ready(function() {
//   let menu = document.querySelector('#menu')

//   var nav = $('#menu');
  
//   $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//     menu.style.position = 'fixed';
//     } else {
//       menu.style.position = 'inherit';
//   }
//   });
//   });



// document.onscroll = function(){
//   let menu = document.querySelector('#menu');
//   var top = window.pageYOffset || document.documentElement.scrollTop
//   if( top > 300) {

//   } else{   
//   }
// }
