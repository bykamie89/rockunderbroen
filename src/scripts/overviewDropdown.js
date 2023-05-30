document.addEventListener('load', () => {
  var info = document.getElementsByClassName('infobox');

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
});
