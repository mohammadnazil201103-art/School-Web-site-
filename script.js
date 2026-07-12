var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}



const boxes = document.querySelectorAll(".box");
const panel = document.getElementById("panel");
const title = document.getElementById("panel-title");
const desc = document.getElementById("panel-desc");
const closeBtn = document.getElementById("close");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        title.innerText = box.dataset.title;
        desc.innerText = box.dataset.desc;
        panel.classList.add("active");
    });
});

closeBtn.onclick = () => panel.classList.remove("active");


/*-------------Only for the send msg button -------------------------*/

function msg() {
    var v = confirm("Sure to send msg ?");
    if (v == true) {
        alert("Message Sended");
    }
    document.querySelector("form").reset();


} 
