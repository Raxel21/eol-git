((d) => {
  const frag = d.createDocumentFragment(),
    navbar = d.querySelector('.navbar');
  for (let m = 0; m < 100; m++) {
    frag.appendChild(d.createElement('br'));
  }
  d.body.appendChild(frag);

  d.addEventListener('scroll', () => {
    let scroll = d.documentElement.scrollTop;

    navbar.classList[50 <= scroll ? 'add' : 'remove']('scrolling-nav-bar');
  });
})(document);