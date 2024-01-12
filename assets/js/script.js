var counter = 2;
var shouldAddRow = false;


function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


function toggleInputs() {
  var inputContainer = document.querySelector(".input-container");
  var nameInput = document.getElementById("nameInput");
  var phoneInput = document.getElementById("phoneInput");
  var addToTableBtn = document.getElementById("addToTableBtn");

  
  if (!inputContainer.classList.contains("hidden")) {
   
    nameInput.value = "";
    phoneInput.value = "";

   
    addToTableBtn.classList.add("hidden");
  } else {
    
    addToTableBtn.classList.remove("hidden");
  }

 
  inputContainer.classList.toggle("hidden");

  
  if (!inputContainer.classList.contains("hidden")) {
    setTimeout(function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 500);
  }
}


function validatePhoneInput(input) {
  
  input.value = input.value.replace(/[^\d]/g, '');

  
  if (input.value.length > 11) {
    input.value = input.value.slice(0, 11);
  }
}


function addToTable() {
  var inputContainer = document.querySelector(".input-container");
  var nameInput = document.getElementById("nameInput");
  var phoneInput = document.getElementById("phoneInput");
  var addToTableBtn = document.getElementById("addToTableBtn");

  
  if (!inputContainer.classList.contains("hidden")) {
    var newName = nameInput.value.trim();
    var newPhone = phoneInput.value.trim();

    
    if (newName !== "" || newPhone !== "") {
      
      if (newPhone.length === 11) {
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.textContent = counter++;
        cell2.textContent = newName || "New Name " + counter;
        cell3.textContent = newPhone || "New Phone " + counter;
        cell4.innerHTML = '<button class="button-delete" onclick="deleteRow(this)">Delete</button>';
      } else {
        alert("شماره تلفن باید حاوی دقیقاً 11 عدد باشد.");
      }
    }

    
    nameInput.value = "";
    phoneInput.value = "";

    
    inputContainer.classList.add("hidden");

    addToTableBtn.classList.add("hidden");
  }
}

setTimeout(function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, 1000);