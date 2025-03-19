function test() {
    let name = document.getElementById("writeName").value;
    document.getElementById("name").innerHTML = name;

    let content = document.getElementById("writeContent").value;
    document.getElementById("content").innerHTML = content;
}

const para = document.createElement("p")
const node = document.createTextNode("hello")
para.appendChild(node)
const element = document.getElementById("div1")
element.appendChild(para)

var checkBoxes = document.querySelectorAll("input[type='checkbox']");

checkBoxes.forEach((box) => {
    box.addEventListener("change", function() {
        checkBoxes.forEach((otherBox) => {
            if (otherBox !== this) {
                otherBox.checked = false;
            }
        });

        updateUI();
    });
});


function updateUI() {

    var text1 = document.getElementById("text");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");

    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";

    if (document.getElementById("myCheck").checked) {
      text1.style.display = "block";
      document.body.style.backgroundColor = "red";
    } else if (document.getElementById("myCheck2").checked) {
       text2.style.display = "block";
       document.body.style.backgroundColor = "green";
    } else if (document.getElementById("myCheck3").checked){
        text3.style.display = "block";
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "";
    }

}
