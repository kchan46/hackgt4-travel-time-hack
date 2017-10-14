var firstPageData = new Array();
function redirect() {
 firstPageData.push(document.getElementById("address").value);
    location.href="second_page.html";
    
    firstPageData.push(document.getElementById("date_of_flight").value);
    firstPageData.push(document.getElementById("flight_number").value);
}

function redirect2() {
    location.href="results.html";
}

function redirect3() {
    location.href="index.html";
}

function returnOrigin() 
{

   return document.getElementById("address").value;
}

function getAddress() {
    return firstPageData[0];
}