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
      title: 'Maciej Mindowicz — Systems & Data Support Analyst in Navigation Industry',
      description:
        'Systems and Data Support Analyst with 12 years in aviation navigation technology. CAD tooling support, UAT, RCA, requirements, automations in Python, PowerShell, and AI.',
      lang: 'en'
    },
    pl: {
      title: 'Maciej Mindowicz — Analityk Wsparcia Systemów i Danych w branży Nawigacyjnej',
      description:
        'Analityk Wsparcia Systemów i Danych z 12-letnim doświadczeniem w lotniczych technologiach nawigacyjnych. Wsparcie narzędzi CAD, testy UAT, RCA, wymagania deweloperskie, automatyzacja i AI.',
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
    'brand.role': 'Analityk Wsparcia Systemów i\u00A0Danych w\u00A0branży Nawigacyjnej',
    'nav.label': 'Nawigacja główna',
    'nav.strengths': 'Mocne strony',
    'nav.experience': 'Doświadczenie',
    'nav.toolbox': 'Domena',
    'nav.work': 'Projekty',
    'nav.courses': 'Kursy',
    'nav.hobbies': 'Hobby',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Gdańsk',
    'hero.title': 'Łączę złożone operacje, dane i\u00A0oprogramowanie.',
    'hero.lead':
      'Analityk Wsparcia Systemów i\u00A0Danych z\u00A012-letnim doświadczeniem w\u00A0lotniczych technologiach nawigacyjnych z\u00A0rozległą edukacją.',
    'hero.lead2':
      'W\u00A0złożonej rzeczywistości operacyjnej aeronautyki kompleksowo wspieram krytyczne narzędzia CAD: od\u00A0mapowania systemów i\u00A0setupu, przez\u00A0testy UAT, analizę przyczyn źródłowych zgłoszeń, przekładanie raportów na\u00A0wymagania dla\u00A0programistów, walidację rezultatów aż\u00A0po\u00A0planowanie i\u00A0wykonywanie wdrożeń. Metodyczność uzupełniam utrzymywaniem i\u00A0rozwijaniem automatyzacji przepływów danych oraz\u00A0tworzeniem elementów samopomocy: bazy wiedzy i\u00A0programów do\u00A0doraźnego rozwiązania problemów: w\u00A0powershellu, pythonie i\u00A0także batchu, od\u00A0pewnego czasu również z\u00A0biegłym wykorzystaniem AI.',
    'hero.note':
      'Otwarty na\u00A0role Business, Systems, Geospatial i\u00A0Aeronautical Analyst oraz\u00A0Technical Operations w\u00A0branży nawigacyjnej i\u00A0logistycznej: lotniczej oraz\u00A0morskiej.',
    'hero.cv': 'Pobierz CV (PDF)',
    'hero.email': 'E\u2011mail',
    'strengths.title': 'Kluczowe kompetencje',
    'strengths.intro': 'Trzy filary poparte dowodami domenowymi i\u00A0wynikami operacyjnymi.',
    'strength.1.title': 'Wymagania i\u00A0testy gwarantujące bezpieczne wdrożenia',
    'strength.1.body':
      'Przekładam procesy operacyjne i\u00A0zgłoszenia użytkowników na precyzyjne specyfikacje funkcjonalne, kryteria akceptacji i\u00A0scenariusze testowe. Analiza przyczyn źródłowych (RCA) pozwala odseparować błędy danych, konfiguracji, uprawnień i\u00A0architektury zanim dotrą do deweloperów lub na produkcję.',
    'strength.1.meta': 'Wymagania · RCA · Testy UAT i\u00A0smoke · ISO 9001:2015',
    'strength.2.title': 'Znajomość wielu powiązanych domen',
    'strength.2.body':
      'Rzadkie połączenie 12\u00A0lat pracy w\u00A0zespołach produkcji, wsparcia technicznego i\u00A0best practices nawigacji lotniczej z\u00A0dyplomami Nawigacji, Zarządzania i\u00A0Geodezji uzupełnionymi Data Science. Biegłość w\u00A0terminologii lotniczej, morskiej, procesów biznesowych i\u00A0analizy danych, także statystycznych w\u00A0sposób maszynowy.',
    'strength.2.meta': 'Dane lotnicze · Nawigacja morska · Geodezja · Zarządzanie · Data Science',
    'strength.3.title': 'Kompetencje techniczne',
    'strength.3.body':
      'Automatyzacja procesów produkcyjnych przepływu, synchronizacji i\u00A0walidacji danych w\u00A0Powershellu, Pythonie, MS Schedulerze i\u00A0BPA Automate. Inspekcja bazy danych z\u00A0użyciem SQL. Sprawne i\u00A0bezpieczne wykorzystanie agentów\u00A0AI zarówno w\u00A0programowaniu, jak i\u00A0w\u00A0rozwiązywaniu problemów. Znajomość aplikacji CAD, GIS i\u00A0FME. Utrzymywanie bazy wiedzy oraz tworzenie\u00A0skryptów i\u00A0launcherów w\u00A0odpowiedzi na bieżące zapotrzebowanie.',
    'strength.3.meta': 'Python · SQL · Skrypty · Agenci AI · Baza wiedzy',
    'work.title': 'Wybrane prace',
    'work.intro': 'Łączenie wymagań biznesowych z\u00A0realizacją techniczną: utrzymanie narzędzi produkcyjnych, weryfikacja danych i\u00A0przepływy agentowe.',
    'work.1.title': 'Aplikacja do mapowania dysków',
    'work.1.role': 'Narzędzie produkcyjne · utrzymanie, SME wsparcia',
    'work.1.body':
      'Pomocnicze narzędzie do mapowania dysków używane na różnych pulpitach. Utrzymuję je kompleksowo: wspieram optymalny oraz utwardzony tryb nawiązywania połączeń, a także zestawy dysków dedykowane dla każdego środowiska.',
    'work.1.b1': 'Wersjonowane zmiany w\u00A0kodzie, planowanie wdrożeń i\u00A0wycofań',
    'work.1.b2': 'Instrukcje i\u00A0artykuły bazy wiedzy aktualizowane razem z\u00A0każdym wydaniem',
    'work.1.b3': 'Diagnostyka odróżniająca błąd narzędzia od problemu z\u00A0dostępem, usługą lub członkostwem w\u00A0grupie',
    'work.1.tag1': 'Skrypty Windows',
    'work.1.tag2': 'Wsparcie produkcyjne',
    'work.1.tag3': 'Dokumentacja',
    'work.2.role': 'Niezależne narzędzie desktopowe',
    'work.2.body':
      'W\u00A0toku: narzędzie desktopowe do wizualnego porównywania dokumentów, przyjazne zarówno ludziom, jak i\u00A0agentom AI. Zgłoszenie na Meta Global Hackathon 2026 — ścieżka Indie Developer dla agentowego przypadku użycia pomiaru i\u00A0weryfikacji.',
    'work.2.tag1': 'Desktopowe GUI',
    'work.2.tag2': 'Porównywanie wizualne',
    'work.2.tag3': 'Analiza dokumentów',
    'work.2.tag4': 'Python',
    'work.2.tag5': 'Vibe Coding',
    'work.2.shot_aria': 'Powiększ zrzut ekranu PicCompare',
    'work.2.zoom': 'Powiększ',
    'work.2.modal_sub': 'Meta Global Hackathon 2026 · ścieżka Indie Developer',
    'work.2.modal_close': 'Zamknij podgląd',
    'work.3.title': 'Uzupełnianie wiedzy',
    'work.3.role': 'Certyfikaty i\u00A0ścieżki · LinkedIn Learning · 2026',
    'work.3.body':
      'Świeżo ukończone ścieżki edukacyjne i\u00A0akredytowane certyfikaty.',
    'work.3.c1.meta': 'Lis 2026 · 4 godz. 21 min.',
    'work.3.c2.meta': 'Lis 2026 · Samokształcenie QAS',
    'work.3.c3.meta': 'Lis 2026 · 10 godz. 17 min.',
    'work.3.c4.meta': 'Lis 2026 · 12 godz. 35 min.',
    'work.3.c5.meta': 'Lis 2026 · 3 godz. 23 min.',
    'work.3.c6.meta': 'Lis 2026 · 1 godz. 12 min.',
    'work.3.tag1': 'Azure AI',
    'work.3.tag2': 'Design Thinking',
    'work.3.tag3': 'Analiza biznesowa',
    'work.3.tag4': 'Łańcuch dostaw',
    'work.3.tag5': 'Odpowiedzialne AI',
    'experience.title': 'Doświadczenie',
    'experience.intro': 'Od najświeższego.',
    'exp.1.when': '2018\u00A0–\u00A02026',
    'exp.1.role': 'Analityk Systemów\u00A0i\u00A0Danych, a\u00A0następnie Starszy specjalista ds. Product Operations',
    'exp.1.org': 'Boeing Poland oraz Jeppesen ForeFlight',
    'exp.1.tag1': 'Analiza systemów\u00A0i\u00A0danych',
    'exp.1.tag2': 'Narzędzia produkcji map',
    'exp.1.tag3': 'ISO 9001:2015',
    'exp.1.tag4': 'Wsparcie wewnętrzne',
    'exp.1.tag5': 'Technical Writing',
    'exp.1.tag6': 'Skrypty i\u00A0automatyzacja',
    'exp.1.tag7': 'UAT i\u00A0współpraca z\u00A0dostawcami',
    'exp.1.tag8': 'Zespół międzynarodowy',
    'exp.1.b1.label': 'Wsparcie i\u00A0analiza',
    'exp.1.b1.text': ': wsparcie 1. i\u00A02. linii dla narzędzi produkcyjnych redakcji map lotniczych; analiza przyczyn źródłowych (RCA), logów\u00A0i\u00A0schematów\u00A0architektury; przekładanie zgłoszeń na wymagania deweloperskie i\u00A0kryteria akceptacji.',
    'exp.1.b2.label': 'Administracja środowiskami',
    'exp.1.b2.text': ': prekonfiguracja pulpitów\u00A0zdalnych, administracja środowiskiem CAD, zarządzanie uprawnieniami oraz synchronizacja zasobów\u00A0między środowiskami.',
    'exp.1.b3.label': 'Zapewnienie jakości i\u00A0wdrożenia',
    'exp.1.b3.text': ': projektowanie scenariuszy testowych, walidacja prototypów, testy smoke i\u00A0UAT; koordynacja okien przestoju systemów\u00A0i\u00A0zarządzanie wycofywaniem aplikacji.',
    'exp.1.b4.label': 'Automatyzacja i\u00A0AI',
    'exp.1.b4.text': ': tworzenie skryptów\u00A0(PowerShell, Batch, Python), launcherów\u00A0i\u00A0narzędzi samoobsługowych; modernizacja procesów\u00A0łączenia zasobów\u00A0sieciowych z\u00A0wykorzystaniem agentów\u00A0AI.',
    'exp.1.b5.label': 'Ciągłość działania i\u00A0jakość',
    'exp.1.b5.text': ': opracowywanie obejść awaryjnych, reprezentowanie zespołu\u00A0podczas zewnętrznych audytów\u00A0ISO 9001:2015, prowadzenie szkoleń wprowadzających i\u00A0bazy wiedzy.',
    'exp.2.when': '2014\u00A0–\u00A02018',
    'exp.2.role': 'Analityk Informacji Lotniczej',
    'exp.2.org': 'Jeppesen, a\u00A0Boeing Company',
    'exp.2.tag1': 'Analiza AIP',
    'exp.2.tag2': 'Procedury podejść',
    'exp.2.tag3': 'Minima startu i\u00A0lądowania',
    'exp.2.tag4': 'UAT',
    'exp.2.tag5': 'Tutoring',
    'exp.2.tag6': 'Zapytania wyjaśniające (Clarification Requests)',
    'exp.2.summary': 'Opracowywanie map podejścia i\u00A0lotniskowych dla rejonu Kanady i\u00A0Pacyfiku.',
    'exp.2.act.label': 'Aktywności',
    'exp.2.act.text': ': tworzenie, aktualizacja i\u00A0kontrola jakości map nawigacyjnych, tutoring, testy akceptacyjne użytkownika (UAT) systemów\u00A0CAD i\u00A0BPM, opracowywanie pomocy stanowiskowych (job aids), asysta podczas audytu wewnętrznego.',
    'exp.2.courses.label': 'Kursy',
    'exp.2.courses.text': ': Jeppesen Aviation Academy, Crucial Conversations, Team Resource Management, Scaled Agile Framework.',
    'exp.3.when': '2010\u00A0–\u00A02014',
    'exp.3.role': 'Wcześniejsze role',
    'exp.3.org': 'Gdańsk i\u00A0Pilzno',
    'exp.3.tag1': 'Obsługa klienta',
    'exp.3.tag2': 'Tłumacz ustny',
    'exp.3.tag3': 'Trener',
    'exp.3.tag4': 'Tłumacz pisemny',
    'exp.3.b1': 'Tłumacz ustny języka angielskiego w\u00A0Komendzie Wojewódzkiej Policji w\u00A0Gdańsku',
    'exp.3.b2': 'Tłumacz projektów\u00A0europejskich w\u00A0Instytucie Inicjatyw Europejskich',
    'exp.3.b3': 'Trener oprogramowania przy informatyzacji PODGiK w\u00A0BMT ARGOSS',
    'exp.3.b4': 'Praktyka IAESTE na Uniwersytecie Zachodnioczeskim w\u00A0Pilznie',
    'exp.3.b5': 'Praktyki geodezyjne terenowe i\u00A0kameralne w\u00A0Geopartnerze',
    'edu.label': 'Wykształcenie wyższe',
    'edu.4.field': 'Inżynieria Danych —\u00A0Data Science',
    'edu.4.degree': 'Studia podyplomowe',
    'edu.4.school': 'Politechnika Gdańska · 2017–2018',
    'edu.4.tag1': 'Statystyka',
    'edu.4.tag2': 'Relacyjne bazy danych',
    'edu.4.tag3': 'Big Data',
    'edu.4.tag4': 'Python',
    'edu.4.tag5': 'R',
    'edu.4.tag6': 'SQL',
    'edu.4.tag7': 'BI',
    'edu.4.tag8': 'Wizualizacja danych',
    'edu.1.field': 'Nawigacja',
    'edu.1.spec': 'Technologie offshorowe',
    'edu.1.degree': 'Magister inżynier',
    'edu.1.school': 'Akademia Morska w\u00A0Gdyni · 2013–2014',
    'edu.1.tag1': 'Systemy nawigacji, pozycjonowania i\u00A0informacji',
    'edu.1.tag2': 'Zarządzanie projektami offshore',
    'edu.1.tag3': 'Operacje morskie',
    'edu.1.tag4': 'IALA',
    'edu.1.tag5': 'Bezpieczeństwo morskie i\u00A0ocena ryzyka',
    'edu.1.tag6': 'Angielski branżowy',
    'edu.3.field': 'Zarządzanie inżynierskie',
    'edu.3.spec': 'Ergonomia środowiska pracy',
    'edu.3.degree': 'Inżynier',
    'edu.3.school': 'Politechnika Gdańska · 2011–2016',
    'edu.3.tag1': 'BPM i\u00A0BPMN',
    'edu.3.tag2': 'Lean',
    'edu.3.tag3': 'VSM',
    'edu.3.tag4': 'Six Sigma',
    'edu.3.tag5': 'Kaizen',
    'edu.3.tag6': '5S',
    'edu.3.tag7': 'Kanban',
    'edu.3.tag8': 'TQM',
    'edu.3.tag9': 'FMEA',
    'edu.3.tag10': 'Agile i\u00A0Waterfall',
    'edu.3.tag11': 'CPM',
    'edu.3.tag12': 'PERT',
    'edu.3.tag13': 'ERP',
    'edu.3.tag14': 'MRP',
    'edu.3.tag15': 'SCM',
    'edu.3.tag16': 'WMS',
    'edu.3.tag17': 'ISO',
    'edu.3.tag18': 'Rachunkowość finansowa',
    'edu.3.tag19': 'Marketing',
    'edu.3.tag20': 'Zarządzanie projektami, procesami, jakością i\u00A0produkcją',
    'edu.2.field': 'Geodezja i\u00A0kartografia',
    'edu.2.spec': 'Geodezja miejska i\u00A0przemysłowa',
    'edu.2.degree': 'Inżynier',
    'edu.2.school': 'Politechnika Gdańska · 2009–2013',
    'edu.2.tag1': 'CAD',
    'edu.2.tag2': 'GIS',
    'edu.2.tag3': 'GNSS i\u00A0RTK',
    'edu.2.tag4': 'CRS',
    'edu.2.tag5': 'Kataster',
    'edu.2.tag6': 'Fotogrametria',
    'edu.2.tag7': 'Pomiary i\u00A0dokumentacja geodezyjna',
    'edu.2.tag8': 'Analiza błędów',
    'edu.2.tag9': 'Angielski branżowy',
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
    'pub.4.meta': 'Praca inżynierska, nagrodzona za najlepszą pracę dyplomową Wydziału\u00A0w\u00A02013',
    'toolbox.title': 'Domena',
    'toolbox.intro': 'Kontekst pracy analityka: nawigacja lotnicza i\u00A0morska, inżynieria wymagań, bazy danych oraz narzędzia automatyzacji.',
    'toolbox.domain.label': 'Domeny nawigacji i\u00A0logistyki',
    'toolbox.domain.1': 'Mapy lotnisk i\u00A0procedury podejść',
    'toolbox.domain.1.meta': 'Zasięg kanadyjski i\u00A0pacyficzny',
    'toolbox.domain.2': 'Nawigacja morska i\u00A0technologie offshorowe',
    'toolbox.domain.2.meta': 'Mgr inż. nawigacji, Akademia Morska w\u00A0Gdyni',
    'toolbox.domain.3': 'Geodezja i\u00A0kartografia',
    'toolbox.domain.3.meta': 'Inż. geodezji i\u00A0kartografii',
    'toolbox.domain.4': 'ARINC424 i\u00A0dane przestrzenne',
    'toolbox.domain.4.meta': 'Konwersja współrzędnych i\u00A0reconciliacja danych',
    'toolbox.domain.5': 'Proces produkcji map i\u00A0łańcuch CAD',
    'toolbox.domain.5.meta': 'MicroStation/J V7, potoki plotowania, pulpity VDI',
    'toolbox.analysis.label': 'Analiza, wymagania i\u00A0QA',
    'toolbox.analysis.1': 'Technical writing',
    'toolbox.analysis.1.meta': 'Od raportów klientów wewnętrznych po zespoły deweloperskie (wewnętrzne i\u00A0dostawców): user stories, wymagania, kryteria akceptacji',
    'toolbox.analysis.2': 'Analiza przyczyn źródłowych (RCA)',
    'toolbox.analysis.2.meta': 'Izolacja błędów danych, konfiguracji, usług i\u00A0dostępu',
    'toolbox.analysis.3': 'Testy i\u00A0wdrożenia',
    'toolbox.analysis.3.meta': 'Ręczna walidacja i\u00A0testy regresyjne, tworzenie przypadków i\u00A0moderacja testów UAT, planowanie i\u00A0komunikacja wdrożeń',
    'toolbox.analysis.4': 'Zarządzanie jakością i\u00A0audyty procesowe',
    'toolbox.analysis.4.meta': 'Audytor wewnętrzny ISO 9001:2015, zgodność formalna',
    'toolbox.analysis.5': 'Narzędzia Agile, ALM i\u00A0ITSM',
    'toolbox.analysis.5.meta': 'JIRA, Confluence, ServiceNow, ALM, JAMA',
    'toolbox.tools.label': 'Dane, automatyzacja i\u00A0narzędzia',
    'toolbox.tools.1': 'Python i\u00A0Data Science',
    'toolbox.tools.1.meta': 'Ścieżki DataCamp, skrypty analityczne i\u00A0automatyzacje',
    'toolbox.tools.2': 'SQL i\u00A0inspekcja bazodanowa',
    'toolbox.tools.2.meta': 'Zapytania SQL w\u00A0DBeaverze do analizy przyczyn źródłowych (RCA)',
    'toolbox.tools.3': 'PowerShell i\u00A0Windows batch',
    'toolbox.tools.3.meta': 'Narzędzia produkcyjne, utrzymanie, mapowanie dysków',
    'toolbox.tools.4': 'CAD i\u00A0narzędzia przestrzenne',
    'toolbox.tools.4.meta': 'MicroStation/J V7, AutoCAD, ESRI ArcGIS, FME',
    'toolbox.tools.5': 'Agenci AI i\u00A0desktopowe harnessy',
    'toolbox.tools.5.meta': 'Claude Code, Codex, Paseo, Qoder, Hermes, CommandCode, DSH i\u00A0inne, zautomatyzowane testy QA',
    'toolbox.training.label': 'Certyfikaty i\u00A0audyty',
    'toolbox.training.1': 'Audytor wewnętrzny ISO 9001:2015',
    'toolbox.training.1.meta': 'PCC-CERT · 2016 · Systemy zarządzania jakością',
    'toolbox.training.2': 'Audytor ISO 27001 · 14001 · PN-N 18001',
    'toolbox.training.2.meta': 'MG Centrum · 2016 · Bezpieczeństwo informacji i\u00A0środowisko',
    'toolbox.training.3': 'Zasady audytowania ISO 19011',
    'toolbox.training.3.meta': 'Warsztat MG Centrum · 2016 · Metodyka audytu i\u00A0zgodność',
    'toolbox.training.4': 'Certyfikat średniozaawansowany AutoCAD',
    'toolbox.training.4.meta': 'Autodesk ATC · 2012 · Certyfikacja CAD',
    'toolbox.training.5': 'Certificate in Advanced English (Grade A)',
    'toolbox.training.5.meta': 'Cambridge · 2009 · Poziom C2, pełna biegłość w\u00A0pracy',
    'tools.title': 'Narzędzia',
    'tools.lead': 'Łańcuch narzędzi produkcyjnych i\u00A0praktyczny poziom zaawansowania.',
    'toolbox.tools.ms': 'MicroStation/J V7',
    'toolbox.tools.ms.meta': 'Produkcja map, administracja CAD',
    'toolbox.tools.ms.tip': 'Biegły — codzienna praca produkcyjna od 2018',
    'toolbox.tools.batch': 'Windows batch',
    'toolbox.tools.batch.meta': 'Skrypty produkcyjne, utrzymywane i rozwijane',
    'toolbox.tools.batch.tip': 'Biegły — stare skrypty, które utrzymuję i rozbudowuję',
    'toolbox.tools.jira': 'JIRA',
    'toolbox.tools.jira.meta': 'Zarządzanie użytkownikami i\u00A0projektami, zgłoszenia, wymagania i\u00A0kryteria akceptacji',
    'toolbox.tools.jira.tip': 'Średni — zgłoszenia, zarządzanie użytkownikami i\u00A0projektami, wymagania i\u00A0kryteria akceptacji',
    'toolbox.tools.confluence': 'Confluence',
    'toolbox.tools.confluence.meta': 'Baza wiedzy, artykuły samoobsługowe',
    'toolbox.tools.confluence.tip': 'Średni — baza wiedzy i artykuły samoobsługowe',
    'toolbox.tools.servicenow': 'ServiceNow',
    'toolbox.tools.servicenow.meta': 'Incydenty, pierwsza i druga linia',
    'toolbox.tools.servicenow.tip': 'Średni — incydenty, wsparcie pierwszej i drugiej linii',
    'toolbox.tools.harness': 'Desktopowe harnessy AI',
    'toolbox.tools.harness.meta': 'Claude Code · Codex · Paseo · Qoder · Hermes · CommandCode · DSH',
    'toolbox.tools.harness.tip': 'Średni — narzędzia agentowe używane codziennie w pracy',
    'toolbox.tools.office': 'Office · Visio · Project · Access',
    'toolbox.tools.office.meta': 'Dokumentacja i raportowanie',
    'toolbox.tools.office.tip': 'Średni — dokumentacja i raportowanie',
    'toolbox.tools.pagerduty': 'PagerDuty',
    'toolbox.tools.pagerduty.meta': 'Dyżury on-call, zarządzanie harmonogramami i\u00A0ścieżkami eskalacji',
    'toolbox.tools.pagerduty.tip': 'Średni — dyżury on-call, zarządzanie harmonogramami i\u00A0ścieżkami eskalacji',
    'toolbox.tools.snapcomms': 'SnapComms',
    'toolbox.tools.snapcomms.meta': 'Komunikaty o przestojach i pracach serwisowych',
    'toolbox.tools.snapcomms.tip': 'Średni — komunikaty o przestojach i pracach serwisowych',
    'toolbox.tools.python': 'Python',
    'toolbox.tools.python.meta': 'Skrypty do danych i automatyzacji',
    'toolbox.tools.python.tip': 'Podstawy — skrypty do danych i automatyzacji',
    'toolbox.tools.sql': 'SQL',
    'toolbox.tools.sql.meta': 'Zapytania i ekstrakty',
    'toolbox.tools.sql.tip': 'Podstawy — zapytania i ekstrakty',
    'toolbox.tools.powershell': 'PowerShell',
    'toolbox.tools.powershell.meta': 'Skrypty utrzymaniowe',
    'toolbox.tools.powershell.tip': 'Podstawy — skrypty utrzymaniowe',
    'toolbox.tools.dbeaver': 'DBeaver',
    'toolbox.tools.dbeaver.meta': 'Doraźne zapytania SQL',
    'toolbox.tools.dbeaver.tip': 'Podstawy — doraźne zapytania',
    'toolbox.tools.fme': 'FME · BPA Automate',
    'toolbox.tools.fme.meta': 'Przepływy danych i ekstrakty',
    'toolbox.tools.fme.tip': 'Podstawy — przepływy danych i ekstrakty, nie na co dzień',
    'toolbox.tools.autocad': 'AutoCAD',
    'toolbox.tools.autocad.meta': 'Certyfikat średniozaawansowany, Autodesk ATC 2012',
    'toolbox.tools.autocad.tip': 'Podstawy — certyfikat, używany okazjonalnie',
    'toolbox.tools.arcgis': 'ESRI ArcGIS',
    'toolbox.tools.arcgis.meta': 'Analiza danych przestrzennych i\u00A0mapowanie',
    'toolbox.tools.arcgis.tip': 'Podstawy — analiza danych przestrzennych i\u00A0mapowanie',
    'toolbox.tools.alm': 'ALM · JAMA',
    'toolbox.tools.alm.meta': 'Scenariusze testowe, śledzenie wymagań',
    'toolbox.tools.alm.tip': 'Podstawy — scenariusze testowe i śledzenie wymagań',
    'toolbox.tools.vba': 'VBA',
    'toolbox.tools.vba.meta': 'Makra w istniejących arkuszach',
    'toolbox.tools.vba.tip': 'Podstawy — makra w istniejących arkuszach',
    'level.junior': 'Podstawy',
    'level.mid': 'Średni',
    'level.senior': 'Biegły',
    'courses.title': 'Kursy',
    'courses.intro': 'Krótkie formaty i\u00A0samokształcenie, które ukształtowały mój sposób pracy.',
    'courses.fun': 'Nauka bardzo często jest też dla mnie zabawą.',
    'courses.recreational': 'Kursy rekreacyjne',
    'hobbies.title': 'Hobby',
    'hobbies.text': 'Literatura science fiction, druk 3D, fotografia podróżnicza, gry strategiczne, stare filmy klasy B.',
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
    'contact.email.sub': 'Wiadomości bezpośrednie i\u00A0zapytania',
    'contact.github': 'GitHub',
    'contact.github.sub': 'Kod, automatyzacje i\u00A0projekty',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.sub': 'Profil zawodowy i\u00A0rekomendacje'
  };

  const enText = new Map();
  const enAria = new Map();
  const enTip = new Map();

  const normalize = (value) => value.replace(/[\t\n\v\f\r ]+/g, ' ').trim();

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    enText.set(el.dataset.i18n, normalize(el.textContent));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    enAria.set(el.dataset.i18nAria, el.getAttribute('aria-label') || '');
  });

  document.querySelectorAll('[data-i18n-tip]').forEach((el) => {
    enTip.set(el.dataset.i18nTip, el.getAttribute('data-tip') || '');
  });

  let currentLang = 'en';
  let marqueePlaying = false;
  let marqueeButtons = [];

  function applyLang(lang) {
    currentLang = lang === 'pl' ? 'pl' : 'en';
    const dict = currentLang === 'pl' ? PL : null;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = (dict && dict[key]) || enText.get(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-tip]').forEach((el) => {
      const key = el.dataset.i18nTip;
      const value = (dict && dict[key]) || enTip.get(key);
      if (value) el.setAttribute('data-tip', value);
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
    updateCertCarousel();

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
    if (!marqueeButtons.length) return;
    const key = marqueePlaying ? 'pause' : 'play';
    marqueeButtons.forEach((btn) => {
      btn.textContent = MARQUEE_TEXT[currentLang][key];
      btn.setAttribute('aria-pressed', String(marqueePlaying));
    });
  }

  let currentCertPage = 0;

  function updateCertCarousel() {
    const viewport = document.getElementById('cert-viewport');
    const track = document.getElementById('cert-track');
    if (!viewport || !track) return;
    const cards = Array.from(track.querySelectorAll('.cert-card'));
    if (!cards.length) return;

    let cols = 1;
    if (cards.length >= 2 && cards[1].offsetTop === cards[0].offsetTop) {
      cols = (cards.length >= 3 && cards[2].offsetTop === cards[0].offsetTop) ? 3 : 2;
    }
    const itemsPerPage = cols;
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    if (currentCertPage >= totalPages) currentCertPage = totalPages - 1;
    if (currentCertPage < 0) currentCertPage = 0;

    const targetIndex = currentCertPage * itemsPerPage;
    const targetCard = cards[targetIndex];
    const offsetTop = targetCard ? targetCard.offsetTop - cards[0].offsetTop : 0;
    track.style.transform = `translateY(-${offsetTop}px)`;

    if (targetCard) {
      viewport.style.height = `${targetCard.offsetHeight}px`;
    }

    const prevBtn = document.getElementById('cert-prev');
    const nextBtn = document.getElementById('cert-next');
    if (prevBtn) {
      prevBtn.disabled = currentCertPage === 0;
      prevBtn.setAttribute('aria-label', currentLang === 'pl' ? 'Poprzednie certyfikaty' : 'Previous certificates');
    }
    if (nextBtn) {
      nextBtn.disabled = currentCertPage >= totalPages - 1;
      nextBtn.setAttribute('aria-label', currentLang === 'pl' ? 'Następne certyfikaty' : 'Next certificates');
    }

    const counter = document.getElementById('cert-counter');
    if (counter) {
      const start = targetIndex + 1;
      const end = Math.min(targetIndex + itemsPerPage, cards.length);
      const isPl = currentLang === 'pl';
      counter.textContent = isPl ? `${start}–${end} z ${cards.length}` : `${start}–${end} of ${cards.length}`;
    }
  }

  function initCertCarousel() {
    const prevBtn = document.getElementById('cert-prev');
    const nextBtn = document.getElementById('cert-next');
    const viewport = document.getElementById('cert-viewport');
    if (!viewport) return;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentCertPage > 0) {
          currentCertPage--;
          updateCertCarousel();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const track = document.getElementById('cert-track');
        const cards = track ? track.querySelectorAll('.cert-card') : [];
        let cols = 1;
        if (cards.length >= 2 && cards[1].offsetTop === cards[0].offsetTop) {
          cols = (cards.length >= 3 && cards[2].offsetTop === cards[0].offsetTop) ? 3 : 2;
        }
        const totalPages = Math.ceil(cards.length / cols);
        if (currentCertPage < totalPages - 1) {
          currentCertPage++;
          updateCertCarousel();
        }
      });
    }

    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (prevBtn && !prevBtn.disabled) prevBtn.click();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (nextBtn && !nextBtn.disabled) nextBtn.click();
      }
    });

    window.addEventListener('resize', () => {
      updateCertCarousel();
    });

    const images = viewport.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', updateCertCarousel, { once: true });
    });
  }

  function initPicCompareModal() {
    const thumbBtn = document.getElementById('piccompare-thumb');
    const dialog = document.getElementById('piccompare-dialog');
    const closeBtn = document.getElementById('piccompare-close');
    if (!thumbBtn || !dialog) return;

    thumbBtn.addEventListener('click', () => {
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
        thumbBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    const handleClose = () => {
      thumbBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      thumbBtn.focus();
    };

    const closeDialog = () => {
      dialog.close();
      handleClose();
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDialog);
    }

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('cancel', handleClose);

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        closeDialog();
      }
    });
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

  marqueeButtons = Array.from(document.querySelectorAll('.marquee__toggle'));
  if (marqueeList.length && marqueeButtons.length) {
    const SPEED = 58;
    let frame = 0;
    let last = 0;
    let marqueeVisible = false;

    const visibility = new IntersectionObserver(
      (entries) => {
        marqueeVisible = entries.some((entry) => entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );
    marqueeList.forEach((item) => visibility.observe(item.el));

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
      if (marqueeVisible) {
        marqueeList.forEach((item) => {
          if (item.dragging) return;
          item.offset += SPEED * delta;
          wrap(item);
          draw(item);
        });
      }
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
    marqueeButtons.forEach((btn) => {
      btn.addEventListener('click', () => setMarqueePlaying(!marqueePlaying));
    });
  }

  // Scroll Spy: highlight active nav link based on visible section
  const navSections = document.querySelectorAll('main > section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (navSections.length && navLinks.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isTarget = link.getAttribute('href') === `#${id}`;
            if (isTarget) {
              link.setAttribute('aria-current', 'true');
              if (window.innerWidth < 768) {
                link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
            } else {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-18% 0px -50% 0px' });

    navSections.forEach((sec) => navObserver.observe(sec));
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
  const layerFar = document.querySelector('.bg__far');
  const layerMid = document.querySelector('.bg__mid');
  const layerLow = document.querySelector('.bg__low');

  const LIGHT_SOURCES = [
    { layer: layerFar, x: 300, y: 360, strength: 1 },
    { layer: layerFar, x: 1150, y: 240, strength: 0.85 },
    { layer: layerMid, x: 1720, y: 1770, strength: 0.55, blink: true },
    { layer: layerLow, x: 1700, y: 2160, strength: 0.7 }
  ];

  function renderLights(progress, isDark) {
    root.dataset.dark = isDark ? 'true' : 'false';
    if (!isDark || !lightDots.length) return;

    const viewportH = window.innerHeight;
    const viewportW = window.innerWidth;

    LIGHT_SOURCES.forEach((source, index) => {
      const dot = lightDots[index];
      if (!dot) return;
      const layer = source.layer;
      if (!layer || (layer.offsetParent === null && layer.style.display === 'none')) {
        dot.style.visibility = 'hidden';
        return;
      }
      const rect = layer.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        dot.style.visibility = 'hidden';
        return;
      }

      const scale = Math.max(rect.width / 2400, rect.height / 3000);
      const dx = (rect.width - 2400 * scale) / 2;
      const dy = (rect.height - 3000 * scale) / 2;
      const x = rect.left + dx + source.x * scale;
      const y = rect.top + dy + source.y * scale;

      const visible = y > -220 && y < viewportH + 220 && x > -220 && x < viewportW + 220;
      dot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      dot.style.visibility = visible ? 'visible' : 'hidden';
      const glow = dot.firstElementChild;
      if (glow && !source.blink) glow.style.opacity = String(source.strength);
    });
  }

  function renderSky() {
    if (!bg) return;

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const urlPan = new URLSearchParams(window.location.search).get('pan');
    const progress = urlPan !== null ? clamp01(parseFloat(urlPan)) : (max > 0 ? clamp01(window.scrollY / max) : 0);
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

  const urlTheme = new URLSearchParams(window.location.search).get('theme');
  const storedTheme = readStored(STORE.theme);
  let initialTheme = urlTheme && THEMES.includes(urlTheme) ? urlTheme : (THEMES.includes(storedTheme) ? storedTheme : null);
  if (!initialTheme && THEMES.includes(root.dataset.theme)) initialTheme = root.dataset.theme;

  initCertCarousel();
  initPicCompareModal();
  setTheme(initialTheme || 'auto');
  applyLang(readStored(STORE.lang) === 'pl' ? 'pl' : 'en');
})();
