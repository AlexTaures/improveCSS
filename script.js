function filterTableRows() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("monitorFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  

  //Event listener
  const input = document.getElementById("monitorFilter");
  const searchBtn = document.getElementById("searchBtn")

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    filterTableRows();
  }
});


//clean function
function clean(){
    input.value="";
}


