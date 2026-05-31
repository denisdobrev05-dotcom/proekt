/* ============================================
   Топ 5 забележителности в България — логика
   ============================================ */

// --- Данни за забележителностите ---
// Изображенията са самостоятелни CSS градиенти, за да работи сайтът
// навсякъде без външни зависимости. Всяко място има свой колорит и емоджи.
const LANDMARKS = [
  {
    id: "rila",
    rank: 1,
    name: "Рилски манастир",
    tagLabel: "Култура",
    category: "culture",
    location: "Рила планина, обл. Кюстендил",
    emoji: "⛪",
    gradient: "linear-gradient(135deg, #2c3e6b 0%, #5b6fa8 45%, #c9a14b 100%)",
    wiki: ["Rila Monastery"],
    short: "Най-големият и най-известен православен манастир в България.",
    desc: "Основан през X век от свети Иван Рилски, Рилският манастир е духовно сърце на България. Прочут е с пъстрите си стенописи, дървените резби и характерните черно-бели аркади. Включен е в списъка на ЮНЕСКО за световно наследство.",
    facts: [
      { ico: "📅", label: "Основан", value: "X век (927 – 946 г.)" },
      { ico: "🏛️", label: "Статут", value: "Обект на ЮНЕСКО от 1983 г." },
      { ico: "📍", label: "Надм. височина", value: "≈ 1147 м" },
      { ico: "🎨", label: "Известен с", value: "1200 стенописа и резбован иконостас" }
    ],
    map: { x: 30, y: 70 }
  },
  {
    id: "rila-lakes",
    rank: 2,
    name: "Седемте рилски езера",
    tagLabel: "Природа",
    category: "nature",
    location: "Рила планина",
    emoji: "🏔️",
    gradient: "linear-gradient(135deg, #0e7c86 0%, #3fb6c4 50%, #bfeef0 100%)",
    wiki: ["Seven Rila Lakes"],
    short: "Ледникови езера на над 2000 м височина — едно от чудесата на Балканите.",
    desc: "Група от седем ледникови езера, разположени стъпаловидно в Рила планина. Всяко носи име според формата си — Сълзата, Окото, Бъбрека, Близнака, Трилистника, Рибното и Долното. Гледката от върховете над тях е сред най-впечатляващите в Европа.",
    facts: [
      { ico: "💧", label: "Брой езера", value: "7 ледникови езера" },
      { ico: "⛰️", label: "Височина", value: "2100 – 2535 м" },
      { ico: "🥾", label: "Достъп", value: "Лифт + планинско изкачване" },
      { ico: "❄️", label: "Произход", value: "Ледников, преди ~10 000 г." }
    ],
    map: { x: 33, y: 66 }
  },
  {
    id: "nessebar",
    rank: 3,
    name: "Старият Несебър",
    tagLabel: "История",
    category: "history",
    location: "Черноморие, обл. Бургас",
    emoji: "🏘️",
    gradient: "linear-gradient(135deg, #b5471f 0%, #e08a3c 45%, #f5d27a 100%)",
    wiki: ["Nesebar", "Old Nesebar"],
    short: "Древен полуостров с над 3000 години история и средновековни църкви.",
    desc: "Несебър е един от най-старите градове в Европа, разположен на малък скалист полуостров. Тесните калдъръмени улички, дървените къщи от епохата на Възраждането и десетките средновековни църкви му носят прозвището „музей под открито небе“. Обект на ЮНЕСКО.",
    facts: [
      { ico: "📜", label: "Възраст", value: "над 3200 години" },
      { ico: "⛪", label: "Църкви", value: "над 40 средновековни храма" },
      { ico: "🏛️", label: "Статут", value: "Обект на ЮНЕСКО от 1983 г." },
      { ico: "🌊", label: "Местоположение", value: "полуостров в Черно море" }
    ],
    map: { x: 88, y: 52 }
  },
  {
    id: "plovdiv",
    rank: 4,
    name: "Античен театър, Пловдив",
    tagLabel: "Култура",
    category: "culture",
    location: "Пловдив",
    emoji: "🏛️",
    gradient: "linear-gradient(135deg, #6b3f8a 0%, #b1639d 50%, #f0b9c4 100%)",
    wiki: ["Ancient Theatre of Philippopolis", "Ancient theatre (Plovdiv)", "Roman theatre of Plovdiv"],
    short: "Римски театър от II век, който и днес е сцена за концерти и спектакли.",
    desc: "Античният театър на Филипопол е един от най-добре запазените римски театри в света. Построен по времето на император Траян, той е побирал около 6000 зрители. Днес продължава да живее — тук се провеждат опери, концерти и фестивали с гледка към Родопите.",
    facts: [
      { ico: "📅", label: "Построен", value: "началото на II век сл. Хр." },
      { ico: "👥", label: "Капацитет", value: "≈ 6000 зрители" },
      { ico: "🎭", label: "Днес", value: "действаща сцена за спектакли" },
      { ico: "🏙️", label: "Град", value: "един от най-старите в Европа" }
    ],
    map: { x: 60, y: 60 }
  },
  {
    id: "belogradchik",
    rank: 5,
    name: "Белоградчишки скали",
    tagLabel: "Природа",
    category: "nature",
    location: "Стара планина, обл. Видин",
    emoji: "🪨",
    gradient: "linear-gradient(135deg, #8a5a2b 0%, #c98a4b 45%, #e7c79a 100%)",
    wiki: ["Belogradchik Rocks", "Belogradchik"],
    short: "Причудливи скални образувания и крепост, изваяни от природата.",
    desc: "Поразителни червеникави скални формации, простиращи се на около 30 км. С въображение в тях се разпознават фигури — Конникът, Мадоната, Монасите. Сред скалите е вградена и крепостта Калето. Място, кандидатствало за едно от новите седем природни чудеса на света.",
    facts: [
      { ico: "🗺️", label: "Дължина", value: "≈ 30 км скални масиви" },
      { ico: "🏰", label: "Крепост", value: "Калето — антична и средновековна" },
      { ico: "⏳", label: "Възраст на скалите", value: "над 200 млн. години" },
      { ico: "🌅", label: "Известни фигури", value: "Конникът, Мадоната, Адам и Ева" }
    ],
    map: { x: 22, y: 28 }
  }
];

