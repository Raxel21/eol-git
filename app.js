((doc, w) => {
  const frag = doc.createDocumentFragment(),
    navbar = doc.querySelector('.navbar');
  for (let m = 0; m < 100; m++) {
    frag.appendChild(doc.createElement('br'));
  }
  doc.body.appendChild(frag);

  doc.addEventListener('scroll', () => {
    let scroll = doc.documentElement.scrollTop;

    navbar.classList[50 <= scroll ? 'add' : 'remove']('scrolling-nav-bar');
  });

  w.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code == 'Backslash') {
      alert('Hello World');
    }
  });

  for (let s = 0; s < 100; s++) {
    console.log(s);
  }

  let user = {
    name: 'Juan',
    lastName: 'Díaz',
    age: 21,
  };
})(document, window);
