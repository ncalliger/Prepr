//this function is meant to indicate unfinished tasks.
function populatePrepNeeded(numberOfItems, emp){
  for(var i = 0; i < numberOfItems; i++){
    createTaskBox(emp);
  }
}


//this function is meant to indicate finished tasks.
function populatePrepFinished(numberOfItems, emp){
  for(var i = 0; i < numberOfItems; i++){
    createTaskBox(emp);
  }
}

//function for creating individual task boxes.
//This looks very dirty, will clean it up later.
function createTaskBox(emp) {
  document.write(
  "<ul>" +
    "<li>" + "<table>" +
      "<tr>" +
        "<th>" + "Task" + "</th>" +
        "<th>" + "Assigned To" + "</th>" +
      "</tr>" +
      "<tr>" +
        "<td>" + "Small Boxes" + "</td>" +
        "<td>" + emp + "</td>" +
      "</tr>" +
    "</table>" + "</li>" +
  "</ul>"
  );
}
