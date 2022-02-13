

const rab = document.querySelector('.image');


const clickHandler = () => {
  
  document.getElementById("demo").innerHTML += "Clicked!<br>";

}


const over = () => {

  document.getElementById("demo").innerHTML += "Mouseover!<br>";
}

const out = () => {

  document.getElementById("demo").innerHTML += "Mouseout!<br>";
}





rab.addEventListener('click', clickHandler);
rab.addEventListener('mouseover', over);
rab.addEventListener('mouseout', out);