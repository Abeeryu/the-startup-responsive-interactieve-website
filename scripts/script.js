const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () =>{
    popup.classList.add("open");
    console.log("njnj")
});

closeBtn.addEventListener("click", () =>{
    popup.classList.remove("open");
});
