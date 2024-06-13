const letra1 = document.querySelector("#letra1");
const letra2 = document.querySelector("#letra2");
const letra3 = document.querySelector("#letra3");
const letra4 = document.querySelector("#letra4");
const letra5 = document.querySelector("#letra5");
const letra6 = document.querySelector("#letra6");
const letra7 = document.querySelector("#letra7");
const letra8 = document.querySelector("#letra8");
const letra9 = document.querySelector("#letra9");
const letra10 = document.querySelector("#letra10");
const letra11 = document.querySelector("#letra11");
const letra12 = document.querySelector("#letra12");
const letra13 = document.querySelector("#letra13");
const letra14 = document.querySelector("#letra14");
const letra15 = document.querySelector("#letra15");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");
const l5 = document.querySelector("#l5");
const l6 = document.querySelector("#l6");
const l7 = document.querySelector("#l7");

let act1 = false;
let act2 = false;
let act3 = false;
let act4 = false;
let act5 = false;
let act6 = false;
let act7 = false;

let acertos = 0;

let atl;
let at;
let x;
let y;

let ac = false;
let ac2 = false;
let ac3 = false;

dragElement(letra1, 1);
dragElement(letra2, 2);
dragElement(letra3, 3);
dragElement(letra4, 4);
dragElement(letra5, 5);
dragElement(letra6, 6);
dragElement(letra7, 7);
dragElement(letra8, 0);
dragElement(letra9, 0);
dragElement(letra10, 0);
dragElement(letra11, 0);
dragElement(letra12, 0);
dragElement(letra13, 0);
dragElement(letra14, 0);
dragElement(letra15, 0);

function dragElement(elmnt, atl) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
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
      x = (e.clientX / 6) - 20;
      y = (e.clientY / 6) - 20;
      switch (atl) {
        case 1:
          at = 1;
          acerto(y, x);
        break;
        case 2:
          at = 2;
          acerto(y, x);
        break;
        case 3:
          at = 3;
          acerto(y, x);
        break;
        case 4:
          at = 4;
          acerto(y, x);
        break;
        case 5:
          at = 5;
          acerto(y, x);
        break;
        case 6:
          at = 6;
          acerto(y, x);
        break;
        case 7:
          at = 7;
          acerto(y, x);
        break;
      }
      elmnt.style.top = (e.clientY / 6.5) - 20 + "vh";
      elmnt.style.left = (e.clientX / 6.5) - 10 + "vh";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

function mudar() {
  
}

function stop() {
    l1.style.animationName = "unset";
    l2.style.animationName = "unset";
    l3.style.animationName = "unset";
    l4.style.animationName = "unset";
    l5.style.animationName = "unset";
    l6.style.animationName = "unset";
    l7.style.animationName = "unset";
}

function acerto(y, x) {
  if(x >= 20 && x <= 40 && y >= 15 && y <= 33 && at == 2) {
    letra2.style.display = "none";
    l1.style.color = "#bbfccc";
    act2 = true;
    l1.style.animationName = "brilho";
  }
  if(x >= 45 && x <= 60 && y >= 15 && y <= 35) {
    if(ac3 == false) {
    if(at == 1) {
      letra1.style.display = "none";
      l2.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
    }
    else if(at == 3) {
      letra3.style.display = "none";
      l2.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
    }
    else if(at == 4) {
      letra4.style.display = "none";
      l2.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
    }
  }
  }
  if(x >= 65 && x <= 75 && y >= 15 && y <= 35 && at == 5) {
    letra5.style.display = "none";
    l3.style.color = "#bbfccc";
    act5 = true;
    l3.style.animationName = "brilho";
  }
  if(x >= 90 && x <= 110 && y >= 30 && y <= 45) {
    if(ac2 == false) {
    if(at == 1) {
      letra1.style.display = "none";
      l4.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
    }
    else if(at == 3) {
      letra3.style.display = "none";
      l4.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
    }
    else if(at == 4) {
      letra4.style.display = "none";
      l4.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
    }
  }
  }
  if(x >= 110 && x <= 130 && y >= 30 && y <= 45 && at == 6) {
    letra6.style.display = "none";
    l5.style.color = "#bbfccc";
    act6 = true;
    l5.style.animationName = "brilho";
  }
  if(x >= 130 && x <= 150 && y >= 30 && y <= 45 && at == 7) {
    letra7.style.display = "none";
    l6.style.color = "#bbfccc";
    act7 = true;
    l6.style.animationName = "brilho";
  }
  if(x >= 150 && x <= 170 && y >= 30 && y <= 45) {
    if(ac == false) {
    if(at == 1) {
      letra1.style.display = "none";
      l7.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
    }
    else if(at == 3) {
      letra3.style.display = "none";
      l7.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
    }
    else if(at == 4) {
      letra4.style.display = "none";
      l7.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
    }
  }
  }
}

setInterval(() => {
  if(act1 == true && act2 == true && act3 == true && act4 == true && act5 == true && act6 == true && act7 == true) {
    acertos++;
    setTimeout(stop, 1000);
  }
}, 10)

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  if (hr < 10) {
    hr = '0' + hr;
  }

  if (min < 10) { 
    min = '0' + min;
  }
})