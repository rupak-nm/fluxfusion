const tocContainer = document.querySelector(".toc.component[data-open]");

const tocMobileBtn = document.querySelector(
  ".legal.contents button.toc.mobile[data-open]"
);

function updateActive(currentHash) {
  const tocLinks = tocContainer.querySelectorAll("a");
  tocLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentHash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function checkActive() {
  if (!window.navigation) return;

  // on url change
  window.navigation.addEventListener("navigate", (event) => {
    const url = event.destination.url;
    const hash = new URL(url).hash;
    updateActive(hash);
  });

  // initial check
  const hash = window.location.hash;
  updateActive(hash);
}

function toggleLinks() {
  const toggleButtons = tocContainer.querySelectorAll("button[data-open]");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;

      const ul = tocContainer.querySelector(`ul[data-id="${id}"]`);

      if (!ul) return;

      const isOpen = ul.dataset.open === "true";
      const newState = isOpen ? "false" : "true";
      ul.dataset.open = newState;
      button.dataset.open = newState;
    });
  });
}

function togglePageScroll(enable = true) {
  if (enable) {
    document.body.classList.remove("no", "vertical", "scroll");
  } else {
    document.body.classList.add("no", "vertical", "scroll");
  }
}

function toggleTocMobileSidebar() {
  tocMobileBtn.addEventListener("click", () => {
    const isOpen = tocContainer.dataset.open === "true";
    const newState = isOpen ? "false" : "true";
    tocContainer.dataset.open = newState;
    tocMobileBtn.dataset.open = newState;

    if (newState === "true") togglePageScroll(false);
    else togglePageScroll(true);
  });

  document.addEventListener("click", (event) => {
    const isOpen = tocContainer.dataset.open === "true";

    if (!isOpen) return;

    if (event.target.closest("button.toc.mobile")) return;

    if (event.target.closest(".toc.component")) {
      const clickedOnLink = event.target.closest("a");
      if (clickedOnLink) {
        tocContainer.dataset.open = "false";
        tocMobileBtn.dataset.open = "false";
        togglePageScroll(true);
      }

      return;
    }

    tocContainer.dataset.open = "false";
    tocMobileBtn.dataset.open = "false";
    togglePageScroll(true);
  });
}

checkActive();

toggleLinks();

toggleTocMobileSidebar();
