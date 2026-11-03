(() => {
  "use strict";

  const content = window.JOURNEY_CONTENT;
  const translations = window.JOURNEY_TRANSLATIONS;
  const app = document.querySelector("#app");
  const languageSelect = document.querySelector("#language-select");
  const nav = document.querySelector("#nav-links");
  const navPanel = document.querySelector("#primary-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("figcaption");
  let language = getSavedLanguage();
  let activePhotos = [];
  let activePhotoIndex = 0;
  let previousFocus = null;
  let revealObserver;

  const navigation = [
    ["navHome", "#/"],
    ["navAbout", "#/about"],
    ["navInternship", "#/internship"],
    ["navJournal", "#/journal"],
    ["navSpain", "#/spain"],
    ["navGallery", "#/gallery"],
    ["navLearning", "#/learning"],
    ["navContact", "#/contact"]
  ];

  const pageTitleKeys = {
    home: "heroTitle", about: "aboutTitle", internship: "internshipTitle",
    journal: "journalTitle", spain: "spainTitle", gallery: "galleryTitle",
    learning: "learnedTitle", contact: "contactTitle"
  };

  function getSavedLanguage() {
    try {
      const saved = window.localStorage.getItem("mySpanishJourneyLanguage");
      return saved && translations[saved] ? saved : "en";
    } catch (error) {
      console.warn("The saved language preference could not be read.", error);
      return "en";
    }
  }

  function t(key, params = {}) {
    const text = translations[language][key] || translations.en[key] || key;
    return text.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? ""));
  }

  function translated(value) {
    if (value && typeof value === "object") return value[language] || value.en || "";
    return value || "";
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function categoryName(category) {
    const index = content.categories.indexOf(category);
    return index < 0 ? category : content.categoryTranslations[language][index] || category;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(language === "fi" ? "fi-FI" : language === "tr" ? "tr-TR" : "en-GB", {
      day: "numeric", month: "long", year: "numeric"
    }).format(new Date(`${date}T12:00:00`));
  }

  function currentRoute() {
    const route = window.location.hash.replace(/^#\/?/, "").split("?")[0];
    return route || "home";
  }

  function setStaticTranslations() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });
    lightbox.setAttribute("aria-label", t("galleryTitle"));
    languageSelect.value = language;
  }

  function renderNavigation(route) {
    nav.innerHTML = navigation.map(([key, href]) => {
      const target = href === "#/" ? "home" : href.slice(2);
      const active = route === target || (route.startsWith("journal/") && target === "journal");
      return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${escapeHTML(t(key))}</a>`;
    }).join("");
  }

  function sortedPosts() {
    return [...content.posts].sort((a, b) => b.date.localeCompare(a.date));
  }

  function postCard(post, compact = false) {
    const title = translated(post.title);
    const summary = translated(post.summary);
    const imageSrc = post.image || "assets/images/photo-placeholder.svg";
    return `<article class="${compact ? "feature-card" : "journal-card"} reveal">
      <a class="image-frame" href="#/journal/${encodeURIComponent(post.slug)}" tabindex="-1" aria-hidden="true">
        <img src="${escapeHTML(imageSrc)}" alt="" loading="lazy">
      </a>
      <div>
        <span class="tag">${escapeHTML(categoryName(post.category))}</span>
        ${post.isExample ? `<span class="sample-note">${escapeHTML(t("sampleEntry"))}</span>` : ""}
        <h2><a href="#/journal/${encodeURIComponent(post.slug)}">${escapeHTML(title)}</a></h2>
        <time datetime="${escapeHTML(post.date)}">${escapeHTML(formatDate(post.date))}</time>
        <p>${escapeHTML(summary)}</p>
        <a class="text-link" href="#/journal/${encodeURIComponent(post.slug)}">${escapeHTML(t("readEntry"))} →</a>
      </div>
    </article>`;
  }

  function renderHome() {
    const featured = sortedPosts().slice(0, 3);
    return `<section class="hero">
      <div class="hero-top">
        <div>
          <p class="eyebrow">${escapeHTML(t("homeEyebrow"))}</p>
          <h1>${escapeHTML(t("heroTitle"))}</h1>
        </div>
        <div class="hero-aside">
          <p>${escapeHTML(t("heroIntro"))}</p>
          <a class="button-link" href="#/journal">${escapeHTML(t("exploreJournal"))} <span aria-hidden="true">↗</span></a>
          <span class="location">${escapeHTML(t("locationSpain"))}</span>
        </div>
      </div>
      <figure class="hero-image">
        <img src="assets/images/photo-placeholder.svg" alt="${escapeHTML(t("placeholderPhoto"))}" fetchpriority="high">
        <figcaption class="image-note">${escapeHTML(t("placeholderPhoto"))}</figcaption>
      </figure>
      <div class="intro-band reveal">
        <div><p class="eyebrow">${escapeHTML(t("openingEyebrow"))}</p><h2>${escapeHTML(t("openingTitle"))}</h2></div>
        <p>${escapeHTML(t("openingText"))}</p>
      </div>
      <section class="section">
        <div class="section-heading">
          <div><p class="eyebrow">${escapeHTML(t("featuredEyebrow"))}</p><h2>${escapeHTML(t("featuredTitle"))}</h2></div>
          <a class="text-link" href="#/journal">${escapeHTML(t("viewAll"))}</a>
        </div>
        <div class="feature-grid">${featured.map((post) => postCard(post, true)).join("")}</div>
      </section>
      <section class="section">
        <div class="section-heading"><div><p class="eyebrow">${escapeHTML(t("learningEyebrow"))}</p><h2>${escapeHTML(t("learningTitle"))}</h2></div></div>
        <div class="learning-list">
          ${[1, 2, 3].map((number) => `<article class="learning-row reveal">
            <span class="number">0${number}</span><h3>${escapeHTML(t(`skill${["One", "Two", "Three"][number - 1]}`))}</h3>
            <p>${escapeHTML(t(`skill${["One", "Two", "Three"][number - 1]}Text`))}</p>
          </article>`).join("")}
        </div>
      </section>
      <section class="section split-story">
        <div class="image-frame"><img src="assets/images/photo-placeholder.svg" alt="${escapeHTML(t("placeholderPhoto"))}" loading="lazy"></div>
        <div><p class="eyebrow">${escapeHTML(t("storyEyebrow"))}</p><h2>${escapeHTML(t("storyTitle"))}</h2>
          <p>${escapeHTML(t("storyText"))}</p><a class="text-link" href="#/spain">${escapeHTML(t("discoverSpain"))} →</a>
        </div>
      </section>
    </section>`;
  }

  function pageIntro(eyebrow, title, lead) {
    return `<header class="page-intro"><p class="eyebrow">${escapeHTML(t(eyebrow))}</p><h1>${escapeHTML(t(title))}</h1><p class="lead">${escapeHTML(t(lead))}</p></header>`;
  }

  function renderAbout() {
    return `<section class="page">
      ${pageIntro("aboutEyebrow", "aboutTitle", "aboutLead")}
      <div class="editorial-columns">
        <div><p class="eyebrow">${escapeHTML(t("aboutStoryTitle"))}</p></div>
        <div><p>${escapeHTML(t("aboutBody"))}</p><h2>${escapeHTML(t("aboutGoalsTitle"))}</h2><p>${escapeHTML(t("aboutGoalsBody"))}</p></div>
      </div>
    </section>`;
  }

  function renderInternship() {
    return `<section class="page">
      ${pageIntro("internshipEyebrow", "internshipTitle", "internshipLead")}
      <section class="editorial-columns">
        <div><p class="eyebrow">${escapeHTML(t("overviewTitle"))}</p></div>
        <dl class="fact-list">
          ${[["host", "[Add organisation name]"], ["location", "[Add city, Spain]"], ["period", "[Add internship dates]"], ["role", "[Add role or department]"]]
            .map(([label, value]) => `<div><dt>${escapeHTML(t(label))}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}
        </dl>
      </section>
      <section class="editorial-columns">
        <div><p class="eyebrow">${escapeHTML(t("responsibilitiesTitle"))}</p></div>
        <div><p>${escapeHTML(t("responsibilitiesBody"))}</p></div>
      </section>
      <section class="editorial-columns">
        <div><p class="eyebrow">${escapeHTML(t("skillsTitle"))}</p></div>
        <div><p>${escapeHTML(t("skillsBody"))}</p></div>
      </section>
    </section>`;
  }

  function renderJournal() {
    return `<section class="page page-wide">
      ${pageIntro("journalEyebrow", "journalTitle", "journalLead")}
      <div class="journal-tools">
        <label class="visually-hidden" for="journal-search">${escapeHTML(t("searchPlaceholder"))}</label>
        <input id="journal-search" type="search" placeholder="${escapeHTML(t("searchPlaceholder"))}" autocomplete="off">
        <label class="visually-hidden" for="category-filter">${escapeHTML(t("allCategories"))}</label>
        <select id="category-filter"><option value="">${escapeHTML(t("allCategories"))}</option>
          ${content.categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(categoryName(category))}</option>`).join("")}
        </select>
      </div>
      <div id="journal-results" class="journal-grid"></div>
    </section>`;
  }

  function renderArticle(slug) {
    const posts = sortedPosts();
    const index = posts.findIndex((post) => post.slug === slug);
    if (index < 0) return null;
    const post = posts[index];
    const title = translated(post.title);
    const paragraphs = translated(post.paragraphs);
    const wordCount = paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 220));
    const previous = posts[index - 1];
    const next = posts[index + 1];
    const imageSrc = post.image || "assets/images/photo-placeholder.svg";
    return `<article class="page article">
      <a class="article-back" href="#/journal">${escapeHTML(t("backToJournal"))}</a>
      <p class="eyebrow">${escapeHTML(categoryName(post.category))}${post.isExample ? ` · ${escapeHTML(t("sampleEntry"))}` : ""}</p>
      <h1>${escapeHTML(title)}</h1>
      <div class="article-meta"><time datetime="${escapeHTML(post.date)}">${escapeHTML(formatDate(post.date))}</time> · ${escapeHTML(t("readingMinutes", { count: minutes }))}</div>
      <figure class="article-cover"><img src="${escapeHTML(imageSrc)}" alt="${escapeHTML(translated(post.imageAlt))}"></figure>
      <div class="article-copy">${paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</div>
      <nav class="article-pager" aria-label="${escapeHTML(t("articleNavigation"))}">
        ${previous ? `<a href="#/journal/${encodeURIComponent(previous.slug)}"><span class="tag">← ${escapeHTML(t("previous"))}</span><br>${escapeHTML(translated(previous.title))}</a>` : "<span></span>"}
        ${next ? `<a href="#/journal/${encodeURIComponent(next.slug)}" style="text-align:right"><span class="tag">${escapeHTML(t("next"))} →</span><br>${escapeHTML(translated(next.title))}</a>` : ""}
      </nav>
    </article>`;
  }

  function renderSpain() {
    return `<section class="page">
      ${pageIntro("spainEyebrow", "spainTitle", "spainLead")}
      <div class="travel-list">
        ${[1, 2].map((number) => `<article class="travel-entry reveal"><p class="eyebrow">0${number}</p>
          <h2>${escapeHTML(t(`travelPlace${number === 1 ? "One" : "Two"}`))}</h2>
          <p>${escapeHTML(t(`travelPlace${number === 1 ? "One" : "Two"}Text`))}</p>
        </article>`).join("")}
      </div>
    </section>`;
  }

  function renderGallery() {
    return `<section class="page page-wide">
      ${pageIntro("galleryEyebrow", "galleryTitle", "galleryLead")}
      <div class="photo-grid">
        ${content.gallery.map((photo, index) => `<button class="photo-item reveal" type="button" data-photo-index="${index}" aria-label="${escapeHTML(translated(photo.caption))}">
          <img src="${escapeHTML(photo.image)}" alt="${escapeHTML(translated(photo.alt))}" loading="lazy">
          <span class="gallery-caption">${escapeHTML(translated(photo.caption))}</span>
        </button>`).join("")}
      </div>
    </section>`;
  }

  function renderLearning() {
    const sections = [
      ["learnedTechnical", "learnedTechnicalText"],
      ["learnedProfessional", "learnedProfessionalText"],
      ["learnedInternational", "learnedInternationalText"]
    ];
    return `<section class="page">
      ${pageIntro("learnedEyebrow", "learnedTitle", "learnedLead")}
      <div class="learning-list">
        ${sections.map(([title, text], index) => `<article class="learning-row reveal">
          <span class="number">0${index + 1}</span><h3>${escapeHTML(t(title))}</h3><p>${escapeHTML(t(text))}</p>
        </article>`).join("")}
      </div>
    </section>`;
  }

  function renderContact() {
    return `<section class="page">
      ${pageIntro("contactEyebrow", "contactTitle", "contactLead")}
      <div class="contact-links">
        <a href="mailto:your.email@example.com">${escapeHTML(t("emailLabel"))} ↗</a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">${escapeHTML(t("githubLabel"))} ↗</a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">${escapeHTML(t("linkedinLabel"))} ↗</a>
      </div>
    </section>`;
  }

  function renderNotFound() {
    return `<section class="page not-found"><p class="eyebrow">404</p><h1>${escapeHTML(t("notFoundTitle"))}</h1>
      <p class="lead">${escapeHTML(t("notFoundText"))}</p><a class="text-link" href="#/">${escapeHTML(t("goHome"))} →</a>
    </section>`;
  }

  function updateJournalResults() {
    const results = document.querySelector("#journal-results");
    if (!results) return;
    const search = document.querySelector("#journal-search").value.trim().toLocaleLowerCase(language);
    const category = document.querySelector("#category-filter").value;
    const posts = sortedPosts().filter((post) => {
      const searchable = [
        translated(post.title), translated(post.summary), translated(post.paragraphs).join(" "),
        categoryName(post.category), ...(post.tags || [])
      ].join(" ").toLocaleLowerCase(language);
      return (!category || post.category === category) && (!search || searchable.includes(search));
    });
    results.innerHTML = posts.length
      ? posts.map((post) => postCard(post)).join("")
      : `<p class="empty-state">${escapeHTML(t("noResults"))}</p>`;
    observeReveals();
  }

  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    const elements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach((element) => revealObserver.observe(element));
  }

  function closeMenu() {
    navPanel.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("menuOpen"));
  }

  function render() {
    const route = currentRoute();
    setStaticTranslations();
    renderNavigation(route);
    closeMenu();
    let markup;
    if (route === "home") markup = renderHome();
    else if (route === "about") markup = renderAbout();
    else if (route === "internship") markup = renderInternship();
    else if (route === "journal") markup = renderJournal();
    else if (route.startsWith("journal/")) {
      let slug;
      try {
        slug = decodeURIComponent(route.slice("journal/".length));
      } catch (error) {
        slug = "";
      }
      markup = renderArticle(slug) || renderNotFound();
    } else if (route === "spain") markup = renderSpain();
    else if (route === "gallery") markup = renderGallery();
    else if (route === "learning") markup = renderLearning();
    else if (route === "contact") markup = renderContact();
    else markup = renderNotFound();
    app.innerHTML = markup;
    if (route === "journal") updateJournalResults();
    observeReveals();
    if (route === "gallery") activePhotos = content.gallery;
    const article = route.startsWith("journal/")
      ? sortedPosts().find((post) => post.slug === route.slice("journal/".length))
      : null;
    const title = article ? translated(article.title) : t(pageTitleKeys[route] || "notFoundTitle");
    document.title = `${title} — My Spanish Journey`;
    document.querySelector('meta[name="description"]').content = t("heroIntro");
  }

  function openPhoto(index, trigger) {
    activePhotos = content.gallery;
    activePhotoIndex = index;
    previousFocus = trigger;
    showPhoto();
    lightbox.hidden = false;
    document.body.classList.add("locked");
    lightbox.querySelector(".lightbox-close").focus();
  }

  function showPhoto() {
    const photo = activePhotos[activePhotoIndex];
    if (!photo) return;
    lightboxImage.src = photo.image;
    lightboxImage.alt = translated(photo.alt);
    lightboxCaption.textContent = translated(photo.caption);
    lightbox.querySelector(".lightbox-prev").setAttribute("aria-label", t("previousPhoto"));
    lightbox.querySelector(".lightbox-next").setAttribute("aria-label", t("nextPhoto"));
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("locked");
    if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
  }

  function changePhoto(step) {
    activePhotoIndex = (activePhotoIndex + step + activePhotos.length) % activePhotos.length;
    showPhoto();
  }

  languageSelect.addEventListener("change", () => {
    language = translations[languageSelect.value] ? languageSelect.value : "en";
    try {
      window.localStorage.setItem("mySpanishJourneyLanguage", language);
    } catch (error) {
      console.warn("The language preference could not be saved.", error);
    }
    render();
    if (!lightbox.hidden) showPhoto();
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", t(isOpen ? "menuClose" : "menuOpen"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("hashchange", () => {
    render();
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });

  app.addEventListener("input", (event) => {
    if (event.target.matches("#journal-search")) updateJournalResults();
  });
  app.addEventListener("change", (event) => {
    if (event.target.matches("#category-filter")) updateJournalResults();
  });
  app.addEventListener("click", (event) => {
    const photoButton = event.target.closest("[data-photo-index]");
    if (photoButton) openPhoto(Number(photoButton.dataset.photoIndex), photoButton);
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => changePhoto(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => changePhoto(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") changePhoto(-1);
    if (event.key === "ArrowRight") changePhoto(1);
    if (event.key === "Tab") {
      const focusable = [...lightbox.querySelectorAll("button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  let touchStartX = null;
  lightbox.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 45) changePhoto(delta > 0 ? -1 : 1);
    touchStartX = null;
  }, { passive: true });

  render();
})();
