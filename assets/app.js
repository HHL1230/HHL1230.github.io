(function () {
  "use strict";

  var UI = {
    en: {
      brandName: "Portfolio",
      downloadsLabel: "Downloads",
      contactLabel: "Contact",
      viewRepo: "View source",
      viewDemo: "Product page",
      lockedLabel: "Confidential",
      confidentialNote:
        "Source withheld under employer confidentiality \u2014 architecture walkthrough available on request.",
      closeLabel: "Close",
      privacyNote:
        "Projects marked \u201CConfidential\u201D withhold source for one of two reasons: most were built in a commercial laboratory environment and remain the property of my employer; a few are personal practice projects with a licensing question still open. Either way, source code is not published, and the descriptions and screenshots on this page contain no client data, personnel data or proprietary test methods. I am happy to discuss the architecture and engineering decisions in an interview.",
      toggle: "\u4E2D\u6587",
      all: "All"
    },
    zh: {
      brandName: "\u4F5C\u54C1\u96C6",
      downloadsLabel: "\u4E0B\u8F09\u5C08\u5340",
      contactLabel: "\u806F\u7D61\u65B9\u5F0F",
      viewRepo: "\u67E5\u770B\u539F\u59CB\u78BC",
      viewDemo: "\u7522\u54C1\u9801",
      lockedLabel: "\u5546\u696D\u6A5F\u5BC6",
      confidentialNote:
        "\u539F\u59CB\u78BC\u53D7\u96C7\u4E3B\u4FDD\u5BC6\u898F\u7BC4\u9650\u5236\u4E0D\u516C\u958B\uFF0C\u6B61\u8FCE\u65BC\u9762\u8A66\u4E2D\u8AAA\u660E\u67B6\u69CB\u8A2D\u8A08\u3002",
      closeLabel: "\u95DC\u9589",
      privacyNote:
        "\u6A19\u793A\u300C\u5546\u696D\u6A5F\u5BC6\u300D\u7684\u5C08\u6848\u6709\u5169\u7A2E\u60C5\u6CC1\uFF1A\u591A\u6578\u662F\u5728\u5546\u696D\u5BE6\u9A57\u5BA4\u74B0\u5883\u958B\u767C\uFF0C\u8457\u4F5C\u6B0A\u5C6C\u65BC\u96C7\u4E3B\uFF1B\u5C11\u6578\u5247\u662F\u5C1A\u672A\u78BA\u8A8D\u6388\u6B0A\u7BC4\u570D\u7684\u500B\u4EBA\u7DF4\u7FD2\u4F5C\u54C1\u3002\u5169\u8005\u7686\u4E0D\u516C\u958B\u539F\u59CB\u78BC\u3002\u672C\u9801\u7684\u63CF\u8FF0\u8207\u622A\u5716\u4E0D\u542B\u4EFB\u4F55\u5BA2\u6236\u8CC7\u6599\u3001\u4EBA\u54E1\u8CC7\u6599\u6216\u5C08\u6709\u6E2C\u8A66\u65B9\u6CD5\u3002\u6B61\u8FCE\u65BC\u9762\u8A66\u4E2D\u8A0E\u8AD6\u67B6\u69CB\u8207\u5DE5\u7A0B\u6C7A\u7B56\u3002",
      toggle: "EN",
      all: "\u5168\u90E8"
    }
  };

  /* Default to English; remember the visitor's explicit choice. */
  var saved = localStorage.getItem("portfolioLang");
  var lang = (saved === "en" || saved === "zh") ? saved : "en";
  var activeCat = "all";

  function t(key) { return UI[lang][key]; }
  function L(obj) { return obj ? (obj[lang] || obj.en) : ""; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function buildCard(p) {
    var card = el("article", "card");

    var head = el("div", "card-head");
    head.appendChild(el("h4", null, L(p.title)));
    var isPublic = p.status === "public";
    head.appendChild(el("span", "status " + p.status, isPublic ? "Public" : t("lockedLabel")));
    card.appendChild(head);

    if (p.metrics && L(p.metrics)) {
      card.appendChild(el("p", "metrics", L(p.metrics)));
    }

    card.appendChild(el("p", "tagline", L(p.tagline)));

    var points = p.highlights ? L(p.highlights) : null;
    if (points && points.length) {
      var ul = el("ul");
      points.forEach(function (h) { ul.appendChild(el("li", null, h)); });
      card.appendChild(ul);
    }

    if (p.shots && p.shots.length) {
      var gal = el("div", "shots");
      p.shots.forEach(function (s, i) {
        var thumb = el("button", "shot");
        thumb.type = "button";
        var img = document.createElement("img");
        img.src = "assets/shots/" + s.src;
        img.alt = L(s.caption) || L(p.title);
        img.loading = "lazy";
        thumb.appendChild(img);
        thumb.addEventListener("click", function () { openLightbox(p, i); });
        gal.appendChild(thumb);
      });
      card.appendChild(gal);
    }

    if (p.stack && p.stack.length) {
      var stack = el("div", "stack");
      p.stack.forEach(function (s) { stack.appendChild(el("span", "tag", s)); });
      card.appendChild(stack);
    }

    var links = el("div", "card-links");
    if (p.repo) {
      var a = el("a", null, t("viewRepo"));
      a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    }
    if (p.demo) {
      var d = el("a", null, p.demoLabel ? L(p.demoLabel) : t("viewDemo"));
      d.href = p.demo; d.target = "_blank"; d.rel = "noopener";
      links.appendChild(d);
    }
    if (!isPublic) {
      links.appendChild(el("span", "locked", p.noteOverride ? L(p.noteOverride) : t("confidentialNote")));
    }
    card.appendChild(links);

    return card;
  }

  /* ---------- lightbox ---------- */

  function openLightbox(p, index) {
    var lb = document.getElementById("lightbox");
    var img = lb.querySelector("img");
    var cap = lb.querySelector(".lb-caption");
    var shot = p.shots[index];
    img.src = "assets/shots/" + shot.src;
    img.alt = L(shot.caption) || L(p.title);
    cap.textContent = L(shot.caption) || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    var lb = document.getElementById("lightbox");
    lb.hidden = true;
    lb.querySelector("img").src = "";
    document.body.style.overflow = "";
  }

  function renderCatalogue() {
    var host = document.getElementById("catalogue");
    host.innerHTML = "";

    CATEGORIES.forEach(function (c) {
      if (activeCat !== "all" && activeCat !== c.id) return;

      var items = PROJECTS.filter(function (p) { return p.cat === c.id; });
      if (!items.length) return;

      var h = el("h3", "cat-heading");
      h.appendChild(el("span", null, c.icon));
      h.appendChild(el("span", null, L(c)));
      h.appendChild(el("span", "count", items.length));
      host.appendChild(h);

      var grid = el("div", "grid");
      items.forEach(function (p) { grid.appendChild(buildCard(p)); });
      host.appendChild(grid);
    });
  }

  function renderFilters() {
    var host = document.getElementById("filters");
    host.innerHTML = "";

    var defs = [{ id: "all", en: UI.en.all, zh: UI.zh.all, icon: "\u2726" }].concat(CATEGORIES);

    defs.forEach(function (c) {
      var b = el("button", "filter", c.icon + "  " + L(c));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(activeCat === c.id));
      b.addEventListener("click", function () {
        activeCat = c.id;
        renderFilters();
        renderCatalogue();
      });
      host.appendChild(b);
    });
  }

  function renderStatic() {
    document.documentElement.lang = (lang === "zh") ? "zh-Hant" : "en";

    var map = {
      brandName: t("brandName"),
      name: L(SITE.name),
      role: L(SITE.role),
      intro: L(SITE.intro),
      downloadsLabel: t("downloadsLabel"),
      contactLabel: t("contactLabel"),
      privacyNote: t("privacyNote")
    };

    Object.keys(map).forEach(function (key) {
      document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function (n) {
        n.textContent = map[key];
      });
    });

    document.querySelectorAll(".lang-opt").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.getElementById("lbClose").setAttribute("aria-label", t("closeLabel"));
    document.getElementById("linkGithub").href = SITE.links.github;
    document.getElementById("linkProducts").href = SITE.links.products;
    document.getElementById("linkEmail").href = SITE.links.email;
    document.getElementById("year").textContent = new Date().getFullYear();
    document.title = L(SITE.name) + " \u2014 " + t("brandName");
  }

  function renderAll() {
    renderStatic();
    renderFilters();
    renderCatalogue();
  }

  document.querySelectorAll(".lang-opt").forEach(function (b) {
    b.addEventListener("click", function () {
      if (lang === b.dataset.lang) return;
      lang = b.dataset.lang;
      localStorage.setItem("portfolioLang", lang);
      renderAll();
    });
  });

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  renderAll();
})();
