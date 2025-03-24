const updatebtn = document.getElementById("updatebtn");
updatebtn.addEventListener("click", updateElement);

let number = 0;

function updateElement() {
    updateDynamicElement("writeName", "nameType", "name", "name");
    updateDynamicElement("writeContent", "contentType", "content", "content");
}

function updateDynamicElement(inputId, selectId, elementId, defaultText) {
    let value = document.getElementById(inputId).value;
    let selectedTag = document.getElementById(selectId).value;

    let oldElement = document.getElementById(elementId);
    let parent = oldElement.parentNode;

    let newElement = document.createElement(selectedTag || "p")
    newElement.id = elementId;
    newElement.textContent = value || defaultText;

    parent.replaceChild(newElement, oldElement)
<<<<<<< HEAD
    
    number++;
    console.log(number)
=======

    let content = document.getElementById("writeContent").value;
    document.getElementById("content").innerHTML = content;
>>>>>>> 57f1f21c76448f93dcc2cef6c4932b10bc710ed9
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

// Change the color of the preview box
function updateUI() {

    if (document.getElementById("red").checked) {
        document.getElementById("preview_box").style.backgroundColor = "red";
    } else if (document.getElementById("green").checked) {
        document.getElementById("preview_box").style.backgroundColor = "green";
    } else if (document.getElementById("blue").checked){
        document.getElementById("preview_box").style.backgroundColor = "blue";
    } else {
        document.getElementById("preview_box").style.backgroundColor = "";
    }

}


let previewBox = document.getElementById("preview_box"); // Target the box instead of body
let colorEl = document.getElementById("color");

colorEl.addEventListener("input", changeColor); // Use "input" instead of "change" for real-time updates

function changeColor() {
    let colorChange = colorEl.value;

    if (CSS.supports('color', colorChange)) {
        previewBox.style.backgroundColor = colorChange;
    }
}