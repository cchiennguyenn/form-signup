function changeTextColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    var elements = document.getElementsByClassName('dynamic-color');
    for( var j = 0; j < elements.length; j++){
        elements[j].style.color = color;
    }
}

setInterval(changeTextColor, 1000);