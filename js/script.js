document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");

      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        // Close all other accordion items
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.style.display = "none";
        });
        accordionContent.style.display = "block";
      }
    });
  });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
