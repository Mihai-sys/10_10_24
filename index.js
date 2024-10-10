const myDiv = document.getElementById("myDiv");
console.log(myDiv);
myDiv.style.color = "red";
myDiv.innerText = "Goodbye!";
// myDiv.innerHTML = "<ul><li>Hello</li><li>Goodbye</li></ul>";

const hello = "Hello";
const goodbye = "Goodbye";
myDiv.innerHTML = `
<ul>
    <li>${hello}</li>
    <li>${goodbye}</li>
</ul>
`;

// accesarea elemntelor dupa numele clasei css
const allErrors = document.getElementsByClassName("error");
console.log(allErrors);

// accesarea elementelor dupa valoarea atributului "name"
const allAnimalInputs = document.getElementsByName("Animal");
console.log(allAnimalInputs);

// accesarea elementelor dupa numele tag-ului
const allSection = document.getElementsByTagName("section");
console.log(allSection);

// accesarea elementelor dupa querry-uri css
const firstSection = document.querySelector("section");
console.log(firstSection);
const allSectionsByQuerry = document.querySelectorAll("section");
console.log(allSectionsByQuerry);

const myDivByQuerry = document.querySelector("#myDiv");
console.log(myDivByQuerry);

const firstError = document.querySelector(".error");
console.log(firstError);

const allErrorsByQuerry = document.querySelectorAll(".error");
console.log(allErrorsByQuerry);

// Manipularea elementelor prin metodele getAttribute si setAttribute
const importantLink = document.querySelector(" section > a");
console.log(importantLink);
importantLink.setAttribute("href", "https://dexonline.ro/intrare/important/26804")
const href = importantLink.getAttribute("href");
console.log("href",  href);

// manipularea claselor de css ale elementelor
importantLink.classList.add("important");
const lastError = document.querySelector("section > p:last-child")
console.log(lastError);
lastError.classList.remove("important");

// crearea de elemente HTML si adaugarea lor in DOM
const parent = document.getElementById("created-elements");
const subtitle = document.createElement("h3");
parent.appendChild(subtitle);
subtitle.textContent = "This subtitle was added with JS";

// Stergerea de elemente 
const toDelete = document.querySelector("#delete-me");
toDelete.remove();

// adaugarea de ascultatori de evenimente( functii care se apeleaza cand apare un eveniment ex: click) pe elemente
const btn = document.querySelector("#click-me-btn");

let clickLimit = 3;
let currentClickCount = 0;
const onClick = () =>  {
    alert("Button was clicked!");
    currentClickCount++; 

    if (currentClickCount === clickLimit) {
        btn.removeEventListener("click", onClick);
    }
};
btn.addEventListener("click", onClick);

// indepartarea unui ascultator de evenimente
// btn.removeEventListener("click", onClick);


// local storage && session storage
// stocarea de date in localStorage
localStorage.setItem("importantData", "3 items in cart");

const savedData = localStorage.getItem("importantData");
console.log("savedData: ", savedData);

// stocarea de date in seesionStorage
sessionStorage.setItem("temporary", "Temporary data");

sessionStorage.getItem("temporary");

const tempData = sessionStorage.getItem("temporary");
console.log(tempData);
