function updateElement() {
    let nameValue = document.getElementById("writeName").value;
    let selectedTag = document.getElementById("elementType").value;

    let oldElement = document.getElementById("name");
    let parent = oldElement.parentNode;

    let newElement = document.createElement(selectedTag)
    newElement.id = "name";
    newElement.textContent = nameValue || "name";

    parent.replaceChild(newElement, oldElement)
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

    // var text1 = document.getElementById("text");
    // var text2 = document.getElementById("text2");
    // var text3 = document.getElementById("text3");

    // text1.style.display = "none";
    // text2.style.display = "none";
    // text3.style.display = "none";

    if (document.getElementById("red").checked) {
    //  text1.style.display = "block";
        document.body.style.backgroundColor = "red";
    } else if (document.getElementById("green").checked) {
    //  text2.style.display = "block";
        document.body.style.backgroundColor = "green";
    } else if (document.getElementById("blue").checked){
    //  text3.style.display = "block";
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "";
    }

}
