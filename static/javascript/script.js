const updatebtn = document.getElementById("updatebtn");
updatebtn.addEventListener("click", updateElement);

const newText = document.getElementById("newText");
newText.addEventListener("click", createParagraph)

let number = 0;

function updateElement() {
    updateDynamicElement("writeName", "nameType", "name", "name");
    updateDynamicElement("writeContent", "contentType", "content", "content");
    updateDynamicElement("writeContent2", "contentType2", "content2", "content2");
    updateDynamicElement("writeContent3", "contentType3", "content3", "content3");
    updateDynamicElement("writeContent4", "contentType4", "content4", "content4");
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
    
}

function createParagraph() {
    if (number == 0) {
        // Create a div wrapper to match existing structure
        let div2 = document.createElement("div");

        // Create label
        let label2 = document.createElement("h3");
        label2.textContent = "Content 2:";

        // Create input field
        let input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "writeContent2";
        input2.placeholder = "Please write something";

        // Create dropdown
        let dropdown2 = document.createElement("select");
        dropdown2.id = "contentType2";

        // Create options
        let large2 = document.createElement("option");
        large2.value = "h1";
        large2.textContent = "H1";

        let medium2 = document.createElement("option");
        medium2.value = "h2";
        medium2.textContent = "H2";

        let small2 = document.createElement("option");
        small2.value = "p";
        small2.textContent = "Paragraph";

        // Append options to dropdown
        dropdown2.appendChild(large2);
        dropdown2.appendChild(medium2);
        dropdown2.appendChild(small2);

        // Append elements to new div
        div2.appendChild(label2);
        div2.appendChild(input2);
        div2.appendChild(dropdown2);

        
        // Apply the same class for styling (if needed)
        div2.classList.add("inputField");

        let text2 = document.createElement("p")
        text2.id = "content2"

        // Append to container
        let container = document.getElementById("container");
        container.appendChild(div2);

        let contentContainer2 = document.getElementById("contentContainer2");
        contentContainer2.appendChild(text2)

        number++;
    } else if (number == 1) {
        // Create a div wrapper to match existing structure
        let div3 = document.createElement("div");

        // Create label
        let label3 = document.createElement("h3");
        label3.textContent = "Content 3:";

        // Create input field
        let input3 = document.createElement("input");
        input3.type = "text";
        input3.id = "writeContent3";
        input3.placeholder = "Please write something";

        // Create dropdown
        let dropdown3 = document.createElement("select");
        dropdown3.id = "contentType3";

        // Create options
        let large3 = document.createElement("option");
        large3.value = "h1";
        large3.textContent = "H1";

        let medium3 = document.createElement("option");
        medium3.value = "h2";
        medium3.textContent = "H2";

        let small3 = document.createElement("option");
        small3.value = "p";
        small3.textContent = "Paragraph";

        // Append options to dropdown
        dropdown3.appendChild(large3);
        dropdown3.appendChild(medium3);
        dropdown3.appendChild(small3);

        // Append elements to new div
        div3.appendChild(label3);
        div3.appendChild(input3);
        div3.appendChild(dropdown3);

        
        // Apply the same class for styling (if needed)
        div3.classList.add("inputField");

        let text3 = document.createElement("p")
        text3.id = "content3"

        // Append to container
        let container = document.getElementById("container");
        container.appendChild(div3);

        let contentContainer3 = document.getElementById("contentContainer3");
        contentContainer3.appendChild(text3)

        number++;
    } else if (number == 2) {
                // Create a div wrapper to match existing structure
        let div4 = document.createElement("div");

        // Create label
        let label4 = document.createElement("h3");
        label4.textContent = "Content 4:";

        // Create input field
        let input4 = document.createElement("input");
        input4.type = "text";
        input4.id = "writeContent4";
        input4.placeholder = "Please write something";

        // Create dropdown
        let dropdown4 = document.createElement("select");
        dropdown4.id = "contentType4";

        // Create options
        let large4 = document.createElement("option");
        large4.value = "h1";
        large4.textContent = "H1";

        let medium4 = document.createElement("option");
        medium4.value = "h2";
        medium4.textContent = "H2";

        let small4 = document.createElement("option");
        small4.value = "p";
        small4.textContent = "Paragraph";

        // Append options to dropdown
        dropdown4.appendChild(large4);
        dropdown4.appendChild(medium4);
        dropdown4.appendChild(small4);

        // Append elements to new div
        div4.appendChild(label4);
        div4.appendChild(input4);
        div4.appendChild(dropdown4);

        
        // Apply the same class for styling (if needed)
        div4.classList.add("inputField");

        let text4 = document.createElement("p")
        text4.id = "content4"

        // Append to container
        let container = document.getElementById("container");
        container.appendChild(div4);

        let contentContainer4 = document.getElementById("contentContainer4");
        contentContainer4.appendChild(text4)

        number++;
    } else if (number == 3) {
        number++;
    } else if (number == 4 || number >= 4) {
        alert("you've made the max amount")
    }
    
    console.log(number);
}



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