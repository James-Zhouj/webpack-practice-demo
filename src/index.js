let Div = document.querySelector("#div");

import avatar from "./bpic12885.jpg";

import './index.scss';

console.log(avatar,"avatar")

Div.innerHTML="这是JS生成的内容";

let img = new Image();
img.src = avatar;
img.classList.add('avatar');
let DomImage = document.querySelector("#img");
DomImage.append(img);


