// https://codepen.io/gegagome/project/editor/XwBLOw

// <pre style="white-space: pre-wrap">
// JSON.stringify(obj, null, 2)

const mCol = document.querySelector("#middleColumn");
const rCol = document.querySelector("#rightColumn");
const clipButton = document.querySelector("#clipboard");
const image = document.querySelector("#JSONImage");


function load_home() {
  // alert("First button click worked");
  mCol.innerHTML = NYP_Buttons;
}



function reset() {
  mCol.innerHTML = ``;
  rCol.innerHTML = ``;
  image.src = ``;
  disableClipboardButton();
}

function enableClipboardButton () {
  if (clipButton.classList.contains("disabled")) {
    clipButton.classList.remove("disabled");
    // clipButton.classList.toggle("disabled");
  }
}

function disableClipboardButton () {
  if (!clipButton.classList.contains("disabled")) {
    clipButton.classList.add("disabled");
  }
}

// https://stackoverflow.com/questions/6139107/programmatically-select-text-in-a-contenteditable-html-element
function selectElementText(el){
    var range = document.createRange() // create new range object
    range.selectNodeContents(el) // set range to encompass desired element text
    var selection = window.getSelection() // get Selection object from currently user selected text
    selection.removeAllRanges() // unselect any user selected text (if any)
    selection.addRange(range) // add range to Selection object to select it
    document.execCommand('copy');
    selection.removeAllRanges();
}


// grab viewport's height to dynamically change mCol and rCol's height
function resizeDiv () {
  height = $(window).height();
  $(mCol).css('height', height);
  $(rCol).css('height', height);
}

window.onresize = function(event) {
  resizeDiv();
}

// NYP button
$( "#JSON_NYP" ).click(function(){
  load_home();
});

// clears results
$( "#getButtons" ).click(function(){
  reset();
});

// testing JSON builder feature
$( "#jsonBuilder" ).click(function(){
  
});

$( "#clipboard" ).click(function() {
  selectElementText(rCol);
});


$(document).on("click",".mybtn", function() { 
  let buttonPressed = $(this).data("btn");
  // console.log(buttonPressed);
  $(this).addClass("active").siblings().removeClass("active");
  rCol.innerHTML = jsonGetter(buttonPressed);
  image.src = jsonImage(buttonPressed);
  enableClipboardButton();
});

$(document).ready(function() {
  resizeDiv();
});