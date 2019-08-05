function clap() {
    let text = document.getElementById("input").value
    let array = text.split(" ")
    let clapped = array.join(" 👏 ")
    document.getElementById("out").innerHTML = clapped
}
