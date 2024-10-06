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
  const poemSentences = [
    "In the garden of {plant}, the {animal} dances free.",
    "Beneath the {plant}'s shade, the {animal} finds its peace.",
    "The {animal} sings softly, wrapped in {plant}'s embrace.",
    "On the petals of the {plant}, the {animal}'s footsteps are light.",
    "Through the fields of {plant}, the {animal} roams under the stars.",
    "As the {plant} blooms, the {animal} whispers secrets to the wind.",
    "The {animal} rests gently on the {plant}'s vibrant green.",
    "Among the {plant} leaves, the {animal} hides with grace.",
    "The {plant} sways, and the {animal} dances in the moonlight.",
    "Like a song of {plant}, the {animal} flows through the air.",
  ];

  // Handle form submission
  $("#query-form").on("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let plantName = $("#plant").val();
    let animalName = $("#animal").val();

    // Validate if both inputs are provided
    if (plantName && animalName) {
      const randomPoem = generateRandomPoem(
        plantName,
        animalName,
        poemSentences
      );

      // Display the generated poem
      $("#poetry-title").text("Your Poem:");
      $("#poetry-body").html(randomPoem);
      $("#form-message").text("Thank you for submitting!");
    } else {
      $("#form-message").text("Please enter both a plant and an animal.");
    }
  });

  // Reset the displayed results
  $("#resetButton").on("click", function () {
    resetResults();
  });

  // Function to reset the displayed poem and message
  function resetResults() {
    $("#poetry-title").text("");
    $("#poetry-body").html("");
    $("#form-message").text("");
  }

  // Function to generate a random poem
  function generateRandomPoem(plantName, animalName, sentences) {
    const randomSentences = [];
    const maxSentences = 6; // Limit to 6 sentences

    // Shuffle the poem sentences and select up to 6 random ones
    while (randomSentences.length < maxSentences) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const randomSentence = sentences[randomIndex]
        .replace("{plant}", plantName)
        .replace("{animal}", animalName);

      if (!randomSentences.includes(randomSentence)) {
        randomSentences.push(randomSentence);
      }
    }

    // Convert the array of sentences to a paragraph
    return randomSentences.map((sentence) => `<p>${sentence}</p>`).join("");
  }

  // Progress Bar
  // When the progress bar appears in the viewport
  $(".progress-bar").appear(function () {
    const progressBar = $(this);
    const targetValue = parseInt(progressBar.attr("aria-valuenow")); // Get the target value (e.g., 90)
    const progressText = $(this).closest(".single-progress-txt").find("h3"); // Find the h3 element for this bar

    // Animate the progress bar's width
    progressBar.css("width", targetValue + "%");

    // Animate the text from 0 to the target value
    let currentValue = 0;
    const intervalTime = 1500 / targetValue; // Set the speed based on the target value and animation duration
    const counter = setInterval(function () {
      if (currentValue < targetValue) {
        currentValue++;
        progressText.text(currentValue + "%");
      } else {
        clearInterval(counter); // Stop the interval when we reach the target value
      }
    }, intervalTime);
  });
});
