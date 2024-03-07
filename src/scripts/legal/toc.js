const tocContainer = document.querySelector(".toc.component");

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

checkActive();

toggleLinks();
