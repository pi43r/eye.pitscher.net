let toggleInfo = function(el) {
  el.classList.toggle('expand-info');

  let ex = el.querySelector('.expand-text');
  ex.classList.toggle('is-visible');

};
