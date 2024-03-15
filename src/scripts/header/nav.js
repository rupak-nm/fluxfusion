import initMobileMenu from "./mobile-menu";

const headerElement = document.querySelector("header.site.header");

const allAnchorElements = headerElement.querySelectorAll("a");

const sanitizePath = (path) => path.replace(/^\/*|\/*$/g, "");

function updateActiveLink() {
  allAnchorElements.forEach((anchorElement) => {
    const href = sanitizePath(anchorElement.getAttribute("href"));
    const currentPath = sanitizePath(window.location.pathname);

    if (href === currentPath) {
      anchorElement.classList.add("active");
    } else {
      anchorElement.classList.remove("active");
    }
  });
}

updateActiveLink();
initMobileMenu();
