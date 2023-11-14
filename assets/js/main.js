const addBoxShadow = () => {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      // alert("hello")
      header.classList.add("box-shaadow");
    } else {
      header.classList.remove("box-shaadow");
    }
  });
};
addBoxShadow();

// AOS animation 
AOS.init({
    offset: 200,
    duration: 1000,
  });