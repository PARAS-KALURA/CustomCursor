const main = document.querySelector("#main");
const crsr = document.querySelector(".cursor");

crsr.style.backgroundColor = "red";

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    // crsr.style.bottom = dets.y + "px";
});