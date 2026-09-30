// ==================================================
//  SETTINGS
// ==================================================
const IMAGE_PATH   = 'background.jpg';
const FONT         = 'Helvetica';
const HOVER_EASE   = 0.12;   // speed of negative fade
const WHITE_EASE   = 0.08;   // speed of white fade
const EXPAND_EASE  = 0.09;   // speed of LAB white expanding to full screen

// ABOUT text reveal
const FADE_DURATION = 1.2;
const STAGGER       = 0.35;
const DRIFT         = 16;
const LINE_HEIGHT   = 1.35;
const PARA_GAP      = 1.1;

// Cursor
const CURSOR_SIZE       = 18;
const CURSOR_HOVER_SIZE = 26;
const CURSOR_PRESS_SIZE = 12;
const CURSOR_FOLLOW     = 0.5;
const CURSOR_SIZE_EASE  = 0.2;

// Touch
const TAP_MOVE_LIMIT = 12;   // px a finger can move and still count as a tap

// Touch devices (phones/tablets): no hover, no custom cursor
const IS_TOUCH = window.matchMedia('(hover: none)').matches;

// ==================================================
//  ABOUT COPY: pick 'A', 'B', 'C' or 'D'
// ==================================================
const ABOUT_VERSION = 'A';

const ABOUT_VERSIONS = {
  A: [
    'STEWART MARSHALL IS A CREATIVE TECHNOLOGIST AND ARTIST, CURRENTLY AT LANDOR, EXPLORING HOW TECHNOLOGY CAN GIVE BRANDS UNIQUE EXPERIENCES AND SHAPE THE WORLD AROUND US.',
    'HIS WORK SPANS INTERACTIVE INSTALLATIONS, WEB EXPERIENCES, DESIGN TOOLS, 3D MOTION, AR AND GENERATIVE DESIGN.',
    'HE HOLDS A FIRST CLASS BA (HONS) IN INTERACTION DESIGN FROM THE GLASGOW SCHOOL OF ART.',
  ],
  B: [
    'STEWART MARSHALL IS A CREATIVE TECHNOLOGIST AND ARTIST AT LANDOR.',
    'HE USES TECHNOLOGY TO BUILD UNIQUE BRAND EXPERIENCES AND SHAPE THE WORLD AROUND US.',
    'INSTALLATIONS. WEB. DESIGN TOOLS. 3D MOTION. AR. GENERATIVE DESIGN.',
    'FIRST CLASS BA (HONS) INTERACTION DESIGN, THE GLASGOW SCHOOL OF ART.',
  ],
  C: [
    "I'M STEWART MARSHALL, A CREATIVE TECHNOLOGIST AND ARTIST AT LANDOR, EXPLORING HOW TECHNOLOGY CAN GIVE BRANDS UNIQUE EXPERIENCES AND SHAPE THE WORLD AROUND US.",
    'MY WORK SPANS INTERACTIVE INSTALLATIONS, WEB EXPERIENCES, DESIGN TOOLS, 3D MOTION, AR AND GENERATIVE DESIGN.',
    'I HOLD A FIRST CLASS BA (HONS) IN INTERACTION DESIGN FROM THE GLASGOW SCHOOL OF ART.',
  ],
  D: [
    'STEWART MARSHALL\nCREATIVE TECHNOLOGIST & ARTIST',
    'CURRENTLY: LANDOR',
    'PRACTICE: INTERACTIVE INSTALLATIONS, WEB EXPERIENCES, DESIGN TOOLS, 3D MOTION, AR, GENERATIVE DESIGN',
    'EDUCATION: BA (HONS) INTERACTION DESIGN, FIRST CLASS, THE GLASGOW SCHOOL OF ART',
  ],
};

