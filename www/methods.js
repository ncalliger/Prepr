function populatePrepNeeded(numberOfItems){
  for(var i = 0; i < numberOfItems; i++){
  document.write(
  "<ul>" +
    "<li>" + "<table>" +
      "<tr>" +
        "<th>" + "Task" + "</th>" +
        "<th>" + "Assigned To" + "</th>" +
      "</tr>" +
      "<tr>" +
        "<td>" + "Small Boxes" + "</td>" +
        "<td>" + "Arty" + "</td>" +
      "</tr>" +
    "</table>" + "</li>" +
  "</ul>"
  );
  }
}

function populatePrepFinished(numberOfItems, id){
  for(var i = 0; i < numberOfItems; i++){
  document.write(
  "<ul>" +
    "<li>" + "<table>" +
      "<tr>" +
        "<th>" + "Task" + "</th>" +
        "<th>" + "Assigned To" + "</th>" +
      "</tr>" +
      "<tr>" +
        "<td>" + "Small Boxes" + "</td>" +
        "<td>" +employees[id]+ "</td>" +
      "</tr>" +
    "</table>" + "</li>" +
  "</ul>"
  );
  }
}
