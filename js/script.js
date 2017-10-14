var firstPageData=new Array();

function redirect() {
    firstPageData.push(document.getElementById("address").value);
    firstPageData.push(document.getElementById("airport").value);
    firstPageData.push(document.getElementById("flight_number").value);
    location.href="second_page.html";
}

function redirect2() {
    location.href="results.html";
}

function redirect3() {
    location.href="index.html";
}

function getAddress() {
    return firstPageData[0];
}

function getAirport() {
    return firstPageData[1];
}

function getFlightNumber() {
    return firstPageData[2];
}