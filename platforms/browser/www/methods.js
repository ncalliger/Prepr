//this function is meant to indicate unfinished tasks.
function populatePrepNeeded(numberOfItems, emp){
  for(var i = 0; i < numberOfItems; i++){
    createTaskBox(unfinishedTasks[i], emp);
  }
}


//this function is meant to indicate finished tasks.
function populatePrepFinished(numberOfItems, emp){
  for(var i = 0; i < numberOfItems; i++){
    createTaskBox(finishedTasks[i], emp);
  }
}

//function for creating individual task boxes.
//This looks very dirty, will clean it up later.
function createTaskBox(task, emp) {
  document.write(
  "<ul>" +
    "<li>" + "<table>" +
      "<tr>" +
        "<th>" + "Task" + "</th>" +
        "<th>" + "Assigned To" + "</th>" +
      "</tr>" +
      "<tr>" +
        "<td>" + task + "</td>" +
        "<td>" + emp + "</td>" +
      "</tr>" +
    "</table>" + "</li>" +
  "</ul>"
  );
}

//This function creates the entirety of the checklist.
function createCheckList(inputArray){
  inputArray.sort();
  for(var i = 0;i < inputArray.length; i++){
  //This snippet creates an individual task in the checklist. remove "checked" VVV to default to unchecked boxes
    document.write(
      "<label><input type=\"checkbox\" name=\"task\" value=\"" + inputArray[i] + "\" checked>" +
      inputArray[i] +
      "</label>"
    )
  }
}

//This function was copied from a post on StackOverflow.com
// Returns an array with values of the selected (checked) checkboxes in "frm"
function getSelectedChbox(frm) {
  var selchbox = [];        // array that will store the value of selected checkboxes

  // gets all the input tags in frm, and their number
  var inpfields = frm.getElementsByTagName('input');
  var nr_inpfields = inpfields.length;

  // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
  for(var i=0; i<nr_inpfields; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
  }

  return selchbox;
}

// Returns an array with values of the unselected (unchecked) checkboxes in "frm"
function getUnselectedChbox(frm) {
  var selchbox = [];        // array that will store the value of selected checkboxes

  // gets all the input tags in frm, and their number
  var inpfields = frm.getElementsByTagName('input');
  var nr_inpfields = inpfields.length;

  // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
  for(var i=0; i<nr_inpfields; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == false) selchbox.push(inpfields[i].value);
  }

  return selchbox;
}

//this function was also copied from StackOverflow.com
//this function updates a specified div's content
function updateDiv(div)
{
    $( "#" + div ).load(window.location.href + "#" + div );
}
