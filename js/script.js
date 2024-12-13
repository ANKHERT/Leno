

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');

  

  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', () =>{
    mobileMenu.classList.toggle('active')
  });

  // video modal

  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');

  videoButton.addEventListener('click', () => {
    modal.style.display='block';
  });

  videoPlayer.src =
    "https://www.youtube.com/embed/YoiysI-YN_A?si=eOYSQd6CrhZpsLzc";

    // close modal


    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
      // videoPlayer.src = '';

      window.addEventListener('click', function() {
        if (event.target == modal) {
           modal.style.display = 'none';
            videoPlayer.src = "";
        }
      })
    })
});


window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
})