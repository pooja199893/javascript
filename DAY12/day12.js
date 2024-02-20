function checkIsUserValid() {
    var age = document.getElementById("age").value;
    const pTag = document.getElementById("displayResult");
    // console.log(age, "age")
    if (age > 18 && age < 81) {
        var div = document.createElement("div")
        // <div></div>
        div.style.color = "red"
        div.innerText = "You are eligible for DL"
        pTag.appendChild(div)
        alert("You are eligible for DL")
    } else if (age == 18) {
        var h1 = document.createElement("h1")
        h1.style.color = "red"
        h1.style.fontSize = "40px"
        h1.innerText = "You are eligible for LL"
        pTag.appendChild(h1)
        alert("You are eligible for LL")
    } else {
        var h2 = document.createElement("h2");
        h2.style.color = "red"
        h2.style.fontSize = "20px"
        h2.style.fontFamily = "cursive"
        h2.innerText = "You are not eligible for DL"
        pTag.appendChild(h2)
        alert("You are not eligible for DL")
    }
    document.getElementById("age").value = ""
}