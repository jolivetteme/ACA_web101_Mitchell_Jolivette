jQuery(document).ready(function(){
  $('#top-nav ul').toggle();
  $('nav#top-nav div.menu-control').on('click',function(){
    $('nav#top-nav ul').toggle();
  });
});
