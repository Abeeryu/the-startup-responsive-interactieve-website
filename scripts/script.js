const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () =>{
    popup.classList.add("open");
});

closeBtn.addEventListener("click", () =>{
    popup.classList.remove("open");
});
