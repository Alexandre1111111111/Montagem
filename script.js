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
const timer = document.querySelector("#timer");
const acc = document.querySelector("#acc");
const pt = document.querySelector("#pt");

const letras = ["A", "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M", "N", "O","P","Q","R", "S", "T", "U", "V", "W", "X", "Y","Z"
]
let mins = 1;
let secs = 0;
let paused = true;
let intervalid;

let reset = false;

let act1 = false;
let act2 = false;
let act3 = false;
let act4 = false;
let act5 = false;
let act6 = false;
let act7 = false;
let act8 = false;
let act9 = false;
let act10 = false;
let act11 = false;

let ace1 = false;
let ace2 = false;
let ace3 = false;
let ace4 = false;
let ace5 = false;
let ace6 = false;
let ace7 = false;

let acertos = 0;
let pontos = 0;

let atl;
let at;
let x;
let y;

let ac = false;
let ac2 = false;
let ac3 = false;

let palavraal;

let letra;
let palavra = 0;

dragElement(letra1, 1);
dragElement(letra2, 2);
dragElement(letra3, 3);
dragElement(letra4, 4);
dragElement(letra5, 5);
dragElement(letra6, 6);
dragElement(letra7, 7);
dragElement(letra8, 8);
dragElement(letra9, 9);
dragElement(letra10, 10);
dragElement(letra11, 11);
dragElement(letra12, 12);
dragElement(letra13, 13);
dragElement(letra14, 14);
dragElement(letra15, 15);

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
      x = window.innerWidth;
      y = window.innerHeight / 2;
      switch (atl) {
        case 1:
          at = 1;
          acerto(y, x, e);
        break;
        case 2:
          at = 2;
          acerto(y, x, e);
        break;
        case 3:
          at = 3;
          acerto(y, x, e);
        break;
        case 4:
          at = 4;
          acerto(y, x, e);
        break;
        case 5:
          at = 5;
          acerto(y, x, e);
        break;
        case 6:
          at = 6;
          acerto(y, x, e);
        break;
        case 7:
          at = 7;
          acerto(y, x, e);
        break;
        case 8:
          at = 8;
          acerto(y, x, e);
        break;
        case 9:
          at = 9;
          acerto(y, x, e);
        break;
        case 10:
          at = 10;
          acerto(y, x, e);
        break;
        case 11:
          at = 11;
          acerto(y, x, e);
        break;
      }
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

mudar();

function mudar() {
    letra++;
    acc.textContent = `${acertos} / 26`;
    mins = 1;
    secs = 0;
    palavraal = Math.floor(Math.random() * 2) + 1;
    if(paused == true) {
      intervalid = setInterval(updateTime, 1000);
    }
    l1.style.color = "rgb(46, 46, 46)";
    l2.style.color = "rgb(46, 46, 46)";
    l3.style.color = "rgb(46, 46, 46)";
    l4.style.color = "rgb(46, 46, 46)";
    l5.style.color = "rgb(46, 46, 46)";
    l6.style.color = "rgb(46, 46, 46)";
    l7.style.color = "rgb(46, 46, 46)";
    ace1 = false;
    ace2 = false;
    ace3 = false;
    ace4 = false;
    ace5 = false;
    ace6 = false;
    ace7 = false;
    ac = false;
    ac2 = false;
    ac3 = false;
    reset = false;
    letra1.style.display = "block";
    letra2.style.display = "block";
    letra3.style.display = "block";
    letra4.style.display = "block";
    letra5.style.display = "block";
    letra6.style.display = "block";
    letra7.style.display = "block";
    letra8.style.display = "block";
    letra9.style.display = "block";
    letra10.style.display = "block";
    letra11.style.display = "block";
    letra12.style.display = "block";
    letra13.style.display = "block";
    letra14.style.display = "block";
    letra15.style.display = "block";

    for (let i = 0; i < letras.length; i++) {
    if(palavraal == 1) {
        l1.textContent = "A";
        l2.textContent = "B";
        l3.textContent = "A";
        l4.textContent = "C";
        l5.textContent = "A";
        l6.textContent = "X";
        l7.textContent = "I";
        palavra = 1;
    }
}
}

function stop() {
    l1.style.animationName = "unset";
    l2.style.animationName = "unset";
    l3.style.animationName = "unset";
    l4.style.animationName = "unset";
    l5.style.animationName = "unset";
    l6.style.animationName = "unset";
    l7.style.animationName = "unset";
    letra3.style.top = "65vh";
    letra3.style.left = "130vh";
    letra4.style.top = "0vh";
    letra4.style.left = "85vh";
}

