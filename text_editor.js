
// This runs when a key is pressed
function updateText(){
    let textIn = document.getElementById('text-input').value;
    document.getElementById("text-output").innerHTML = textIn;
}

function makeTextBold(e){
    e.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
}
function makeTextItalic(e){
    e.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");

}
function underlineText(e){
    e.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("underline");
}

function alignText(e, alignType) {
  document.getElementById("text-output").style.textAlign = alignType;
  let alignButton = document.getElementsByName('align');
  for (let button of alignButton) {
    button.classList.remove('active');
  }
  e.classList.toggle('active')
}