
var a = [];
var b = [];
var c = [];

function init() {
    a = [3,2,1];
    draw();
}

function move(f,t) {
    var valid = false;
    if(f.length > 0) {
        if(t.length == 0) {
            valid = true;
        } else {
            if(f[f.length-1] < t[t.length - 1]) {
                valid = true;
            }
        }
    } 
    if(valid == true) {
        t.push(f.pop()); 
    } else {
        console.log("No, no, no, no... ya kannie do that.");
    }
    draw();
}

function draw() {
    console.log(a);
    console.log(b);
    console.log(c);
    drawstack(".a", a);
    drawstack(".b", b);
    drawstack(".c", c);
}

function drawstack(sel, arr) {
    var el = document.querySelector(sel);
    el.innerHTML = "";
    var bk = arr;
    bk.reverse().forEach(item => {
        el.innerHTML += '<div class="t' + item + '">' + item + '</div>';
    });
    bk.reverse();
}

init();