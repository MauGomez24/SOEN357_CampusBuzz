// Handle modal display
document.getElementById('joinCampusBuzz').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('loginModal').style.display = 'block';
  });
  
  // Handle modal close
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
  });
  
  document.getElementById('modalOverlay').addEventListener('click', function () {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
  });