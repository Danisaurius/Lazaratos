window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.body.classList.add('loaded');
  }, 3000); // 2000ms = 2s
});