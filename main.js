var defa = 1;
let bgcolor = "hsl(222, 26%, 31%)";
let numbgcolor = "#252D44";
let numcolor = "#E9E3DB";
let ffcolor = "#252D44";
let inpubgcolor = "#181F32";
let inpucolor = "white"; //same as calc theme numbers
let delResetbgcolor = "#647299";
let delResetcolor = "white";
let equbgcolor = "#D13F30";
let equcolor = "white";
let togglebgcolor = "hsl(223, 31%, 20%)";
let ballbgcolor = "hsl(6, 70%, 34%)";

document.body.style.margin = "0px";
document.body.style.fontFamily = "League Spartan, sans-serif";
let container = document.createElement("section");
let s1 = document.createElement("div");
let h1 = document.createElement("h1");
let switchh = document.createElement("div");
let theme = document.createElement("h3");
let sblock = document.createElement("div");
let num = document.createElement("p");
let toggle = document.createElement("div");
let ball = document.createElement("div");
toggle.className = "toggle";
ball.className = "ball";
container.style.width = "90%";
container.style.marginLeft = "auto";
container.style.marginRight = "auto";
s1.style.display = "flex";
s1.style.justifyContent = "space-between";
h1.textContent = "calc";
switchh.style.display = "flex";
theme.textContent = "theme";
theme.style.position = "relative";
theme.style.left = "-10px";
theme.style.color = "white";
theme.style.textTransform = "upperCase";
num.textContent = "1 2 3";
num.style.letterSpacing = "10px";
num.style.position = "relative";
num.style.top = "-20px";
toggle.style.height = "35px";
toggle.style.width = "100%";
toggle.style.borderRadius = "20px";
toggle.style.position = "relative";
toggle.style.top = "-33px";
toggle.style.left = "-5px";
toggle.style.display = "flex";
toggle.style.alignItems = "center";
toggle.appendChild(ball);
sblock.appendChild(num);
sblock.appendChild(toggle);
switchh.appendChild(theme);
switchh.appendChild(sblock);
switchh.style.position = "relative";
switchh.style.top = "15px";
ball.style.height = "65%";
ball.style.width = "20px";
ball.style.position = "absolute";
ball.style.transition = "0.5 ease";
ball.style.left = "3px";
ball.style.borderRadius = "50%";
s1.appendChild(switchh);
container.appendChild(s1);
s1.appendChild(h1);
s1.appendChild(switchh);
document.body.appendChild(container);
//           section
// h1              switchh(theme -- div( numbers))
//                                       toggle
//

let inpu = document.createElement("input");
inpu.type = "text";
inpu.className = "input";
inpu.style.width = "98%";
inpu.style.height = "100px";
inpu.style.margin = "auto";
inpu.style.borderRadius = "20px";
inpu.style.marginTop = "20px";
inpu.style.paddingLeft = "10px";
inpu.style.transition = "0.4s ease";
inpu.style.border = "none";
inpu.style.fontSize = "xxx-large";
inpu.style.fontFamily = "League Spartan, sans-serif";
container.appendChild(inpu);
////numbersss
let numbers = document.createElement("div");
numbers.type = "number";
numbers.style.width = "95%";
numbers.style.height = "auto";
numbers.style.margin = "auto";
numbers.style.borderRadius = "20px";
numbers.style.marginTop = "20px";
numbers.style.border = "none";
numbers.style.color = "white";
numbers.style.fontSize = "xxx-large";
numbers.style.fontFamily = "League Spartan, sans-serif";
numbers.style.display = "grid";
numbers.style.gridTemplateRows = "repeat(5,1fr)";
numbers.style.gridTemplateColumns = "repeat(4,1fr)";
numbers.style.padding = "0.5rem";

