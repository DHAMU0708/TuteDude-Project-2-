var start = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
  var left = Math.random() * 300;
  var top = Math.random() * 300;
  var size = (Math.random() * 200) + 100; // 100–300px

  var shape = document.getElementById("shape");
  shape.style.left = left + "px";
  shape.style.top = top + "px";
  shape.style.height = size + "px";
  shape.style.width = size + "px";
  shape.style.backgroundColor = getRandomColor();
  shape.style.display = "block";

  start = new Date().getTime();
}

move();

document.getElementById("shape").onclick = function () {
  this.style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert("Your reaction time: " + timeTaken.toFixed(2) + "s");
  move();
};
