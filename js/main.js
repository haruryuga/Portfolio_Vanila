window.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "block";
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.querySelector(".content");

  setTimeout(function () {
    preloader.classList.add("fade-out");

    setTimeout(function () {
      preloader.style.display = "none";
      content.classList.add("show");
    }, 1000);
  }, 3000);

  const header = document.querySelector(".top-area");
  header.style.display = "none";
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show the header when scrolling down and hide when scrolling up
    if (scrollTop < lastScrollTop) {
      // Scroll down
      header.classList.remove("show");
    } else {
      // Scroll up
      header.classList.add("show");
      header.style.display = "block";
    }

    lastScrollTop = scrollTop;
  });
});
