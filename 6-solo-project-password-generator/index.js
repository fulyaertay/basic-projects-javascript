const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


let pswContent1=document.querySelector(".passwordBtn1");
let pswContent2=document.querySelector(".passwordBtn2");
let generatePsw1=""
let generatePsw2=""
let result1=""
let result2=""
function generatePsw(){
    pswContent1.textContent=""
    pswContent2.textContent=""
    result1=""
    result2=""
    for (let character=0;character<15;character++){
        generatePsw1=Math.floor(Math.random()*characters.length)
        result1+=characters[generatePsw1];

        generatePsw2=Math.floor(Math.random()*characters.length)
        result2+=characters[generatePsw2];
    }
    pswContent1.textContent= result1;
    pswContent2.textContent= result2;
   


}
