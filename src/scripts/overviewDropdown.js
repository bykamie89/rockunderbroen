const closeArrow = document.querySelector('.closeArrow');
const openArrow = document.querySelector('.openArrow');
const content = document.querySelector('.content');

var info = document.getElementsByClassName('infobox');
var i;

for (i = 0; i < info.length; i++) {
  info[i].addEventListener('click', function () {
    this.classList.toggle('active');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      openArrow.style.display = 'block';
      closeArrow.style.display = 'none';
    } else {
      content.style.display = 'block';
      openArrow.style.display = 'none';
      closeArrow.style.display = 'block';
    }
  });
}
