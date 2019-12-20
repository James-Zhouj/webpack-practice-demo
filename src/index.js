import './style.css';

var Btn = document.createElement('button');

Btn.innerHTML = "新增";
document.body.appendChild(Btn);
Btn.onclick = function (){
var Div = document.createElement("div");

Div.innerHTML = "item";

document.body.appendChild(Div);


}
console.log('hello 11333')