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
const acerta = document.querySelector("#acerta");
const tempo = document.querySelector("#tempo");
const ponto = document.querySelector("#ponto");
const fim = document.querySelector("#fim");

let mins = 1;
let secs = 0;
let paused = true;
let intervalid;

let mins2 = 0;
let secs2 = 0;
let paused2 = false;
let intervalid2;

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
      xe = elmnt.offsetLeft;
      ye = elmnt.offsetTop;
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
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

mudar();

intervalid2 = setInterval(updateTime2, 1000);

function mudar() {
    letra++;
    if(letrap.style.right != "" && acertos != 6) {
    lt += 12.7;
    }
    letrap.style.right = lt + "vh";
    acc.textContent = `${acertos} / 6`;
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
              letra3.textContent = "E";
              letra5.textContent = "O";
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
              letra7.textContent = "F";
              letra15.textContent = "I";
              letra1.textContent = "Y";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 7:
          switch (palavraal) {
            case 1:
              l1.textContent = "G";
              l2.textContent = "A";
              l3.textContent = "T";
              l4.textContent = "O";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 19;
              letra7.textContent = "G";
              letra15.textContent = "A";
              letra1.textContent = "T";
              letra9.textContent = "O";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 8:
          switch (palavraal) {
            case 1:
              l1.textContent = "H";
              l2.textContent = "I";
              l3.textContent = "N";
              l4.textContent = "O";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 21;
              letra7.textContent = "H";
              letra15.textContent = "I";
              letra1.textContent = "N";
              letra9.textContent = "O";
              letra4.textContent = "A";
              letra3.textContent = "S";
              break;
          }
          break;
          case 9:
          switch (palavraal) {
            case 1:
              l1.textContent = "i";
              l2.textContent = "M";
              l3.textContent = "Ã";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 24;
              letra7.textContent = "I";
              letra15.textContent = "M";
              letra1.textContent = "Ã";
              letra9.textContent = "F";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 10:
          switch (palavraal) {
            case 1:
              l1.textContent = "J";
              l2.textContent = "A";
              l3.textContent = "C";
              l4.textContent = "A";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 27;
              letra7.textContent = "J";
              letra15.textContent = "A";
              letra1.textContent = "C";
              letra9.textContent = "O";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 11:
          switch (palavraal) {
            case 1:
              l1.textContent = "K";
              l2.textContent = "I";
              l3.textContent = "W";
              l4.textContent = "I";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 30;
              letra7.textContent = "K";
              letra15.textContent = "I";
              letra1.textContent = "W";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 12:
          switch (palavraal) {
            case 1:
              l1.textContent = "L";
              l2.textContent = "U";
              l3.textContent = "A";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 33;
              letra7.textContent = "L";
              letra15.textContent = "U";
              letra1.textContent = "A";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 13:
          switch (palavraal) {
            case 1:
              l1.textContent = "M";
              l2.textContent = "A";
              l3.textContent = "C";
              l4.textContent = "A";
              l5.textContent = "C";
              l6.textContent = "O";
              l7.textContent = "";
              palavra = 36;
              letra7.textContent = "M";
              letra15.textContent = "A";
              letra1.textContent = "C";
              letra9.textContent = "C";
              letra4.textContent = "O";
              letra3.textContent = "A";
              break;
          }
          break;
          case 14:
          switch (palavraal) {
            case 1:
              l1.textContent = "N";
              l2.textContent = "A";
              l3.textContent = "R";
              l4.textContent = "I";
              l5.textContent = "Z";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 39;
              letra7.textContent = "N";
              letra15.textContent = "A";
              letra1.textContent = "R";
              letra9.textContent = "I";
              letra4.textContent = "Z";
              letra3.textContent = "A";
              break;
          }
          break;
          case 15:
          switch (palavraal) {
            case 1:
              l1.textContent = "O";
              l2.textContent = "V";
              l3.textContent = "O";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 42;
              letra7.textContent = "O";
              letra15.textContent = "V";
              letra1.textContent = "O";
              letra9.textContent = "";
              letra4.textContent = "";
              letra3.textContent = "";
              break;
          }
          break;
          case 16:
          switch (palavraal) {
            case 1:
              l1.textContent = "P";
              l2.textContent = "A";
              l3.textContent = "R";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 45;
              letra7.textContent = "P";
              letra15.textContent = "R";
              letra1.textContent = "A";
              letra9.textContent = "";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 17:
          switch (palavraal) {
            case 1:
              l1.textContent = "Q";
              l2.textContent = "U";
              l3.textContent = "I";
              l4.textContent = "Z";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 48;
              letra7.textContent = "Q";
              letra15.textContent = "U";
              letra1.textContent = "I";
              letra9.textContent = "Z";
              letra4.textContent = "Z";
              letra3.textContent = "A";
              break;
          }
          break;
          case 18:
          switch (palavraal) {
            case 1:
              l1.textContent = "R";
              l2.textContent = "I";
              l3.textContent = "O";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 51;
              letra7.textContent = "R";
              letra15.textContent = "I";
              letra1.textContent = "O";
              letra9.textContent = "U";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 19:
          switch (palavraal) {
            case 1:
              l1.textContent = "S";
              l2.textContent = "O";
              l3.textContent = "L";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 54;
              letra7.textContent = "S";
              letra15.textContent = "O";
              letra1.textContent = "L";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 20:
          switch (palavraal) {
            case 1:
              l1.textContent = "T";
              l2.textContent = "I";
              l3.textContent = "A";
              l4.textContent = "";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 57;
              letra7.textContent = "T";
              letra15.textContent = "I";
              letra1.textContent = "A";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 21:
          switch (palavraal) {
            case 1:
              l1.textContent = "U";
              l2.textContent = "R";
              l3.textContent = "S";
              l4.textContent = "O";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 60;
              letra7.textContent = "U";
              letra15.textContent = "R";
              letra1.textContent = "S";
              letra9.textContent = "O";
              letra4.textContent = "S";
              letra3.textContent = "D";
              break;
          }
          break;
          case 22:
          switch (palavraal) {
            case 1:
              l1.textContent = "V";
              l2.textContent = "A";
              l3.textContent = "C";
              l4.textContent = "A";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 63;
              letra7.textContent = "V";
              letra15.textContent = "A";
              letra1.textContent = "D";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 23:
          switch (palavraal) {
            case 1:
              l1.textContent = "W";
              l2.textContent = "A";
              l3.textContent = "F";
              l4.textContent = "F";
              l5.textContent = "L";
              l6.textContent = "E";
              l7.textContent = "";
              palavra = 66;
              letra7.textContent = "F";
              letra15.textContent = "W";
              letra1.textContent = "A";
              letra9.textContent = "L";
              letra4.textContent = "E";
              letra3.textContent = "";
              break;
          }
          break;
          case 24:
          switch (palavraal) {
            case 1:
              l1.textContent = "X";
              l2.textContent = "U";
              l3.textContent = "X";
              l4.textContent = "A";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 69;
              letra7.textContent = "X";
              letra15.textContent = "U";
              letra1.textContent = "X";
              letra9.textContent = "A";
              letra4.textContent = "";
              letra3.textContent = "";
              break;
          }
          break;
          case 25:
          switch (palavraal) {
            case 1:
              l1.textContent = "Y";
              l2.textContent = "O";
              l3.textContent = "G";
              l4.textContent = "A";
              l5.textContent = "";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 72;
              letra7.textContent = "O";
              letra15.textContent = "G";
              letra1.textContent = "Y";
              letra9.textContent = "C";
              letra4.textContent = "A";
              letra3.textContent = "A";
              break;
          }
          break;
          case 26:
          switch (palavraal) {
            case 1:
              l1.textContent = "Z";
              l2.textContent = "I";
              l3.textContent = "P";
              l4.textContent = "E";
              l5.textContent = "R";
              l6.textContent = "";
              l7.textContent = "";
              palavra = 75;
              letra7.textContent = "Z";
              letra15.textContent = "I";
              letra1.textContent = "P";
              letra9.textContent = "E";
              letra4.textContent = "R";
              letra3.textContent = "A";
              break;
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

  if(xe >= l1.offsetLeft - 10 && xe <= l1.offsetLeft + 10 && ye >= l1.offsetTop - 10 && ye <= l1.offsetTop + 10) {
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
    if(at == 7 && palavra == 13 && ace1 == false) {
      letra7.style.display = "none";
      l1.style.color = "#bbfccc";
      act7 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l1.style.animationName = "brilho";
      ace1 = true;
    }
    else if(at == 3 && palavra == 13 && ace1 == false) {
      letra3.style.display = "none";
      l1.style.color = "#bbfccc";
      act3 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l1.style.animationName = "brilho";
      ace1 = true;
    }
    if(at == 7 && palavra == 16) {
      letra7.style.display = "none";
      l1.style.color = "#bbfccc";
      act7 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l1.style.animationName = "brilho";
      ace1 = true;
    }
}

  ////////////////////////////////////////// 2

  if(xe >= l2.offsetLeft - 10 && xe <= l2.offsetLeft + 10 && ye >= l2.offsetTop - 10 && ye <= l2.offsetTop + 10) {
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
    if(at == 15 && palavra == 13) {
      letra15.style.display = "none";
      l2.style.color = "#bbfccc";
      act15 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
    if(at == 4 && palavra == 16 && ace2 == false) {
      letra4.style.display = "none";
      l2.style.color = "#bbfccc";
      act4 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l2.style.animationName = "brilho";
      ace2 = true;
    }
    else if(at == 3 && palavra == 16 && ace2 == false) {
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

  if(xe >= l3.offsetLeft - 10 && xe <= l3.offsetLeft + 10 && ye >= l3.offsetTop - 10 && ye <= l3.offsetTop + 10) {
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
  if(at == 7 && palavra == 13 && ace3 == false) {
    letra7.style.display = "none";
    l3.style.color = "#bbfccc";
    act7 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
  else if(at == 3 && palavra == 13 && ace3 == false) {
    letra3.style.display = "none";
    l3.style.color = "#bbfccc";
    act3 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
  if(at == 9 && palavra == 16) {
    letra9.style.display = "none";
    l3.style.color = "#bbfccc";
    act9 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l3.style.animationName = "brilho";
    ace3 = true;
  }
}

  ////////////////////////////////////////// 4

  if(xe >= l4.offsetLeft - 10 && xe <= l4.offsetLeft + 10 && ye >= l4.offsetTop - 10 && ye <= l4.offsetTop + 10) {
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
  if(at == 6 && palavra == 10 && ace4 == false) {
    letra6.style.display = "none";
    l4.style.color = "#bbfccc";
    act6 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  else if(at == 13 && palavra == 10 && ace4 == false) {
    letra13.style.display = "none";
    l4.style.color = "#bbfccc";
    act13 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 14 && palavra == 13) {
    letra14.style.display = "none";
    l4.style.color = "#bbfccc";
    act14 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  if(at == 4 && palavra == 16 && ace4 == false) {
    letra4.style.display = "none";
    l4.style.color = "#bbfccc";
    act4 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  else if(at == 3 && palavra == 16 && ace4 == false) {
    letra3.style.display = "none";
    l4.style.color = "#bbfccc";
    act3 = true;
    document.onmouseup = null;
    document.onmousemove = null;
    ac = true;
    l4.style.animationName = "brilho";
    ace4 = true;
  }
  }
  
  ////////////////////////////////////////// 5

  if(xe >= l5.offsetLeft - 10 && xe <= l5.offsetLeft + 10 && ye >= l5.offsetTop - 10 && ye <= l5.offsetTop + 10) {
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
          if(at == 12 && palavra == 13) {
            letra12.style.display = "none";
            l5.style.color = "#bbfccc";
            act12 = true;
            document.onmouseup = null;
            document.onmousemove = null;
            ac = true;
            l5.style.animationName = "brilho";
            ace5 = true;
          }
}

  ////////////////////////////////////////// 6

  if(xe >= l6.offsetLeft - 10 && xe <= l6.offsetLeft + 10 && ye >= l6.offsetTop - 10 && ye <= l6.offsetTop + 10) {
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
    if(at == 5 && palavra == 13) {
      letra5.style.display = "none";
      l6.style.color = "#bbfccc";
      act5 = true;
      document.onmouseup = null;
      document.onmousemove = null;
      ac = true;
      l6.style.animationName = "brilho";
      ace6 = true;
    }
    else if(at == 8 && palavra == 13) {
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

  if(xe >= l7.offsetLeft - 10 && xe <= l7.offsetLeft + 10 && ye >= l7.offsetTop - 10 && ye <= l7.offsetTop + 10) {
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
  if(acertos == 6) {
    setTimeout(() => {
    clearInterval(intervalid);
    ponto.textContent = `Total de pontos: ${pontos}`;
    acerta.textContent = `Você acertou ${acertos} palavras.`;
    fim.style.display = "flex";
    l1.textContent = "";
    l2.textContent = "";
    l3.textContent = "";
    l4.textContent = "";
    pauseTimer2();
    }, 1000);
  }
}, 10)

function updateTime2() {

  secs2++;

  if (secs2 > 59) {
    secs2 = 0;
    mins2++;
  }

  secs2 = pad(secs2);
  mins2 = pad(mins2);

  tempo.textContent = `Tempo: ${mins2}:${secs2}`;

  function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }
}

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
function pauseTimer2() {
  paused2 = true;
  clearInterval(intervalid2);
}

function resetTimer() {
  clearInterval(intervalid);
  mins = 1;
  secs = 0;
  timer.textContent = "01:00";
}
