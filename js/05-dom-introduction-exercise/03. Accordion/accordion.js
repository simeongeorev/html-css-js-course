function toggle() {
    let btn = document.getElementsByClassName("button")[0]
    let extraText = document.getElementById("extra")
    if (extraText.style.display !== "block") {
        extraText.style.display = "block"
        btn.textContent = "Less"
    } else if (extraText.style.display === "block"){
        extraText.style.display = "none"
        btn.textContent = "More"
    }
}