// Светлячки: головоломка — скрипты главной страницы
// ===== Тексты на двух языках =====
var I18N = {
  ru: {
    title: 'Светлячки: головоломка — логическая игра для Android',
    name: 'Светлячки', iconAlt: 'Иконка игры Светлячки',
    navAbout: 'Об игре', navShots: 'Скриншоты', navRules: 'Как играть',
    tagline: 'Зажгите всех светлячков',
    lead: 'Спокойная логическая игра для Android. Нажатие переключает клетку и её соседей — звучит просто, но каждый ход меняет сразу несколько огоньков.',
    download: 'Скачать в RuStore', soonGP: 'Скоро в Google Play',
    meta: 'Бесплатно · Android 7.0 и новее · без регистрации',
    demoTitle: 'Попробуйте прямо здесь', demoText: 'Нажмите на клетку, чтобы зажечь всех светлячков',
    boardLabel: 'Поле 3 на 3', newBoard: 'Новое поле',
    win: 'Все светлячки светятся! В игре таких уровней 150.',
    cell: 'Клетка', cellOn: 'светится', cellOff: 'не светится',
    aboutTitle: 'Об игре', aboutSub: 'Логическая игра и головоломка для ума — на пару минут или на весь вечер.',
    f1t: '150 уровней', f1d: 'От разминки 3×3 до сложных полей 7×7. Первые уровни научат правилам.',
    f2t: 'Три звезды', f2d: 'У каждого уровня есть идеальное решение. Найдите его за минимальное число ходов.',
    f3t: 'Подсказки', f3d: 'Застряли? Подсказка покажет верный ход из кратчайшего решения.',
    f4t: 'Короткие уровни', f4d: 'От 30 секунд до пары минут — удобно в дороге и в очереди.',
    f5t: 'Без интернета', f5d: 'Играйте в метро, в самолёте или на даче — сеть не нужна.',
    f6t: 'Спокойный дизайн', f6d: 'Тёмная ночная тема, мягкое свечение и никакой спешки.',
    shotsTitle: 'Скриншоты', shotsSub: 'Как выглядит игра на телефоне.', shotsEmpty: 'Скриншоты скоро появятся.',
    shot1: 'Игровое поле 5 на 5', shot2: 'Уровень пройден на три звезды', shot3: 'Подсказка на поле',
    shot4: 'Сложное поле 7 на 7', shot5: 'Список уровней со звёздами', shot6: 'Главное меню',
    shotOpen: 'Открыть скриншот: ',
    rulesTitle: 'Как играть', rulesSub: 'Правила понятны за минуту.',
    r1: 'Нажатие переключает клетку и её соседей сверху, снизу, слева и справа.',
    r2: 'Светящиеся клетки гаснут, тёмные — загораются.',
    r3: 'Зажгите все клетки, пока не закончились ходы. Меньше ходов — больше звёзд.',
    ctaSub: 'Бесплатная игра для Android.',
    privacy: 'Политика конфиденциальности', privacyHref: 'privacy-policy.html#ru',
    terms: 'Условия использования', termsHref: 'terms.html#ru',
    viewer: 'Скриншот', prev: 'Предыдущий', next: 'Следующий', close: 'Закрыть'
  },
  en: {
    title: 'Fireflies: Logic Puzzle — a logic game for Android',
    name: 'Fireflies', iconAlt: 'Fireflies game icon',
    navAbout: 'About', navShots: 'Screenshots', navRules: 'How to play',
    tagline: 'Light up every firefly',
    lead: 'A calm logic game for Android. A tap switches a cell and its neighbours — sounds simple, but every move changes several lights at once.',
    download: 'Get it on RuStore', soonGP: 'Coming soon to Google Play',
    meta: 'Free · Android 7.0+ · no sign-up',
    demoTitle: 'Try it right here', demoText: 'Tap a cell to light up every firefly',
    boardLabel: '3 by 3 board', newBoard: 'New board',
    win: 'Every firefly is lit! The game has 150 levels like this.',
    cell: 'Cell', cellOn: 'lit', cellOff: 'dark',
    aboutTitle: 'About the game', aboutSub: 'A logic puzzle and brain teaser — for a couple of minutes or a whole evening.',
    f1t: '150 levels', f1d: 'From a 3×3 warm-up to tricky 7×7 boards. The first levels teach you the rules.',
    f2t: 'Three stars', f2d: 'Every level has a perfect solution. Find it in the fewest moves.',
    f3t: 'Hints', f3d: 'Stuck? A hint shows the right move from the shortest solution.',
    f4t: 'Short levels', f4d: '30 seconds to a couple of minutes — perfect for a commute or a queue.',
    f5t: 'Play offline', f5d: 'Play on the subway, on a plane or out of town — no network needed.',
    f6t: 'Calm design', f6d: 'A dark night theme, a soft glow and no rush.',
    shotsTitle: 'Screenshots', shotsSub: 'What the game looks like on a phone.', shotsEmpty: 'Screenshots coming soon.',
    shot1: '5 by 5 game board', shot2: 'Level complete with three stars', shot3: 'A hint on the board',
    shot4: 'A tricky 7 by 7 board', shot5: 'Level list with stars', shot6: 'Main menu',
    shotOpen: 'Open screenshot: ',
    rulesTitle: 'How to play', rulesSub: 'Learn the rules in a minute.',
    r1: 'A tap switches the cell and its neighbours above, below, left and right.',
    r2: 'Lit cells go dark, dark cells light up.',
    r3: 'Light up every cell before you run out of moves. Fewer moves earn more stars.',
    ctaSub: 'A free game for Android.',
    privacy: 'Privacy policy', privacyHref: 'privacy-policy.html#en',
    terms: 'Terms of Use', termsHref: 'terms.html#en',
    viewer: 'Screenshot', prev: 'Previous', next: 'Next', close: 'Close'
  }
};

