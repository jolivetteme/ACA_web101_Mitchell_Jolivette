jQuery(document).ready(function(){
  $('#top-nav ul').show();
  $('nav#top-nav div.menu-control').on('click',function(){
    $('nav#top-nav ul').toggle();
  });
});
