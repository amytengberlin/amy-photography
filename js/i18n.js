// Amy Photography — EN | DE language switch
//
// HOW IT WORKS: English text lives in the HTML itself. Elements marked data-i18n="key"
// get swapped for the text below when German is chosen. To fix a German sentence,
// find its key in the DE block below and edit it. To translate a new element, add
// data-i18n="some.key" to it in the HTML and add "some.key" to both blocks (DE needed;
// EN only for pages whose source text is German, i.e. the Datenschutz page).
// Photo descriptions (alt text) are in ALT_DE, matched by file name.
(() => {
  const DE = {
    // --- menu ---
    "nav.portfolio": "Portfolio",
    "nav.offer": "Angebot",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "cat.people": "Menschen &amp; Porträts",
    "cat.business": "Personal Branding &amp; Business",
    "cat.events": "Events &amp; Feiern",
    "aria.menu": "Menü öffnen",
    "aria.lang": "Sprache",
    "aria.prev": "Vorheriges Foto",
    "aria.next": "Nächstes Foto",
    "aria.viewer": "Fotoansicht",
    "aria.close": "Schließen",
    "aria.carousel": "Fotokarussell",
    "aria.prevT": "Vorherige Stimme",
    "aria.nextT": "Nächste Stimme",

    // --- home ---
    "hero.eyebrow": "Portrait- &amp; Eventfotografie in Berlin",
    "hero.h1": "Echte Momente,<br />schön bewahrt.",
    "hero.sub": "Warme, natürliche Fotografie, die Familien, Paare, besondere Momente und unvergessliche Events festhält &ndash; in Berlin und darüber hinaus.",
    "hero.btn": "Portfolio ansehen",
    "quote.text": "&bdquo;Fotografie ist eine Art zu fühlen, zu berühren, zu lieben. Was du auf Film festgehalten hast, ist für immer bewahrt&hellip; es erinnert sich an die kleinen Dinge, lange nachdem du alles andere vergessen hast.&ldquo;",
    "testi.eyebrow": "Kundenstimmen",
    "testi.1": "&bdquo;Wir sind absolut begeistert von den Fotos! Du bist unglaublich talentiert, wunderbar, und es ist eine Freude, mit dir zu arbeiten. Vielen Dank, dass du diese wunderschönen Momente festgehalten hast. Wir könnten nicht glücklicher sein!&ldquo;",
    "about.h2": "Hallo, ich bin Amy.",
    "about.p1": "Ich komme aus Vancouver in Kanada und nenne inzwischen Berlin mein Zuhause. Meine Liebe zur Fotografie begann in einer Schuldunkelkammer, wo ich Filme entwickelte und Schwarz-Weiß-Fotos von Hand abzog &ndash; zuzusehen, wie ein Bild langsam entsteht, fühlte sich wie Magie an, und ich wusste damals schon, dass die Fotografie immer ein Teil von mir sein würde.",
    "about.p2": "Aus dieser Neugier wurde mein Beruf: Acht Jahre im Fotostudio haben mir beigebracht, mit Menschen in Kontakt zu kommen, ihnen die Nervosität zu nehmen und in nur wenigen Momenten echte Ausdrücke einzufangen. Heute fotografiere ich Einzelpersonen, Paare und Familien &ndash; und bewahre die leisen Momente, das echte Lachen und die kleinen Verbindungen, die mit der Zeit immer bedeutsamer werden.",
    "contact.h2": "Lass uns plaudern&hellip;",
    "contact.p": "Ich bin in Berlin und in der ganzen Stadt unterwegs &ndash; schreib mir ein paar Zeilen über dich und was du dir vorstellst. Ich antworte innerhalb eines Werktags.",
    "contact.book": "<strong>Buchungen laufen vorerst per E-Mail.</strong> Erzähl mir ein wenig von dir &ndash; für wen die Session ist, ob du an Familie, Porträt oder Neugeborene denkst und ungefähr wann &ndash; und ich melde mich innerhalb eines Werktags bei dir.",
    "contact.btn": "E-Mail an hello@amyteng.com",
    "footer.copy": "&copy; <span id=\"year\"></span> Amy Teng Photography. Alle Rechte vorbehalten.",
    "footer.top": "Nach oben ↑",
    "footer.back": "Zurück zum Portfolio",
    "footer.home": "Startseite",

    // --- coming soon pages ---
    "soon.title": "Bald verfügbar..!",
    "soon.events": "Fotos von Events und Feiern folgen bald.",
    "soon.offer": "Details zu meinem Angebot folgen bald.",
    "soon.backmain": "Zurück zur Startseite",
    "offer.eyebrow": "Mein Angebot",

    // --- page titles / descriptions ---
    "title.index": "Portrait- & Eventfotografie in Berlin — Amy Teng Photography",
    "desc.index": "Warme, natürliche Porträt- und Familienfotografie in Berlin von Amy Teng. Familien-Sessions, Paare, Schwangerschaft und Neugeborene – jetzt Termin anfragen.",
    "title.people": "Menschen & Porträts — Amy Teng Photography",
    "desc.people": "Porträts, Paare, Familien und Schwangerschaft – warme, natürliche Fotografie in Berlin.",
    "title.business": "Personal Branding & Business — Amy Teng Photography",
    "desc.business": "Personal Branding und Business-Porträts, die zu dir passen – Berlin.",
    "title.events": "Events & Feiern — Amy Teng Photography",
    "desc.events": "Event- und Feierfotografie in Berlin.",
    "title.offer": "Angebot — Amy Teng Photography",
    "desc.offer": "Fotografie-Angebote und Pakete von Amy Teng, Berlin.",
    "title.impressum": "Impressum — Amy Teng Photography",
    "title.datenschutz": "Datenschutzerklärung — Amy Teng Photography",

    // --- legal pages ---
    "legal.back": "&larr; Zurück zur Website",
    "legal.eyebrow": "Rechtliches",
    "imp.h1": "Impressum",
    "imp.sub": "Angaben gemäß § 5 DDG",
    "imp.1": "Anbieter",
    "imp.2": "Amy Teng<br />Amy Teng Photography<br />Bredowstrasse 33<br />10551 Berlin<br />Deutschland",
    "imp.3": "Kontakt",
    "imp.4": "E-Mail: <a href=\"mailto:hello@amyteng.com\">hello@amyteng.com</a>",
    "imp.5": "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
    "imp.6": "Amy Teng, Bredowstrasse 33, 10551 Berlin, Deutschland",
    "imp.7": "Haftung für Links",
    "imp.8": "Diese Website enthält Links zu externen Websites (zum Beispiel Instagram). Auf deren Inhalte habe ich keinen Einfluss und übernehme dafür keine Gewähr. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.",
    "imp.9": "Urheberrecht",
    "imp.10": "Alle Fotografien und Texte auf dieser Website sind urheberrechtlich geschützt und gehören Amy Teng, sofern nicht anders angegeben. Nutzung, Vervielfältigung oder Weitergabe bedürfen der vorherigen schriftlichen Zustimmung.",
    "ds.h1": "Datenschutzerklärung",
    "ds.sub": "Verbindlich ist diese deutsche Fassung."
  };

  // English versions of the Datenschutz page (its source text is German).
  const EN = {
    "title.datenschutz": "Privacy Policy — Amy Teng Photography",
    "ds.h1": "Privacy Policy",
    "ds.sub": "English courtesy translation. The German version is legally binding.",
    "ds.1": "1. Controller",
    "ds.2": "Amy Teng, Amy Teng Photography, Bredowstrasse 33, 10551 Berlin, Germany<br />Email: <a href=\"mailto:hello@amyteng.com\">hello@amyteng.com</a>",
    "ds.3": "2. Hosting via GitHub Pages",
    "ds.4": "This website is hosted through GitHub Pages, a service of GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA. When you visit the site, GitHub processes technically necessary data, in particular your IP address, the date and time of access, the page requested and browser information (server log files). The legal basis is Art. 6(1)(f) GDPR (legitimate interest in providing the website securely and efficiently). Data may be transferred to the USA; GitHub is certified under the EU-US Data Privacy Framework <span class=\"todo\">[please check current status]</span>.",
    "ds.5": "3. Fonts",
    "ds.6": "The fonts used (Cormorant Garamond, Jost) are served locally from this website. No data is sent to Google or any other font provider.",
    "ds.7": "4. No cookies, no tracking",
    "ds.8": "This website does not set cookies and does not use analytics or marketing tools.",
    "ds.9": "5. Contact by email",
    "ds.10": "If you email me, I process your details (name, email address, content of your message) to handle your enquiry and any follow-up questions. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures) or (f). The data is deleted once it is no longer needed for its purpose and no statutory retention duties apply.",
    "ds.11": "6. External links (Instagram)",
    "ds.12": "This website contains a link to Instagram (@captivate.amy). No Instagram content is embedded; data is only transferred once you click the link. Instagram's privacy policy (Meta Platforms Ireland Ltd.) then applies.",
    "ds.13": "7. Your rights",
    "ds.14": "You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). Please contact the email address above. You can also lodge a complaint with a data protection authority; in Berlin: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.",
    "ds.15": "8. Changes",
    "ds.16": "If the website is extended (for example with a contact form), this policy will be updated. As of: 2 November 2026."
  };
  // The Datenschutz keys for the German view are the page's own source text.
  const T = { de: DE, en: EN };

  // Photo descriptions in German, matched by file name (English is the HTML's own alt text)
  const ALT_DE = {
    "amy": "Amy, Porträtfotografie",
    "events-celebrations": "Events & Feiern — Vorschaubild",
    "people-portraits": "Menschen & Porträts — Vorschaubild",
    "personal-branding-business": "Personal Branding & Business — Vorschaubild",
    "business-cindy-01": "Lächelnde Frau in gemustertem Oberteil in einem hellen Raum",
    "business-cindy-02": "Praktizierende im Gespräch mit einer Klientin an der Behandlungsliege",
    "business-cindy-03": "Praktizierende bei der Arbeit mit einer Klientin in einem warmen Studio",
    "business-cindy-04": "Nahaufnahme von Händen bei einer Massage",
    "business-elena-01": "Frau in blauer Jacke in einem herbstlichen Garten",
    "business-elena-02": "Frau im blauen Pullover an eine helle Säule gelehnt",
    "business-elena-03": "Frau in Weiß sitzt auf dem Boden vor einer Wand",
    "business-elena-04": "Frau in Weiß auf einer roten Bank zwischen Herbstlaub",
    "business-elena-05": "Frau im blauen Mantel auf einem von Bäumen gesäumten Weg",
    "business-esky-01": "Hände beim Zubereiten eines Gerichts in der Pfanne",
    "business-esky-02": "Hände schneiden frische Kräuter auf einem Brett",
    "business-esky-03": "Buntes Gericht auf einer geflochtenen Platte serviert",
    "business-esky-04": "Gruppe kocht gemeinsam in einer Küche",
    "business-esky-05": "Lächelnde Frau in Schürze in einer Küche",
    "business-esky-06": "Frau in Schürze gießt Tee in einer hellen Küche ein",
    "business-gitanjali-01": "Frau in Grün sitzt auf einem grauen Sofa am Fenster",
    "business-gitanjali-02": "Lächelnde Frau in rot gemustertem Oberteil vor Haftnotizen",
    "business-gitanjali-03": "Frau in rot gemustertem Oberteil arbeitet am Laptop zwischen Pflanzen",
    "business-gitanjali-04": "Frau in roter Jacke vor einer grauen Wand",
    "business-jessica-01": "Lächelnde Frau mit dunklen Wellen im marineblauen Pullover",
    "business-magali-01": "Porträt einer Frau, durch grüne Blätter fotografiert",
    "business-magali-02": "Frau in gemusterter Jacke an einem Fluss",
    "business-magali-03": "Frau in gemusterter Jacke am Fluss unter hellem Himmel",
    "business-magali-04": "Person sitzt auf dunklen Stufen in der Stadt",
    "business-magali-05": "Frau im weißen Strickpullover vor einer orangefarbenen Wand",
    "business-susanne-01": "Praktizierende arbeitet mit einem Klienten auf einer Matte",
    "business-susanne-02": "Praktizierende behandelt eine auf einer Matte liegende Klientin",
    "business-susanne-03": "Lächelnde Frau in dunklem Oberteil in einem hellen Raum",
    "business-susanne-04": "Frau in dunklem Oberteil sitzt auf einem Sofa",
    "people-ana-01": "Eltern mit Baby in Winterhüten im Freien",
    "people-ana-03": "Familie mit Baby in einem herbstlichen Park",
    "people-ana-04": "Baby mit gelber Mütze, von einem Elternteil hochgehalten",
    "people-ana-05": "Mutter mit Baby in gelber Mütze im Park",
    "people-ana-06": "Familie mit Baby zwischen Herbstbäumen",
    "people-arina-01": "Mann in fliederfarbenem Pullover und Schal auf einer Stadtstraße",
    "people-cami-01": "Frau im orangefarbenen Mantel auf einer geschmückten Stadtstraße",
    "people-cami-02": "Lächelnde Frau vor blau gemustertem Hintergrund",
    "people-cami-03": "Frau lehnt an einem Geländer am Fluss",
    "people-cami-04": "Frau im orangefarbenen Rock überquert eine Stadtstraße",
    "people-engagement-01": "Paar kurz vor dem Kuss vor einem roten Gitterturm",
    "people-engagement-02": "Paar umarmt sich in einem Park",
    "people-engagement-03": "Paar steht gemeinsam vor einem roten Turm",
    "people-engagement-05": "Paar an einem roten Tempeltor",
    "people-joe-01": "Mann geht auf einem Weg unter gelben Herbstbäumen",
    "people-joe-02": "Lächelnder Mann mit Brille in dunkler Jacke",
    "people-joe-03": "Mann lehnt an einem Geländer mit Blick auf die Stadt",
    "people-kim-01": "Mann blickt über eine Stadtsilhouette",
    "people-kim-02": "Lächelnder Mann unter einem Glasdach",
    "people-kim-03": "Mann im weißen T-Shirt auf einem weiten Platz",
    "people-marc-01": "Person im violetten Yukata auf einer Festtagsstraße",
    "people-marc-02": "Person im Yukata an einem Schreintor",
    "people-marc-03": "Person im Yukata unter Weidenzweigen",
    "people-marc-04": "Person im Yukata neben einer Pagode",
    "people-miki-01": "Person in schwarzer Jacke zwischen gelben Herbstbäumen",
    "people-miki-02": "Person mit grüner Mütze auf einem Weg am Fluss",
    "people-miki-03": "Person mit grüner Mütze lächelt an einem Zaun",
    "people-miki-04": "Person im Daunenmantel auf einer Stadtstraße",
    "people-phil-01": "Lächelnder Mann in Schwarz auf einer abendlichen Straße",
    "people-phil-02": "Mann sitzt tagsüber vor einem hohen Turm",
    "people-pregnancy-01": "Hände formen ein Herz auf dem Babybauch",
    "people-pregnancy-02": "Schwangeres Paar sitzt an einem Hang, in Schwarz-Weiß",
    "people-pregnancy-03": "Schwangeres Paar umarmt sich im goldenen Licht",
    "people-pregnancy-04": "Schwangeres Paar unter einem Gartenbogen",
    "people-soni-01": "Frisch Vermählte küssen sich vor einem Backsteinportal",
    "people-soni-02": "Schuhe von Braut und Bräutigam zwischen verstreuten Blütenblättern",
    "people-soni-03": "Braut und Bräutigam mit Brautstrauß in einem Backsteinbogen",
    "people-soni-04": "Braut hebt ihren Brautstrauß in einem Backsteinbogen",
    "people-soni-05": "Bräutigam im Anzug an eine Backsteinwand gelehnt",
    "people-tiago-01": "Mann im dunklen Mantel auf einer neonbeleuchteten Straße bei Nacht",
    "people-tiago-02": "Mann neben einem Gebäude mit Papierlaternen",
    "people-tiago-03": "Mann im karierten Hemd unter rosa Blüten",
    "people-tiago-04": "Mann im Dufflecoat auf einer Tempelstraße",
    "people-yulia-01": "Frau mit dunklem Hut an einen Baumstamm gelehnt",
    "hero-01": "Paar umarmt sich in einem grünen Park",
    "hero-02": "Lächelnder Mann unter einer riesigen roten Tempellaterne",
    "hero-03": "Familie mit Baby in Winterhüten blickt über eine Steinmauer",
    "hero-04": "Lächelnde Frau in rotem Mantel und gemustertem Schal auf einer Stadtstraße",
    "hero-05": "Paar hält Händchen auf Steinstufen",
    "hero-06": "Person sitzt auf einem Fensterbrett vor einer orangefarbenen Wand"
  };

  const KEY = "amy-lang";
  const html = document.documentElement;
  const page = html.dataset.page || "index";

  const getLang = () => {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q === "de" || q === "en") { localStorage.setItem(KEY, q); return q; }
      return localStorage.getItem(KEY) === "de" ? "de" : "en";
    } catch (e) { return "en"; }
  };

  const metaDesc = document.querySelector('meta[name="description"]');
  const orig = { title: document.title, desc: metaDesc ? metaDesc.content : "" };
  const decode = (s) => { const t = document.createElement("textarea"); t.innerHTML = s; return t.value; };

  function apply(lang) {
    html.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.dataset.orig === undefined) el.dataset.orig = el.innerHTML;
      const v = T[lang] && T[lang][el.dataset.i18n];
      el.innerHTML = v !== undefined ? v : el.dataset.orig;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      if (el.dataset.origAria === undefined) el.dataset.origAria = el.getAttribute("aria-label") || "";
      const v = T[lang] && T[lang][el.dataset.i18nAriaLabel];
      el.setAttribute("aria-label", v !== undefined ? v : el.dataset.origAria);
    });

    document.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src") || "";
      const m = src.match(/([^/]+)\.jpg$/);
      if (!m) return;
      if (img.dataset.origAlt === undefined) img.dataset.origAlt = img.alt;
      img.alt = lang === "de" && ALT_DE[m[1]] ? ALT_DE[m[1]] : img.dataset.origAlt;
    });

    const t = T[lang]["title." + page], d = T[lang]["desc." + page];
    document.title = t ? decode(t) : orig.title;
    if (metaDesc) metaDesc.content = d ? decode(d) : orig.desc;

    document.querySelectorAll(".gallery-item").forEach((fig) => {
      const img = fig.querySelector("img");
      if (img) fig.setAttribute("aria-label", (lang === "de" ? "Vergrößern: " : "View larger: ") + img.alt);
    });

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    try { localStorage.setItem(KEY, b.dataset.lang); } catch (err) {}
    apply(b.dataset.lang);
  });

  apply(getLang());
})();
