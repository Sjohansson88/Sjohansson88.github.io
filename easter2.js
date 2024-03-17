document.addEventListener("DOMContentLoaded", function() {

    var recentKeys = [];
  

    document.addEventListener("keydown", function(event) {

      recentKeys.push(event.key);
      
      if (recentKeys.length === 4 && recentKeys.join('') === '1337') {
        showCoolModal();
        

        recentKeys = [];
      } else if (recentKeys.length > 4) {

        recentKeys.shift();
      }
    });
  });
  
  function showCoolModal() {
    
    alert("Easteregg #2 for you!");
  }