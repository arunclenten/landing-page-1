window.addEventListener("scroll", function () {
    var initialNav = document.getElementById("initialNav");
    var scrolledNav = document.getElementById("scrolledNav");
    var headerSection = document.getElementById("headerSection");
    var headerBottom = headerSection.getBoundingClientRect().bottom;

    if (window.innerWidth > 768) {
        // Apply scroll behavior only on larger screens
        if (headerBottom <= 0) {
            initialNav.style.top = "-85px";
            scrolledNav.style.top = "0";
        } else {
            initialNav.style.top = "15px";
            scrolledNav.style.top = "-85px";
        }
    } else {
        initialNav.style.top = "15px"; // Ensure initialNav is always visible on mobile
    }
});

function applyZoomEffect() {
    var headerSection = document.getElementById("headerSection");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        // Mobile view
        headerSection.style.backgroundImage = "url('./assets/home/Innovation_Mobileview-Banner.png')";
    } else {
        // Desktop view
        headerSection.style.backgroundImage = "url('./assets/home/Home-1-A.png')";
    }

    // Initial zoom level
    headerSection.style.backgroundSize = "150%";

    // Delay the zoom-out effect slightly to ensure it's visible
    setTimeout(function () {
        headerSection.style.backgroundSize = "100%"; // Zoom out to normal size
    }, 500); // Adjust the delay as needed
}

// Apply the zoom effect when the page loads
window.addEventListener("load", applyZoomEffect);

// Reapply the zoom effect when the window is resized
window.addEventListener("resize", applyZoomEffect);

document.addEventListener("DOMContentLoaded", function () {
    var text = "INNOVATION. INVESTMENT. GROWTH. GHL INDIA VENTURES ";
    var heroText = document.getElementById("heroText");
    heroText.innerHTML = "";

    var words = text.split(" ");
    var index = 0;

    function typeWriter() {
        if (index < words.length) {
            var word = words[index++];
            if (word === "GHL") {
                heroText.innerHTML += '<br><span class="ghl">' + word + "</span> ";
            } else {
                heroText.innerHTML += word + " ";
            }
            setTimeout(typeWriter, 700); // Adjust the speed by changing the timeout value
        }
    }

    typeWriter();
});

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }

  // Set the first tab to be active by default
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks.button.active").click();
  });