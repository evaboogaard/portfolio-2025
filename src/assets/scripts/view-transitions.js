if (document.startViewTransition) {
  document.querySelectorAll("project__text-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("href");

      document.startViewTransition(() => {
        return new Promise((resolve) => {
          window.location = url;
        });
      });
    });
  });
}
