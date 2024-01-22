const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

// Event listener for opening the popup

openBtn.addEventListener("click", () =>{
    popup.classList.add("open");
    console.log("njnj")
});

// Event listener for closing the popup

closeBtn.addEventListener("click", () =>{
    popup.classList.remove("open");
});
