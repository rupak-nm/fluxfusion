const hamburgerButton = document.querySelector(
  "header button.hamburger[data-open]"
);
const mobileMenuContainer = document.querySelector(
  ".mobile.menu.container[data-open]"
);

function initMobileMenu() {
  hamburgerButton.addEventListener("click", () => {
    const currentState = hamburgerButton.getAttribute("data-open");
    const newState = currentState === "true" ? "false" : "true";

    hamburgerButton.setAttribute("data-open", newState);
    mobileMenuContainer.setAttribute("data-open", newState);

    // add `no vertical scroll` class to the body when the mobile menu is open
    if (newState === "true") {
      document.body.classList.add("no", "vertical", "scroll");
    } else {
      document.body.classList.remove("no", "vertical", "scroll");
    }
  });
}

export default initMobileMenu;
