const dropdownButtons = document.querySelectorAll(".js-dropdown");

dropdownButtons.forEach((dropDownButton, index) => {
  let showMenu = false;

  console.log(dropDownButton)
  dropDownButton.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      dropDownButton.classList.add("open");
      showMenu = true;
    } else {
      dropDownButton.classList.remove("open");
      showMenu = false;
    }
  }
});


//dragular code
const dragularContainerArray = document.querySelectorAll(
  ".js-dragular-container"
);
dragula(Array.from(dragularContainerArray));






//loader code
const loader = document.querySelector(".loader")

window.addEventListener("load", () => {
  loader.classList.add("hide")
  AOS.init({
    duration: 1000
})
});

