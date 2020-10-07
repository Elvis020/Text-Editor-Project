
// This runs when a key is pressed
function updateText(){
    let textIn = document.getElementById('text-input').value;
    document.getElementById("text-output").innerHTML = textIn;
}

let textarea = document.getElementsByTagName(textarea)

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

function alignText(e, alignType){
    document.getElementById("text-output").style.textAlign = alignType;
    switch (alignType) {
      case "left":
        textarea.classList.toggle("active");
        e.classList.add(alignType);
        break;
      case "right":
        textarea.classList.toggle("active");
        e.classList.add(alignType);
        break;
      case "center":
        textarea.classList.toggle("active");
        e.classList.add(alignType);
        break;
      case "center":
        textarea.classList.toggle("active");
        e.classList.add(alignType);
        break;
    }

}