var lang = 'ru';
function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || ''; }

function pickLanguage() {
  // 1) ?lang=en в адресе  2) выбор, сохранённый раньше  3) язык браузера
  var fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl && I18N[fromUrl]) return fromUrl;
  try { var saved = localStorage.getItem('lang'); if (saved && I18N[saved]) return saved; } catch (e) {}
  var nav = (navigator.language || 'ru').toLowerCase();
  return nav.indexOf('ru') === 0 ? 'ru' : 'en';
}

function applyLanguage(next, remember) {
  lang = next;
  document.documentElement.lang = lang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.dataset.i18nAria;
    var m = key.match(/^shotOpen(\d)$/);
    el.setAttribute('aria-label', m ? t('shotOpen') + t('shot' + m[1]) : t(key));
  });
  document.getElementById('privacy-link').setAttribute('href', t('privacyHref'));
  document.getElementById('terms-link').setAttribute('href', t('termsHref'));
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  if (window.renderBoard) window.renderBoard();
  if (window.updateShots) window.updateShots();
  if (remember) { try { localStorage.setItem('lang', lang); } catch (e) {} }
}

document.querySelectorAll('.lang button').forEach(function (b) {
  b.addEventListener('click', function () { applyLanguage(b.dataset.lang, true); });
});

// Огоньки на фоне
(function () {
  var sky = document.getElementById('sky');
  for (var i = 0; i < 40; i++) {
    var s = document.createElement('i');
    s.style.left = (Math.random() * 100) + '%';
    s.style.top = (Math.random() * 100) + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    var size = Math.random() < 0.3 ? 4 : 2;
    s.style.width = s.style.height = size + 'px';
    sky.appendChild(s);
  }
})();

// Скриншоты на нужном языке.
// Русские: screenshots/ru/shot-1.png … shot-6.png, английские: screenshots/en/shot-1.png … shot-6.png.
// Если английского файла нет — показывается русский; если нет и его — скриншот скрывается.
window.updateShots = function () {
  var box = document.getElementById('shots');
  var empty = document.getElementById('shots-empty');
  var figs = box.querySelectorAll('figure');
  var pending = figs.length;
  function done() {
    if (--pending > 0) return;
    var anyVisible = Array.prototype.some.call(figs, function (f) { return !f.hidden; });
    box.hidden = !anyVisible;
    empty.hidden = anyVisible;
  }
  figs.forEach(function (f) {
    var img = f.querySelector('img');
    var n = img.dataset.shot;
    var ruSrc = 'screenshots/ru/shot-' + n + '.png';
    var wanted = 'screenshots/' + (lang === 'en' ? 'en' : 'ru') + '/shot-' + n + '.png';
    img.onload = function () { f.hidden = false; done(); };
    img.onerror = function () {
      if (img.getAttribute('src') !== ruSrc) { img.setAttribute('src', ruSrc); return; }
      f.hidden = true; done();
    };
    if (img.getAttribute('src') === wanted && img.complete) {
      // Картинка уже загружена (или уже не загрузилась) — результат известен сразу.
      f.hidden = img.naturalWidth === 0;
      done();
    } else {
      img.setAttribute('src', wanted);
    }
  });
};