container.appendChild(numbers);
for (let i = 0; i < 10; i++) {
  let nu = document.createElement("div");
  nu.className = "number";
  nu.textContent = i;
  if (i === 0) {
    nu.style.gridArea = "4 / 2 / 4 /2";
  }
  nu.style.height = "70px";
  nu.style.fontFamily = "League Spartan, sans-serif";
  nu.style.fontSize = "1.5rem";
  nu.style.fontWeight = "700";
  nu.style.display = "flex";
  nu.style.justifyContent = "center";
  nu.style.alignItems = "center";
  nu.style.margin = "0.5rem";
  nu.style.borderRadius = "5px";
  nu.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
  numbers.appendChild(nu);
}
var nu = document.createElement("div");
nu.className = "number";
nu.textContent = ".";
nu.style.fontFamily = "League Spartan, sans-serif";
nu.style.fontSize = "1.5rem";
nu.style.fontWeight = "700";
nu.style.display = "flex";
nu.style.gridArea = "4 / 1 / 4 /2";
nu.style.justifyContent = "center";
nu.style.alignItems = "center";
nu.style.margin = "0.5rem";
nu.style.borderRadius = "5px";
nu.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
numbers.appendChild(nu);

var nu1 = document.createElement("div");
nu1.className = "number";
nu1.textContent = "-";
nu1.style.fontFamily = "League Spartan, sans-serif";
nu1.style.fontSize = "1.5rem";
nu1.style.fontWeight = "700";
nu1.style.display = "flex";
nu1.style.justifyContent = "center";
nu1.style.alignItems = "center";
nu1.style.margin = "0.5rem";
nu1.style.gridArea = "2 / 4 / 2 /4";
nu1.style.borderRadius = "5px";
nu1.style.fontSize = "smaller";
nu1.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
numbers.appendChild(nu1);

var nu2 = document.createElement("div");
nu2.className = "number";
nu2.textContent = "+";
nu2.style.fontFamily = "League Spartan, sans-serif";
nu2.style.fontSize = "1.5rem";
nu2.style.fontWeight = "700";
nu2.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
nu2.style.display = "flex";
nu2.style.justifyContent = "center";
nu2.style.alignItems = "center";
nu2.style.borderRadius = "5px";
nu2.style.margin = "0.5rem";
nu2.style.fontSize = "smaller";
numbers.appendChild(nu2);

var nu3 = document.createElement("div");
nu3.className = "number";
nu3.textContent = "*";
nu3.style.fontFamily = "League Spartan, sans-serif";
nu3.style.fontSize = "1.5rem";
nu3.style.fontWeight = "700";
nu3.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
nu3.style.display = "flex";
nu3.style.justifyContent = "center";
nu3.style.alignItems = "center";
nu3.style.borderRadius = "5px";
nu3.style.margin = "0.5rem";
nu3.style.gridArea = "4 / 4 / 4 /5";
nu3.style.fontSize = "smaller";
numbers.appendChild(nu3);

var nu4 = document.createElement("div");
nu4.className = "number";
nu4.textContent = "/";
nu4.style.borderRadius = "5px";
nu4.style.fontFamily = "League Spartan, sans-serif";
nu4.style.fontSize = "0.5rem";
nu4.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
nu4.style.fontWeight = "700";
nu4.style.display = "flex";
nu4.style.justifyContent = "center";
nu4.style.alignItems = "center";
nu4.style.margin = "0.5rem";
nu4.style.gridArea = "4 / 3 / 4 /4";
nu4.style.fontSize = "x-large";
numbers.appendChild(nu4);

var reset = document.createElement("div");
reset.className = "reset";
reset.textContent = "RESET";
reset.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -15px 5px -13px inset";
reset.style.fontFamily = "League Spartan, sans-serif";
reset.style.fontSize = "0.5rem";
reset.style.fontWeight = "700";
reset.style.borderRadius = "5px";
reset.style.display = "flex";
reset.style.justifyContent = "center";
reset.style.alignItems = "center";
reset.style.margin = "0.5rem";
reset.style.gridArea = "5 / 1 / 5 / 3";
reset.style.fontSize = "initial";
numbers.appendChild(reset);

