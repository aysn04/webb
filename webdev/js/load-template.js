document.addEventListener('DOMContentLoaded', function() {
  // Load navigation
  fetch('templates/navigation.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
      highlightCurrentPage();
    });

  // Highlight the current page link in the navigation
  function highlightCurrentPage() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    // Remove "current" class from all links first
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('current');
    });

    // Add "current" class to the active link
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('current');
      }
    });
  }
});