// Реални очертания на България — последователност от [дължина, ширина]
// (lon, lat) по границата, по часовниковата стрелка. Проектират се в SVG
// координати по време на изпълнение, така че формата да е разпознаваема.
const BG_BORDER = [
  // Северна граница — река Дунав (запад → изток)
  [22.66, 44.16], [22.85, 43.99], [23.10, 43.92], [23.62, 43.79],
  [24.10, 43.73], [24.50, 43.70], [25.10, 43.62], [25.65, 43.70],
  [25.95, 43.84], [26.55, 44.04], [27.00, 44.08], [27.26, 44.07],
  // Североизток (Добруджа) → Черно море
  [28.58, 43.74],
  // Черноморско крайбрежие (север → юг)
  [28.45, 43.55], [28.15, 43.41], [27.92, 43.19], [27.88, 42.95],
  [27.68, 42.70], [27.75, 42.43], [27.55, 42.10], [28.04, 41.98],
  // Южна граница с Турция (изток → запад)
  [27.55, 42.00], [26.95, 41.97], [26.36, 41.71],
  // Южна граница с Гърция (изток → запад, през Родопите)
  [26.10, 41.34], [25.55, 41.31], [25.10, 41.41], [24.80, 41.40],
  [24.50, 41.57], [24.10, 41.46], [23.60, 41.38], [23.40, 41.40],
  // Югозапад — Северна Македония
  [23.00, 41.36], [22.92, 41.65], [22.88, 41.99], [22.66, 42.30],
  [22.36, 42.32],
  // Западна граница със Сърбия (юг → север)
  [22.45, 42.68], [22.78, 42.90], [22.45, 43.10], [22.60, 43.38],
  [22.40, 43.65], [22.50, 43.90]
];

// Реални координати [lon, lat] на забележителностите
const GEO = {
  rila:         [23.34, 42.13],
  "rila-lakes": [23.31, 42.20],
  nessebar:     [27.73, 42.66],
  plovdiv:      [24.75, 42.14],
  belogradchik: [22.68, 43.62]
};

// --- Географска проекция към SVG координати ---
const LON_MIN = 22.36, LON_MAX = 28.61, LAT_MIN = 41.24, LAT_MAX = 44.22;
const COSLAT = Math.cos((42.73 * Math.PI) / 180); // корекция за дължината
const MAP_PAD = 40;
const MAP_VW = 800;
const MAP_SCALE = (MAP_VW - 2 * MAP_PAD) / ((LON_MAX - LON_MIN) * COSLAT);
const MAP_VH = (LAT_MAX - LAT_MIN) * MAP_SCALE + 2 * MAP_PAD;

