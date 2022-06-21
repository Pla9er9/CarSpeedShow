let marginL = 0;
let started = false;

document.getElementById("bStart").onclick = () => {
    carSpeed = Number(document.getElementById("speed").value);
    //console.log("111 CAR SPEED : " + carSpeed);
    if (started) {
        alert("Car is driving")
    }
    else {
        started = true;
        if (Number(document.getElementById("speed").value) == "0" || Number(document.getElementById("speed").value) < 0){
            alert("Enter valid number")
        }
        else {
            document.getElementById("actualSpeed").innerHTML = "Actual speed: " + Number(document.getElementById("speed").value) + "m/s"
            window.setInterval(moving, 10);
        }
    }
}

function moving () {
    document.getElementById("CarIMG").style.marginLeft = marginL + carSpeed /100+ "px";
    marginL += carSpeed/100;
}

document.getElementById("bReset").onclick = () => window.location.reload(true);