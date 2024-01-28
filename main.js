const toggleMessage = document.getElementById("pop-up")

toggleMessage.addEventListener("click", () => {

    let panel = document.getElementById("active");

    if(panel.style.display === "block"){
        panel.style.display = "none"
    }else {
        panel.style.display = "block"
    }
})