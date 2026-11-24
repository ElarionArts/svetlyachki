// Светлячки: головоломка — переключатель языка на страницах политики и условий
(function () {
  var root = document.documentElement;
  var titles = { ru: root.dataset.titleRu, en: root.dataset.titleEn };
  var buttons = document.querySelectorAll('.lang button');
  function apply(l, remember) {
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.lang = l;
    document.title = titles[l];
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    if (remember) {
      try { localStorage.setItem('lang', l); } catch (e) {}
      try { history.replaceState(null, '', location.pathname + '#' + l); } catch (e) {}
    }
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.lang, true); });
  });
  apply(document.documentElement.getAttribute('data-lang') || 'ru', false);
  // При открытии с диска папка не открывает index.html сама: дописываем его к ссылкам
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href$="/"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (!/^[a-z]+:/i.test(h)) a.setAttribute('href', h + 'index.html');
    });
  }
})();
