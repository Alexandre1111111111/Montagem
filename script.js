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
const ppalavra = document.querySelector("#palavra");
const letrap = document.querySelector("#letrap");
const acc = document.querySelector("#acc");
const pt = document.querySelector("#pt");
const acm = new Audio("1.mp3");

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
let act12 = false;
let act13 = false;
let act14 = false;
let act15 = false;

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
let xe;
let ye;
let lt = 0;

let ac = false;
let ac2 = false;
let ac3 = false;

let palavraal;

let letra = 0;
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
      y = window.innerHeight / 2.8;
      switch (atl) {
        case 1:
          at = 1;
          acerto(y, x, xe, ye);
        break;
        case 2:
          at = 2;
          acerto(y, x, xe, ye);
        break;
        case 3:
          at = 3;
          acerto(y, x, xe, ye);
        break;
        case 4:
          at = 4;
          acerto(y, x, xe, ye);
        break;
        case 5:
          at = 5;
          acerto(y, x, xe, ye);
        break;
        case 6:
          at = 6;
          acerto(y, x, xe, ye);
        break;
        case 7:
          at = 7;
          acerto(y, x, xe, ye);
        break;
        case 8:
          at = 8;
          acerto(y, x, xe, ye);
        break;
        case 9:
          at = 9;
          acerto(y, x, xe, ye);
        break;
        case 10:
          at = 10;
          acerto(y, x, xe, ye);
        break;
        case 11:
          at = 11;
          acerto(y, x, xe, ye);
        break;
        case 12:
          at = 12;
          acerto(y, x, xe, ye);
        break;
        case 13:
          at = 13;
          acerto(y, x, xe, ye);
        break;
        case 14:
          at = 14;
          acerto(y, x, xe, ye);
        break;
        case 15:
          at = 15;
          acerto(y, x, xe, ye);
        break;
      }
      xe = elmnt.offsetLeft - pos1;
      ye = elmnt.offsetTop - pos2;
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
    if(letrap.style.right != "") {
    lt += 13;
    }
    letrap.style.right = lt + "vh";
    acc.textContent = `${acertos} / 26`;
    mins = 1;
    secs = 0;
    palavraal = 1; 
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
    letra7.textContent = "R";
    letra15.textContent = "O";

    switch (letra) {
      case 1:
    switch (palavraal) {
      case 1:
        l1.textContent = "A";
        l2.textContent = "B";
        l3.textContent = "A";
        l4.textContent = "C";
        l5.textContent = "A";
        l6.textContent = "X";
        l7.textContent = "I";
        palavra = 1;
      break;
      case 2:
        l1.textContent = "A";
        l2.textContent = "B";
        l3.textContent = "E";
        l4.textContent = "L";
        l5.textContent = "H";
        l6.textContent = "A";
        l7.textContent = "";
        palavra = 2;
        letra7.textContent = "E";
        letra15.textContent = "H";
      break;
      case 3:
        l1.textContent = "A";
        l2.textContent = "S";
        l3.textContent = "T";
        l4.textContent = "U";
        l5.textContent = "T";
        l6.textContent = "O";
        l7.textContent = "";
        palavra = 3;
        letra7.textContent = "T";
        letra1.textContent = "U";
        letra9.textContent = "S";
      break;
    }
  break;
  case 2:
    switch (palavraal) {
      case 1:
        l1.textContent = "B";
        l2.textContent = "R";
        l3.textContent = "A";
        l4.textContent = "S";
        l5.textContent = "I";
        l6.textContent = "L";
        l7.textContent = "";
        palavra = 4;
        letra7.textContent = "R";
        letra15.textContent = "S";
      break;
      case 2:
        l1.textContent = "B";
        l2.textContent = "A";
        l3.textContent = "N";
        l4.textContent = "A";
        l5.textContent = "N";
        l6.textContent = "A";
        l7.textContent = "";
        palavra = 5;
        letra7.textContent = "N";
        letra1.textContent = "A";
      break;
      case 3:
        l1.textContent = "B";
        l2.textContent = "O";
        l3.textContent = "L";
        l4.textContent = "A";
        l5.textContent = "";
        l6.textContent = "";
        l7.textContent = "";
        palavra = 6;
        letra7.textContent = "T";
        letra1.textContent = "U";
        letra9.textContent = "S";
      break;
    }
    break;
    case 3:
      switch (palavraal) {
        case 1:
          l1.textContent = "C";
          l2.textContent = "O";
          l3.textContent = "Z";
          l4.textContent = "I";
          l5.textContent = "N";
          l6.textContent = "H";
          l7.textContent = "A";
          palavra = 7;
          letra7.textContent = "Z";
          letra15.textContent = "H";
          letra1.textContent = "O";
          break;
        }
        break;
          case 4:
          switch (palavraal) {
            case 1:
              l1.textContent = "D";
              l2.textContent = "R";
              l3.textContent = "A";
              l4.textContent = "G";
              l5.textContent = "Ã";
              l6.textContent = "O";
              l7.textContent = "";
              palavra = 10;
              letra7.textContent = "B";
              letra15.textContent = "N";
              letra1.textContent = "A";
              letra2.textContent = "D";
              letra3.textContent = "R";
              letra6.textContent = "G";
              letra9.textContent = "Ã";
              letra8.textContent = "O";
              break;
          }
            break;
            case 5:
          switch (palavraal) {
            case 1:
              l1.textContent = "E";
              l2.textContent = "V";
              l3.textContent = "E";
              l4.textContent = "N";
              l5.textContent = "T";
              l6.textContent = "O";
              l7.textContent = "";
              palavra = 13;
              letra7.textContent = "E";
              letra15.textContent = "V";
              letra1.textContent = "T";
              break;
          }
            break;
            case 6:
          switch (palavraal) {
            case 1:
              l1.textContent = "F";
              l2.textContent = "A";
              l3.textContent = "C";
              l4.textContent = "A";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 16;
              letra7.textContent = "B";
              letra15.textContent = "N";
              letra1.textContent = "A";
              break;
          }
          break;
            case 7:
            switch (palavraal) {
            case 1:
              l1.textContent = "G";
              l2.textContent = "A";
              l3.textContent = "I";
              l4.textContent = "O";
              l5.textContent = "L";
              l6.textContent = "A";
              l7.textContent = "";
              palavra = 19;
              letra7.textContent = "G";
              letra15.textContent = "I";
              letra1.textContent = "L";
              break;
          }
          break;
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
    letra1.style.top = "60vh";
    letra1.style.left = "70vh";
    letra2.style.top = "65vh";
    letra2.style.left = "100vh";
    letra3.style.top = "65vh";
    letra3.style.left = "130vh";
    letra4.style.top = "0vh";
    letra4.style.left = "85vh";
    letra5.style.top = "60vh";
    letra5.style.left = "20vh";
    letra6.style.top = "0vh";
    letra6.style.left = "30vh";
    letra7.style.top = "5vh";
    letra7.style.left = "150vh";
    letra8.style.top = "-5vh";
    letra8.style.left = "50vh";
    letra9.style.top = "55vh";
    letra9.style.left = "150vh";
    letra10.style.top = "55vh";
    letra10.style.left = "40vh";
    letra11.style.top = "5vh";
    letra11.style.left = "10vh";
    letra12.style.top = "0vh";
    letra12.style.left = "130vh";
    letra13.style.top = "35vh";
    letra13.style.left = "0vh";
    letra14.style.top = "-5vh";
    letra14.style.left = "165vh";
    letra15.style.top = "50vh";
    letra15.style.left = "160vh";
}