// ==================================================
//  LAB PROJECTS
//  blocks:
//    grid  { left: [media], right: [media], offset: 'left' | 'right' }
//    full  { src, ratio?, alt? }            -> one image, full width
//    video { youtube, start?, caption? }    -> full-width YouTube embed
//  media items inside a grid:
//    { src, ratio?: '3 / 4', alt? }         -> image (ratio = crop shape)
//    { youtube, start?, caption? }          -> video (start = seconds)
// ==================================================
const LAB_PROJECTS = [
  // ---------------- ECHOS AND BONDS ----------------
  {
    year: '2024',
    title: 'Echos and Bonds',
    meta: [
      '3D software, Touchdesigner, audio reactive, casted items',
      'dimensions variable',
    ],
    text: [
      'This work explores the change within myself and my artistic practice after one of my best friends was seriously assaulted in Glasgow.',
      'Ambiguous 3D forms, manifestations of trauma, position themselves in a seemingly infinite body of water. They deform and react to audio as well as the viewer.',
      'The physical space consists of a triptych style composition of 2 screens and a mapped projection linking them with moments of difference and unity.',
      '3 Casts of the forms exist in physical space, each of different material and finish levels. Users are encouraged to handle these objects and observe the differences between them.',
    ],
    blocks: [
      {
        type: 'grid',
        offset: 'left',
        left: [
          { src: '0265.jpg', ratio: '3 / 4', alt: 'Red sculptural forms on water' },
        ],
        right: [
          { src: 'stewart-marshall-003-1.webp', ratio: '3 / 4', alt: 'Macro render of red form' },
          { src: 'degree-show (1).jpg', alt: 'Triptych projection installation' },
        ],
      },
      {
        type: 'grid',
        left: [
          { src: 'stewartmarshall_degreeshow_me4-1.webp', alt: 'Installation with three casts' },
        ],
        right: [
          { src: 'stewartinstagram-1 (1).jpg', ratio: '11 / 16', alt: 'Close-up of rippled red surface' },
        ],
      },
      { type: 'video', youtube: 'auAyGD034ek', caption: 'Process' },
    ],
  },

  // ---------------- BOX ----------------
  {
    year: '2024',
    title: 'Box',
    meta: [
      'Custom software, midi controller, multi screen',
      'AV instrument, performance',
    ],
    text: [
      'Box is an AV instrument and performance artwork that allows for both visual and audio manipulation using custom software to remap a midi controller, inspired by ambient tape loops.',
    ],
    blocks: [
      {
        type: 'grid',
        offset: 'right',
        left: [
          { src: 'img_1980.jpg', alt: 'Box: four screens showing pink rings' },
        ],
        right: [
          { src: 'img_1981.jpg', alt: 'Box: four screens showing pink stripes' },
        ],
      },
      { type: 'full', src: 'img_1983.jpg', alt: 'Box: four screens showing yellow dot patterns' },
      { type: 'video', youtube: 'KjJ92yjW-ZI', start: 401, caption: 'Performance' },
    ],
  },

  // ---------------- PAST POEMS ----------------
  {
    year: '2022',
    title: 'Past Poems',
    meta: [
      'Generative typography, custom software, two screens',
      'dimensions variable',
    ],
    text: [
      'Past Poems focuses on processing grief and loss after my gran passed away earlier in the year. She had a love for reading and would often write short stories or poems in her spare time.',
      "The two screens display a speech and poem she had written. The subjects of which showcased another two of her interests, golfing, to which she was the women's captain of Hamilton Golf Club and gardening. The floral patterns present in the visuals also represent her love for gardening.",
      'Dedicated to Jean Marshall.',
    ],
    blocks: [
      {
        type: 'grid',
        offset: 'left',
        left: [
          { src: '66558972162__c43aaf1b-1e49-4de9-811c-fc9ab542324f.jpg', ratio: '3 / 4', alt: 'Past Poems: two screens with words forming a pinwheel' },
        ],
        right: [
          { src: '66559240963__48e2c710-e167-4a04-a8da-37d1425dcef7 (1).jpg', ratio: '3 / 4', alt: 'Past Poems: two screens with words radiating outward' },
        ],
      },
      { type: 'full', src: '66558990572__52642c7b-4e37-4176-bc4c-6f0751080cce.jpg', alt: 'Past Poems: words forming spiral and floral patterns across two screens' },
      {
        type: 'grid',
        offset: 'right',
        left: [
          { src: '66560471112__edfc0b55-a221-4f55-a86a-368c4d59afdc.jpg', ratio: '3 / 4', alt: 'Close-up of the poem in serif type' },
        ],
        right: [
          { src: 'noise.webp', ratio: '3 / 4', alt: 'Past Poems: single screen with scattered words' },
        ],
      },
      { type: 'video', youtube: '8RTh2li_8tc', start: 3, caption: 'Past Poems' },
    ],
  },
];

