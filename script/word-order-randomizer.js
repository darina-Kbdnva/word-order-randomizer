let history = JSON.parse(localStorage.getItem("items"))
document.addEventListener("DOMContentLoaded", function() {
    if (history != null) {
        console.log(history)
        displayItems();
    }
})


let items = history || [];

function saveItems() {
    let word = document.getElementById("word").value.trim();
    let meaning = document.getElementById("meaning").value.trim();
    if (word && meaning) {
        items.push({
            word: word, 
            meaning: meaning
        });
        localStorage.setItem("items", JSON.stringify(items));
        document.getElementById("word").value = "";
        document.getElementById("meaning").value = "";
    } 
    displayItems();
}

function displayItems() {
    let output = document.querySelector(".output");
    output.innerHTML = "";
    items.forEach(function(item, index) {
        divElement = document.createElement("div");
        divElement2 = document.createElement("div");
        pElement = document.createElement("p");
        uElement =document.createElement("u");
        iElement = document.createElement("i");
        buttonElement = document.createElement("button");
        divElement2.setAttribute('class', 'text')
        uElement.setAttribute('contenteditable', 'true');
        iElement.setAttribute('contenteditable', 'true');
        buttonElement.setAttribute('class', 'delete');
        pElement.textContent = (index + 1) + ". ";

        buttonElement.addEventListener('click', function() {
            deleteItem(index);
        });

        uElement.textContent = item.word;
        iElement.textContent = item.meaning;
        buttonElement.textContent = "Delete";
        output.appendChild(divElement);
        divElement.appendChild(divElement2);
        divElement2.appendChild(pElement);
        divElement.appendChild(buttonElement);
        pElement.appendChild(uElement);
        pElement.appendChild(iElement)
    })
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    displayItems();
}

function shuffleItems() {
    let shuffledItems = items.slice().sort(function() {
        return 0.5 - Math.random()
    });
    items = shuffledItems;
    displayItems();
}
