// Stroke icon set. Each value is the inner markup of a 24x24 outline glyph;
// `icon` in links.json picks one by key, falling back to `link`.
const ICONS = {
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M16 9h2a2 2 0 0 1 2 2v10"/><path d="M2 21h20"/><path d="M8 7h4M8 11h4M8 15h4"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.2 13.4L7 22l5-3 5 3-1.2-8.6"/>',
  presentation: '<path d="M2 3h20"/><path d="M3 3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3"/><path d="M12 15v4"/><path d="M9 21l3-2 3 2"/>',
  clipboardCheck: '<path d="M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/>',
  clipboardList: '<path d="M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 11h.01M11 11h5M8 15h.01M11 15h5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h4"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/>',
  checkCircle: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4L12 14.01l-3-3"/>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M17 11l2 2 4-4"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  bed: '<path d="M2 18v-7a2 2 0 0 1 2-2h7v9"/><path d="M11 13h11v5"/><path d="M2 18h20"/><path d="M5 11V7a2 2 0 0 1 2-2h2"/>',
  idCard: '<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M5 17c0-2 2-3 4-3s4 1 4 3"/><path d="M15 9h4M15 13h3"/>',
  phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  flag: '<path d="M4 22V4a2 2 0 0 1 2-2h12l-3 5 3 5H6"/><path d="M4 22h16"/>',
  book: '<path d="M4 4v16a2 2 0 0 0 2 2h14V2H6a2 2 0 0 0-2 2z"/><path d="M8 7h8"/><path d="M8 11h8"/>',
  flask: '<path d="M9 2v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V2"/><path d="M8 2h8"/><path d="M7 14h10"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10"/><path d="M12 3l9 5H3l9-5z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.4 6.4-6.4 2.4 2.4-6.4 6.4-2.4z"/>',
  map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  pin: '<path d="M12 17v5"/><path d="M8 3h8l-1 6 3 3v2H6v-2l3-3-1-6z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
};

const listEl = document.querySelector('#list');
const input = document.querySelector('#q');
const PINNED_STORAGE_KEY = 'pinned-links';

let groups = [];
let pinned = readPinned();

fetch('links.json')
  .then((r) => {
    if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
    return r.json();
  })
  .then((data) => {
    groups = data.groups.map((g) => ({
      name: g.name,
      links: g.links.map((l) => ({
        ...l,
        key: l.url,
        haystack: [l.name, l.tag, l.url, g.name].join(' ').toLowerCase(),
      })),
    }));
    render(input.value);
  })
  .catch((err) => {
    listEl.innerHTML = '<p class="empty">Could not load links.json — ' + escape(err.message) + '</p>';
  });

function render(query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = (l) => terms.every((t) => l.haystack.includes(t));
  const pinnedLinks = groups.flatMap((g) => g.links.filter((l) => pinned.has(l.key) && matches(l)));

  const visible = groups
    .map((g) => ({ name: g.name, links: g.links.filter((l) => !pinned.has(l.key) && matches(l)) }))
    .filter((g) => g.links.length);

  if (!pinnedLinks.length && !visible.length) {
    listEl.innerHTML = '<p class="empty">No links match “' + escape(query.trim()) + '”.</p>';
    return;
  }

  listEl.innerHTML = (pinnedLinks.length ? groupHtml({ name: 'Pinned', links: pinnedLinks }) : '') + visible.map(groupHtml).join('');
}

function groupHtml(g) {
  return (
    '<section class="group">' +
      '<h2 class="group-h">' + escape(g.name) + '</h2>' +
      '<div class="rows">' + g.links.map(rowHtml).join('') + '</div>' +
    '</section>'
  );
}

function rowHtml(l) {
  const isPinned = pinned.has(l.key);
  return (
    '<div class="row">' +
      '<a class="row-link" href="' + escape(l.url) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="ico">' + svg(16, ICONS[l.icon] || ICONS.link, 1.7) + '</span>' +
        '<span class="name">' + escape(l.name) + '</span>' +
        (l.tag ? '<span class="tag">' + escape(l.tag) + '</span>' : '') +
        svg(14, '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>', 2, 'arrow') +
      '</a>' +
      '<button class="pin" type="button" data-pin="' + escape(l.key) + '" aria-label="' + (isPinned ? 'Unpin ' : 'Pin ') + escape(l.name) + '">' +
        svg(15, ICONS.pin, 1.8) +
      '</button>' +
    '</div>'
  );
}

function svg(size, body, width, cls) {
  return (
    '<svg ' + (cls ? 'class="' + cls + '" ' : '') + 'width="' + size + '" height="' + size + '" ' +
    'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + width + '" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>'
  );
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function readPinned() {
  try {
    const saved = JSON.parse(localStorage.getItem(PINNED_STORAGE_KEY));
    return new Set(Array.isArray(saved) ? saved : []);
  } catch (e) {
    return new Set();
  }
}

function togglePin(key) {
  if (pinned.has(key)) pinned.delete(key);
  else pinned.add(key);

  try {
    localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify([...pinned]));
  } catch (e) {}
  render(input.value);
}

listEl.addEventListener('click', (e) => {
  const button = e.target.closest('[data-pin]');
  if (!button) return;
  togglePin(button.dataset.pin);
});

input.addEventListener('input', () => render(input.value));

input.addEventListener('keydown', (e) => {
  // Enter opens the top result, Escape clears the query.
  if (e.key === 'Enter') {
    const first = listEl.querySelector('a.row');
    if (first) first.click();
  } else if (e.key === 'Escape') {
    input.value = '';
    render('');
  }
});

document.addEventListener('keydown', (e) => {
  const typing = document.activeElement === input;
  const slash = e.key === '/' && !e.metaKey && !e.ctrlKey;
  const cmdK = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey);
  if (!typing && (slash || cmdK)) {
    e.preventDefault();
    input.focus();
    input.select();
  }
});

document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
  const dark = matchMedia('(prefers-color-scheme: dark)').matches;
  const current = document.documentElement.dataset.theme || (dark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});