var equ = document.createElement("div");
equ.className = "equal";
equ.textContent = "=";
equ.style.fontFamily = "League Spartan, sans-serif";
equ.style.fontSize = "0.5rem";
equ.style.fontWeight = "700";
equ.style.display = "flex";
equ.style.justifyContent = "center";
equ.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
equ.style.alignItems = "center";
equ.style.margin = "0.5rem";
equ.style.gridArea = "5 / 3 / 5 / 5";
equ.style.fontSize = "initial";
equ.style.borderRadius = "5px";
numbers.appendChild(equ);

var del = document.createElement("div");
del.className = "del";
del.textContent = "DEL";
del.style.fontFamily = "League Spartan, sans-serif";
del.style.fontSize = "0.5rem";
del.style.fontWeight = "700";
del.style.display = "flex";
del.style.borderRadius = "5px";
del.style.justifyContent = "center";
del.style.alignItems = "center";
del.style.margin = "0.5rem";
del.style.boxShadow = "rgba(0, 0, 0, 0.60) 0px -18px 5px -13px inset";
del.style.gridArea = "1 / 4 / 1 /5";
del.style.fontSize = "initial";
numbers.appendChild(del);
//initial colors
let changes = document.getElementsByClassName("number");
document.body.style.backgroundColor = bgcolor;
h1.style.color = inpucolor;
  num.style.color = inpucolor;
  toggle.style.backgroundColor = togglebgcolor;
  ball.style.backgroundColor = ballbgcolor;
  inpu.style.backgroundColor = inpubgcolor;
  inpu.style.color = inpucolor;
  numbers.style.backgroundColor = numbgcolor;
  for (let i = 0; i < changes.length; i++) {
    changes[i].style.color = ffcolor;
    changes[i].style.backgroundColor = numcolor;
  }
  reset.style.color = delResetcolor;
  reset.style.backgroundColor = delResetbgcolor;
  equ.style.color = equcolor;
  equ.style.backgroundColor = equbgcolor;
  del.style.color = delResetcolor;
  del.style.backgroundColor = delResetbgcolor;

function QueryM(mobile) {
  if (mobile.matches === true) {
    container.className = "main";
    container.style.width = "90%";
    container.style.minHeight = "100vh";
    container.style.margin = "auto";
    container.style.marginTop = "1.2rem";
    s1.style.width = "100%";
    s1.style.display = "flex";
    s1.style.justifyContent = "space-between";
    switchh.style.width = "45%";
    switchh.style.display = "flex";
    switchh.style.justifyContent = "space-between";
  } else {
  }
}

var togglelistener = document.getElementsByClassName("toggle");
var balllistener = document.getElementsByClassName("ball");
togglelistener[0].addEventListener("mouseenter", () => {
  togglelistener[0].style.cursor = "pointer";
  balllistener[0].addEventListener("click", changetheme, true);
});