// ==================================================
let bgImg;
let normalBuf, invertBuf;
let ready = false;
let hovered = null;          // 'about' | 'lab' | null
let active = null;           // 'about' when bio is showing
let aboutLayout;
let touchHold = null;        // half currently under a finger
let lastTouchTime = 0;       // used to ignore the browser's fake click after a touch
let resizeTimer;

// LAB state: 'closed' | 'opening' | 'open' | 'closingOverlay' | 'closing'
let labState = 'closed';
let expand = 0;
let labEl, revealObserver;

// Cursor (desktop only)
let cursorEl = null;
let mx = -100, my = -100;
let cx = -100, cy = -100;
let cSize = CURSOR_SIZE;
let cursorVisible = false;
let pressing = false;
let overLink = false;

const halves = {
  about: { label: 'ABOUT', inv: 0, white: 0, master: 0, t: 0 },
  lab:   { label: 'LAB',   inv: 0, white: 0 },
};

// --------------------------------------------------
function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  pixelDensity(min(displayDensity(), 2));   // keeps phones fast
  textFont(FONT);
  textAlign(CENTER, CENTER);

  setupInput(cnv.elt);
  if (!IS_TOUCH) setupCursor();
  buildLab();

  loadImage(IMAGE_PATH, (img) => {
    bgImg = img;
    buildBuffers();
    buildAboutLayout();
    ready = true;
  });
}

// --------------------------------------------------
//  Background buffers
// --------------------------------------------------
function buildBuffers() {
  if (normalBuf) normalBuf.remove();
  if (invertBuf) invertBuf.remove();

  normalBuf = createGraphics(width, height);
  drawCover(normalBuf, bgImg);

  invertBuf = createGraphics(width, height);
  invertBuf.image(normalBuf, 0, 0);
  invertBuf.filter(INVERT);
}

function drawCover(g, img) {
  const canvasRatio = g.width / g.height;
  const imgRatio = img.width / img.height;
  let w, h;
  if (imgRatio > canvasRatio) {
    h = g.height;
    w = h * imgRatio;
  } else {
    w = g.width;
    h = w / imgRatio;
  }
  g.image(img, (g.width - w) / 2, (g.height - h) / 2, w, h);
}

// --------------------------------------------------
//  Layout helpers
// --------------------------------------------------
function getRects() {
  if (width >= height) {
    return {
      about: { x: 0,         y: 0, w: width / 2, h: height },
      lab:   { x: width / 2, y: 0, w: width / 2, h: height },
    };
  }
  return {
    about: { x: 0, y: 0,          w: width, h: height / 2 },
    lab:   { x: 0, y: height / 2, w: width, h: height / 2 },
  };
}

function inside(r, px, py) {
  return px >= r.x && px < r.x + r.w && py >= r.y && py < r.y + r.h;
}

function halfAt(px, py) {
  const rects = getRects();
  for (const key in rects) if (inside(rects[key], px, py)) return key;
  return null;
}

// --------------------------------------------------
//  ABOUT text layout (wraps + auto-shrinks to fit)
// --------------------------------------------------
function buildAboutLayout() {
  const a = getRects().about;
  const narrow = a.w < 600;
  aboutLayout = layoutText(ABOUT_VERSIONS[ABOUT_VERSION], a, {
    align: LEFT,
    style: BOLD,
    size: constrain(min(a.w, a.h) * 0.034, 11, 22),
    minSize: 9,
    widthFactor: narrow ? 0.84 : 0.72,
  });
}

function layoutText(paragraphs, r, opts) {
  const boxW = r.w * opts.widthFactor;
  const maxH = r.h * 0.8;
  let size = opts.size;
  let paras, lineH, gap, total;

  textStyle(opts.style);
  while (true) {
    textSize(size);
    lineH = size * LINE_HEIGHT;
    gap = size * PARA_GAP;
    paras = paragraphs.map((p) => wrapText(p, boxW));
    total = paras.reduce((s, lines) => s + lines.length * lineH, 0)
          + gap * (paras.length - 1);
    if (total <= maxH || size <= opts.minSize) break;
    size -= 0.5;
  }

  let y = r.y + (r.h - total) / 2;
  const blocks = paras.map((lines) => {
    const b = { lines, y };
    y += lines.length * lineH + gap;
    return b;
  });

  const x = opts.align === LEFT ? r.x + (r.w - boxW) / 2 : r.x + r.w / 2;
  return { size, style: opts.style, align: opts.align, lineH, x, blocks };
}