// Просмотр скриншотов во весь экран
(function () {
  var viewer = document.getElementById('viewer');
  var big = document.getElementById('viewer-img');
  var index = 0;
  function list() { return Array.prototype.slice.call(document.querySelectorAll('#shots figure:not([hidden]) img')); }
  function show(i) {
    var imgs = list();
    if (!imgs.length) return;
    index = (i + imgs.length) % imgs.length;
    big.src = imgs[index].src;
    big.alt = imgs[index].alt;
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() { viewer.hidden = true; document.body.style.overflow = ''; }
  document.getElementById('shots').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (btn) show(list().indexOf(btn.querySelector('img')));
  });
  document.getElementById('viewer-close').addEventListener('click', close);
  document.getElementById('viewer-prev').addEventListener('click', function (e) { e.stopPropagation(); show(index - 1); });
  document.getElementById('viewer-next').addEventListener('click', function (e) { e.stopPropagation(); show(index + 1); });
  viewer.addEventListener('click', function (e) { if (e.target === viewer || e.target === big) close(); });
  document.addEventListener('keydown', function (e) {
    if (viewer.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  // Свайп влево-вправо на телефоне
  var x0 = null;
  viewer.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();

// Мини-игра 3×3
(function () {
  var boardEl = document.getElementById('board');
  var statusEl = document.getElementById('status');
  var N = 3, cells = [], lit = [];
  // Стартовые поля: каждое решается в 1–2 нажатия
  var puzzles = [[4], [0], [1], [0, 8], [3, 4], [2, 6], [1, 7]];
  var last = -1;

  function neighbours(i) {
    var r = Math.floor(i / N), c = i % N, list = [i];
    if (r > 0) list.push(i - N);
    if (r < N - 1) list.push(i + N);
    if (c > 0) list.push(i - 1);
    if (c < N - 1) list.push(i + 1);
    return list;
  }
  function toggle(i) { neighbours(i).forEach(function (k) { lit[k] = !lit[k]; }); }
  function render() {
    cells.forEach(function (b, k) {
      b.classList.toggle('on', lit[k]);
      b.setAttribute('aria-label', t('cell') + ' ' + (k + 1) + ', ' + (lit[k] ? t('cellOn') : t('cellOff')));
    });
  }
  function newGame() {
    var p;
    do { p = Math.floor(Math.random() * puzzles.length); } while (p === last && puzzles.length > 1);
    last = p;
    lit = new Array(N * N).fill(true);
    puzzles[p].forEach(toggle);
    statusEl.textContent = '';
    statusEl.classList.remove('win');
    render();
  }
  for (var i = 0; i < N * N; i++) {
    (function (k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.addEventListener('click', function () {
        if (lit.every(Boolean)) return;
        toggle(k);
        neighbours(k).forEach(function (n) {
          cells[n].classList.add('flash');
          setTimeout(function () { cells[n].classList.remove('flash'); }, 350);
        });
        render();
        if (lit.every(Boolean)) {
          statusEl.textContent = t('win');
          statusEl.classList.add('win');
        }
      });
      cells.push(b);
      boardEl.appendChild(b);
    })(i);
  }
  document.getElementById('reset').addEventListener('click', newGame);
  window.renderBoard = function () {
    render();
    if (lit.every(Boolean)) statusEl.textContent = t('win');
  };
  newGame();
})();

applyLanguage(pickLanguage(), false);

// При открытии с диска папка не открывает index.html сама: дописываем его к ссылкам
if (location.protocol === 'file:') {
  document.querySelectorAll('a[href$="/"]').forEach(function (a) {
    var h = a.getAttribute('href');
    if (!/^[a-z]+:/i.test(h)) a.setAttribute('href', h + 'index.html');
  });
}