function changetheme() {
  if (defa == 1) {
    defa = 2;
    bgcolor = "#E6E6E6";
    numbgcolor = "#D3CDCD";
    numcolor = "#E5E4E0";
    ffcolor = "#37362D";
    inpubgcolor = "#EEEEEE";
    inpucolor = "#37362D"; //same as calc theme numbers
    delResetbgcolor = "#388187";
    delResetcolor = "white";
    equbgcolor = "#C85401";
    equcolor = "white";
    togglebgcolor = "#D3CDCD";
    ballbgcolor = "#C75404";
    ball.style.left = "29px";
  } else if (defa == 2) {
    defa = 3;
    bgcolor = "#17062A";
    numbgcolor = "#252D44";
    numcolor = "#331B4D";
    ffcolor = "#FDE54C";
    inpubgcolor = "#1E0836";
    inpucolor = "#FFEE42"; //same as calc theme numbers
    delResetbgcolor = "#550879";
    delResetcolor = "white";
    equbgcolor = "#00DECF";
    equcolor = "black";
    togglebgcolor = "#1E0836";
    ballbgcolor = "#07DACF";
    ball.style.left = "60px";
  } else if (defa == 3) {
    defa = 1;
    bgcolor = "hsl(222, 26%, 31%)";
    numbgcolor = "#252D44";
    numcolor = "#E9E3DB";
    ffcolor = "#252D44";
    inpubgcolor = "#181F32";
    inpucolor = "white"; //same as calc theme numbers
    delResetbgcolor = "#647299";
    delResetcolor = "white";
    equbgcolor = "#D13F30";
    equcolor = "white";
    togglebgcolor = "hsl(223, 31%, 20%)";
    ballbgcolor = "hsl(6, 70%, 34%)";
    ball.style.left='3px';
  }
  let changes = document.getElementsByClassName("number");
  document.body.style.backgroundColor = bgcolor;
  h1.style.color = inpucolor;
  num.style.color = inpucolor;
  toggle.style.backgroundColor = togglebgcolor;
  ball.style.backgroundColor = ballbgcolor;
  inpu.style.backgroundColor = inpubgcolor;
  inpu.style.color = inpucolor;
  numbers.style.backgroundColor = numbgcolor;
  for (let i = 0; i < changes.length; i++) {
    changes[i].style.color = ffcolor;
    changes[i].style.backgroundColor = numcolor;
  }
  reset.style.color = delResetcolor;
  reset.style.backgroundColor = delResetbgcolor;
  equ.style.color = equcolor;
  equ.style.backgroundColor = equbgcolor;
  del.style.color = delResetcolor;
  del.style.backgroundColor = delResetbgcolor;
}

