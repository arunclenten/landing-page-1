
// Header section script code start
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    var icon = $(this).find(".navbar-toggler-icon");
    
    icon.toggleClass("icon-bars icon-close");
  });

  // Ensure the icon resets when the window is resized
  $(window).resize(function () {
    var icon = $(".navbar-toggler-icon");
    if ($(window).width() >= 992) {
      icon.removeClass("icon-close").addClass("icon-bars");
    }
  });
});


window.addEventListener("scroll", function () {
  var initialNav = document.getElementById("initialNav");
  var scrolledNav = document.getElementById("scrolledNav");
  var headerSection = document.getElementById("carouselExampleIndicators");
 
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
window.addEventListener("scroll", function () {
var initialNav = document.getElementById("initialNav");
var scrolledNav = document.getElementById("scrolledNav");
var backgroundContainer =document.getElementById("backgroundContainer");
var headerBottom1 = backgroundContainer.getBoundingClientRect().bottom;

if (window.innerWidth > 768) {
    // Apply scroll behavior only on larger screens
    if (headerBottom1 <= 0) {
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
// Header section script code end


  // home page start 
  document.addEventListener('DOMContentLoaded', function() {
    // Typed.js configuration
    function initTypedEffect(element, text) {
        new Typed(element, {
            strings: [text],
            typeSpeed: 50, // Speed in milliseconds to type a character
            startDelay: 500, // Time before typing starts in milliseconds
            showCursor: false // Hide the typing cursor
        });
    }

    // Initialize Typed.js for each slide on page load
    function initializeTypedCaptions() {
        document.querySelectorAll('.carousel-item').forEach((slide, index) => {
            const caption = slide.querySelector('.carousel-caption .typed-text');
            if (caption) {
                const text = caption.innerText.trim(); // Get the caption text
                initTypedEffect(caption, text);
            }
        });
    }

    // Initialize Typed.js for the first slide on page load
    initializeTypedCaptions();

   

    // Auto slide functionality
    $('#carouselExampleIndicators').carousel({
        interval: 5000, // Auto slide interval in milliseconds (5 seconds)
        pause: 'hover' // Pause on mouse hover
    });
});
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

$(document).ready(function() {
$('.counter').each(function() {
    var $this = $(this);
    var finalValue = parseInt($this.attr('data-final-value'), 10);
    var currentValue = 0;

    // Start counter animation
    $({ countValue: currentValue }).animate({ countValue: finalValue }, {
        duration: 10000,  // Adjust duration as needed
        easing: 'linear',
        step: function() {
            $this.find('.count').text(Math.floor(this.countValue));
        },
        complete: function() {
            $this.find('.count').text(finalValue); // Ensure final value is set correctly
        }
    });
});
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

// home page script end

// about page script start 
function aboutBackgroundImage() {
  const container = document.getElementById("backgroundContainer");
  const desktopImage = "assets/about/about-destop.jpg";
  const mobileImage = "assets/about/about-mobile.png";

  if (window.innerWidth <= 768) {
    // For mobile view
    container.style.backgroundImage = `url(${mobileImage})`;
  } else {
    // For desktop view
    container.style.backgroundImage = `url(${desktopImage})`;
  }
}

// Update background image on initial load
aboutBackgroundImage();

// Update background image on window resize
window.addEventListener("resize", aboutBackgroundImage);

// about page script end 

// fund page script start
function fundBackgroundImage() {
  const container = document.getElementById('backgroundContainer');
  const desktopImage = 'assets/fund/fund-destop.jpg';
  const mobileImage = 'assets/fund/fund-mobile.png';

  if (window.innerWidth <= 768) {
    // For mobile view
    container.style.backgroundImage = `url(${mobileImage})`;
  } else {
    // For desktop view
    container.style.backgroundImage = `url(${desktopImage})`;
  }
}

// Update background image on initial load
fundBackgroundImage();

// Update background image on window resize
window.addEventListener('resize', fundBackgroundImage);

// fund page script end

// blog page script start 
function blogBackgroundImage() {
  const container = document.getElementById('backgroundContainer');
  const desktopImage = 'assets/blog/blog-desk.jpg';
  const mobileImage = 'assets/blog/Group-1.png';

  if (window.innerWidth <= 768) {
    // For mobile view
    container.style.backgroundImage = `url(${mobileImage})`;
  } else {
    // For desktop view
    container.style.backgroundImage = `url(${desktopImage})`;
  }
}

// Update background image on initial load
blogBackgroundImage();

// Update background image on window resize
window.addEventListener('resize',  blogBackgroundImage);

// blog page script end

//contact page script start 

function contactBackgroundImage() {
  const container = document.getElementById('backgroundContainer');
  const desktopImage = 'assets/contact/desktop-contact.jpg';
  const mobileImage = 'assets/contact/contact-mobile.png';

  if (window.innerWidth <= 768) {
    // For mobile view
    container.style.backgroundImage = `url(${mobileImage})`;
  } else {
    // For desktop view
    container.style.backgroundImage = `url(${desktopImage})`;
  }
}

// Update background image on initial load
contactBackgroundImage();

// Update background image on window resize
window.addEventListener('resize', contactBackgroundImage);

//contact page script end 