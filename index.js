var n = Math.random();
n = n * 12;
n = Math.floor(n) +1;

var m = Math.random();
m = m * 60;
m = Math.floor(m) + 1;

document.querySelector("h1").innerHTML = n + ":" + m + "😊";