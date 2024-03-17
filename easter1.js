document.addEventListener("DOMContentLoaded", function() {
    var hiddenElement = document.querySelector(".hidden-element");
    var homeElement = document.querySelector(".home");
  
    hiddenElement.addEventListener("click", function() {

      if (homeElement.classList.contains("new-background")) {
        homeElement.classList.remove("new-background");
      } else {

        homeElement.classList.add("new-background");
      }
    });
  });