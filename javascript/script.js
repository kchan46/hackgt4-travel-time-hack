var myStorage = window.localStorage;

function redirect() {
    myStorage.setItem("address", document.getElementById("address").value);
    myStorage.setItem("airport", document.getElementById("airport").value);
    myStorage.setItem("flight_number", document.getElementById("flight_number").value);
    location.href="second_page.html";
}

function redirect2() {
    myStorage.setItem("routine", document.getElementById("routine").value);
    myStorage.setItem("transportation_mode", document.getElementById("transportation_mode").value);
    myStorage.setItem("TSA-precheck", document.getElementById("TSA-precheck").value);
    myStorage.setItem("phone", document.getElementById("phone").value);
    location.href="results.html";
}

function redirect3() {
    location.href="index.html";
}

function getAddress() {
    return myStorage.getItem("address");
}

function getAirport() {
    return myStorage.getItem("airport");
}

function getFlightNumber() {
    return myStorage.getItem("flight_number");
}

function getRoutine() {
    return myStorage.getItem("routine");
}

function getTransportationMode() {
    return myStorage.getItem("transportation_mode");
}

function getTSA() {
    return myStorage.getItem("TSA-precheck");
}

function getPhone() {
    return myStorage.getItem("phone");
}

function getTotalTimeEstimated() {
    return "1 hr 9 min";
}

function getRecommendedDepartureTime() {
    return "8:37 AM";
}

function getArrivalTimeAtGate() {
    return "10:10 AM";
}

function getGoogleMapsTravelTime() {
    return "14 minutes";
}

function getEstimatedParkingTime() {
    return "15 minutes";
}