function acerto(y, x, e) {
  if(e.clientX >= (x / 4) - 200 && e.clientX <= (x / 4) + 50 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(ac == false) {
      if(at == 1 && palavra == 1) {
        letra1.style.display = "none";
        l1.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac = true;
        l1.style.animationName = "brilho";
        ace1 = true;
      }
      else if(at == 3 && palavra == 1) {
        letra3.style.display = "none";
        l1.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac = true;
        l1.style.animationName = "brilho";
        ace1 = true;
      }
      else if(at == 4 && palavra == 1) {
        letra4.style.display = "none";
        l1.style.color = "#bbfccc";
        act4 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac = true;
        l1.style.animationName = "brilho";
        ace1 = true;
      }
  }
  if(palavra == 50 && at == 2) {
    letra2.style.display = "none";
    l1.style.color = "#bbfccc";
    act2 = true;
    l1.style.animationName = "brilho";
    ace1 = true;
    }
}
  if(e.clientX >= (x / 3) - 50 && e.clientX <= (x / 3) + 50 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(ac3 == false) {
    if(at == 1 && palavra == 50) {
      letra1.style.display = "none";
      l2.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
    else if(at == 3 && palavra == 50) {
      letra3.style.display = "none";
      l2.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
    else if(at == 4 && palavra == 50) {
      letra4.style.display = "none";
      l2.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac3 = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
  }
  if(at == 8 && palavra == 1) {
    letra8.style.display = "none";
    l2.style.color = "#bbfccc";
    act8 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l2.style.animationName = "brilho";
    ace2 = true;
  }
  }
  if(e.clientX >= (x / 2.3) - 50 && e.clientX <= (x / 2) && e.clientY >= y && e.clientY <= y + 50) {
    if(ac2 == false) {
      if(at == 1 && palavra == 1) {
        letra1.style.display = "none";
        l3.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac2 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
      }
      else if(at == 3 && palavra == 1) {
        letra3.style.display = "none";
        l3.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac2 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
      }
      else if(at == 4 && palavra == 1) {
        letra4.style.display = "none";
        l3.style.color = "#bbfccc";
        act4 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac2 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
      }
    else if(palavra == 50 && at == 5) {
    letra5.style.display = "none";
    l3.style.color = "#bbfccc";
    act5 = true;
    l3.style.animationName = "brilho";
    ace3 = true;
    }
  }
}
  if(e.clientX >= (x / 2) - 150 && e.clientX <= (x / 2) + 150 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(ac2 == false) {
    if(at == 1 && palavra == 50) {
      letra1.style.display = "none";
      l4.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
      ace4 = true;
    }
    else if(at == 3 && palavra == 50) {
      letra3.style.display = "none";
      l4.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
      ace4 = true;
    }
    else if(at == 4 && palavra == 50) {
      letra4.style.display = "none";
      l4.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac2 = true;
      l4.style.animationName = "brilho";
      ace4 = true;
    }
  }
  if(at == 9 && palavra == 1) {
    letra9.style.display = "none";
    l4.style.color = "#bbfccc";
    act9 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  }
  if(e.clientX >= (x / 1.6) - 100 && e.clientX <= (x / 1.6) + 50 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(ac3 == false) {
      if(at == 1 && palavra == 1) {
        letra1.style.display = "none";
        l5.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l5.style.animationName = "brilho";
        ace5 = true;
      }
      else if(at == 3 && palavra == 1) {
        letra3.style.display = "none";
        l5.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l5.style.animationName = "brilho";
        ace5 = true;
      }
      else if(at == 4 && palavra == 1) {
        letra4.style.display = "none";
        l5.style.color = "#bbfccc";
        act4 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l5.style.animationName = "brilho";
        ace5 = true;
      }
    else if(palavra == 50 && at == 6) {
    letra6.style.display = "none";
    l5.style.color = "#bbfccc";
    act6 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l5.style.animationName = "brilho";
    ace5 = true;
    }
  }
}
  if(e.clientX >= (x * 0.75) - 50 && e.clientX <= (x * 0.75) + 50 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(palavra == 50 && at == 7) {
    letra7.style.display = "none";
    l6.style.color = "#bbfccc";
    act7 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l6.style.animationName = "brilho";
    ace6 = true;
    }
    else if(palavra == 1 && at == 10) {
      letra10.style.display = "none";
      l6.style.color = "#bbfccc";
      document.onmouseup = null;
      document.onmousemove = null;
      act10 = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
  }
  if(e.clientX >= (x * 0.80) - 50 && e.clientX <= (x * 0.80) + 50 && e.clientY >= y - 50 && e.clientY <= y + 50) {
    if(ac == false) {
    if(at == 1 && palavra == 50) {
      letra1.style.display = "none";
      l7.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
      ace7 = true;
    }
    else if(at == 3 && palavra == 50) {
      letra3.style.display = "none";
      l7.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
      ace7 = true;
    }
    else if(at == 4 && palavra == 50) {
      letra4.style.display = "none";
      l7.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l7.style.animationName = "brilho";
      ace7 = true;
    }
  }
  if(palavra == 1 && at == 11) {
    letra11.style.display = "none";
    l7.style.color = "#bbfccc";
    act11 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l7.style.animationName = "brilho";
    ace7 = true;
  }
  }
}

setInterval(() => {
  if(ace1 == true && ace2 == true && ace3 == true && ace4 == true && ace5 == true && ace6 == true && ace7 == true && reset == false) {
    acertos++;
    switch(true) {
      case secs >= 50:
        pontos += 100;
      break;
      case secs >= 40:
        pontos += 80;
      break;
      case secs >= 30:
        pontos += 60;
      break;
      case secs >= 20:
        pontos += 40;
      break;
      case secs >= 10:
        pontos += 20;
      break;
    }
    setTimeout(stop, 1000);
    setTimeout(mudar, 1000)
    reset = true;
    timer.textContent = "01:00";
    pt.textContent = pontos;
    pauseTimer();
  }
}, 10)

function updateTime() {

  secs--;

  if (secs < 0) {
    secs = 59;
    mins--;
  }

  if(mins == 0 && secs == 0) {
    pauseTimer();
    clearInterval(intervalid);
  }

  secs = pad(secs);
  mins = pad(mins);

  timer.textContent = `${mins}:${secs}`;

  function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }
}

function pauseTimer() {
  paused = true;
  clearInterval(intervalid);
}

function resetTimer() {
  clearInterval(intervalid);
  mins = 1;
  secs = 0;
  timer.textContent = "01:00";
}
