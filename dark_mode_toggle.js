
<script>
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  }

  // Load preference
  window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
    }
  }
</script>
