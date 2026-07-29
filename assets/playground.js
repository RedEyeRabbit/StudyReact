/* Minimal in-browser React playground.
   Requires React, ReactDOM (UMD) and Babel standalone to be loaded first.
   The user's code must define a component named App; it is auto-mounted. */
(function () {
  window.mountPlayground = function mountPlayground(containerId, starterCode) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML =
      '<div class="playground-toolbar">' +
      '<button type="button" data-action="run">▶ Run / 실행</button>' +
      '<button type="button" class="secondary" data-action="reset">↺ Reset / 초기화</button>' +
      "</div>" +
      '<div class="playground-body">' +
      '<textarea class="code-editor" spellcheck="false"></textarea>' +
      '<div class="preview"><div class="pg-root"></div></div>' +
      "</div>" +
      '<pre class="console-output"></pre>';

    const editor = container.querySelector(".code-editor");
    const rootNode = container.querySelector(".pg-root");
    const consoleOut = container.querySelector(".console-output");
    editor.value = starterCode;

    let reactRoot = null;

    function run() {
      consoleOut.textContent = "";
      try {
        const compiled = Babel.transform(editor.value, { presets: ["react"] }).code;
        const factory = new Function("React", "ReactDOM", `${compiled}\nreturn typeof App !== "undefined" ? App : null;`);
        const App = factory(React, ReactDOM);
        if (!App) {
          consoleOut.textContent = 'Error: define a component named "App".';
          return;
        }
        if (!reactRoot) {
          reactRoot = ReactDOM.createRoot(rootNode);
        }
        reactRoot.render(React.createElement(App));
      } catch (err) {
        consoleOut.textContent = err.message;
      }
    }

    container.addEventListener("click", (e) => {
      const action = e.target.getAttribute("data-action");
      if (action === "run") run();
      if (action === "reset") {
        editor.value = starterCode;
        run();
      }
    });

    run();
  };
})();
