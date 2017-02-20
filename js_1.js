function changecss1() {
    document.getElementsByClassName('p1')[0].style.color = "#fff";
    document.getElementsByClassName('Beginbutton')[0].style.backgroundColor = "#f8630e";
}

function changecss2() {
    document.getElementsByClassName('p2')[0].style.color = "#fff";
    document.getElementsByClassName('Endbutton')[0].style.backgroundColor = "#f8630e";
}

function initcss1() {
    document.getElementsByClassName('p1')[0].style.color = "#f8630e";
    document.getElementsByClassName('Beginbutton')[0].style.backgroundColor = "#fff";
}

function initcss2() {
    document.getElementsByClassName('p2')[0].style.color = "#f8630e";
    document.getElementsByClassName('Endbutton')[0].style.backgroundColor = "#fff";
}

function mousechange1() {
    document.getElementsByClassName('Beginbutton')[0].style = "cursor:pointer";
}

function mousechange2() {
    document.getElementsByClassName('Endbutton')[0].style = "cursor:pointer";
}

function randomColor() {
    var colorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var colorVal = "#";
    for (i = 0; i < 6; i++) {
        colorVal += colorArr[Math.round(15 * Math.random())];
    }
    return colorVal;
}

var blink;

function changebox() {
    clearTimeout(blink);
    blink = setTimeout(changebox, 1000);
    var number = new Array()
    number[0] = Math.floor(Math.random() * 9);
    number[1] = Math.floor(Math.random() * 9);
    number[2] = Math.floor(Math.random() * 9);
    while (number[0] == number[1]) {
        number[1] = Math.floor(Math.random() * 9);
    }
    while (number[0] == number[2] || number[1] == number[2]) {
        number[2] = Math.floor(Math.random() * 9);
    }

    document.getElementsByClassName('box')[number[0]].style.backgroundColor = randomColor();
    document.getElementsByClassName('box')[number[1]].style.backgroundColor = randomColor();
    document.getElementsByClassName('box')[number[2]].style.backgroundColor = randomColor();
    setTimeout(restore, 300);

    function restore() {
        document.getElementsByClassName('box')[number[0]].style.backgroundColor = "#f8630e";
        document.getElementsByClassName('box')[number[1]].style.backgroundColor = "#f8630e";
        document.getElementsByClassName('box')[number[2]].style.backgroundColor = "#f8630e";
    }
}

function stopchange() {
    clearTimeout(blink);
}
