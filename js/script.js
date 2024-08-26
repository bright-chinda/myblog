let menuBar = document.querySelector(".menu-bar");
let navLinks = document.querySelector(".nav-links");
let openNav = document.querySelector(".open-nav-icon");
let closeNav = document.querySelector(".close-nav-icon");
let urlButtons = document.querySelectorAll(".btns")
// let activeBtn = document.querySelectorAll(".active")

menuBar.addEventListener("click",() =>{
  navLinks.classList.toggle("visible")
  if (navLinks.classList.contains("visible")) {
    openNav.style.display = "none";
    closeNav.style.display = "block";
  }else if (!navLinks.classList.contains("visible")){
    openNav.style.display = "block";
    closeNav.style.display = "none";
  }
})

urlButtons.forEach(element => {
  element.addEventListener("click", function(){
    urlButtons.forEach(btns => {
      btns.classList.remove("active")
    })
    element.classList.add("active")
  })
});