function projectGeo([lon, lat]) {
  return [
    MAP_PAD + (lon - LON_MIN) * COSLAT * MAP_SCALE,
    MAP_PAD + (LAT_MAX - lat) * MAP_SCALE
  ];
}

// --- Helpers ---
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function artMarkup(item) {
  // Градиентът + емоджито служат като плейсхолдър/fallback, докато
  // реалната снимка се зареди от Wikipedia (или ако зареждането се провали).
  return `<div class="card__art" data-art="${item.id}" style="background-image:${item.gradient};">
            <span class="art__emoji">${item.emoji}</span>
          </div>`;
}

// --- Зареждане на реални снимки от Wikipedia (CORS, в браузъра) ---
const photoCache = {}; // id -> url | null

// Лек тъмен слой върху снимките, за да се вписват в стила на сайта.
const PHOTO_TINT = "linear-gradient(180deg, rgba(16,32,24,0.10) 0%, rgba(14,28,20,0.45) 65%, rgba(12,24,17,0.70) 100%)";

async function fetchWikiPhoto(titles) {
  for (const title of titles) {
    const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*"
      + "&prop=pageimages&piprop=thumbnail|original&pithumbsize=1200&redirects=1"
      + "&titles=" + encodeURIComponent(title);
    try {
      const res = await fetch(api);
      if (!res.ok) continue;
      const data = await res.json();
      const pages = data?.query?.pages;
      if (!pages) continue;
      const page = Object.values(pages)[0];
      const src = page?.thumbnail?.source || page?.original?.source;
      if (src) return src;
    } catch (_) { /* пробваме следващото заглавие */ }
  }
  return null;
}

// Прилага снимка (или оставя градиента) към даден контейнер.
function applyPhoto(el, src) {
  if (!el || !src) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `${PHOTO_TINT}, url("${src}")`;
    el.classList.add("has-photo");
  };
  img.src = src; // зареждаме предварително, за да няма мигане
}

// Зарежда всички снимки веднъж и ги прилага към картите, картата „За проекта“ и кеша.
async function hydratePhotos() {
  await Promise.all(LANDMARKS.map(async (item) => {
    const src = await fetchWikiPhoto(item.wiki || []);
    photoCache[item.id] = src;
    if (src) {
      $$(`.card__art[data-art="${item.id}"]`).forEach(el => applyPhoto(el, src));
      $$(`.about__tile[data-art="${item.id}"]`).forEach(el => applyPhoto(el, src));
    }
  }));
}

// --- Генериране на картите ---
function renderCards() {
  const wrap = $("#cards");
  wrap.innerHTML = LANDMARKS.map((item, i) => `
    <article class="card ${i === 0 ? "card--featured" : ""}" data-category="${item.category}" data-id="${item.id}" style="transition-delay:${i * 80}ms">
      <div class="card__media">${artMarkup(item)}</div>
      <span class="card__rank">${item.rank}</span>
      <span class="card__tag">${item.tagLabel}</span>
      <div class="card__content">
        <h3 class="card__title">${item.name}</h3>
        <p class="card__loc">📍 ${item.location}</p>
        <span class="card__more">Научи повече →</span>
      </div>
    </article>
  `).join("");

  $$(".card", wrap).forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
  observeCards();
}

// --- Reveal на картите при скрол ---
function observeCards() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".card").forEach(c => io.observe(c));
}

