// for adding a photo section on the modal section
$(function () {
  $('.card .dimmer')
    .dimmer({
      on: 'hover'
    })
})
// to see which page you are on
$(function(){
  $('.navbar-brand .dimmer').dimmer({
    on: 'hover'
  })
})
// key code for scrolling using the arrows on the keyboard
$("body").keyup(function(e) 
{
    if (e.keyCode == 40) 
    {  
       e.preventDefault();
    }
    if (e.keyCode == 38)
    {
        e.preventDefault();
    }
});
// Add comments on the about us page
let $form = $('.form');
let $comment = $('#comment');
let $user = $('#name');
let $comments = $('.comments');
let $names = $('.names');
$form.on('submit', function (e) {
  e.preventDefault();
  let $li = $('<li>');
  let $namep = $('<h3>').html($comment.val());
  let $userp = $('<p class=item> ').html($user.val());
  $li.append($namep);
  $comments.append($li);
  $li.append($userp);
  $names.append($li);
  if(e.keyCode == 13) {
    $($form).submit();
  }
});