function wrapText(str, maxW) {
  const out = [];
  for (const chunk of str.split('\n')) {
    let line = '';
    for (const word of chunk.split(' ')) {
      const test = line ? line + ' ' + word : word;
      if (textWidth(test) > maxW && line) {
        out.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) out.push(line);
  }
  return out;
}

// --------------------------------------------------
//  DRAW
// --------------------------------------------------
function draw() {
  updateCursor();

  if (!ready) {
    background(0);
    fill(255);
    noStroke();
    textStyle(BOLD);
    textSize(16);
    text('LOADING…', width / 2, height / 2);
    return;
  }

  // The LAB page covers everything, so skip drawing the canvas
  if (labState === 'open') {
    hovered = null;
    return;
  }

  const rects = getRects();

  // Hover on desktop, finger-down on touch
  hovered = null;
  if (labState === 'closed') {
    if (touchHold) hovered = touchHold;
    else if (cursorVisible) hovered = halfAt(mx, my);
  }

  // ---- LAB transition targets ----
  const labOn = labState === 'opening' || labState === 'open' || labState === 'closingOverlay';
  const labWhiteTarget = labOn || (labState === 'closing' && expand > 0.05) ? 1 : 0;
  const expandTarget = labOn && halves.lab.white > 0.9 ? 1 : 0;
  expand = lerp(expand, expandTarget, EXPAND_EASE);

  if (labState === 'opening' && expand > 0.985) showLab();
  if (labState === 'closing' && expand < 0.01 && halves.lab.white < 0.01) {
    labState = 'closed';
    expand = 0;
  }

  image(normalBuf, 0, 0, width, height);

  for (const key in rects) {
    const r = rects[key];
    const h = halves[key];

    // ---- animate ----
    h.inv = lerp(h.inv, hovered === key ? 1 : 0, HOVER_EASE);
    const whiteTarget = key === 'lab' ? labWhiteTarget : active === key ? 1 : 0;
    h.white = lerp(h.white, whiteTarget, WHITE_EASE);

    // ---- negative image clipped to this half ----
    if (h.inv > 0.005) {
      drawingContext.save();
      drawingContext.beginPath();
      drawingContext.rect(r.x, r.y, r.w, r.h);
      drawingContext.clip();
      tint(255, h.inv * 255);
      image(invertBuf, 0, 0, width, height);
      noTint();
      drawingContext.restore();
    }

    // ---- label ----
    const labelAlpha = (1 - h.white) * 255;
    if (labelAlpha > 1) {
      const c = lerpColor(color(255), color(0), h.inv);
      c.setAlpha(labelAlpha);
      fill(c);
      noStroke();
      textStyle(BOLD);
      textSize(min(r.w, r.h) * 0.12);
      text(h.label, r.x + r.w / 2, r.y + r.h / 2);
    }

    // ---- white fill ----
    if (h.white > 0.005) {
      noStroke();
      fill(255, h.white * 255);
      rect(r.x, r.y, r.w, r.h);
    }
  }

  // ---- ABOUT bio reveal ----
  const a = halves.about;
  const show = active === 'about' && a.white > 0.8;
  a.master = lerp(a.master, show ? 1 : 0, 0.2);
  if (show) a.t += deltaTime / 1000;
  else if (a.master < 0.01) a.t = 0;
  if (a.master > 0.005) drawReveal(aboutLayout, a);

  // ---- divider ----
  const divAlpha = 150 * (1 - expand);
  if (divAlpha > 1) {
    stroke(255, divAlpha);
    strokeWeight(1);
    if (width >= height) line(width / 2, 0, width / 2, height);
    else line(0, height / 2, width, height / 2);
  }

  // ---- LAB white expanding to full screen ----
  if (expand > 0.002) {
    const r = rects.lab;
    noStroke();
    fill(255);
    rect(
      lerp(r.x, 0, expand),
      lerp(r.y, 0, expand),
      lerp(r.w, width, expand),
      lerp(r.h, height, expand)
    );
  }
}

function drawReveal(L, h) {
  noStroke();
  textStyle(L.style);
  textSize(L.size);
  textAlign(L.align, TOP);

  L.blocks.forEach((b, i) => {
    const p = constrain((h.t - i * STAGGER) / FADE_DURATION, 0, 1);
    const e = 1 - pow(1 - p, 3);
    const alpha = e * h.master * 255;
    if (alpha < 1) return;
    const drift = (1 - e) * DRIFT;
    fill(0, alpha);
    b.lines.forEach((ln, j) => text(ln, L.x, b.y + j * L.lineH + drift));
  });

  textAlign(CENTER, CENTER);
}

// --------------------------------------------------
//  LAB PAGE (HTML overlay)
// --------------------------------------------------
function buildLab() {
  labEl = createDiv('');
  labEl.id('lab');

  labEl.html(`
    <header class="lab-header">
      <button class="lab-back" type="button">← BACK</button>
      <span>LAB</span>
    </header>
    <main class="lab-main">
      ${LAB_PROJECTS.map(projectHTML).join('')}
    </main>
    <footer class="lab-footer">
      <button class="lab-top" type="button">BACK TO TOP ↑</button>
    </footer>
  `);

  const root = labEl.elt;
  root.querySelector('.lab-back').addEventListener('click', closeLab);
  root.querySelector('.lab-top').addEventListener('click', () =>
    root.scrollTo({ top: 0, behavior: 'smooth' })
  );

  // Hide the custom cursor over YouTube (the iframe swallows mouse events)
  root.querySelectorAll('iframe').forEach((f) => {
    f.addEventListener('mouseenter', () => (cursorVisible = false));
  });

  // Soft fade-in as elements scroll into view
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add('in');
      });
    },
    { root, threshold: 0.12 }
  );
}

