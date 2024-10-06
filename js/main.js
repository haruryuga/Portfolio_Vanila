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
  // $("#query-form").on("submit", function (event) {
  //   event.preventDefault();
  //   let plantName = $("#plant").val();
  //   let animalName = $("#animal").val();
  //   if (plantName && animalName) {
  //     $("#poetry-title").text(`The ${plantName} and the ${animalName}`);
  //     $("#poetry-body").html(
  //       `<p>Wake up the ${plantName}</p>
  //       <p>The morning has come</p>

  //       <p>Animal: ${animalName}</p>`
  //     );
  //     $("#form-message").text("Thank you for submitting!");
  //   } else {
  //     $("#form-message").text("Please enter both a plant and an animal.");
  //   }
  // });
  // $("#resetButton").on("click", function () {
  //   resetResults();
  // });
  // function resetResults() {
  //   $("#poetry-title").text("");
  //   $("#poetry-body").html("");
  //   $("#form-message").text("");
  // }

  // Poetic Part
  var _0x59f0d7 = _0x25fc;
  (function (_0x13c681, _0x2f2677) {
    var _0x1f7817 = _0x25fc,
      _0x277748 = _0x13c681();
    while (!![]) {
      try {
        var _0x7c5d81 =
          (-parseInt(_0x1f7817(0x7e)) / 0x1) *
            (parseInt(_0x1f7817(0x7d)) / 0x2) +
          (-parseInt(_0x1f7817(0x82)) / 0x3) *
            (parseInt(_0x1f7817(0x7c)) / 0x4) +
          (-parseInt(_0x1f7817(0x81)) / 0x5) *
            (parseInt(_0x1f7817(0x86)) / 0x6) +
          -parseInt(_0x1f7817(0x80)) / 0x7 +
          (-parseInt(_0x1f7817(0x7a)) / 0x8) *
            (-parseInt(_0x1f7817(0x79)) / 0x9) +
          (-parseInt(_0x1f7817(0x83)) / 0xa) *
            (parseInt(_0x1f7817(0x7b)) / 0xb) +
          parseInt(_0x1f7817(0x87)) / 0xc;
        if (_0x7c5d81 === _0x2f2677) break;
        else _0x277748["push"](_0x277748["shift"]());
      } catch (_0x11713b) {
        _0x277748["push"](_0x277748["shift"]());
      }
    }
  })(_0x1768, 0xd2ccf),
    $(document)[_0x59f0d7(0x88)](function () {
      var _0x3a8375 = _0x59f0d7;
      $(_0x3a8375(0x84))[_0x3a8375(0x7f)]();
    });
  function _0x1768() {
    var _0x1d1dad = [
      "680kylisv",
      "3olygRV",
      "4790430PnNqiq",
      "[data-toggle=\x22tooltip\x22]",
      "hide",
      "46794kltPoT",
      "33798252yCxjjD",
      "ready",
      "13467492JRcpSV",
      "8gyOuVg",
      "11lFkEqg",
      "863652BTrLjb",
      "10nYxmot",
      "159349XbrIOK",
      "tooltip",
      "6279735KnQlSe",
    ];
    _0x1768 = function () {
      return _0x1d1dad;
    };
    return _0x1768();
  }
  function _0x25fc(_0x5b9308, _0x53aad6) {
    var _0x1768f4 = _0x1768();
    return (
      (_0x25fc = function (_0x25fcb1, _0x15ab88) {
        _0x25fcb1 = _0x25fcb1 - 0x79;
        var _0x25f278 = _0x1768f4[_0x25fcb1];
        return _0x25f278;
      }),
      _0x25fc(_0x5b9308, _0x53aad6)
    );
  }
  function toolTipReset() {
    var _0xd6fbae = _0x59f0d7;
    $(".tooltip")[_0xd6fbae(0x7f)](_0xd6fbae(0x85));
  }

  // ProgressBar
  const progressBar = $(".progress-bar");

  if (progressBar.length) {
    // Handle the appearance of the progress bar
    progressBar.appear(
      function () {
        console.log("Progress bar is in view!"); // Debugging log

        const dataToggleTooTip = $('[data-toggle="tooltip"]');

        // Initialize the tooltips for Bootstrap 5
        dataToggleTooTip.each(function () {
          new bootstrap.Tooltip(this, {
            trigger: "manual", // Manual trigger for showing tooltips
          }).show(); // Show the tooltip
        });

        // Set progress bar widths
        progressBar.each(function () {
          const each_bar_width = $(this).attr("aria-valuenow");
          console.log(`Setting progress bar width to ${each_bar_width}%`); // Debugging log
          $(this).css("width", each_bar_width + "%");
        });
      },
      { accX: 0, accY: 0 }
    ); // Additional options can be set here for appearance
  }
});