// --- Филтри ---
function initFilters() {
  $$(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.dataset.filter;
      $$(".card").forEach(card => {
        const show = f === "all" || card.dataset.category === f;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

// --- Модал ---
const modal = $("#modal");
function openModal(id) {
  const item = LANDMARKS.find(l => l.id === id);
  if (!item) return;
  const media = $("#modalMedia");
  const cached = photoCache[item.id];
  if (cached) {
    media.style.backgroundImage = `${PHOTO_TINT}, url("${cached}")`;
    media.innerHTML = "";
  } else {
    media.style.backgroundImage = item.gradient;
    media.innerHTML = `<div style="height:100%;display:grid;place-items:center;font-size:5.5rem;filter:drop-shadow(0 8px 16px rgba(0,0,0,.4));">${item.emoji}</div>`;
    // Опит за зареждане на снимката и за модала, ако още не е готова.
    if (cached === undefined) {
      fetchWikiPhoto(item.wiki || []).then(src => {
        photoCache[item.id] = src;
        if (src && modal.classList.contains("is-open") && $("#modalTitle").textContent === item.name) {
          const i = new Image();
          i.onload = () => { media.style.backgroundImage = `${PHOTO_TINT}, url("${src}")`; media.innerHTML = ""; };
          i.src = src;
        }
      });
    }
  }
  $("#modalTag").textContent = `#${item.rank} · ${item.tagLabel}`;
  $("#modalTitle").textContent = item.name;
  $("#modalLocation").textContent = "📍 " + item.location;
  $("#modalDesc").textContent = item.desc;
  $("#modalFacts").innerHTML = item.facts.map(f => `
    <li><span class="ico">${f.ico}</span><span><b>${f.label}:</b> ${f.value}</span></li>
  `).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// --- Карта с реални очертания на България и точки ---
const SVGNS = "http://www.w3.org/2000/svg";

function renderMap() {
  const svg = $("#mapSvg");
  svg.setAttribute("viewBox", `0 0 ${MAP_VW} ${MAP_VH.toFixed(1)}`);

  // Очертанието на страната като плавна затворена крива
  const pts = BG_BORDER.map(projectGeo);
  const d = "M" + pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" L") + " Z";
  $("#bgShape").setAttribute("d", d);

  // Точки на забележителностите (вътре в SVG, в същата координатна система)
  const group = $("#mapPinsSvg");
  group.innerHTML = "";
  const tooltip = $("#mapTooltip");
  const wrap = $("#mapWrap");

  LANDMARKS.forEach(item => {
    const geo = GEO[item.id];
    if (!geo) return;
    const [x, y] = projectGeo(geo);

    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "map__pin");
    g.setAttribute("data-id", item.id);
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", item.name);
    g.innerHTML = `
      <circle class="map__pin-ring" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" />
      <circle class="map__pin-dot"  cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" />
      <circle class="map__pin-hit"  cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="16" />
    `;
    group.appendChild(g);

    const showTip = () => {
      const dot = g.querySelector(".map__pin-dot");
      const r = dot.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      tooltip.textContent = `${item.emoji} ${item.name}`;
      tooltip.style.left = (r.left + r.width / 2 - w.left) + "px";
      tooltip.style.top = (r.top - w.top) + "px";
      tooltip.classList.add("is-visible");
    };
    const hideTip = () => tooltip.classList.remove("is-visible");

    g.addEventListener("mouseenter", showTip);
    g.addEventListener("mouseleave", hideTip);
    g.addEventListener("focus", showTip);
    g.addEventListener("blur", hideTip);
    g.addEventListener("click", () => openModal(item.id));
    g.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(item.id); }
    });
  });
}

// --- Галерия „За проекта“ ---
function renderAbout() {
  $("#aboutGrid").innerHTML = LANDMARKS.slice(0, 4).map(item => `
    <div class="about__tile" data-art="${item.id}" style="background-image:${item.gradient};" title="${item.name}">
      <span class="art__emoji art__emoji--sm">${item.emoji}</span>
    </div>
  `).join("");
}

// --- Тема (светла/тъмна) ---
function initTheme() {
  const toggle = $("#themeToggle");
  const icon = $(".nav__toggle-icon");
  const saved = localStorage.getItem("bg-theme");
  if (saved === "dark") { document.documentElement.setAttribute("data-theme", "dark"); icon.textContent = "☀️"; }
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      icon.textContent = "🌙";
      localStorage.setItem("bg-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      icon.textContent = "☀️";
      localStorage.setItem("bg-theme", "dark");
    }
  });
}

// --- Прогрес лента + nav състояние ---
function initScroll() {
  const bar = $("#scrollProgress");
  const nav = $("#nav");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / h) * 100 + "%";
    nav.classList.toggle("is-scrolled", window.scrollY > 30);
  }, { passive: true });
}

// --- Reveal на секциите ---
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$(".section__head, .map, .about").forEach(el => { el.classList.add("reveal"); io.observe(el); });
}

// --- Инициализация ---
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  initFilters();
  renderMap();
  renderAbout();
  initTheme();
  initScroll();
  initReveal();
  $("#year").textContent = new Date().getFullYear();
  hydratePhotos(); // зарежда реалните снимки асинхронно
});