function projectHTML(p) {
  const meta = (p.meta || []).map((m) => `<p>${m}</p>`).join('');
  const text = (p.text || []).map((t) => `<p>${t}</p>`).join('');
  return `
    <section class="project">
      <div class="project-head reveal">
        <span class="project-year">${p.year || ''}</span>
        <h1>${p.title}</h1>
      </div>
      <div class="project-info reveal">
        <div class="project-meta">${meta}</div>
        <div class="project-text">${text}</div>
      </div>
      ${p.blocks.map(blockHTML).join('')}
    </section>
  `;
}

function blockHTML(b) {
  if (b.type === 'grid') {
    const cls = b.offset ? ` offset-${b.offset}` : '';
    return `
      <div class="block grid${cls}">
        <div class="col">${(b.left || []).map(mediaHTML).join('')}</div>
        <div class="col">${(b.right || []).map(mediaHTML).join('')}</div>
      </div>`;
  }
  if (b.type === 'full' || b.type === 'video') {
    return `<div class="block">${mediaHTML(b)}</div>`;
  }
  return '';
}

function mediaHTML(m) {
  const cap = m.caption ? `<figcaption>${m.caption}</figcaption>` : '';

  // Video
  if (m.youtube) {
    const start = m.start ? `&start=${m.start}` : '';
    return `
      <figure class="media reveal">
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/${m.youtube}?rel=0&modestbranding=1&playsinline=1${start}"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        ${cap}
      </figure>`;
  }

  // Image (optionally cropped to a fixed shape)
  const crop = m.ratio ? ' crop' : '';
  const style = m.ratio ? ` style="aspect-ratio:${m.ratio}"` : '';
  return `
    <figure class="media reveal">
      <div class="frame${crop}"${style}>
        <img src="${encodeURI(m.src)}" alt="${m.alt || ''}" loading="lazy" decoding="async">
      </div>
      ${cap}
    </figure>`;
}

function openLab() {
  if (labState !== 'closed') return;
  active = null;               // close ABOUT if it's open
  labState = 'opening';
}

function showLab() {
  labState = 'open';
  labEl.elt.scrollTop = 0;
  labEl.addClass('open');
  resetReveals();
}

