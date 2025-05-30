document.addEventListener('DOMContentLoaded', function() {
  const plaatsenButton = document.getElementById('plaatsenButton');
  if (plaatsenButton) {
    plaatsenButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Set a flag so index.html knows to add the image
      localStorage.setItem('addStressmanBlankBruinHaar', 'true');
      window.location.href = 'index.html';
    });
  }
});