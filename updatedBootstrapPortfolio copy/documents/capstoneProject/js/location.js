// location input from user to see close location on the footer
function showLocation(e) {
    e.preventDefault();
    $('#modal2').modal();
    // modal 2 in the footer of each page
   let location = document.getElementById('location').value;
  //  the user input
   let modalLabel = document.getElementById('modalLabel');
  //  the label on the modal
   modalLabel.innerText = "";modalLabel.append(location);
  //  taking the value from user input to see if a location is near them
   let $ul = $('.locationNearYou');
  if (location === '46516') {
      $ul.append('<li class="text-dark">' + '1 Blazer Blvd. Elkhart, IN 46516'+ '</li>');
  } else if(location === '46517') {
    $ul.append('<li class="text-dark">' + '5896 County Road 17 Elkhart, IN 46517'+ '</li>');
  } else {
      $ul.append('<li class="text-dark">' + 'Sorry, there is no location close to you'+ '</li>')
  }
}
function reload(e) {
  e.preventDefault();
  window.location.reload();
  // clears the function
  window.localStorage.clear();
}
  






    


