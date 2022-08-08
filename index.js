let a;
let navbar = document.querySelector(".sidenav1").querySelectorAll("a");
navbar.forEach(element => {
  element.addEventListener("click",function(){
    navbar.forEach(nav=>nav.classList.remove("active"))

    thid.classList.add("active");
  })
})

function hotgame(){
  document.getElementById("hotgame").style.display="inline";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function Casino(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="inline";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function Slot(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="inline";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function Sport(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="inline";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function Fishing(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="inline";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function skillGame(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="inline";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="none";
}
function Esport(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="inline";
  document.getElementById("Sood").style.display="none";
}
function Sood(){
  document.getElementById("hotgame").style.display="none";
  document.getElementById("Casino").style.display="none";
  document.getElementById("Slot").style.display="none";
  document.getElementById("Sport").style.display="none";
  document.getElementById("Fishing").style.display="none";
  document.getElementById("skillGame").style.display="none";
  document.getElementById("Esport").style.display="none";
  document.getElementById("Sood").style.display="inline";
}
function AllGame(){
  document.getElementById("skillGame").style.display="inline";
  document.getElementById("hotgame").style.display="inline";
  document.getElementById("Casino").style.display="inline";
  document.getElementById("Slot").style.display="inline";
  document.getElementById("Sport").style.display="inline";
  document.getElementById("Fishing").style.display="inline";
  document.getElementById("Esport").style.display="inline";
  document.getElementById("Sood").style.display="inline";
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }