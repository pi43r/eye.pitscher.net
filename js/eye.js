const root = document.documentElement;
const eye  = document.getElementById("follower");
const anchors = document.getElementsByTagName("a")
document.body.style.cursor = 'none';


root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

root.addEventListener("mousedown",  e => {
    eye.src = "assets/cursor/svg/mouse-down.svg"
})
root.addEventListener("mouseup", e => {
    eye.src = "assets/cursor/svg/mouse-drag.svg"
})

for(let i = 0; i < anchors.length; i++) {
    anchors[i].style.cursor = 'none';
    anchors[i].onmouseover = function () {
        eye.src = "assets/cursor/svg/mouse-link.svg"
    }
    anchors[i].onmouseout = function () {
        eye.src = "assets/cursor/svg/mouse-drag.svg"
    }
}