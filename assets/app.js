(() => {
  'use strict';

  const root = document.documentElement;
  const STORE = { theme: 'portfolio.theme', lang: 'portfolio.lang', marquee: 'portfolio.marquee' };
  const THEMES = ['auto', 'light', 'dark'];

  const uaData = navigator.userAgentData;
  const isPhone =
    (uaData && uaData.mobile) ||
    /Android|iPhone|iPod|Windows Phone|Mobile/i.test(navigator.userAgent);
  if (isPhone) root.dataset.device = 'mobile';

  const META = {
    en: {
      title: 'Maciej Mindowicz — Aviation Chart Production Support',
      description:
        'Production support for aviation charting: MicroStation/J V7, plotting and virtual desktops, a production drive-mapping utility, UAT and documentation.',
      lang: 'en'
    },
    pl: {
      title: 'Maciej Mindowicz — Wsparcie produkcji map lotniczych',
      description:
        'Wsparcie produkcyjne map lotniczych: MicroStation/J V7, plotowanie i pulpity wirtualne, utrzymanie narzędzia do mapowania dysków, testy UAT i dokumentacja.',
      lang: 'pl'
    }
  };

  const THEME_TEXT = {
    en: {
      auto: 'Theme: system (click to change)',
      light: 'Theme: light (click to change)',
      dark: 'Theme: dark (click to change)'
    },
    pl: {
      auto: 'Motyw: systemowy (kliknij, aby zmienić)',
      light: 'Motyw: jasny (kliknij, aby zmienić)',
      dark: 'Motyw: ciemny (kliknij, aby zmienić)'
    }
  };

  const MARQUEE_TEXT = {
    en: { play: 'Play', pause: 'Pause' },
    pl: { play: 'Odtwórz', pause: 'Wstrzymaj' }
  };

  const PL = {
    'skip': 'Przejdź do treści',
    'brand.role': 'Wsparcie produkcji',
    'nav.label': 'Nawigacja główna',
    'nav.strengths': 'Mocne strony',
    'nav.experience': 'Doświadczenie',
    'nav.toolbox': 'Narzędzia',
    'nav.work': 'Projekty',
    'nav.courses': 'Kursy',
    'nav.hobbies': 'Hobby',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Gdańsk · Jeppesen ForeFlight',
    'hero.title': 'Utrzymuję ciągłość produkcji map lotniczych.',
    'hero.lead':
      'Dziesięć lat w lotniczych technologiach nawigacyjnych: wsparcie pierwszej i drugiej linii dla krytycznych narzędzi CAD, analiza przyczyn źródłowych, wymagania i testy oraz automatyzacja w PowerShellu i Pythonie — coraz częściej z agentami AI.',
    'hero.note':
      'Szukam roli w obszarze wsparcia produkcji, operacji technicznych lub utrzymania narzędzi.',
    'hero.cv': 'Pobierz CV (PDF)',
    'hero.email': 'E-mail',
    'strengths.title': 'Mocne strony',
    'strengths.intro': 'Trzy rzeczy, które robię dobrze — z dowodami, nie przymiotnikami.',
    'strength.1.title': 'Wsparcie całego łańcucha narzędzi',
    'strength.1.body':
      'Awaria plotowania może wynikać z pliku projektu, konfiguracji, licencji, usługi albo ścieżki dostępu. Ustalam, z którego — naprawiam to, co należy do mnie, a resztę eskaluję z dowodami.',
    'strength.1.meta': 'MicroStation/J V7 · plotowanie · pulpity wirtualne',
    'strength.2.title': 'Utrzymanie, nie pisanie od zera',
    'strength.2.body':
      'Utrzymuję narzędzia zespołu w ruchu: skrypty batch i PowerShell, launchery oraz narzędzie do mapowania dysków. Przeważnie rozwijam i naprawiam istniejący kod — coraz częściej z agentami AI.',
    'strength.2.meta': 'Utrzymanie · SME wsparcia',
    'strength.3.title': 'Wiedza, która procentuje',
    'strength.3.body':
      'Notatki własne, rozwiązania zespołu i artykuły samoobsługowe dla użytkowników, utrzymywane na bieżąco — żeby ludzie, a teraz także agenci, znajdowali odpowiedź bez zgłoszenia.',
    'strength.3.meta': 'Baza wiedzy · samoobsługa · wdrożenia',
    'work.title': 'Poza pracą',
    'work.intro': 'Szeroki generalista — daleko od fullstack developera — ale nie uczulony na kod.',
    'work.1.title': 'Narzędzie do mapowania dysków',
    'work.1.role': 'Narzędzie produkcyjne · utrzymanie, SME wsparcia',
    'work.1.body':
      'Pomocnik do mapowania dysków używany przez zespoły produkujące mapy w różnych biurach i na pulpitach wirtualnych. Utrzymuję go: wariant standardowy i awaryjny, wybór biura i półkuli oraz instrukcje na wypadek braku wymaganego dysku.',
    'work.1.b1': 'Wersjonowane zmiany w kodzie, planowanie wdrożeń i wycofań',
    'work.1.b2': 'Instrukcje i artykuły bazy wiedzy aktualizowane razem z każdym wydaniem',
    'work.1.b3': 'Diagnostyka odróżniająca błąd narzędzia od problemu z dostępem, usługą lub członkostwem w grupie',
    'work.2.role': 'Niezależne narzędzie desktopowe · prywatne',
    'work.2.body':
      'W toku: narzędzie desktopowe do wizualnego porównywania dokumentów, przyjazne zarówno ludziom, jak i agentom AI.',
    'work.3.role': 'Indie Developer · 2026',
    'work.3.body':
      'Udział w Meta Global AI Developer Hackathon 2026 — praca z agentami AI nad przypadkiem weryfikacji pomiarów.',
    'experience.title': 'Doświadczenie',
    'experience.intro': 'Najnowsze pierwsze.',
    'exp.1.when': '2018 – 2026',
    'exp.1.role': 'Analityk Systemów i Danych, następnie Starszy specjalista ds. Product Operations',
    'exp.1.org': 'Boeing Poland / Jeppesen ForeFlight',
    'exp.1.b1': 'Wsparcie i analiza: pierwsza i druga linia wsparcia narzędzi redakcji map; RCA logów i architektury; przekładanie zgłoszeń na wymagania deweloperskie i kryteria akceptacji.',
    'exp.1.b2': 'Automatyzacja i AI: skrypty PowerShell, Batch i Python, launchery i narzędzia samoobsługowe; modernizacja łączenia zasobów sieciowych z agentami AI.',
    'exp.1.b3': 'Jakość i wdrożenia: scenariusze testowe, walidacja prototypów, smoke testy i UAT; koordynacja okien przestoju i wycofywanie aplikacji.',
    'exp.1.b4': 'Administracja środowiskami: prekonfiguracja pulpitów zdalnych, administracja CAD, uprawnienia i synchronizacja zasobów między środowiskami.',
    'exp.1.b5': 'Ciągłość działania i jakość: obejścia awaryjne, audyty ISO 9001:2015, szkolenia wprowadzające i baza wiedzy.',
    'exp.2.when': '2014 – 2018',
    'exp.2.role': 'Analityk Informacji Nawigacyjnej',
    'exp.2.org': 'Jeppesen, a Boeing Company',
    'exp.2.body': 'Tworzenie, edycja i kontrola jakości map lotnisk oraz procedur podejść lotniczych.',
    'edu.label': 'Wykształcenie',
    'edu.1.degree': 'MSc Nawigacja',
    'edu.1.school': 'Politechnika Morska w Gdyni',
    'edu.2.degree': 'BSc Geodezja i kartografia',
    'edu.2.school': 'Politechnika Gdańska',
    'edu.3.degree': 'BSc Zarządzanie inżynierskie',
    'edu.3.school': 'Politechnika Gdańska',
    'edu.4.degree': 'Studia podyplomowe Data Science',
    'edu.4.school': 'Politechnika Gdańska · 2017–2018',
    'pub.label': 'Publikacje',
    'pub.1': 'Ocena dokładności pozycji rozwiązań fazowych GPS/GPS-GLONASS z wykorzystaniem aktywnych sieci geodezyjnych w precyzyjnej nawigacji',
    'pub.1.meta': 'Praca magisterska · 2014',
    'pub.2': 'Porównanie metod aproksymacji prosto- i krzywoliniowego odcinka torów',
    'pub.2.meta': 'Praca inżynierska, nagrodzona jako najlepsza na kierunku · 2013',
    'pub.3': 'Projekt usprawnienia działań działu przetwarzania informacji w firmie geodezyjnej',
    'pub.3.meta': 'Praca inżynierska · 2016',
    'toolbox.title': 'Domena i narzędzia',
    'toolbox.intro': 'Kontekst pracy wsparcia: kartografia lotnicza, łańcuch narzędzi i szkolenia, które za tym stoją.',
    'toolbox.domain.label': 'Domena lotnicza',
    'toolbox.domain.1': 'Mapy lotnisk i procedury podejść',
    'toolbox.domain.1.meta': 'Zasięg kanadyjski i pacyficzny',
    'toolbox.domain.2': 'Proces produkcji map',
    'toolbox.domain.2.meta': 'Pliki projektowe, plotowanie, pulpity wirtualne',
    'toolbox.domain.3': 'Geodezja i nawigacja',
    'toolbox.domain.3.meta': 'MSc Nawigacja · BSc Geodezja i kartografia',
    'toolbox.domain.4': 'ARINC 424 i dane przestrzenne',
    'toolbox.domain.4.meta': 'Konwersja formatów i obsługa współrzędnych',
    'toolbox.tools.label': 'Narzędzia',
    'toolbox.tools.1': 'MicroStation · AutoCAD',
    'toolbox.tools.1.meta': 'Zaawansowany · certyfikat Autodesk',
    'toolbox.tools.2': 'JIRA · Confluence · ALM · JAMA',
    'toolbox.tools.2.meta': 'Wymagania, testy, śledzenie zmian',
    'toolbox.tools.3': 'ServiceNow · PagerDuty · SnapComms',
    'toolbox.tools.3.meta': 'Zgłoszenia, dyżury i komunikacja',
    'toolbox.tools.4': 'FME · BPA Automate · DBeaver',
    'toolbox.tools.4.meta': 'Przepływy danych i ekstrakty',
    'toolbox.tools.5': 'Office · Visio · Project · Access',
    'toolbox.tools.5.meta': 'Dokumentacja i raportowanie',
    'toolbox.ai.label': 'AI i automatyzacja',
    'toolbox.ai.1': 'Agenci AI w codziennej pracy',
    'toolbox.ai.1.meta': 'Codex, Claude Code, Qoder, DSH, Hermes, Omniroute',
    'toolbox.ai.2': 'Modernizacja istniejących automatyzacji',
    'toolbox.ai.2.meta': 'Mapowanie dysków, launchery, makra, polecenia użytkownika',
    'toolbox.ai.3': 'Skrypty i utrzymanie',
    'toolbox.ai.3.meta': 'Windows batch (zaawansowany), PowerShell, VBA, SQL, Bash',
    'toolbox.ai.4': 'Wiedza jako kontekst',
    'toolbox.ai.4.meta': 'Notatki, rozwiązania zespołu i artykuły samoobsługowe na bieżąco',
    'toolbox.training.label': 'Szkolenia i certyfikaty',
    'toolbox.training.1': 'Audytor wewnętrzny ISO 9001:2008/2015',
    'toolbox.training.1.meta': 'PCC-CERT · 2016',
    'toolbox.training.2': 'Audytor wewnętrzny ISO 27001 · 14001 · PN-N 18001',
    'toolbox.training.2.meta': 'MG Centrum, z warsztatem ISO 19011 · 2016',
    'toolbox.training.3': 'Certyfikat średniozaawansowany AutoCAD',
    'toolbox.training.3.meta': 'ATC Autodesk · 2012',
    'toolbox.training.4': 'Certificate in Advanced English, ocena A',
    'toolbox.training.4.meta': 'Cambridge · 2009',
    'courses.title': 'Kursy',
    'courses.intro': 'Krótkie formaty i samokształcenie, które ukształtowały mój sposób pracy.',
    'hobbies.title': 'Hobby',
    'hobbies.text': 'Science fiction, druk 3D, fotografia podróżnicza, gry strategiczne, stare filmy klasy B.',
    'flow.1.title': 'Data Scientist with Python',
    'flow.1.meta': 'DataCamp',
    'flow.2.title': 'Data Analyst with Python',
    'flow.2.meta': 'DataCamp',
    'flow.3.title': 'Python Programmer',
    'flow.3.meta': 'DataCamp',
    'flow.4.title': 'Komunikacja satelitarna',
    'flow.4.meta': 'Coursera · Institut Mines-Télécom',
    'flow.5.title': 'Badania Układu Słonecznego',
    'flow.5.meta': 'Coursera · Caltech',
    'flow.6.title': 'Myślenie modelowe',
    'flow.6.meta': 'Coursera · University of Michigan',
    'flow.7.title': 'Teoria gier',
    'flow.7.meta': 'Coursera · Stanford, UBC, Tokio',
    'flow.8.title': 'Grywalizacja',
    'flow.8.meta': 'Coursera · Wharton',
    'flow.9.title': 'Aviation 101',
    'flow.9.meta': 'Canvas.net · Embry-Riddle Aeronautical University',
    'flow.10.title': 'Crucial Conversations',
    'flow.10.meta': 'Jeppesen',
    'flow.11.title': 'Inteligencja emocjonalna i NLP',
    'flow.11.meta': 'Net Akademia',
    'wip.text': 'Prace w toku — strona i CV są jeszcze finalizowane.',
    'contact.title': 'Kontakt',
    'contact.intro': 'Najszybciej odpowiadam na e-mail.',
    'contact.email': 'E-mail',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn'
  };

  const enText = new Map();
  const enAria = new Map();

  const normalize = (value) => value.replace(/\s+/g, ' ').trim();

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    enText.set(el.dataset.i18n, normalize(el.textContent));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    enAria.set(el.dataset.i18nAria, el.getAttribute('aria-label') || '');
  });

  let currentLang = 'en';
  let marqueePlaying = false;
  let marqueeButton = null;

  function applyLang(lang) {
    currentLang = lang === 'pl' ? 'pl' : 'en';
    const dict = currentLang === 'pl' ? PL : null;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = (dict && dict[key]) || enText.get(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      const value = (dict && dict[key]) || enAria.get(key);
      if (value) el.setAttribute('aria-label', value);
    });

    root.lang = META[currentLang].lang;
    document.title = META[currentLang].title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', META[currentLang].description);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      const label = langBtn.querySelector('span');
      if (label) label.textContent = currentLang === 'pl' ? 'EN' : 'PL';
      langBtn.setAttribute('aria-pressed', String(currentLang === 'pl'));
      langBtn.setAttribute(
        'aria-label',
        currentLang === 'pl' ? 'Switch to English' : 'Przełącz na polski'
      );
    }

    updateThemeLabel();
    updateMarqueeLabel();

    try {
      localStorage.setItem(STORE.lang, currentLang);
    } catch (error) {
      /* storage unavailable */
    }
  }

  function readStored(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setTheme(theme) {
    const next = THEMES.includes(theme) ? theme : 'auto';
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORE.theme, next);
    } catch (error) {
      /* storage unavailable */
    }
    updateThemeLabel();
    renderSky();
  }

  function updateThemeLabel() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const theme = root.dataset.theme || 'auto';
    const text = THEME_TEXT[currentLang][theme] || THEME_TEXT.en.auto;
    btn.setAttribute('aria-label', text);
    btn.title = text;
  }

  function updateMarqueeLabel() {
    if (!marqueeButton) return;
    const key = marqueePlaying ? 'pause' : 'play';
    marqueeButton.textContent = MARQUEE_TEXT[currentLang][key];
    marqueeButton.setAttribute('aria-pressed', String(marqueePlaying));
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLang(currentLang === 'pl' ? 'en' : 'pl');
    });
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const index = THEMES.indexOf(root.dataset.theme || 'auto');
      setTheme(THEMES[(index + 1) % THEMES.length]);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll('.marquee').forEach((marquee) => {
    const track = marquee.querySelector('.marquee__track');
    if (!track) return;
    Array.from(track.children).forEach((item) => {
      const copy = item.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.appendChild(copy);
    });
  });

  const marqueeEl = document.querySelector('.marquee');
  marqueeButton = document.getElementById('marquee-toggle');
  if (marqueeEl && marqueeButton) {
    const track = marqueeEl.querySelector('.marquee__track');
    const SPEED = 58;

    let offset = 0;
    let half = 0;
    let frame = 0;
    let last = 0;
    let dragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;

    const measure = () => {
      half = track.scrollWidth / 2;
    };

    const wrap = () => {
      if (half > 0) offset = ((offset % half) + half) % half;
    };

    const apply = () => {
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = (time) => {
      if (!marqueePlaying || dragging) return;
      if (!last) last = time;
      const delta = Math.min((time - last) / 1000, 0.05);
      last = time;
      offset += SPEED * delta;
      wrap();
      apply();
      frame = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      cancelAnimationFrame(frame);
      last = 0;
      frame = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const setMarqueePlaying = (playing, persist = true) => {
      marqueePlaying = playing;
      marqueeEl.classList.toggle('marquee--playing', playing);
      updateMarqueeLabel();
      if (playing) {
        measure();
        startLoop();
      } else {
        stopLoop();
        offset = 0;
        apply();
      }
      if (!persist) return;
      try {
        localStorage.setItem(STORE.marquee, playing ? 'on' : 'off');
      } catch (error) {
        /* storage unavailable */
      }
    };

    marqueeEl.addEventListener('pointerdown', (event) => {
      if (!marqueePlaying) return;
      dragging = true;
      dragStartX = event.clientX;
      dragStartOffset = offset;
      stopLoop();
      marqueeEl.setPointerCapture(event.pointerId);
    });

    marqueeEl.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      offset = dragStartOffset - (event.clientX - dragStartX);
      wrap();
      apply();
    });

    const endDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      if (marqueeEl.hasPointerCapture(event.pointerId)) {
        marqueeEl.releasePointerCapture(event.pointerId);
      }
      if (marqueePlaying) startLoop();
    };

    marqueeEl.addEventListener('pointerup', endDrag);
    marqueeEl.addEventListener('pointercancel', endDrag);

    window.addEventListener('resize', () => {
      measure();
      if (marqueePlaying) startLoop();
    });

    const storedMarquee = readStored(STORE.marquee);
    setMarqueePlaying(storedMarquee ? storedMarquee === 'on' : true, false);
    marqueeButton.addEventListener('click', () => setMarqueePlaying(!marqueePlaying));
  }

  const bg = document.querySelector('.bg');
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const SKY = {
    light: [
      { at: 0.0, a: '#eef1f8', b: '#dfe5f3' },
      { at: 0.16, a: '#e9edf9', b: '#d3ddf4' },
      { at: 0.34, a: '#e2edfb', b: '#c4dbf6' },
      { at: 0.52, a: '#d9ecfe', b: '#b8ddf9' },
      { at: 0.72, a: '#e4f0f3', b: '#cfe6e5' },
      { at: 0.9, a: '#e9f1e4', b: '#d3e6cf' },
      { at: 1.0, a: '#e9f1e4', b: '#d3e6cf' }
    ],
    dark: [
      { at: 0.0, a: '#06080e', b: '#0a0f1c' },
      { at: 0.16, a: '#080e1d', b: '#0f1930' },
      { at: 0.34, a: '#0b1830', b: '#12253f' },
      { at: 0.52, a: '#0f2942', b: '#163a54' },
      { at: 0.72, a: '#14313a', b: '#1d3f42' },
      { at: 0.9, a: '#122a21', b: '#1b3327' },
      { at: 1.0, a: '#122a21', b: '#1b3327' }
    ]
  };

  const clamp01 = (value) => Math.min(1, Math.max(0, value));
  const smoothstep = (value) => value * value * (3 - 2 * value);

  function srgbToLinear(value) {
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  }

  function hexToOklab(hex) {
    const value = parseInt(hex.slice(1), 16);
    const r = srgbToLinear(((value >> 16) & 255) / 255);
    const g = srgbToLinear(((value >> 8) & 255) / 255);
    const b = srgbToLinear((value & 255) / 255);

    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
    ];
  }

  Object.values(SKY).forEach((stops) => {
    stops.forEach((stop) => {
      stop.aOk = hexToOklab(stop.a);
      stop.bOk = hexToOklab(stop.b);
    });
  });

  const mixColor = (from, to, t) => from.map((value, index) => value + (to[index] - value) * t);
  const formatColor = (lab) => `oklab(${lab.map((value) => value.toFixed(5)).join(' ')})`;

  function activePalette() {
    const theme = root.dataset.theme || 'auto';
    if (theme === 'dark') return SKY.dark;
    if (theme === 'light') return SKY.light;
    return darkQuery.matches ? SKY.dark : SKY.light;
  }

  function renderSky() {
    if (!bg) return;

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? clamp01(window.scrollY / max) : 0;
    const stops = activePalette();

    let index = 0;
    while (index < stops.length - 2 && progress > stops[index + 1].at) index += 1;

    const from = stops[index];
    const to = stops[index + 1];
    const span = to.at - from.at || 1;
    const t = smoothstep(clamp01((progress - from.at) / span));

    root.style.setProperty('--sky-a', formatColor(mixColor(from.aOk, to.aOk, t)));
    root.style.setProperty('--sky-b', formatColor(mixColor(from.bOk, to.bOk, t)));
    root.style.setProperty('--sky-angle', `${(180 - 18 * progress).toFixed(1)}deg`);
    root.style.setProperty('--pan', progress.toFixed(4));
  }

  if (bg) {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        renderSky();
        frame = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    darkQuery.addEventListener('change', renderSky);
    renderSky();
  }

  const storedTheme = readStored(STORE.theme);
  let initialTheme = THEMES.includes(storedTheme) ? storedTheme : null;
  if (!initialTheme && THEMES.includes(root.dataset.theme)) initialTheme = root.dataset.theme;

  setTheme(initialTheme || 'auto');
  applyLang(readStored(STORE.lang) === 'pl' ? 'pl' : 'en');
})();
