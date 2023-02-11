(async function () {
  var cdn = "https://unpkg.com/";
  var [{ html }, { component, useEffect, useState }, _] =
    await Promise.all([
      import(`${cdn}lit-html@^1.0.0/lit-html.js`),
      import(`${cdn}haunted@4.7.1/haunted.js`),
      import(`${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js`),
    ]);

  var xHookComponent = "x-hook-component";

  if (!customElements.get(xHookComponent)) {
    customElements.define(
      xHookComponent,
      component(
        function counter({ value }) {
          const [count, setCount] = useState(value);
          const handleSetCount = (val) => () => {
            setCount(isNaN(val) ? 0 : val);
          };

          useEffect(() => {
            this.setAttribute("value", count);
          });

          return html`
            <style>
              span {
                margin: var(--x-hook-component-span-margin, inherit);
              }
            </style>
            <button
              type="button"
              @click=${handleSetCount(Number(count) - 1)}
            >
              Decrement
            </button>
            <span id="count">${count}</span>
            <button
              type="button"
              @click=${handleSetCount(Number(count) + 1)}
            >
              Increment
            </button>
          `;
        },
        { observedAttributes: ["value"] },
      ),
    );
  }
})();
