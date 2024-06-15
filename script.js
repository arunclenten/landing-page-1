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