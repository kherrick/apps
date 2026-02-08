import{a as z}from"./chunk-RBZVKYBS.js";import{a as H}from"./chunk-OOH4OGGG.js";import{g as C}from"./chunk-D2CAJ6FC.js";import{c as T,h as S}from"./chunk-FWDI2QBJ.js";import{k as j,m as _}from"./chunk-DCYIHBUG.js";import{Db as g,Eb as k,Jb as s,Kb as a,Lb as c,Nb as l,Sb as w,Ta as p,U as d,Ua as m,Xa as o,ba as i,fc as f,gc as b,ib as u,mc as y,rc as v,tc as x}from"./chunk-5BYLU2DL.js";import"./chunk-DAQOROHW.js";var I=[{id:6367,date:"2025-12-30T20:08:00",date_gmt:"2025-12-31T00:08:00",guid:{rendered:"https://content.karlherrick.com/?p=6367"},modified:"2025-12-31T03:31:06",modified_gmt:"2025-12-31T07:31:06",slug:"block-garden",status:"publish",type:"post",link:"https://content.karlherrick.com/2025/12/30/block-garden/",title:{rendered:"Block Garden"},content:{rendered:`
<p style="text-align:center;">
<a href="https://kherrick.github.io/block-garden/" onclick="document.location.href='https://kherrick.github.io/block-garden/'">
  <picture>
    <source srcset="https://content.karlherrick.com/wp-content/uploads/2025/12/block-garden-screenshot.webp" type="image/webp" />
    <img decoding="async" title="Block Garden" alt="Screenshot of Block Garden during game play." src="https://content.karlherrick.com/wp-content/uploads/2025/12/block-garden-screenshot.png" />
  </picture>
</a>
</p>



<p>After working on <a href="https://kherrick.github.io/sprite-garden/">Sprite Garden</a> for a bit, I was curious if experimentation with WebGL using the same overall setup would be possible, and it was surprisingly enough that I&#8217;ve forked it, and called it <a href="https://kherrick.github.io/block-garden/">Block Garden</a>.</p>



<p>The same overall &#8220;tiles&#8221; are available to place, only this time as &#8220;blocks&#8221; with the player starting in a small area that can be explored and built upon. Any seed block placed will mature into its voxel based counterpart. Additional areas can be navigated to and planted, in addition to the clouds as well!</p>



<p>Check out the <a href="https://github.com/kherrick/block-garden">project source</a> to learn more, modify, and contribute. </p>



<p></p>
`,protected:!1},excerpt:{rendered:`<p>After working on Sprite Garden for a bit, I was curious if experimentation with WebGL using the same overall setup would be possible, and it was surprisingly enough that I&#8217;ve forked it, and called it Block Garden. The same overall &#8220;tiles&#8221; are available to place, only this time as &#8220;blocks&#8221; with the player starting in &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2025/12/30/block-garden/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Block Garden&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[21,39],tags:[],class_list:["post-6367","post","type-post","status-publish","format-standard","hentry","category-javascript","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6367",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6367"}],"version-history":[{count:1,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6367/revisions"}],"predecessor-version":[{id:6369,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6367/revisions/6369"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6367"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6367"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6367"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6361,date:"2025-10-19T17:41:00",date_gmt:"2025-10-19T21:41:00",guid:{rendered:"https://content.karlherrick.com/?p=6361"},modified:"2025-10-24T14:16:57",modified_gmt:"2025-10-24T18:16:57",slug:"sprite-garden",status:"publish",type:"post",link:"https://content.karlherrick.com/2025/10/19/sprite-garden/",title:{rendered:"Sprite Garden"},content:{rendered:`
<p style="text-align:center;">
  <a href="https://kherrick.github.io/sprite-garden/" onclick="document.location.href='https://kherrick.github.io/sprite-garden/'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2025/10/sprite-garden-screenshot.webp" type="image/webp" />
      <img decoding="async" title="Sprite Garden" alt="Screenshot of Sprite Garden at the start of a game." src="https://content.karlherrick.com/wp-content/uploads/2025/10/sprite-garden-screenshot.png" />
    </picture>
  </a>
</p>



<p>I&#8217;ve wanted for some time to build a canvas based JavaScript game after checking out things like the <a href="https://developer.mozilla.org/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript" data-type="link" data-id="https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript">breakout game tutorial on MDN</a> or reading and working through early Raspberry Pi project books, but I never felt like I built something I enjoyed. Iterating through the basics and gradually improving on this piece by piece with generative AI however, has brought this from being barely usable to something I&#8217;m having fun with.</p>



<p>So what is <a href="https://kherrick.github.io/sprite-garden/" data-type="link" data-id="https://kherrick.github.io/sprite-garden/">Sprite Garden</a>? A 2D sandbox exploration and farming <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app">progressive web app</a> where players can explore generated worlds within different biomes, dig for resources, or plant a variety crops to grow.</p>



<ul class="wp-block-list">
<li>Procedural World Generation &#8211; Each world is unique, generated from a shareable seed</li>



<li>Multiple Biomes &#8211; Explore forests, deserts, tundras, and swamps, each with unique characteristics</li>



<li>Farming System &#8211; Plant and harvest different crop types with various growth cycles</li>



<li>Resource Mining &#8211; Dig for resources like coal, iron, and gold</li>



<li>Cave Systems &#8211; Discover underground caves filled with resources and challenges</li>



<li>Building &#8211; Use collected materials to place blocks and shape the world</li>



<li>Save &amp; Load &#8211; Your progress can be saved on device or as a file to share</li>
</ul>



<p>The <a href="https://github.com/kherrick/sprite-garden">project source</a> is open to reading or contribution and has a foundation on the web platform making it highly modifiable. Drawing with tiles is as easy as using the built in block placement system with collected resources, or by using tools directly with a Map Editor under Settings. This can be made available with the <a href="javascript:(async () =&gt; {const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];function createKeyEvent(type, keyCode) {const keyMap = {37: 'ArrowLeft',38: 'ArrowUp',39: 'ArrowRight',40: 'ArrowDown',65: 'a',66: 'b',};const codeMap = {...keyMap,65: 'KeyA',66: 'KeyB',};return new KeyboardEvent(type, {key: keyMap[keyCode] || ',code: codeMap[keyCode] || ',keyCode: keyCode,which: keyCode,bubbles: true,cancelable: true,composed: true,});}for (const keyCode of keys) {document.dispatchEvent(createKeyEvent('keydown', keyCode));await new Promise((r) =&gt; setTimeout(r, 150));document.dispatchEvent(createKeyEvent('keyup', keyCode));await new Promise((r) =&gt; setTimeout(r, 150));}})();">Konami Code bookmarklet</a> or by entering it manually: <code>\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192ba</code> (or swipe the directions and use <code>tap/tap</code> in place of <code>ba</code> on mobile).</p>



<p></p>
`,protected:!1},excerpt:{rendered:`<p>I&#8217;ve wanted for some time to build a canvas based JavaScript game after checking out things like the breakout game tutorial on MDN or reading and working through early Raspberry Pi project books, but I never felt like I built something I enjoyed. Iterating through the basics and gradually improving on this piece by piece &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2025/10/19/sprite-garden/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Sprite Garden&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[21,39],tags:[],class_list:["post-6361","post","type-post","status-publish","format-standard","hentry","category-javascript","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6361",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6361"}],"version-history":[{count:2,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6361/revisions"}],"predecessor-version":[{id:6364,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6361/revisions/6364"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6361"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6361"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6361"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6198,date:"2024-12-24T16:24:47",date_gmt:"2024-12-24T20:24:47",guid:{rendered:"https://content.karlherrick.com/?p=6198"},modified:"2024-12-25T23:51:56",modified_gmt:"2024-12-26T03:51:56",slug:"declarative-shadow-dom",status:"publish",type:"post",link:"https://content.karlherrick.com/2024/12/24/declarative-shadow-dom/",title:{rendered:"Declarative Shadow DOM"},content:{rendered:`
<p>The <a href="https://developer.mozilla.org/en-US/">web platform</a> continues to grow, and features continue to land as <a href="https://web.dev/baseline">baseline</a>. One that I have been anticipating being widely supported across the latest browsers has been <a href="https://caniuse.com/declarative-shadow-dom" data-type="link" data-id="https://caniuse.com/declarative-shadow-dom">declarative shadow DOM</a>. In essence, it enables Web Components to be server-side rendered and shown on the client without JavaScript. Check out the example below, where shadow DOM is used both <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html" data-type="link" data-id="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html">declaratively with HTML</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#imperatively_with_javascript">imperatively with JavaScript</a>.</p>



<x-postpress-code type="html"><pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Declarative Shadow DOM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;style&gt;
      p {
        color: blue;
        border: dashed 0.0625rem red;
        padding: 1rem;
      }
    &lt;/style&gt;
    &lt;x-element&gt;
      &lt;template shadowrootmode=&quot;open&quot;&gt;
        &lt;style&gt;
          h1 {
            color: red;
            border: dotted 0.0625rem blue;
            padding: 1rem;
          }
        &lt;/style&gt;
        &lt;h1&gt;Welcome to x-element!&lt;/h1&gt;
        &lt;slot&gt;&lt;/slot&gt;
      &lt;/template&gt;
      &lt;p&gt;Hello slot one!&lt;/p&gt;
    &lt;/x-element&gt;
    &lt;x-element&gt;&lt;p&gt;Hello slot two!&lt;/p&gt;&lt;/x-element&gt;
    &lt;script type=&quot;module&quot;&gt;
      const tagName = &quot;x-element&quot;;
      if (!customElements.get(tagName)) {
        customElements.define(
          tagName,
          class extends HTMLElement {
            constructor() {
              super();

              if (!this.shadowRoot) {
                const shadow = this.attachShadow({ mode: &quot;open&quot; });
                const previousShadowRoot =
                  document.querySelector(tagName)?.shadowRoot;

                if (previousShadowRoot) {
                  shadow.innerHTML = previousShadowRoot.innerHTML;
                }
              }
            }
          }
        );
      }

      const xApp = document.createElement(tagName);
      const paragraph = document.createElement(&quot;p&quot;);

      paragraph.append(&quot;Hello slot three!&quot;);
      xApp.append(paragraph);

      document.body.append(xApp);
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre></x-postpress-code>



<p style="text-align:center;">
  <a href="https://herrickdesign.com/declarative-shadow-dom.html" onclick="document.location.href='https://herrickdesign.com/declarative-shadow-dom.html'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2024/12/2024-12-24-declarative-shadow-dom.webp" type="image/webp">
      <img decoding="async" alt="Declarative Shadow DOM In Use." src="https://content.karlherrick.com/wp-content/uploads/2024/12/2024-12-24-declarative-shadow-dom.png">
    </picture>
  </a>
</p>



<script type="module">
if (
  location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
) {
  (async function addScripts() {
    var cdn = "https://unpkg.com/";
    var [{ html }, { component, useEffect, useState }, _] = await Promise.all(
      [
        import(\`\${cdn}lit-html@^1.0.0/lit-html.js\`),
        import(\`\${cdn}haunted@4.7.1/haunted.js\`),
        import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`),
      ]
    );

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

            return html\`
              <style>
                span {
                  margin: var(--x-hook-component-span-margin, inherit);
                }
              </style>
              <button
                type="button"
                @click=\${handleSetCount(Number(count) - 1)}
              >
                Decrement
              </button>
              <span id="count">\${count}</span>
              <button
                type="button"
                @click=\${handleSetCount(Number(count) + 1)}
              >
                Increment
              </button>
            \`;
          },
          { observedAttributes: ["value"] }
        )
      );
    }
  })();
}
<\/script>
`,protected:!1},excerpt:{rendered:`<p>The web platform continues to grow, and features continue to land as baseline. One that I have been anticipating being widely supported across the latest browsers has been declarative shadow DOM. In essence, it enables Web Components to be server-side rendered and shown on the client without JavaScript. Check out the example below, where shadow &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2024/12/24/declarative-shadow-dom/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Declarative Shadow DOM&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,19,21,24,25,39,45],tags:[],class_list:["post-6198","post","type-post","status-publish","format-standard","hentry","category-apple","category-hosting","category-javascript","category-microsoft","category-mozilla","category-web-development","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6198"}],"version-history":[{count:51,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198/revisions"}],"predecessor-version":[{id:6341,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198/revisions/6341"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6198"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6198"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6198"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6190,date:"2023-12-29T19:41:44",date_gmt:"2023-12-29T23:41:44",guid:{rendered:"https://content.karlherrick.com/?p=6190"},modified:"2024-12-25T00:15:49",modified_gmt:"2024-12-25T04:15:49",slug:"a-place-to-render-web-applications",status:"publish",type:"post",link:"https://content.karlherrick.com/2023/12/29/a-place-to-render-web-applications/",title:{rendered:"A place to render web applications"},content:{rendered:`
<p>I&#8217;ve added a hobby project to my GitHub profile that has been given the title &#8220;<a href="https://kherrick.github.io/apps/">Apps</a>&#8221; as it&nbsp;is a&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">progressive web app&nbsp;</a>that aims to adhere to the&nbsp;<a href="https://angular.io/guide/app-shell">App Shell model</a>. The primary routes are&nbsp;<a href="https://angular.io/guide/prerendering">prerendered</a>&nbsp;as static HTML during the build process and are&nbsp;<a href="https://angular.io/guide/lazy-loading-ngmodules">loaded lazily</a>&nbsp;at runtime to ensure a smaller client-side JavaScript bundle. The&nbsp;<a href="https://github.com/kherrick/apps">source code</a>&nbsp;is hosted on&nbsp;<a href="https://github.com/">GitHub</a>&nbsp;and comprises several components that operate within the&nbsp;<a href="https://angular.io/">Angular</a>&nbsp;framework. Check it out at: <a href="https://kherrick.github.io/apps/">https://kherrick.github.io/apps/</a></p>



<p style="text-align:center;">
  <a href="https://kherrick.github.io/apps/" onclick="document.location.href='https://kherrick.github.io/apps/'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2023/12/apps-desktop-screenshot-700x394.webp" type="image/webp">
      <img decoding="async" alt="A Progressive Web App that aims to adhere to the App Shell model." src="https://content.karlherrick.com/wp-content/uploads/2023/12/apps-desktop-screenshot-700x394-16-color.png">
    </picture>
  </a>
</p>
`,protected:!1},excerpt:{rendered:`<p>I&#8217;ve added a hobby project to my GitHub profile that has been given the title &#8220;Apps&#8221; as it&nbsp;is a&nbsp;progressive web app&nbsp;that aims to adhere to the&nbsp;App Shell model. The primary routes are&nbsp;prerendered&nbsp;as static HTML during the build process and are&nbsp;loaded lazily&nbsp;at runtime to ensure a smaller client-side JavaScript bundle. The&nbsp;source code&nbsp;is hosted on&nbsp;GitHub&nbsp;and comprises several &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2023/12/29/a-place-to-render-web-applications/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;A place to render web applications&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,96,19,21,24,25,95,39,45],tags:[],class_list:["post-6190","post","type-post","status-publish","format-standard","hentry","category-apple","category-c","category-hosting","category-javascript","category-microsoft","category-mozilla","category-wasm","category-web-development","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6190"}],"version-history":[{count:4,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190/revisions"}],"predecessor-version":[{id:6212,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190/revisions/6212"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6190"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6190"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6190"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6120,date:"2022-11-27T22:46:01",date_gmt:"2022-11-28T02:46:01",guid:{rendered:"https://content.karlherrick.com/?p=6120"},modified:"2024-12-25T23:31:22",modified_gmt:"2024-12-26T03:31:22",slug:"c-sharp-in-the-browser-without-blazor",status:"publish",type:"post",link:"https://content.karlherrick.com/2022/11/27/c-sharp-in-the-browser-without-blazor/",title:{rendered:"C# in the Browser Without Blazor"},content:{rendered:`
<p>I&#8217;ve <a href="https://karlherrick.com/2019/12/30/php-inside-a-web-component/">talked about an experiment with Blazor</a> in the past, but wanted to see how it would go building something small in C# for the browser without going through that process. With .NET 7 it doesn&#8217;t seem too hard, so I went ahead and created an <a href="https://github.com/kherrick/minimal-c-sharp-wasm">example repo</a> to  demonstrate. </p>



<p style="text-align:center;">
  <a href="https://kherrick.github.io/minimal-c-sharp-wasm/" onclick="document.location.href='https://kherrick.github.io/minimal-c-sharp-wasm/'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2022/12/minimal-c-sharp-wasm-in-the-browser-without-blazor-screenshot.webp" type="image/webp">
      <img decoding="async" alt="C# in the browser without Blazor" src="https://content.karlherrick.com/wp-content/uploads/2022/12/minimal-c-sharp-wasm-in-the-browser-without-blazor-screenshot.jpg">
    </picture>
  </a>
</p>



<p>I am relying on &#8220;<a href="https://learn.microsoft.com/en-us/aspnet/core/client-side/dotnet-interop?view=aspnetcore-7.0">JSExport</a>&#8221; to expose C# to the JavaScript application and have decided to make things simple by using strings for the arguments and return values as well as forgetting about how inefficient this is (for what this is actually doing). </p>



<x-postpress-code type="csharp"><pre>using System.Globalization;
using System.Runtime.InteropServices.JavaScript;

public partial class Calculator
{
  // ...
  [JSExport]
  internal static string add(string first, string second)
  {
    Decimal firstNumber = Decimal.Parse(first, NumberStyles.Float);
    Decimal secondNumber = Decimal.Parse(second, NumberStyles.Float);

    return (firstNumber + secondNumber).ToString();
  }
  // ...
}</pre></x-postpress-code>



<p>Using something like <a href="https://github.com/Elringus/DotNetJS">DotNetJS</a> seems more appropriate for use cases like this in the short-term, and I wonder where <a href="https://web.archive.org/web/20220827013451/https://dev.to/azure/exploring-net-webassembly-with-wasi-and-wasmtime-41l5">WASI and Wasmtime .NET</a> solutions will wind up going forward?</p>



<script type="module">
  if (
    location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
  ) {
    var cdn = "https://unpkg.com/";
    import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`);
  }
<\/script>
`,protected:!1},excerpt:{rendered:`<p>I&#8217;ve talked about an experiment with Blazor in the past, but wanted to see how it would go building something small in C# for the browser without going through that process. With .NET 7 it doesn&#8217;t seem too hard, so I went ahead and created an example repo to demonstrate. I am relying on &#8220;JSExport&#8221; &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2022/11/27/c-sharp-in-the-browser-without-blazor/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;C# in the Browser Without Blazor&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[96,21,24,95],tags:[],class_list:["post-6120","post","type-post","status-publish","format-standard","hentry","category-c","category-javascript","category-microsoft","category-wasm"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6120"}],"version-history":[{count:25,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120/revisions"}],"predecessor-version":[{id:6335,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120/revisions/6335"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6120"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6120"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6120"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5989,date:"2021-04-18T00:06:00",date_gmt:"2021-04-18T04:06:00",guid:{rendered:"https://content.karlherrick.com/?p=5989"},modified:"2021-05-26T12:41:10",modified_gmt:"2021-05-26T16:41:10",slug:"using-open",status:"publish",type:"post",link:"https://content.karlherrick.com/2021/04/18/using-open/",title:{rendered:"Using Open"},content:{rendered:`
<p>When using the terminal on my Mac, I often use the <code>open</code> command to get a view of the current directory in Finder and generally use it to\u2026 open up things. So, while using other operating systems, I have naturally wanted similar functionality. To my recent surprise, I found it within <a href="https://www.haiku-os.org/">Haiku</a>, and it turns out it&#8217;s <a href="http://charles.plessy.org/Debian/debi%C3%A2neries/open/">coming to Debian</a> as well!</p>



<p style="text-align:center;">
  <a href="https://content.karlherrick.com/wp-content/uploads/2021/04/haiku-r1-beta2-screenshot.png" onclick="document.location.href='https://content.karlherrick.com/wp-content/uploads/2021/04/haiku-r1-beta2-screenshot.png'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2021/04/haiku-r1-beta2-screenshot-700x560.webp" type="image/webp">
      <img decoding="async" alt="Haiku Screenshot" src="https://content.karlherrick.com/wp-content/uploads/2021/04/haiku-r1-beta2-screenshot-700x560.png">
    </picture>
  </a>
</p>
`,protected:!1},excerpt:{rendered:`<p>When using the terminal on my Mac, I often use the open command to get a view of the current directory in Finder and generally use it to\u2026 open up things. So, while using other operating systems, I have naturally wanted similar functionality. To my recent surprise, I found it within Haiku, and it turns &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2021/04/18/using-open/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Using Open&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,22],tags:[],class_list:["post-5989","post","type-post","status-publish","format-standard","hentry","category-apple","category-linux"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5989"}],"version-history":[{count:10,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989/revisions"}],"predecessor-version":[{id:6027,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989/revisions/6027"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5989"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5989"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5989"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5887,date:"2021-02-27T01:09:49",date_gmt:"2021-02-27T05:09:49",guid:{rendered:"https://content.karlherrick.com/?p=5887"},modified:"2024-12-26T00:58:27",modified_gmt:"2024-12-26T04:58:27",slug:"the-web-is-dynamic",status:"publish",type:"post",link:"https://content.karlherrick.com/2021/02/27/the-web-is-dynamic/",title:{rendered:"The Web Is Dynamic"},content:{rendered:`
<p>HTML, JavaScript, and CSS are key parts of the <a href="https://developer.mozilla.org/en-US/docs/Web">Open Web Platform</a> as they assist in creating customized, yet reusable solutions that anyone might need to build high quality, robust web applications\u2014without requiring unnecessary complexity.</p>



<p>In this small example, a few support libraries work together to provide <a href="https://lit-html.polymer-project.org/">efficient templating</a>, as well as <a href="https://github.com/matthewp/haunted">an implementation of React&#8217;s Hooks API</a>, allowing us to use state of the art features, while still preserving compatibility with the wider ecosystem on the Web.</p>



<p>With the addition of script:</p>



<x-postpress-code type="javascript"><pre>(async () =&gt; {
  const { html } = await import('https://unpkg.com/lit-html@^1.0.0/lit-html.js')
  const { component, useEffect, useState } = await import('https://unpkg.com/haunted@4.7.1/haunted.js')

  function counter({ value }) {
    const [count, setCount] = useState(value);
    const handleSetCount = (val) =&gt; () =&gt; {
      setCount(isNaN(val) ? 0 : val);
    };

    useEffect(() =&gt; {
      this.setAttribute("value", count);
    });

    return html\`
      &lt;style&gt;
        span {
          margin: var(--x-hook-component-span-margin, inherit);
        }
      &lt;/style&gt;
      &lt;button type="button" @click=\${handleSetCount(Number(count) - 1)}&gt;
        Decrement
      &lt;/button&gt;
      &lt;span id="count"&gt;\${count}&lt;/span&gt;
      &lt;button type="button" @click=\${handleSetCount(Number(count) + 1)}&gt;
        Increment
      &lt;/button&gt;
    \`;
  }

  if (!customElements.get("x-hook-component")) {
    customElements.define(
      "x-hook-component",
      component(counter, { observedAttributes: ["value"] })
    );
  }
})()</pre></x-postpress-code>



<p>Some basic styles included:</p>



<x-postpress-code type="css"><pre>x-hook-component {
  --x-hook-component-span-margin: 0 2rem;

  align-items: center;
  background: #2b2b2b;
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem;
}</pre></x-postpress-code>



<p>And the element rendered (with a default value included even), we can define new and interesting behavior without much trouble at all.</p>



<x-postpress-code type="html"><pre>&lt;x-hook-component value="5"&gt;&lt;/x-hook-component&gt;</pre></x-postpress-code>



<style>
x-hook-component {
  --x-hook-component-span-margin: 0 2rem;

  align-items: center;
  background: #2b2b2b;
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem;
}
</style>



<x-hook-component value="5"></x-hook-component>



<p>Being that <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements#browser_compatibility">custom elements</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility">dynamic import</a> are so widely supported now\u2014adding functionality and content in this way is starting to make a lot more sense for many use cases\u2014especially seeing how once loaded and cached, the cost to reload any support libraries seems barely noticeable. Try <a href="https://j.mp/3w4iaWb">this example on CodeSandbox</a>.</p>



<script type="module">
if (
  location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
) {
  (async function addScripts() {
    var cdn = "https://unpkg.com/";
    var [{ html }, { component, useEffect, useState }, _] = await Promise.all(
      [
        import(\`\${cdn}lit-html@^1.0.0/lit-html.js\`),
        import(\`\${cdn}haunted@4.7.1/haunted.js\`),
        import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`),
      ]
    );

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

            return html\`
              <style>
                span {
                  margin: var(--x-hook-component-span-margin, inherit);
                }
              </style>
              <button
                type="button"
                @click=\${handleSetCount(Number(count) - 1)}
              >
                Decrement
              </button>
              <span id="count">\${count}</span>
              <button
                type="button"
                @click=\${handleSetCount(Number(count) + 1)}
              >
                Increment
              </button>
            \`;
          },
          { observedAttributes: ["value"] }
        )
      );
    }
  })();
}
<\/script>
`,protected:!1},excerpt:{rendered:`<p>HTML, JavaScript, and CSS are key parts of the Open Web Platform as they assist in creating customized, yet reusable solutions that anyone might need to build high quality, robust web applications\u2014without requiring unnecessary complexity. In this small example, a few support libraries work together to provide efficient templating, as well as an implementation of &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2021/02/27/the-web-is-dynamic/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;The Web Is Dynamic&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[21,39],tags:[],class_list:["post-5887","post","type-post","status-publish","format-standard","hentry","category-javascript","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5887"}],"version-history":[{count:56,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887/revisions"}],"predecessor-version":[{id:6344,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887/revisions/6344"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5887"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5887"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5887"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5858,date:"2020-12-12T21:19:45",date_gmt:"2020-12-13T01:19:45",guid:{rendered:"https://content.karlherrick.com/?p=5858"},modified:"2024-12-25T23:31:32",modified_gmt:"2024-12-26T03:31:32",slug:"code-highlighting",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/12/12/code-highlighting/",title:{rendered:"Code Highlighting"},content:{rendered:`
<p>It seemed like a neat idea to encapsulate syntax highlighting responsibilities for the various code snippets that I share at times, so I went ahead and wrote a custom element to help me take care of the job. To try it out, install <a href="https://www.npmjs.com/package/x-postpress-code">x-postpress-code</a> with your favorite package manager and import into your project. If you like going buildless [<a href="https://open-wc.org/guides/developing-components/going-buildless/">1</a>, <a href="https://modern-web.dev/guides/going-buildless/getting-started/">2</a>], load it from a CDN like <a href="https://unpkg.com/">unpkg</a> or <a href="https://www.skypack.dev/">skypack</a>:</p>



<x-postpress-code type="html"><pre>&lt;script
  src="https://unpkg.com/x-postpress-code@1.0.3"
  type="module"
&gt;&lt;/script&gt;</pre></x-postpress-code>



<p>Once registered, the web component requires a <code>type</code> attribute to identify which <a href="https://github.com/kherrick/x-postpress-code#uses-the-following-highlightjs-languages">supported language</a> should be highlighted. The content of the code itself can either be lazy loaded using the <code>src</code> attribute, or by including the source in the default slot surrounded by&nbsp;<code>pre</code>&nbsp;tags:</p>



<x-postpress-code type="html"><pre>&lt;x-postpress-code type="bash"&gt;&lt;pre&gt;
#/usr/bin/env bash
for file in *; do
  echo $file
done
&lt;/pre&gt;&lt;/x-postpress-code&gt;</pre></x-postpress-code>



<p>One nice side effect of defining the code this way, is that if JavaScript is disabled for whatever reason, the original is still rendered (although unhighlighted). <a href="https://j.mp/2JZUTAP">Try it out at JS Bin</a>, or checkout the <a href="https://github.com/kherrick/x-postpress-code/">project page</a> for more information.</p>



<script type="module">
  if (
    location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
  ) {
    var cdn = "https://unpkg.com/";
    import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`);
  }
<\/script>
`,protected:!1},excerpt:{rendered:`<p>It seemed like a neat idea to encapsulate syntax highlighting responsibilities for the various code snippets that I share at times, so I went ahead and wrote a custom element to help me take care of the job. To try it out, install x-postpress-code with your favorite package manager and import into your project. If &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2020/12/12/code-highlighting/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Code Highlighting&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[6,21,31,32,45],tags:[],class_list:["post-5858","post","type-post","status-publish","format-standard","hentry","category-bash","category-javascript","category-php","category-python","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5858"}],"version-history":[{count:32,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858/revisions"}],"predecessor-version":[{id:6337,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858/revisions/6337"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5858"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5858"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5858"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5658,date:"2020-05-30T16:51:03",date_gmt:"2020-05-30T20:51:03",guid:{rendered:"https://content.karlherrick.com/?p=5658"},modified:"2020-12-10T00:02:07",modified_gmt:"2020-12-10T04:02:07",slug:"fast-traxx-pi",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/05/30/fast-traxx-pi/",title:{rendered:"Fast Traxx Pi"},content:{rendered:`
<div class="gallery gallery-columns-2 gallery-size-thumbnail" style="text-align: center;">
  <figure class="gallery-item" style="width: 45%;">
    <div class="gallery-icon landscape">
      <a href="https://content.karlherrick.com/wp-content/uploads/2020/05/fast-traxx-pi-controller-wiring.jpg" onclick="document.location.href='https://content.karlherrick.com/wp-content/uploads/2020/05/fast-traxx-pi-controller-wiring.jpg'">
        <img loading="lazy" decoding="async" alt="Fast Traxx remote control wired up to the Raspberry Pi" src="https://content.karlherrick.com/wp-content/uploads/2020/05/fast-traxx-pi-controller-wiring-300x225.jpg" aria-describedby="gallery-fast-traxx-wiring-001" width="300" height="225">
      </a>
    </div>
    <figcaption class="wp-caption-text gallery-caption" id="gallery-fast-traxx-wiring-001">
      Fast Traxx remote control wired up to the Raspberry Pi
    </figcaption>
  </figure>
  <figure class="gallery-item" style="width: 45%;">
    <div class="gallery-icon landscape">
      <a href="https://www.youtube.com/watch?v=tDzMHCWF2u0" onclick="document.location.href='https://www.youtube.com/watch?v=tDzMHCWF2u0'">
        <img loading="lazy" decoding="async" alt="Connecting to the Raspberry Pi over SSH to drive the Fast Traxx" src="https://content.karlherrick.com/wp-content/uploads/2020/05/fast-traxx-pi-over-ssh-300x225.jpg" aria-describedby="gallery-fast-traxx-wiring-002" width="300" height="225">
      </a>
    </div>
    <figcaption class="wp-caption-text gallery-caption" id="gallery-fast-traxx-wiring-002">
      Connecting to the Raspberry Pi over SSH to drive the Fast Traxx
    </figcaption>
  </figure>
</div>



<p>I thought it was a good time to revisit trying to <a href="https://www.raspberrypi.org/forums/viewtopic.php?t=16832">control an RC car&#8217;s handheld remote</a>, so I returned to the <a href="https://www.element14.com/community/message/59903/l/how-to-control-an-rc-cars-remote-with-raspberry-pi#59903">community assistance</a> I first started at and gave it a try. In the end, I just had to wire up some transistors to the remote control as well as a few resistors leading back to the GPIO pins on the Pi.</p>



<p>The software side is fairly straightforward as it implements basic driving functionality and requires only a few Node.js dependencies (the <a href="https://www.npmjs.com/package/rpio">rpio library</a> and <a href="https://github.com/terrierscript/node-keyupdown">an experimental one</a> to handle keyup and keydown events). Running <a href="https://github.com/kherrick/fast-traxx-pi/blob/master/index.js">the main script</a> from the <a href="https://github.com/kherrick/fast-traxx-pi">github repo</a> sets up four pins as outputs, and are triggered when the arrow keys are pressed. Ctrl+C can be used to exit.</p>



<p>Controlling the car directly would be more efficient, but as far as a proof of concept, doing it indirectly through the remote control works really well. Adding the <a href="https://www.raspberrypi.org/documentation/hardware/camera/">Camera Module</a> would be a good next step, but even at this point the process has got me thinking that a Pi Zero would be a nice addition to a platform like RC car that you can buy at the store &#8212; especially something like this Fast Traxx. Driving it with a keyboard over SSH is such a cool experience.</p>
`,protected:!1},excerpt:{rendered:`<p>Fast Traxx remote control wired up to the Raspberry Pi Connecting to the Raspberry Pi over SSH to drive the Fast Traxx I thought it was a good time to revisit trying to control an RC car&#8217;s handheld remote, so I returned to the community assistance I first started at and gave it a try. &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2020/05/30/fast-traxx-pi/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Fast Traxx Pi&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[6,18,21,22,33,41],tags:[],class_list:["post-5658","post","type-post","status-publish","format-standard","hentry","category-bash","category-hardware","category-javascript","category-linux","category-raspberry-pi","category-wireless"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5658"}],"version-history":[{count:6,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658/revisions"}],"predecessor-version":[{id:5803,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658/revisions/5803"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5658"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5658"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5658"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5583,date:"2020-03-08T14:24:05",date_gmt:"2020-03-08T18:24:05",guid:{rendered:"https://content.karlherrick.com/?p=5583"},modified:"2022-12-09T22:41:26",modified_gmt:"2022-12-10T02:41:26",slug:"tensorflow-js-component-playground",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/03/08/tensorflow-js-component-playground/",title:{rendered:"TensorFlow.js Component Playground"},content:{rendered:`
<p style="text-align:center;">
  <a href="http://j.mp/blazefacecam" onclick="document.location.href='http://j.mp/blazefacecam'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2020/03/tfjs-component-playground.webp" type="image/webp">
      <img decoding="async" alt="A progressive web app with pwgen." src="https://content.karlherrick.com/wp-content/uploads/2020/03/tfjs-component-playground.png">
    </picture>
  </a>
</p>



<p>After experimenting with the <a href="https://aiyprojects.withgoogle.com/vision">AIY Vision kit</a> and the <a href="https://coral.ai/products/accelerator/">Coral USB Accelerator</a> I decided to try &#8220;edge computing&#8221; from another angle by wrapping up <a href="https://github.com/kherrick/tfjs-component-playground">TensorFlow.js with LitElement</a> to make a few Web Components for testing. The <a href="https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-wasm">tfjs-backend-wasm</a> package is loaded to use WebAssembly for the backend and while it seems similar to WebGL for lite models, it performs worse when using medium-sized ones. Fortunately, they&#8217;re commited to supporting the platform and will continue to improve it.</p>



<p>The models are setup with little modification to the configuration, so watching what&#8217;s detected and how things are classified before diving into the actual building and changing of them is interesting. Google&#8217;s AutoML project might be something to check out next. Each component has methods exposed so the user can provide images or video to inference\u2014for example:</p>



<style>
  .wp-block-columns {
    display: flex;
  }

  .wp-block-column {
    flex: 1;
  }

  .wp-block-column ul {
    padding: 0;
  }

  .wp-block-paragraph {
    font-size: small;
  }

  @media (min-width: 545px) {
    .wp-block-paragraph {
      font-size: unset;
    }
  }
</style>
<div class="wp-block-columns">
  <div class="wp-block-column">
    <ul>
      <p class="wp-block-paragraph"><a href="https://github.com/kherrick/x-face-detector">x-face-detector</a></p>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/blazeface/userMediaVideo'" href="https://kherrick.github.io/tfjs-component-playground/blazeface/userMediaVideo">camera</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/blazeface/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzE='" href="https://kherrick.github.io/tfjs-component-playground/blazeface/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzE=">image urls</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/blazeface/range/0x9999999/domain/github-avatars/3065761'" href="https://kherrick.github.io/tfjs-component-playground/blazeface/range/0x9999999/domain/github-avatars/3065761">drag and drop</a></li>
    </ul>
  </div>
  <div class="wp-block-column">
    <ul>
      <p class="wp-block-paragraph"><a href="https://github.com/kherrick/x-image-classifier">x-image-classifier</a></p>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/mobilenet/userMediaVideo'" href="https://kherrick.github.io/tfjs-component-playground/mobilenet/userMediaVideo">camera</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/mobilenet/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzc='" href="https://kherrick.github.io/tfjs-component-playground/mobilenet/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzc=">image urls</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/mobilenet/range/0x9999999/domain/github-avatars/3065761'" href="https://kherrick.github.io/tfjs-component-playground/mobilenet/range/0x9999999/domain/github-avatars/3065761">drag and drop</a></li>
    </ul>
  </div>
  <div class="wp-block-column">
    <ul>
      <p class="wp-block-paragraph"><a href="https://github.com/kherrick/x-object-detector">x-object-detector</a></p>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/cocossd/userMediaVideo'" href="https://kherrick.github.io/tfjs-component-playground/cocossd/userMediaVideo">camera</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/cocossd/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzEw'" href="https://kherrick.github.io/tfjs-component-playground/cocossd/single/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2toZXJyaWNrL3RmanMtY29tcG9uZW50LXBsYXlncm91bmQvbWFzdGVyL2Fzc2V0cy9kZW1vLzEw">image urls</a></li>
      <li><a onclick="event.preventDefault(); document.location.href='https://kherrick.github.io/tfjs-component-playground/cocossd/range/0x9999999/domain/github-avatars/3065761'" href="https://kherrick.github.io/tfjs-component-playground/cocossd/range/0x9999999/domain/github-avatars/3065761">drag and drop</a></li>
    </ul>
  </div>
</div>



<p>The last thing of note is that all image classification, object, and facial detection is completed client-side. It&#8217;s by design, more private by not sending the data to the server\u2014kind of neat.</p>
`,protected:!1},excerpt:{rendered:`<p>After experimenting with the AIY Vision kit and the Coral USB Accelerator I decided to try &#8220;edge computing&#8221; from another angle by wrapping up TensorFlow.js with LitElement to make a few Web Components for testing. The tfjs-backend-wasm package is loaded to use WebAssembly for the backend and while it seems similar to WebGL for lite &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2020/03/08/tensorflow-js-component-playground/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;TensorFlow.js Component Playground&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"closed",ping_status:"closed",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[17,21,95,39],tags:[],class_list:["post-5583","post","type-post","status-publish","format-standard","hentry","category-google","category-javascript","category-wasm","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583",targetHints:{allow:["GET"]}}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5583"}],"version-history":[{count:43,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583/revisions"}],"predecessor-version":[{id:6028,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583/revisions/6028"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5583"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5583"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5583"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}}];var M=(r,t)=>t.id;function A(r,t){if(r&1&&(s(0,"article")(1,"h1"),c(2,"a",1),a(),s(3,"h2"),f(4),v(5,"date"),a(),c(6,"p")(7,"div",2)(8,"hr"),a()),r&2){let e=t.$implicit,n=w();o(2),l("href",y(n.buildArticleLink(e.link,"content.karlherrick.com","karlherrick.com")),m)("innerHTML",n.trustHtml(e.title.rendered),p),o(2),b(x(5,5,e.date_gmt,"medium")),o(3),l("innerHTML",n.trustHtml(e.content.rendered),p)}}var E=class r{httpClient=i(T);sanitizer=i(S);posts=I;buildArticleLink(t,e,n){return t.replace(e,n)}trustHtml(t){return this.sanitizer.bypassSecurityTrustHtml(t)}constructor(){this.httpClient.get(`${z.API_URL_KARLHERRICK}?per_page=10`).pipe(H(),d(n=>{this.posts=n.map(h=>this.posts.find(W=>W.id===h.id)??h)})).subscribe();let t="feedKarlHerrickAdditions",e=globalThis?.document?.getElementById(t);e||(e=globalThis?.document?.createElement("script"),e?.setAttribute("id",t),e?.setAttribute("src",`${globalThis?.document?.querySelector("base")?.href??"/"}assets/scripts/feed-karl-herrick-additions.js`),globalThis?.document?.body.appendChild(e))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["x-karl-herrick"]],decls:3,vars:0,consts:[["article-container",""],[3,"href","innerHTML"],[3,"innerHTML"]],template:function(e,n){e&1&&(s(0,"div",0),g(1,A,9,8,"article",null,M),a()),e&2&&(o(),k(n.posts))},dependencies:[_,C,j],styles:[`[article-container]{--x-postpress-article-width: 100%;--x-postpress-img-max-width: 100%;--x-postpress-img-display: flex;--x-postpress-img-margin: auto;display:flex;flex-direction:column;align-items:center;padding:0 1rem}[article-container] article{font-size:larger;max-width:85vw}[article-container] hr{margin:2rem}[article-container] h1{font-size:larger;font-weight:700}[article-container] .wp-block-columns{display:flex;justify-content:space-around}[article-container] a,[article-container] a:link,[article-container] a:visited{color:var(--x-postpress-a-color);text-decoration:var(--x-postpress-a-text-decoration)}[article-container] a:hover{text-decoration:var(--x-postpress-a-hover-text-decoration)}[article-container] article,[article-container] ::slotted(article){clear:var(--x-postpress-article-clear, inherit);margin:var(--x-postpress-article-margin, inherit);width:var(--x-postpress-article-width, inherit)}[article-container] article .gallery{display:var(--x-postpress-article-gallery-display, inherit);flex-wrap:wrap}[article-container] article .gallery-item{align-items:center;display:flex;flex-direction:column;flex:var(--x-postpress-article-gallery-item-flex, inherit);justify-content:flex-start;line-height:1;margin:var(--x-postpress-article-gallery-item-margin, inherit);padding:var(--x-postpress-article-gallery-item-padding, inherit)}[article-container] article .gallery-columns-2 .gallery-item{flex-basis:43.3%;padding:3%}[article-container] article .gallery-columns-3 .gallery-item{flex-basis:23.3%;padding:3%}[article-container] article .gallery-icon{padding:0 .25rem}[article-container] .alignleft{float:left;margin:0}[article-container] .alignright{float:right;margin:0}[article-container] figure{margin:auto;padding:0 .25rem 1rem;text-align:center}[article-container] figure.alignleft{padding:0 1rem 0 0}[article-container] figure>figcaption{font-size:smaller;margin-top:1rem;min-height:2rem;text-align:center}[article-container] h1{color:var(--x-postpress-h1-color, inherit);font-size:var(--x-postpress-h1-font-size, inherit);font-weight:var(--x-postpress-h1-font-weight, inherit);margin:var(--x-postpress-h1-margin, inherit);text-align:var(--x-postpress-h1-text-align, initial)}[article-container] h1 a,[article-container] h1 a:visited,[article-container] h1 a:link,[article-container] h1 a:hover{text-decoration:none}[article-container] h2{color:var(--x-postpress-h2-color, #777);display:var(--x-postpress-h2-display, initial);font-size:var(--x-postpress-h2-font-size, smaller);text-align:var(--x-postpress-h2-text-align, initial)}[article-container] hr{clear:var(--x-postpress-hr-clear, both);display:var(--x-postpress-hr-display, block);margin:var(--x-postpress-hr-margin, initial);padding:var(--x-postpress-hr-padding, initial)}[article-container] .wp-block-gallery img{display:var(--x-postpress-wp-block-gallery-img-display, inherit);float:var(--x-postpress-wp-block-gallery-img-float, inherit);height:var(--x-postpress-wp-block-gallery-img-height, auto);margin:var(--x-postpress-wp-block-gallery-img-margin, inherit);max-height:var(--x-postpress-wp-block-gallery-img-max-height, inherit);max-width:var(--x-postpress-wp-block-gallery-img-max-width, inherit);min-height:var(--x-postpress-wp-block-gallery-img-min-height, inherit);min-width:var(--x-postpress-wp-block-gallery-img-min-width, inherit);padding:var(--x-postpress-wp-block-gallery-img-padding, inherit);width:var(--x-postpress-wp-block-gallery-img-width, auto)}[article-container] img{display:var(--x-postpress-img-display, inherit);float:var(--x-postpress-img-float, inherit);height:var(--x-postpress-img-height, auto);margin:var(--x-postpress-img-margin, inherit);max-height:var(--x-postpress-img-max-height, inherit);max-width:var(--x-postpress-img-max-width, inherit);min-height:var(--x-postpress-img-min-height, inherit);min-width:var(--x-postpress-img-min-width, inherit);padding:var(--x-postpress-img-padding, inherit);width:var(--x-postpress-img-width, auto)}[article-container] ul{display:var(--x-postpress-ul-display, inherit);list-style-type:var(--x-postpress-ul-list-style-type, inherit);margin:var(--x-postpress-ul-margin, inherit);padding:var(--x-postpress-ul-padding, inherit)}[article-container] li{display:var(--x-postpress-li-display, inherit);margin:var(--x-postpress-li-margin, inherit);padding:var(--x-postpress-li-padding, inherit)}[article-container] p{clear:var(--x-postpress-p-clear, inherit);text-align:var(--x-postpress-p-text-align, inherit)}[article-container] pre{overflow:auto}[article-container] x-postpress-code{margin:1rem 0}[article-container] #singlePostNavigation,[article-container] #previousPost,[article-container] #nextPost{display:flex;flex:1;justify-content:space-evenly;margin:0 1.5rem;text-align:center}[article-container] #previousPost,[article-container] #nextPost{max-width:33vw}[article-container] #previousPost span,[article-container] #nextPost span{display:inline-flex}
`],encapsulation:3})};export{E as KarlHerrickComponent};
