// 
const div = document.createElement("div")
console.log(div);
div.className = "main"
div.id = "met"
div.setAttribute("title","dom-manupulation ")
div.style.backgroundColor = "green"
div.style.padding = "15px"
// div.innerText = "manupulate the div by using javascript"
const addText = document.createTextNode("document manipulate by using javascript")
div.append(addText)
div.body.addChild(div)