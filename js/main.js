const dropdownButtons = document.querySelectorAll(".js-dropdown");

dropdownButtons.forEach((dropDownButton) => {
  let showMenu = false;

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

const dragularContainerArray = document.querySelectorAll(
  ".js-dragular-container"
);

dragula(Array.from(dragularContainerArray));
