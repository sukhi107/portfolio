// Code for second counter.
const start = (new Date("Aug 25, 2021 14:08:00").getTime()) / 1000;
const now = Math.floor(Date.now() / 1000);
let runningTime = now - start;
let el = document.getElementById("seconds-counter");

function incrementSeconds() {
    runningTime += 1;
    el.innerText = runningTime;
}

var cancel = setInterval(incrementSeconds, 1000);

// Code for displaying projects.

function display1() {
    let image = document.getElementById("screenshot-1");
    let displaySetting = image.style.display;
    if (displaySetting === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}

function display2() {
    let image = document.getElementById("screenshot-2");
    let displaySetting = image.style.display;
    if (displaySetting === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}

function display3() {
    let image = document.getElementById("screenshot-3");
    let displaySetting = image.style.display;
    if (displaySetting === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}
