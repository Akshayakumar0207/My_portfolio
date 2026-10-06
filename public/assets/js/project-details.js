(function () {
  "use strict";

  var overlay = document.getElementById("sb-project-details-overlay");
  if (!overlay) return;

  var closeButton = overlay.querySelector("[data-project-details-close]");
  var cards = document.querySelectorAll("[data-project-id]");
  var detailBlocks = overlay.querySelectorAll("[data-project-detail]");
  var projectStateKey = "sb-project-details";
  var shotObserver;

  function getProjectFromUrl() {
    var match = window.location.hash.match(/^#project=([a-z0-9-]+)$/i);
    return match ? match[1].toLowerCase() : null;
  }

  function showProject(id) {
    var hasProject = false;
    detailBlocks.forEach(function (block) {
      var isProject = block.getAttribute("data-project-detail") === id;
      block.hidden = !isProject;
      hasProject = hasProject || isProject;
    });

    if (!hasProject) return false;

    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.remove("is-closing");
    overlay.classList.add("is-open");
    document.documentElement.classList.add("sb-project-details-html");
    document.body.classList.add("sb-project-details-open");

    // Always start the case study at its top.
    requestAnimationFrame(function () {
      overlay.scrollTop = 0;
      var inner = overlay.querySelector(".sb-project-details-inner");
      if (inner) inner.scrollTop = 0;

      revealShots(overlay.querySelector('[data-project-detail="' + id + '"]'));
    });

    var title = overlay.querySelector('[data-project-detail="' + id + '"] h2');
    if (title) {
      window.setTimeout(function () {
        title.setAttribute("tabindex", "-1");
        title.focus({ preventScroll: true });
      }, 80);
    }

    return true;
  }

  function openProject(id, updateHistory) {
    if (!showProject(id)) return;

    if (updateHistory) {
      window.history.pushState(
        { project: id, source: projectStateKey },
        "",
        "#project=" + encodeURIComponent(id),
      );
    }
  }

  function revealShots(detail) {
    if (!detail) return;

    if (shotObserver) shotObserver.disconnect();

    var shots = detail.querySelectorAll(".sb-project-details-shot");
    if (!window.IntersectionObserver) {
      shots.forEach(function (shot) {
        shot.classList.add("is-visible");
      });
      return;
    }

    shotObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            shotObserver.unobserve(entry.target);
          }
        });
      },
      { root: overlay, rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    shots.forEach(function (shot) {
      shotObserver.observe(shot);
    });
  }

  function hideProject(animate) {
    if (shotObserver) shotObserver.disconnect();

    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("sb-project-details-html");
    document.body.classList.remove("sb-project-details-open");

    if (animate) {
      overlay.classList.add("is-closing");
      window.setTimeout(function () {
        overlay.classList.remove("is-closing");
      }, 460);
    }
  }

  function closeProject() {
    if (
      window.location.hash &&
      window.history.state &&
      window.history.state.source === projectStateKey
    ) {
      window.history.back();
    } else if (getProjectFromUrl()) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      hideProject(true);
    } else {
      hideProject(true);
    }
  }

  // One click/keyboard handler per project-card trigger.
  cards.forEach(function (card) {
    var id = card.getAttribute("data-project-id");

    var media = card.querySelector(".sb-project-card-media, .fl-media");
    if (media) {
      media.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;
        event.preventDefault();
        openProject(id, true);
      });
      media.setAttribute("role", "button");
      media.setAttribute("tabindex", "0");
      media.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject(id, true);
        }
      });
    }

    var detailsLink = card.querySelector(
      'a[data-project-details-trigger="' + id + '"]',
    );
    if (detailsLink) {
      detailsLink.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openProject(id, true);
      });
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeProject);
  }

  overlay.addEventListener("click", function (event) {
    if (
      event.target === overlay ||
      event.target.hasAttribute("data-project-details-backdrop")
    ) {
      closeProject();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeProject();
    }
  });

  window.addEventListener("popstate", function () {
    var projectId = getProjectFromUrl();
    if (projectId) {
      openProject(projectId, false);
    } else {
      hideProject(true);
    }
  });

  var initialProject = getProjectFromUrl();
  if (initialProject) openProject(initialProject, false);
})();