function acerto(y, x, xe, ye) {

  ////////////////////////////////////////// 1

  if(xe >= (x / 5) - 150 && xe <= (x / 5) + 70 && ye >= y - 80 && ye <= y + 50) {
    if(ac == false) {
      if(at == 1 && palavra == 1 || at == 1 && palavra == 2) {
        letra1.style.display = "none";
        l1.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac = true;
        l1.style.animationName = "brilho";
        ace1 = true;
      }
      else if(at == 3 && palavra == 1 || at == 3 && palavra == 2 || at == 3 && palavra == 3) {
        letra3.style.display = "none";
        l1.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac = true;
        l1.style.animationName = "brilho";
        ace1 = true;
      }
      else if(at == 4 && palavra == 1 || at == 4 && palavra == 2 || at == 4 && palavra == 3) {
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
  if(at == 8 && palavra == 4 || at == 8 && palavra == 5) {
    letra8.style.display = "none";
    l1.style.color = "#bbfccc";
    act8 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l1.style.animationName = "brilho";
    ace1 = true;
  }
  if(at == 9 && palavra == 7) {
    letra9.style.display = "none";
    l1.style.color = "#bbfccc";
    act9 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l1.style.animationName = "brilho";
    ace1 = true;
  }
  if(palavra == 50 && at == 2) {
    letra2.style.display = "none";
    l1.style.color = "#bbfccc";
    act2 = true;
    l1.style.animationName = "brilho";
    ace1 = true;
    }
    if(at == 2 && palavra == 10) {
      letra2.style.display = "none";
      l1.style.color = "#bbfccc";
      act2 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l1.style.animationName = "brilho";
      ace1 = true;
    }
}

  ////////////////////////////////////////// 2

  if(xe >= (x / 3.5) - 50 && xe <= (x / 3.5) + 80 && ye >= y - 50 && ye <= y + 50) {
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
  if(ac == false) {
    if(at == 1 && palavra == 4) {
      letra1.style.display = "none";
      l2.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace1 = true;
    }
    else if(at == 3 && palavra == 4) {
      letra3.style.display = "none";
      l2.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace1 = true;
    }
    else if(at == 4 && palavra == 4) {
      letra4.style.display = "none";
      l2.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace1 = true;
    }
}
  if(at == 8 && palavra == 1 || at == 8 && palavra == 2) {
    letra8.style.display = "none";
    l2.style.color = "#bbfccc";
    act8 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l2.style.animationName = "brilho";
    ace2 = true;
  }
  if(at == 9 && palavra == 3) {
    letra9.style.display = "none";
    l2.style.color = "#bbfccc";
    act9 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l2.style.animationName = "brilho";
    ace2 = true;
  }
  if(at == 7 && palavra == 4) {
    letra7.style.display = "none";
    l2.style.color = "#bbfccc";
    act7 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l2.style.animationName = "brilho";
    ace2 = true;
  }
      if(at == 1 && palavra == 7) {
      letra1.style.display = "none";
      l2.style.color = "#bbfccc";
      act1 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
    if(at == 3 && palavra == 10) {
      letra3.style.display = "none";
      l2.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
  }
  
  ////////////////////////////////////////// 3

  if(xe >= (x / 2.6) - 50 && xe <= (x / 2.6) + 80 && ye >= y - 70 && ye <= y + 50) {
    if(ac2 == false) {
      if(at == 1 && palavra == 1 || at == 1 && palavra == 4) {
        letra1.style.display = "none";
        l3.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac2 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
      }
      else if(at == 3 && palavra == 1 || at == 3 && palavra == 4) {
        letra3.style.display = "none";
        l3.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac2 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
      }
      else if(at == 4 && palavra == 1 || at == 4 && palavra == 4) {
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
    else if(palavra == 2 && at == 7) {
      letra7.style.display = "none";
      l3.style.color = "#bbfccc";
      act7 = true;
      l3.style.animationName = "brilho";
      ace3 = true;
      }
      else if(palavra == 3 && at == 12) {
        letra12.style.display = "none";
        l3.style.color = "#bbfccc";
        act12 = true;
        l3.style.animationName = "brilho";
        ace3 = true;
        }
        else if(palavra == 3 && at == 7) {
          letra7.style.display = "none";
          l3.style.color = "#bbfccc";
          act5 = true;
          l3.style.animationName = "brilho";
          ace3 = true;
          }
  }
  if(at == 7 && palavra == 7) {
    letra7.style.display = "none";
    l3.style.color = "#bbfccc";
    act7 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
  if(at == 4 && palavra == 10) {
    letra4.style.display = "none";
    l3.style.color = "#bbfccc";
    act4 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
  else if(at == 1 && palavra == 10) {
    letra1.style.display = "none";
    l3.style.color = "#bbfccc";
    act1 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
}

  ////////////////////////////////////////// 4

  if(xe >= (x / 2) - 50 && xe <= (x / 2) + 70 && ye >= y - 70 && ye <= y + 50) {
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
  if(at == 5 && palavra == 2) {
    letra5.style.display = "none";
    l4.style.color = "#bbfccc";
    act5 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 1 && palavra == 3) {
    letra1.style.display = "none";
    l4.style.color = "#bbfccc";
    act1 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 15 && palavra == 4) {
    letra15.style.display = "none";
    l4.style.color = "#bbfccc";
    act15 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 11 && palavra == 7) {
    letra11.style.display = "none";
    l4.style.color = "#bbfccc";
    act11 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 6 && palavra == 10) {
    letra6.style.display = "none";
    l4.style.color = "#bbfccc";
    act6 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  else if(at == 13 && palavra == 10) {
    letra13.style.display = "none";
    l4.style.color = "#bbfccc";
    act13 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  }
  
  ////////////////////////////////////////// 5

  if(xe >= (x / 1.7) - 120 && xe <= (x / 1.7) + 80 && ye >= y - 50 && ye <= y + 30) {
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
  if(palavra == 2 && at == 15) {
    letra15.style.display = "none";
    l5.style.color = "#bbfccc";
    act15 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    l5.style.animationName = "brilho";
    ace5 = true;
    }
    else if(palavra == 3 && at == 12) {
      letra12.style.display = "none";
      l5.style.color = "#bbfccc";
      act12 = true;
      l5.style.animationName = "brilho";
      ace5 = true;
      }
      else if(palavra == 3 && at == 7) {
        letra7.style.display = "none";
        l5.style.color = "#bbfccc";
        act5 = true;
        l5.style.animationName = "brilho";
        ace5 = true;
        }
        else if(palavra == 4 && at == 11) {
          letra11.style.display = "none";
          l5.style.color = "#bbfccc";
          act11 = true;
          l5.style.animationName = "brilho";
          ace5 = true;
          }
          if(at == 14 && palavra == 7) {
            letra14.style.display = "none";
            l5.style.color = "#bbfccc";
            act14 = true;
            document.onmouseup = null;
            document.onmousemove = null;
            ac = true;
            l5.style.animationName = "brilho";
            ace5 = true;
          }
          if(at == 9 && palavra == 10) {
            letra9.style.display = "none";
            l5.style.color = "#bbfccc";
            act9 = true;
            document.onmouseup = null;
            document.onmousemove = null;
            ac = true;
            l5.style.animationName = "brilho";
            ace5 = true;
          }
}

  ////////////////////////////////////////// 6

  if(xe >= (x * 0.7) - 50 && xe <= (x * 0.7) + 50 && ye >= y - 100 && ye <= y + 50) {
    if(ac3 == false) {
      if(at == 1 && palavra == 2) {
        letra1.style.display = "none";
        l6.style.color = "#bbfccc";
        act1 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l6.style.animationName = "brilho";
        ace6 = true;
      }
      else if(at == 3 && palavra == 2) {
        letra3.style.display = "none";
        l6.style.color = "#bbfccc";
        act3 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l6.style.animationName = "brilho";
        ace6 = true;
      }
      else if(at == 4 && palavra == 2) {
        letra4.style.display = "none";
        l6.style.color = "#bbfccc";
        act4 = true;
        document.onmouseup = null;
        document.onmousemove = null;
        ac3 = true;
        l6.style.animationName = "brilho";
        ace6 = true;
      }
    }
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
    else if(palavra == 3 && at == 15) {
      letra15.style.display = "none";
      l6.style.color = "#bbfccc";
      document.onmouseup = null;
      document.onmousemove = null;
      act15 = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
    else if(palavra == 4 && at == 5) {
      letra5.style.display = "none";
      l6.style.color = "#bbfccc";
      document.onmouseup = null;
      document.onmousemove = null;
      act5 = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
    if(at == 15 && palavra == 7) {
      letra15.style.display = "none";
      l6.style.color = "#bbfccc";
      act15 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
    if(at == 8 && palavra == 10) {
      letra8.style.display = "none";
      l6.style.color = "#bbfccc";
      act8 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
  }
  
  ////////////////////////////////////////// 7

  if(xe >= (x * 0.80) - 120 && xe <= (x * 0.80) + 10 && ye >= y - 70 && ye <= y + 70) {
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
  if(at == 4 && palavra == 7) {
    letra4.style.display = "none";
    l7.style.color = "#bbfccc";
    act4 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l7.style.animationName = "brilho";
    ace7 = true;
  }
  else if(at == 3 && palavra == 7) {
    letra3.style.display = "none";
    l7.style.color = "#bbfccc";
    act3 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l7.style.animationName = "brilho";
    ace7 = true;
  }
  }
}

setInterval(() => {
  switch (true) {
    case ace1 == true && ace2 == true && ace3 == true && ace4 == true && reset == false && l5.textContent == "":
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
      break;
    case ace1 == true && ace2 == true && ace3 == true && ace4 == true && ace5 == true && reset == false && l6.textContent == "":
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
      break;
    case ace1 == true && ace2 == true && ace3 == true && ace4 == true && ace5 == true && ace6 == true && reset == false && l7.textContent == "":
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
      break;
  case ace1 == true && ace2 == true && ace3 == true && ace4 == true && ace5 == true && ace6 == true && ace7 == true && reset == false && l7.textContent != "":
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
    break;
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
  acm.currentTime = 0;
  acm.volume = 0.5;
  if(secs > 0) {
  acm.play();
  }
}

function resetTimer() {
  clearInterval(intervalid);
  mins = 1;
  secs = 0;
  timer.textContent = "01:00";
}
