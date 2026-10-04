/* Cursor dot: black on light backgrounds, lime on dark ones, orange ring over anything clickable. Shown everywhere. */
(function () {
  "use strict";
  var ball = document.getElementById("ball");
  var wrap = document.getElementById("magic-cursor");
  if (!ball || !wrap || !window.matchMedia("(pointer:fine)").matches) return;
  document.body.classList.add("ak-cursor-on");

  var HOT = 'a,button,[role="button"],input,textarea,select,summary,label,.ak-side.has-cert';
  var mx = -100, my = -100, x = -100, y = -100, started = false, pending = false;

  function lum(c) {
    var m = c.match(/[\d.]+/g);
    if (!m) return null;
    var a = m.length > 3 ? parseFloat(m[3]) : 1;
    if (a < 0.1) return null;
    return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
  }
  function isDark(el) {
    while (el && el.nodeType === 1) {
      var l = lum(getComputedStyle(el).backgroundColor);
      if (l !== null) return l < 0.45;
      el = el.parentElement;
    }
    return false;
  }
  function sample() {
    pending = false;
    var el = document.elementFromPoint(mx, my);
    if (!el) return;
    document.body.classList.toggle("ak-dark", isDark(el));
    document.body.classList.toggle("ak-hot", !!el.closest(HOT));
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(sample); }
  }

  document.addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    if (!started) { started = true; x = mx; y = my; wrap.style.opacity = "1"; wrap.style.visibility = "visible"; }
    schedule();
  }, { passive: true });
  document.addEventListener("mouseleave", function () { wrap.style.opacity = "0"; });
  document.addEventListener("mouseenter", function () { if (started) wrap.style.opacity = "1"; });
  window.addEventListener("scroll", function () { if (started) schedule(); }, { passive: true });
  setInterval(function () { if (started) schedule(); }, 250);

  (function loop() {
    x += (mx - x) * 0.25; y += (my - y) * 0.25;
    ball.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)";
    requestAnimationFrame(loop);
  })();
})();