var mobile = window.matchMedia("(max-width:377px)");
mobile.addListener(QueryM);
QueryM(mobile);
let inpulistener = document.getElementsByClassName("input");
inpulistener[0].addEventListener("input", (event) => {
  var str = event.target.value;
  if (checkCharacter(str.charAt(str.length - 1)) === false) {
    var output = str.slice(0, -1);
    event.target.value = output;
  }
  //if size of input > 20 do not add any value
  if (str.length > 20) {
    var output = str.slice(0, -1);
    event.target.value = output;
  }
});
function checkCharacter(char) {
  if (char === " ") return false;
  if (char.match(/[a-z]/i)) {
    return false;
  }
}
var equlistener = document.getElementsByClassName("equal");
//calculationss
equlistener[0].addEventListener("mouseenter", (tt) => {
  tt.target.cursor = "pointer";
  equlistener[0].addEventListener("click", calculations, false);
});
inpulistener[0].addEventListener("keypress", calculations, false);
function calculations(e) {
  if (e.key === "Enter" || e.target.className == "equal") {
    var str = inpulistener[0].value;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "/") {
        var str1 = "",
          str2 = "";
        var idx1 = -1,
          idx2 = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (str[j] == "+" || str[j] == "-" || str[j] == "*") {
            idx1 = j + 1;
            break;
          }
          str1 += str[j];
        }
        str1 = str1.split("").reverse().join("");
        for (let j = i + 1; j < str.length; j++) {
          if (
            str[j] == "+" ||
            str[j] == "-" ||
            str[j] == "/" ||
            str[j] == "*"
          ) {
            idx2 = j;
            break;
          }
          str2 += str[j];
        }
        var ret = division(str1, str2);
        if (ret == -1) {
          inpulistener[0].value = "ERROR";
        } else {
          if (idx1 == -1 && idx2 == -1) {
            inpulistener[0].value = ret;
            break;
          }
          var str11 = str.substring(0, idx1);
          var str22 = str.substring(Math.min(idx2, str.length));
          str = str11 + ret.toString() + str22;
          i = 0;
        }
      }
    }
    //multiplication
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "*") {
        var str1 = "",
          str2 = "";
        var idx1 = -1,
          idx2 = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (str[j] == "+" || str[j] == "-") {
            idx1 = j + 1;
            break;
          }
          str1 += str[j];
        }
        str1 = str1.split("").reverse().join("");
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] == "+" || str[j] == "-" || str[j] == "*") {
            idx2 = j;
            break;
          }
          str2 += str[j];
        }
        var ret = multiplication(str1, str2);
        if (idx1 == -1 && idx2 == -1) {
          inpulistener[0].value = ret;
          break;
        }
        var str11 = str.substring(0, Math.max(idx1, 0));
        var str22 = str.substring(Math.min(idx2, str.length));
        str = str11 + ret.toString() + str22;
        i = 0;
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "+") {
        var str1 = "",
          str2 = "";
        var idx1 = -1,
          idx2 = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (str[j] == "-") {
            idx1 = j + 1;
            break;
          }
          str1 += str[j];
        }
        str1 = str1.split("").reverse().join("");
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] == "+" || str[j] == "-") {
            idx2 = j;
            break;
          }
          str2 += str[j];
        }
        var ret = addition(str1, str2);
        if (idx1 == -1 && idx2 == -1) {
          inpulistener[0].value = ret;
          break;
        }
        var str11 = str.substring(0, Math.max(idx1, 0));
        var str22 = str.substring(Math.min(idx2, str.length));
        str = str11 + ret.toString() + str22;
        i = 0;
      }
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] == "-") {
        var str1 = "",
          str2 = "";
        var idx1 = -1,
          idx2 = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (str[j] == "-") {
            idx1 = j + 1;
            break;
          }
          str1 += str[j];
        }
        str1 = str1.split("").reverse().join("");
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] == "+" || str[j] == "-") {
            idx2 = j;
            break;
          }
          str2 += str[j];
        }
        var ret = subtraction(str1, str2);
        if (idx1 == -1 && idx2 == -1) {
          inpulistener[0].value = ret;
          break;
        }
        var str11 = str.substring(0, Math.max(idx1, 0));
        var str22 = str.substring(Math.min(idx2, str.length));
        str = str11 + ret.toString() + str22;
        i = 0;
      }
    }
  }
}

//division function
function division(t1, t2) {
  if (t2 == "0") {
    return -1;
  }
  var res = t1 / t2;
  return res;
}

//multiplication function
function multiplication(t1, t2) {
  t1 = parseInt(t1);
  t2 = parseInt(t2);
  return t1 * t2;
}

// addition function
function addition(t1, t2) {
  t1 = parseInt(t1);
  t2 = parseInt(t2);
  return t1 + t2;
}

// subtraction function
function subtraction(t1, t2) {
  t1 = parseInt(t1);
  t2 = parseInt(t2);
  return t1 - t2;
}
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
var nuum = document.getElementsByClassName("number");
for (let i = 0; i < nuum.length; i++) {
  nuum[i].addEventListener("mouseenter", () => {
    nuum[i].style.cursor = "pointer";
    nuum[i].addEventListener("click", () => {
      inpulistener[0].value += nuum[i].textContent;
    });
  });
}

//delete last digit
var dellisentener = document.getElementsByClassName("del");
dellisentener[0].addEventListener("mouseenter", () => {
  dellisentener[0].style.cursor = "pointer";
  var str = inpulistener[0].value;
  dellisentener[0].addEventListener("click", () => {
    if (str.length > 0) {
      var out = str.slice(0, -1);
      inpulistener[0].value = out;
      str = out;
    }
  });
});

//Resst
var resetlisentener = document.getElementsByClassName("reset");
resetlisentener[0].addEventListener("mouseenter", () => {
  resetlisentener[0].style.cursor = "pointer";
  resetlisentener[0].addEventListener("click", () => {
    inpulistener[0].value = "";
  });
});
