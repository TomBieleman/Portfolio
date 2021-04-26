var i = 0;

// var words = ['creative', 'designer', 'creator', 'gamer', 'editor', 'artist', 'generalist'];
var words = ['designer'];

function wordChanger(){
    document.getElementById('wordChanger').innerHTML = words[i];
    i = i + 1;;
    if(i == words.length){
        i = 0;
    }
    setTimeout(wordChanger, 2000)
}

// var rellax = new Rellax('.rellax', {
//     speed: -2,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
// });

function copy(){
    console.log('loaded the copier')
    var copyText = document.getElementById('emailCopy');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  
    var tooltip = document.getElementById("emailTooltip");
    tooltip.innerHTML = "Copied";
}

document.getElementById('footerTextBottem').onclick = function(){
    copy();
    console.log('CLICKED');
}

window.onload = function(){
    wordChanger();
    console.log('loaded');
}

var rellax = new Rellax('.rellax', {
});