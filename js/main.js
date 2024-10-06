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

jQuery(document).ready(function ($) {
  // Handle form submission
  $("#query-form").on("submit", function (event) {
    event.preventDefault();

    let plantName = $("#plant").val();
    let animalName = $("#animal").val();

    if (plantName && animalName) {
      $("#poetry-title").text(`The ${plantName} and the ${animalName}`);
      $("#poetry-body").html(
        `<p>Plant: ${plantName}</p><p>Animal: ${animalName}</p>`
      );
      $("#form-message").text("Thank you for submitting!");
    } else {
      $("#form-message").text("Please enter both a plant and an animal.");
    }
  });

  $("#resetButton").on("click", function () {
    resetResults();
  });

  function resetResults() {
    $("#poetry-title").text("");
    $("#poetry-body").html("");
    $("#form-message").text("");
  }
});