function closeLab() {
  if (labState !== 'open') return;
  labState = 'closingOverlay';
  labEl.removeClass('open');
  stopVideos();
  // Wait for the overlay to fade out, then shrink the white back down
  setTimeout(() => (labState = 'closing'), 600);
}

function resetReveals() {
  revealObserver.disconnect();
  labEl.elt.querySelectorAll('.reveal').forEach((el) => {
    el.classList.remove('in');
    revealObserver.observe(el);
  });
}

function stopVideos() {
  labEl.elt.querySelectorAll('iframe').forEach((f) => (f.src = f.src));
}

// --------------------------------------------------
//  INPUT
//  Touch: handled directly on touchend (one tap, no fake hover)
//  Mouse: handled on click
// --------------------------------------------------
function setupInput(el) {
  let start = null;

  el.addEventListener('touchstart', (e) => {
    e.preventDefault();                        // stops fake hover + double-tap zoom
    const t = e.changedTouches[0];
    start = { x: t.clientX, y: t.clientY };
    touchHold = halfAt(t.clientX, t.clientY);  // show the negative while pressed
  }, { passive: false });

  el.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const t = e.changedTouches[0];
    if (start && Math.hypot(t.clientX - start.x, t.clientY - start.y) > TAP_MOVE_LIMIT) {
      touchHold = null;                        // finger moved too far: not a tap
    }
  }, { passive: false });

  el.addEventListener('touchend', (e) => {
    e.preventDefault();                        // stops the delayed fake click
    const t = e.changedTouches[0];
    const isTap = start &&
      Math.hypot(t.clientX - start.x, t.clientY - start.y) <= TAP_MOVE_LIMIT;
    start = null;
    touchHold = null;
    lastTouchTime = Date.now();
    if (isTap) handleTap(t.clientX, t.clientY);
  }, { passive: false });

  el.addEventListener('touchcancel', () => {
    start = null;
    touchHold = null;
  });

  // Mouse / trackpad
  el.addEventListener('click', (e) => {
    if (Date.now() - lastTouchTime < 800) return;   // ignore clicks caused by a touch
    handleTap(e.clientX, e.clientY);
  });
}

function handleTap(x, y) {
  if (!ready || labState !== 'closed') return;
  const key = halfAt(x, y);
  if (key === 'lab') openLab();
  else if (key === 'about') active = active === 'about' ? null : 'about';
}

// --------------------------------------------------
//  NEGATIVE CURSOR (real mouse only)
// --------------------------------------------------
function setupCursor() {
  cursorEl = createDiv('');
  cursorEl.id('cursor');

  const track = (e) => {
    if (e.pointerType !== 'mouse') return;   // ignore touch and pen
    mx = e.clientX;
    my = e.clientY;
    if (!cursorVisible) {
      cx = mx;
      cy = my;
    }
    cursorVisible = true;
    overLink = !!(e.target.closest && e.target.closest('a, button'));
  };

  document.addEventListener('pointermove', track);
  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    track(e);
    pressing = true;
  });
  document.addEventListener('pointerup', () => (pressing = false));
  document.documentElement.addEventListener('mouseleave', () => (cursorVisible = false));
}

function updateCursor() {
  if (!cursorEl) return;

  cx = lerp(cx, mx, CURSOR_FOLLOW);
  cy = lerp(cy, my, CURSOR_FOLLOW);

  let target = CURSOR_SIZE;
  if (pressing) target = CURSOR_PRESS_SIZE;
  else if (hovered || overLink) target = CURSOR_HOVER_SIZE;
  cSize = lerp(cSize, target, CURSOR_SIZE_EASE);

  const s = cursorEl.elt.style;
  s.opacity = cursorVisible ? '1' : '0';
  s.width = cSize + 'px';
  s.height = cSize + 'px';
  s.transform = `translate(${cx - cSize / 2}px, ${cy - cSize / 2}px)`;
}

// --------------------------------------------------
//  KEYS + RESIZE
// --------------------------------------------------
function keyPressed() {
  if (keyCode === ESCAPE) {
    if (labState === 'open') closeLab();
    else active = null;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (!bgImg) return;
  buildAboutLayout();
  // Mobile address bars fire lots of resizes, so wait until they settle
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildBuffers, 150);
}
