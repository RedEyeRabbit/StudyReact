/* Shared widget: top-right "study progress time / current time" clock.
   Accumulates elapsed time per study-day into localStorage so progress
   survives reloads and repeat visits. */
(function () {
  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatDuration(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = Math.floor(totalSeconds % 60);
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }

  function formatClock(date) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }

  window.initStudyWidget = function initStudyWidget(dayKey) {
    const mount = document.getElementById("study-widget");
    if (!mount) return;

    const storageKey = `studyreact:progress:${dayKey}`;
    let baseSeconds = parseInt(localStorage.getItem(storageKey) || "0", 10);
    const sessionStart = Date.now();

    mount.innerHTML =
      '<span title="오늘 학습 누적 시간 / Cumulative study time for this day">Study&nbsp;⏱ <b id="sw-elapsed">00:00:00</b></span>' +
      '<span class="sep">|</span>' +
      '<span title="현재 시각 / Current time">Now <span class="clock" id="sw-clock">--:--:--</span></span>';

    const elapsedEl = document.getElementById("sw-elapsed");
    const clockEl = document.getElementById("sw-clock");

    function tick() {
      const now = new Date();
      const sessionSeconds = Math.floor((Date.now() - sessionStart) / 1000);
      elapsedEl.textContent = formatDuration(baseSeconds + sessionSeconds);
      clockEl.textContent = formatClock(now);
    }

    function persist() {
      const sessionSeconds = Math.floor((Date.now() - sessionStart) / 1000);
      localStorage.setItem(storageKey, String(baseSeconds + sessionSeconds));
    }

    tick();
    setInterval(tick, 1000);
    setInterval(persist, 5000);
    window.addEventListener("beforeunload", persist);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) persist();
    });
  };
})();
