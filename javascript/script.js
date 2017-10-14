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

function getCurrentTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    time = hours + ":" + minutes + " "
    if(hours > 11){
        time = time + "PM"
    } else {
        time = time + "AM"
    }​
    return time;
}