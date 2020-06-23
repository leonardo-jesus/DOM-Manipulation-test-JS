// ACCESS the paragraph
const paragraph = document.getElementById('text');
// ACCESS the button
const purpleBtn = document.getElementById('purple');
const redBtn = document.getElementById('red');
const borBtn = document.getElementById('border');
const fsizeBtn = document.getElementById('font-size');
const fsmallBtn = document.getElementById('font-smaller');
const sunBtn = document.getElementById('sun')
const moonBtn = document.getElementById('moon')
const resetBtn = document.getElementById('reset')

console.log(purpleBtn)
console.log(redBtn)
console.log(borBtn)
console.log(fsizeBtn)
console.log(fsmallBtn)


// MANIPULATE the webpage
function makePurple() {
  paragraph.style.color = "purple";
}

function makeRed() {
  paragraph.style.color = "red";
}

function makeBorder() {
  paragraph.style.border = "10px dotted grey"
}

function makeBigger() {
  paragraph.style.fontSize = "25px"
}

function makeSmaller() {
  paragraph.style.fontSize = "8px"
}

function makeSun() {
  document.body.style.backgroundColor = "yellow";
  paragraph.style.color = "black";
}

function makeMoon() {
  document.body.style.backgroundColor = "black";
  paragraph.style.color = "white";
}

function resetChanges() {
  document.body.style.backgroundColor = "white";
  paragraph.style.color = "black";
  paragraph.style.fontFamily = "Calibri Light";
  paragraph.style.border = "none";
  paragraph.style.textAlign = "justify";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontWeight = "300";
}
// This part of EEEE
// Event target = purpleBtn
// Event listener = addEventListener()
// Event type = click
// Event handler = makePurple

purpleBtn.addEventListener('click', makePurple)
redBtn.addEventListener('click', makeRed)
borBtn.addEventListener('click', makeBorder)
fsizeBtn.addEventListener('click', makeBigger)
fsmallBtn.addEventListener('click', makeSmaller)
sunBtn.addEventListener('click', makeSun)
moonBtn.addEventListener('click', makeMoon)
resetBtn.addEventListener('click', resetChanges)