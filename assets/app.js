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
    'hero.eyebrow': 'Gdańsk',
    'hero.title': 'Utrzymuję ciągłość produkcji map lotniczych.',
    'hero.lead':
      'Dziesięć lat w\u00A0lotniczych technologiach nawigacyjnych: wsparcie pierwszej i\u00A0drugiej linii dla krytycznych narzędzi CAD, analiza przyczyn źródłowych, wymagania i\u00A0testy oraz automatyzacja w\u00A0PowerShellu i\u00A0Pythonie —\u00A0coraz częściej z\u00A0agentami AI.',
    'hero.note':
      'Szukam roli w\u00A0obszarze wsparcia produkcji, operacji technicznych i\u00A0utrzymania narzędzi —\u00A0i\u00A0nie tylko.',
    'hero.cv': 'Pobierz CV (PDF)',
    'hero.email': 'E\u2011mail',
    'strengths.title': 'Mocne strony',
    'strengths.intro': 'Trzy rzeczy, które robię dobrze —\u00A0z\u00A0dowodami, nie przymiotnikami.',
    'strength.1.title': 'Wsparcie całego łańcucha narzędzi',
    'strength.1.body':
      'Awaria plotowania może wynikać z\u00A0pliku projektu, konfiguracji, licencji, usługi albo ścieżki dostępu. Ustalam, z\u00A0którego —\u00A0naprawiam to, co należy do mnie, a\u00A0resztę eskaluję z\u00A0dowodami.',
    'strength.1.meta': 'MicroStation/J V7 · plotowanie · pulpity wirtualne',
    'strength.2.title': 'Utrzymanie, nie pisanie od zera',
    'strength.2.body':
      'Utrzymuję narzędzia zespołu\u00A0w\u00A0ruchu: skrypty batch i\u00A0PowerShell, launchery oraz narzędzie do mapowania dysków. Przeważnie rozwijam i\u00A0naprawiam istniejący kod —\u00A0coraz częściej z\u00A0agentami AI.',
    'strength.2.meta': 'Utrzymanie · SME wsparcia',
    'strength.3.title': 'Wiedza, która procentuje',
    'strength.3.body':
      'Notatki własne, rozwiązania zespołu\u00A0i\u00A0artykuły samoobsługowe dla użytkowników, utrzymywane na bieżąco —\u00A0żeby ludzie, a\u00A0teraz także agenci, znajdowali odpowiedź bez zgłoszenia.',
    'strength.3.meta': 'Baza wiedzy · samoobsługa · wdrożenia',
    'work.title': 'Wybrane prace',
    'work.intro': 'Szeroki generalista —\u00A0nie podający się za developera —\u00A0ale bez alergii na kod.',
    'work.1.title': 'Narzędzie do mapowania dysków',
    'work.1.role': 'Narzędzie produkcyjne · utrzymanie, SME wsparcia',
    'work.1.body':
      'Pomocnicze narzędzie do mapowania dysków sieciowych używane przez zespoły produkcyjne. Jedna wersja działająca we wszystkich środowiskach, umożliwiająca szybkie przełączenie konfiguracji lub własny wybór. Eliminacja najczęstszych utrudnień w\u00A0tle: sprawdzenia połączenia, przyspieszone omijanie niedostępnych ścieżek, odświeżanie etykiet —\u00A0a\u00A0w\u00A0razie komplikacji dla użytkownika: tooltipy, widoczny log, błędy systemowe wymienione na czytelne opisy z\u00A0instrukcjami.',
    'work.1.b1': 'Wersjonowane zmiany w\u00A0kodzie, planowanie wdrożeń i\u00A0wycofań',
    'work.1.b2': 'Instrukcje i\u00A0artykuły bazy wiedzy aktualizowane razem z\u00A0każdym wydaniem',
    'work.1.b3': 'Diagnostyka odróżniająca błąd narzędzia od problemu z\u00A0dostępem, usługą lub członkostwem w\u00A0grupie',
    'work.2.role': 'Niezależne narzędzie desktopowe · prywatne',
    'work.2.body':
      'W\u00A0toku: narzędzie desktopowe do wizualnego porównywania dokumentów, przyjazne zarówno ludziom, jak i\u00A0agentom AI.',
    'work.3.role': 'Indie Developer · 2026',
    'work.3.body':
      'Udział w\u00A0Meta Global AI Developer Hackathon 2026 —\u00A0integracja PicCompare z\u00A0MuseAI, rozwój funkcji pomiarowych agentów\u00A0i\u00A0autonomiczna weryfikacja wyników.',
    'experience.title': 'Doświadczenie',
    'experience.intro': 'Od najświeższego.',
    'exp.1.when': '2018\u00A0–\u00A02026',
    'exp.1.role': 'Analityk Systemów\u00A0i\u00A0Danych, a\u00A0następnie Starszy specjalista ds. Product Operations',
    'exp.1.org': 'Boeing Poland oraz Jeppesen ForeFlight',
    'exp.1.b1.label': 'Wsparcie i\u00A0analiza',
    'exp.1.b1.text': ': wsparcie 1. i\u00A02. linii dla narzędzi produkcyjnych redakcji map lotniczych; analiza przyczyn źródłowych (RCA), logów\u00A0i\u00A0schematów\u00A0architektury; przekładanie zgłoszeń na wymagania deweloperskie i\u00A0kryteria akceptacji.',
    'exp.1.b2.label': 'Administracja środowiskami',
    'exp.1.b2.text': ': prekonfiguracja pulpitów\u00A0zdalnych, administracja środowiskiem CAD, zarządzanie uprawnieniami oraz synchronizacja zasobów\u00A0między środowiskami.',
    'exp.1.b3.label': 'Zapewnienie jakości i\u00A0wdrożenia',
    'exp.1.b3.text': ': projektowanie scenariuszy testowych, walidacja prototypów, testy smoke i\u00A0UAT; koordynacja okien przestoju systemów\u00A0i\u00A0zarządzanie wycofywaniem aplikacji.',
    'exp.1.b4.label': 'Automatyzacja i\u00A0AI',
    'exp.1.b4.text': ': tworzenie skryptów\u00A0(PowerShell, Batch, Python), launcherów\u00A0i\u00A0narzędzi samoobsługowych; modernizacja procesów\u00A0łączenia zasobów\u00A0sieciowych z\u00A0wykorzystaniem agentów\u00A0AI.',
    'exp.1.b5.label': 'Ciągłość działania i\u00A0jakość',
    'exp.1.b5.text': ': opracowywanie obejść awaryjnych, reprezentowanie zespołu\u00A0podczas audytów\u00A0ISO 9001:2015, prowadzenie szkoleń wprowadzających i\u00A0bazy wiedzy.',
    'exp.2.when': '2014\u00A0–\u00A02018',
    'exp.2.role': 'Analityk Informacji Lotniczej',
    'exp.2.org': 'Jeppesen, a\u00A0Boeing Company',
    'exp.2.body': 'Tworzenie, edycja i\u00A0kontrola jakości map lotnisk i\u00A0procedur podejść lotniczych.',
    'exp.3.when': '2010\u00A0–\u00A02014',
    'exp.3.role': 'Wcześniejsze role',
    'exp.3.org': 'Gdańsk i\u00A0Pilzno',
    'exp.3.b1': 'Tłumacz ustny języka angielskiego w\u00A0Komendzie Wojewódzkiej Policji w\u00A0Gdańsku',
    'exp.3.b2': 'Tłumacz projektów\u00A0europejskich w\u00A0Instytucie Inicjatyw Europejskich',
    'exp.3.b3': 'Trener oprogramowania przy informatyzacji PODGiK w\u00A0BMT ARGOSS',
    'exp.3.b4': 'Praktyka IAESTE na Uniwersytecie Zachodnioczeskim w\u00A0Pilznie',
    'exp.3.b5': 'Praktyki geodezyjne terenowe i\u00A0kameralne w\u00A0Geopartnerze',
    'edu.label': 'Wykształcenie',
    'edu.1.degree': 'MSc Nawigacja, technologie offshorowe',
    'edu.1.school': 'Akademia Morska w\u00A0Gdyni · 2013–2014',
    'edu.2.degree': 'BSc Geodezja i\u00A0kartografia',
    'edu.2.school': 'Politechnika Gdańska · 2009–2013',
    'edu.3.degree': 'BSc Zarządzanie inżynierskie',
    'edu.3.school': 'Politechnika Gdańska · 2011–2016',
    'edu.4.degree': 'Studia podyplomowe Inżynieria Danych —\u00A0Data Science',
    'edu.4.school': 'Politechnika Gdańska · 2017–2018',
    'pub.label': 'Prace dyplomowe',
    'pub.1': 'Koncepcja modelu doskonalenia zarządzania multiprocesem gwarancyjnym pod względem zgodności formalnej i\u00A0technicznej w\u00A0sektorze motoryzacyjnym',
    'pub.1.meta': 'Praca dyplomowa, z\u00A0Piotrem Sliżem i\u00A0Piotrem Czubkiem · 2018',
    'pub.1.link': 'Dashboard do analizy danych',
    'pub.1.note': '(napisz do mnie aby otrzymać hasło)',
    'pub.2': 'Projekt usprawnienia pracy działu\u00A0przetwarzania informacji w\u00A0przedsiębiorstwie branży geodezyjnej',
    'pub.2.meta': 'Praca inżynierska · 2016',
    'pub.3': 'Ocena dokładności pozycji rozwiązań fazowych GPS i\u00A0GPS/GLONASS z\u00A0wykorzystaniem aktywnych sieci geodezyjnych w\u00A0precyzyjnej nawigacji',
    'pub.3.meta': 'Praca magisterska · 2014',
    'pub.4': 'Porównanie metod aproksymacji prosto- i\u00A0krzywoliniowego odcinka torów',
    'pub.4.meta': 'Praca inżynierska, najlepsza praca Wydziału\u00A0w\u00A02013',
    'toolbox.title': 'Domena i\u00A0narzędzia',
    'toolbox.intro': 'Kontekst pracy wsparcia: kartografia lotnicza, łańcuch narzędzi i\u00A0szkolenia, które za tym stoją.',
    'toolbox.domain.label': 'Domena lotnicza',
    'toolbox.domain.1': 'Mapy lotnisk i\u00A0procedury podejść',
    'toolbox.domain.1.meta': 'Zasięg kanadyjski i\u00A0pacyficzny',
    'toolbox.domain.2': 'Proces produkcji map',
    'toolbox.domain.2.meta': 'Pliki projektowe, plotowanie, pulpity wirtualne',
    'toolbox.domain.3': 'Geodezja i\u00A0nawigacja',
    'toolbox.domain.3.meta': 'MSc Nawigacja',
    'toolbox.domain.3.meta2': 'BSc Geodezja i\u00A0kartografia',
    'toolbox.domain.4': 'ARINC424 i\u00A0dane przestrzenne',
    'toolbox.domain.4.meta': 'Konwersja formatów\u00A0i\u00A0obsługa współrzędnych',
    'toolbox.tools.label': 'Narzędzia',
    'toolbox.tools.1': 'MicroStation · AutoCAD',
    'toolbox.tools.1.meta': 'Zaawansowany · certyfikat Autodesk',
    'toolbox.tools.2': 'JIRA · Confluence · ALM · JAMA',
    'toolbox.tools.2.meta': 'Wymagania, testy, śledzenie zmian',
    'toolbox.tools.3': 'ServiceNow · PagerDuty · SnapComms',
    'toolbox.tools.3.meta': 'Zgłoszenia, dyżury i\u00A0komunikacja',
    'toolbox.tools.4': 'FME · BPA Automate · DBeaver',
    'toolbox.tools.4.meta': 'Przepływy danych i\u00A0ekstrakty',
    'toolbox.tools.5': 'Office · Visio · Project · Access',
    'toolbox.tools.5.meta': 'Dokumentacja i\u00A0raportowanie',
    'toolbox.ai.label': 'AI i\u00A0automatyzacja',
    'toolbox.ai.1': 'Agenci AI w\u00A0codziennej pracy',
    'toolbox.ai.1.meta': 'Codex, Claude Code, Qoder, Command Code, DSH, Hermes, Omniroute',
    'toolbox.ai.2': 'Modernizacja istniejących automatyzacji',
    'toolbox.ai.2.meta': 'Mapowanie dysków, launchery, makra, polecenia użytkownika',
    'toolbox.ai.3': 'Skrypty i\u00A0utrzymanie',
    'toolbox.ai.3.meta': 'Windows batch (zaawansowany), PowerShell, VBA, SQL, Bash',
    'toolbox.ai.4': 'Wiedza jako kontekst',
    'toolbox.ai.4.meta': 'Notatki, rozwiązania zespołu\u00A0i\u00A0artykuły samoobsługowe na bieżąco',
    'toolbox.training.label': 'Szkolenia i\u00A0certyfikaty',
    'toolbox.training.1': 'Audytor wewnętrzny ISO 9001:2008/2015',
    'toolbox.training.1.meta': 'PCC\u2011CERT · 2016',
    'toolbox.training.2': 'Audytor wewnętrzny ISO 27001 · 14001 · PN\u2011N\u00A018001',
    'toolbox.training.2.meta': 'MG Centrum, z\u00A0warsztatem ISO 19011 · 2016',
    'toolbox.training.3': 'Certyfikat średniozaawansowany AutoCAD',
    'toolbox.training.3.meta': 'ATC Autodesk · 2012',
    'toolbox.training.4': 'Certificate in Advanced English, ocena A',
    'toolbox.training.4.meta': 'Cambridge · 2009',
    'courses.title': 'Kursy',
    'courses.intro': 'Krótkie formaty i\u00A0samokształcenie, które ukształtowały mój sposób pracy.',
    'courses.fun': 'Nauka najczęściej jest dla mnie zabawą.',
    'courses.recreational': 'Kursy rekreacyjne',
    'hobbies.title': 'Hobby',
    'hobbies.text': 'Science fiction, druk 3D, fotografia podróżnicza, gry strategiczne, stare filmy klasy B.',
    'flow.1.title': 'Data Scientist with Python',
    'flow.1.meta': 'DataCamp',
    'flow.2.title': 'Data Analyst with Python',
    'flow.2.meta': 'DataCamp',
    'flow.3.title': 'Python Programmer',
    'flow.3.meta': 'DataCamp',
    'flow.4.title': 'Myślenie modelowe',
    'flow.4.meta': 'Coursera · University of Michigan',
    'flow.5.title': '101 Awiacji',
    'flow.5.meta': 'Canvas.net · Embry\u2011Riddle Aeronautical University',
    'flow.6.title': 'Crucial Conversations',
    'flow.6.meta': 'Jeppesen',
    'flow.7.title': 'Teoria gier',
    'flow.7.meta': 'Coursera · Stanford, UBC, Tokio',
    'flow.8.title': 'Grywalizacja',
    'flow.8.meta': 'Coursera · Wharton',
    'flow.9.title': 'Wprowadzenie do komunikacji satelitarnej',
    'flow.9.meta': 'Coursera · Institut Mines\u2011Télécom',
    'flow.10.title': 'Badania Układu Słonecznego',
    'flow.10.meta': 'Coursera · Caltech',
    'flow.11.title': 'Inteligencja emocjonalna (EQ)',
    'flow.11.meta': 'Net Akademia',
    'flow.12.title': 'NLP —\u00A0programowanie neurolingwistyczne',
    'flow.12.meta': 'Net Akademia',
    'flow.13.title': 'Szybkie czytanie i\u00A0szybka nauka',
    'flow.13.meta': 'MG Centrum',
    'wip.text': 'PRACE W\u00A0TOKU! Bezustannie podnoszę poziom swojego profilu. Nie ma w\u00A0planach stanu końcowego tej strony.',
    'wip.text.sr': 'Prace w\u00A0toku! Bezustannie podnoszę poziom swojego profilu. Nie ma w\u00A0planach stanu końcowego tej strony.',
    'contact.title': 'Kontakt',
    'contact.intro': 'Najszybciej odpowiadam na e\u2011mail.',
    'contact.email': 'E\u2011mail',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn'
  };

  const enText = new Map();
  const enAria = new Map();

  const normalize = (value) => value.replace(/[\t\n\v\f\r ]+/g, ' ').trim();

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
      langBtn.setAttribute('aria-pressed', String(currentLang === 'pl'));
      langBtn.setAttribute(
        'aria-label',
        currentLang === 'pl' ? 'Switch to English' : 'Przełącz na polski'
      );
    }

    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
      const isPolish = currentLang === 'pl';
      cvLink.setAttribute('href', isPolish ? 'assets/cv-pl.pdf' : 'assets/cv-en.pdf');
      cvLink.setAttribute('download', isPolish ? 'CV-Maciej-Mindowicz-PL.pdf' : 'CV-Maciej-Mindowicz-EN.pdf');
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

  const marqueeList = Array.from(document.querySelectorAll('.marquee'))
    .map((el) => ({
      el,
      track: el.querySelector('.marquee__track'),
      half: 0,
      offset: 0,
      dragging: false,
      startX: 0,
      startOffset: 0
    }))
    .filter((item) => item.track);

  marqueeList.forEach((item) => {
    Array.from(item.track.children).forEach((child) => {
      const copy = child.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      item.track.appendChild(copy);
    });
  });

  marqueeButton = document.getElementById('marquee-toggle');
  if (marqueeList.length && marqueeButton) {
    const SPEED = 58;
    let frame = 0;
    let last = 0;

    const measure = () => {
      marqueeList.forEach((item) => {
        item.half = item.track.scrollWidth / 2;
      });
    };

    const draw = (item) => {
      item.track.style.transform = `translate3d(${-item.offset}px, 0, 0)`;
    };

    const wrap = (item) => {
      if (item.half > 0) item.offset = ((item.offset % item.half) + item.half) % item.half;
    };

    const tick = (time) => {
      if (!marqueePlaying) return;
      if (!last) last = time;
      const delta = Math.min((time - last) / 1000, 0.05);
      last = time;
      marqueeList.forEach((item) => {
        if (item.dragging) return;
        item.offset += SPEED * delta;
        wrap(item);
        draw(item);
      });
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
      marqueeList.forEach((item) => {
        item.el.classList.toggle('marquee--playing', playing);
        if (!playing) {
          item.offset = 0;
          draw(item);
        }
      });
      updateMarqueeLabel();
      if (playing) {
        measure();
        startLoop();
      } else {
        stopLoop();
      }
      if (!persist) return;
      try {
        localStorage.setItem(STORE.marquee, playing ? 'on' : 'off');
      } catch (error) {
        /* storage unavailable */
      }
    };

    marqueeList.forEach((item) => {
      item.el.addEventListener('pointerdown', (event) => {
        if (!marqueePlaying) return;
        item.dragging = true;
        item.startX = event.clientX;
        item.startOffset = item.offset;
        item.el.setPointerCapture(event.pointerId);
      });

      item.el.addEventListener('pointermove', (event) => {
        if (!item.dragging) return;
        item.offset = item.startOffset - (event.clientX - item.startX);
        wrap(item);
        draw(item);
      });

      const endDrag = (event) => {
        if (!item.dragging) return;
        item.dragging = false;
        if (item.el.hasPointerCapture(event.pointerId)) {
          item.el.releasePointerCapture(event.pointerId);
        }
      };

      item.el.addEventListener('pointerup', endDrag);
      item.el.addEventListener('pointercancel', endDrag);
    });

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

  const lightDots = Array.from(document.querySelectorAll('.lights__dot'));
  const LIGHT_SOURCES = [
    { height: 240, shift: 140, x: 300, y: 360 },
    { height: 330, shift: 230, x: 1150, y: 240 },
    { height: 330, shift: 230, x: 1720, y: 1770 },
    { height: 380, shift: 280, x: 1700, y: 2400 }
  ];

  function renderLights(progress, isDark) {
    root.dataset.dark = isDark ? 'true' : 'false';
    if (!isDark || !lightDots.length) return;

    const viewport = window.innerHeight;
    const width = window.innerWidth;

    LIGHT_SOURCES.forEach((source, index) => {
      const dot = lightDots[index];
      if (!dot) return;
      const heightPx = (source.height / 100) * viewport;
      const scale = heightPx / 3000;
      const left = (width - 2400 * scale) / 2;
      const x = left + source.x * scale;
      const y = source.y * scale - progress * ((source.shift / 100) * viewport);
      const visible = y > -180 && y < viewport + 180;
      dot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      dot.style.opacity = visible ? '1' : '0';
    });
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
    root.style.setProperty('--wip-lag', `${(Math.min(window.scrollY, 220) * 0.7).toFixed(1)}px`);
    renderLights(progress, stops === SKY.dark);
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
