const title = document.getElementById("title");

// +++++++++++ 1️⃣ Adding Style to particular element ++++++
title.style.textDecoration = "underline wavy";
title.style.color = "#cc2fc4";
title.style.backgroundColor = "white"
title.style.padding = "20px"
title.style.borderRadius = "1rem"

const gettingAttribute = document.getElementById('title');
// ++++++++ 2️⃣ getAttrribute +++++++
// console.log(gettingAttribute.getAttribute('id'));

// ++++++++++ setAttribute => setAttribute can override attribute's value +++++++
// console.log(gettingAttribute.setAttribute('class' , 'heading setAttributeUsingJS'));





// +++++++++ 3️⃣ Extracting Text +++++++
const mytext = document.getElementById("title");
// console.log(mytext.textContent);
// console.log(mytext.innerText);
// console.log(mytext.innerHTML);





//  ++++++++++++++++ 4️⃣ querySelector And querySelectorAll +++++

// queryselector will return one element
const mySelector = document.querySelector("h2")
mySelector.style.color = "orange";
// console.log(mySelector);

const inputBoxUsingID = document.querySelector("#password");
inputBoxUsingID.setAttribute("placeholder" , "Enter Your Password");
// console.log(inputBoxUsingID);

// querySelectorAll will return NodeList which is not similar to array
const myAllSelector = document.querySelectorAll("h2");
myAllSelector.forEach(function (heading) {
    heading.style.color = "#3155e8";
    heading.style.fontFamily = "Arial";
    heading.style.margin = "0.5rem 1rem"
})
// console.log(myAllSelector);

const listItem = document.querySelectorAll("li");
listItem.forEach((li)=> {
    li.innerText = "Suresh Choudhary";
    li.style.margin = "1rem 1rem";
    li.style.fontFamily = "Arial";
})
// console.log(listItem);




//  ++++++++++++++++ 5️⃣ getElementsByClassName +++++++
const elementUsingClass = document.getElementsByClassName('list-item')
// Converting HTMLCollection to Array
const arr = Array.from(elementUsingClass);
arr.map((item)=>{
    item.style.color = "orange"
})
console.log(arr);


