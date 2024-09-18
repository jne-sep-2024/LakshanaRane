// DOM - Change an element's text
document.getElementById('status').textContent = 'Loading...';

// BOM - After 3 seconds, redirect the user to another page
setTimeout(function() {
  window.location.href = 'https://example.com';
}, 3000);
