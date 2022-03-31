function run() {
    document.getElementById("paragraph").innerHTML = "Hello";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "red";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
}




function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random")
    x.innerHTML = ran;
    x.style.backgroundColor = "purple";
    x.style.color = "red";
    x.style.padding = "20px";
    x.style.textAlign = "center";

}

function
