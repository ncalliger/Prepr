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

//This function creates the entirety of the checklist.
function createCheckList(taskArray){
  for(var i = 0;i < MasterTaskList.length; i++){
  //This snippet creates an individual task in the checklist.
    document.write(
      "<label><input type=\"checkbox\" name=\"task\" value=\"Large Boxes\">" +
      MasterTaskList[i] +
      "</label>"
    )
  }
}
