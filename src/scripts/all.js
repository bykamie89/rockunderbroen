// document.querySelector('.hamburger').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.toggle('expanded');
// });
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menuItem');
  const menubtn = document.querySelector('.menu_toggle_btn');
  const closeIcon = document.querySelector('.closeIcon');
  const menuIcon = document.querySelector('.menuIcon');

  function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
      menu.classList.remove('showMenu');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    } else {
      menu.classList.add('showMenu');
      closeIcon.style.display = 'block';
      menuIcon.style.display = 'none';
    }
  }

  menubtn.addEventListener('click', toggleMenu);

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const countdowntag = document.querySelector('.countdown');
  // Set the date we're counting down to
  var countDownDate = new Date('Jun 9, 2023 15:00:00').getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with class="countdowntag"
    countdowntag.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      countdowntag.innerHTML = 'EXPIRED';
    }
  }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  var info = document.getElementsByClassName('infobox');
  if (info) {
    var i;

    for (i = 0; i < info.length; i++) {
      info[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        let imgelement = this.querySelector('.testhall');
        console.log();
        if (content.style.display === 'block') {
          content.style.display = 'none';
          imgelement.classList.remove('rotate');
        } else {
          content.style.display = 'block';
          imgelement.classList.add('rotate');
        }
      });
    }
  }
});
