const letra1 = document.querySelector("#letra1");
const letra2 = document.querySelector("#letra2");
const letra3 = document.querySelector("#letra3");
const letra4 = document.querySelector("#letra4");
const letra5 = document.querySelector("#letra5");
const letra6 = document.querySelector("#letra6");
const letra7 = document.querySelector("#letra7");

let act1 = false;
let act2 = false;
let act3 = false;
let act4 = false;
let act5 = false;
let act6 = false;
let act7 = false;

let atl;

dragElement(letra1, 1);
dragElement(letra2, 2);
dragElement(letra3, 3);
dragElement(letra4, 4);
dragElement(letra5, 5);
dragElement(letra6, 6);
dragElement(letra7, 7);

function dragElement(elmnt, atl) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      switch (true) {
        case act1 == true && atl == 1:
            return;
        break;
        case act2 == true && atl == 2:
            return;
        break;
        case act3 == true && atl == 3:
            return;
        break;
        case act4 == true && atl == 4:
            return;
        break;
        case act5 == true && atl == 5:
            return;
        break;
        case act6 == true && atl == 6:
            return;
        break;
        case act7 == true && atl == 7:
            return;
        break;
      }
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;

    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

setInterval(() => {
    if(letra3.style.top == "190px") {
        act3 = true;
    }
}, 10)