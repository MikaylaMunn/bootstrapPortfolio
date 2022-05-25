// Payment information
function pay(e) {
    e.preventDefault();
    $('#modal4').modal();
    // triggers the payment after the submit button on the cart 
    let printOrder = document.getElementById("printOrder");
    printOrder.innerText = "";
    // all are the input values the user uses
    let billName = document.getElementById("billName").value;
    let street = document.getElementById("street").value;
    let zip = document.getElementById("zip").value;
    let ccNum = document.getElementById("ccNumber").value;
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    let orderName = document.getElementById("orderName");
    let orderAddy = document.getElementById("orderAddy");
    let orderZip = document.getElementById("orderZip");
    let orderPhone = document.getElementById("orderPhone");
    let dietAllergy = document.getElementById("dietaryIssues");
    let dateOrder = document.getElementById('dateOrder');
    let timeOrder = document.getElementById('timeOrder');
    // takes what the user says and uses the value on the modal
    date.innerText = "";
    time.innerText = "";
    orderName.innerText = "";
    orderAddy.innerText = "";
    orderPhone.innerText = "";
    dietAllergy.innerText = "";
    ccNum.innerText = "";
    orderName.append(billName);
    orderAddy.append(street);
    orderZip.append(zip);
    dietAllergy.append(orderdietaryIssues);
    orderPhone.append(orderFormNumber);
    dateOrder.append(date);
    timeOrder.append(time);
  }
  
