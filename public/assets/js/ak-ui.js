/* Menu / anchor navigation with ScrollSmoother, CV chooser dialog, internship certificate slide on touch */
(function ($) {
  "use strict";
  function smoother() { try { return window.ScrollSmoother && ScrollSmoother.get(); } catch (e) { return null; } }

  /* ---- anchor navigation (menu, quick links, buttons) ---- */
  function goTo(hash) {
    var sm = smoother();
    if (hash === "#home") {
      if (sm) sm.scrollTo(0, true); else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    var el = document.querySelector(hash);
    if (!el) return;
    if (sm) sm.scrollTo(el, true, "top 90px"); else el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  $(document).on("click", 'a[href^="#"]', function (e) {
    var h = this.getAttribute("href");
    if (!h || h === "#" || h.indexOf("#project=") === 0) return;
    var el; try { el = document.querySelector(h); } catch (err) { return; }
    if (!el) return;
    e.preventDefault();
    var menu = $(".tw-offcanvas-2-area");
    var wasOpen = menu.hasClass("opened");
    menu.removeClass("opened");
    setTimeout(function () {
      goTo(h);
      try { history.replaceState(null, "", h); } catch (err) {}
    }, wasOpen ? 500 : 0);
  });

  /* ---- CV chooser ---- */
  var modal = document.getElementById("cv-modal"), lastFocus = null;
  function focusables() { return modal.querySelectorAll("a[href],button"); }
  function openCv() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    setTimeout(function () { var f = modal.querySelector(".cv-opt"); if (f) f.focus(); }, 60);
  }
  function closeCv() {
    modal.classList.remove("is-open");
    setTimeout(function () { modal.hidden = true; }, 260);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (modal) {
    /* keep the page still behind the dialog without pausing ScrollSmoother */
    var stop = function (e) { e.preventDefault(); };
    modal.addEventListener("wheel", stop, { passive: false });
    modal.addEventListener("touchmove", stop, { passive: false });
    $(document).on("click", "[data-cv-open]", function (e) { e.preventDefault(); openCv(); });
    $(document).on("click", "[data-cv-close]", closeCv);
    $(document).on("click", ".cv-opt", function () { setTimeout(closeCv, 600); });
    $(document).on("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") { closeCv(); return; }
      if ([" ", "PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp"].indexOf(e.key) > -1) { e.preventDefault(); return; }
      if (e.key === "Tab") {
        var f = focusables(); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---- internship certificate: tap to slide on touch screens ---- */
  var touchOnly = window.matchMedia("(hover:none)").matches;
  if (touchOnly) {
    $(document).on("click", ".ak-side.has-cert", function (e) {
      if ($(e.target).closest("a").length) return;
      $(this).toggleClass("is-open");
    });
  }

  /* ---- 3D tilt + moving glare on the glass cards (mouse only) ---- */
  if (window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
    $(".fl-card").each(function () {
      var el = this, raf = null;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          el.style.setProperty("--ry", ((px - 0.5) * 10).toFixed(2) + "deg");
          el.style.setProperty("--rx", ((0.5 - py) * 8).toFixed(2) + "deg");
          el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
          el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        });
      });
      el.addEventListener("mouseleave", function () {
        el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg");
      });
    });
  }
})(jQuery);
