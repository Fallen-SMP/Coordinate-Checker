function isInvalid(X, Z) {
    if (X === "" || Z === "") { // Is input empty?
        return true;
    } else if (isNaN(X) || isNaN(Z) ) { // Is the input not a number?
        return true;
    } else {
        return false
    }
}




function warn() {
    let xCoord = document.getElementById("eks");
    let zCoord = document.getElementById("zet");
    let body = document.getElementsByTagName("body")[0];
    let warning = document.createElement("div");
    let message = document.createElement("p");

    warning.id = "warning";
    message.textContent = "Invalid/Empty Input. Please enter only numbers";

    warning.append(message);
    body.append(warning);

    setTimeout(() => { // Remove warning after 15 seconds
        warning.remove();
    }, 15000);

}

