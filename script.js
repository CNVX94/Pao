document.addEventListener('DOMContentLoaded', function() {
    const movingButton = document.getElementById('movingBtn');
    const hiddenImage = document.getElementById('hiddenImage');
  
    movingButton.addEventListener('mouseover', function() {
      const randomX = Math.random() * (window.innerWidth - 100);
      const randomY = Math.random() * (window.innerHeight - 50);
  
      movingButton.style.right = `${randomX}px`;
      movingButton.style.top = `${randomY}px`;
    });
  
    document.getElementById('yesBtn').addEventListener('click', function() {
        clickSound.play();
        alert('¡Sabía que aceptarías!');
      hiddenImage.style.display = 'block'; 
      movingButton.style.display = 'none'; 
  
    });
  });
  