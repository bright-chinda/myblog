let menuBar = document.querySelector(".menu-bar");
let navLinks = document.querySelector(".nav-links");
let openNav = document.querySelector(".open-nav-icon");
let closeNav = document.querySelector(".close-nav-icon");

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


{/* <script> */}
// const quill = new Quill('#editor', {
//   theme: 'snow'
// });
// </script>