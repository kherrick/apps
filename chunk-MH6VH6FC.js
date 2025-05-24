import{a as I}from"./chunk-46XN3E3W.js";import{g as C}from"./chunk-PM7I74PA.js";import{c as T,h as S}from"./chunk-BRAHNHQS.js";import{k as j,l as _}from"./chunk-ICATDXCC.js";import{Ab as u,Bb as g,Cb as w,Db as s,Eb as a,Fb as l,Lb as f,Ob as b,Wa as p,Xa as d,Yb as k,Za as o,Zb as y,ba as i,cc as v,ec as x,ib as m,ub as c}from"./chunk-SVI6S33S.js";import"./chunk-UN3ZRDCT.js";var W=[{id:6198,date:"2024-12-24T16:24:47",date_gmt:"2024-12-24T20:24:47",guid:{rendered:"https://content.karlherrick.com/?p=6198"},modified:"2024-12-25T23:51:56",modified_gmt:"2024-12-26T03:51:56",slug:"declarative-shadow-dom",status:"publish",type:"post",link:"https://content.karlherrick.com/2024/12/24/declarative-shadow-dom/",title:{rendered:"Declarative Shadow DOM"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,19,21,24,25,39,45],tags:[],class_list:["post-6198","post","type-post","status-publish","format-standard","hentry","category-apple","category-hosting","category-javascript","category-microsoft","category-mozilla","category-web-development","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6198"}],"version-history":[{count:52,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198/revisions"}],"predecessor-version":[{id:6341,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6198/revisions/6341"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6198"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6198"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6198"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6190,date:"2023-12-29T19:41:44",date_gmt:"2023-12-29T23:41:44",guid:{rendered:"https://content.karlherrick.com/?p=6190"},modified:"2024-12-25T00:15:49",modified_gmt:"2024-12-25T04:15:49",slug:"a-place-to-render-web-applications",status:"publish",type:"post",link:"https://content.karlherrick.com/2023/12/29/a-place-to-render-web-applications/",title:{rendered:"A place to render web applications"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,96,19,21,24,25,95,39,45],tags:[],class_list:["post-6190","post","type-post","status-publish","format-standard","hentry","category-apple","category-c","category-hosting","category-javascript","category-microsoft","category-mozilla","category-wasm","category-web-development","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6190"}],"version-history":[{count:4,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190/revisions"}],"predecessor-version":[{id:6212,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6190/revisions/6212"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6190"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6190"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6190"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:6120,date:"2022-11-27T22:46:01",date_gmt:"2022-11-28T02:46:01",guid:{rendered:"https://content.karlherrick.com/?p=6120"},modified:"2024-12-25T23:31:22",modified_gmt:"2024-12-26T03:31:22",slug:"c-sharp-in-the-browser-without-blazor",status:"publish",type:"post",link:"https://content.karlherrick.com/2022/11/27/c-sharp-in-the-browser-without-blazor/",title:{rendered:"C# in the Browser Without Blazor"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[96,21,24,95],tags:[],class_list:["post-6120","post","type-post","status-publish","format-standard","hentry","category-c","category-javascript","category-microsoft","category-wasm"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=6120"}],"version-history":[{count:25,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120/revisions"}],"predecessor-version":[{id:6335,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/6120/revisions/6335"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=6120"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=6120"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=6120"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5989,date:"2021-04-18T00:06:00",date_gmt:"2021-04-18T04:06:00",guid:{rendered:"https://content.karlherrick.com/?p=5989"},modified:"2021-05-26T12:41:10",modified_gmt:"2021-05-26T16:41:10",slug:"using-open",status:"publish",type:"post",link:"https://content.karlherrick.com/2021/04/18/using-open/",title:{rendered:"Using Open"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,22],tags:[],class_list:["post-5989","post","type-post","status-publish","format-standard","hentry","category-apple","category-linux"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5989"}],"version-history":[{count:10,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989/revisions"}],"predecessor-version":[{id:6027,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5989/revisions/6027"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5989"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5989"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5989"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5887,date:"2021-02-27T01:09:49",date_gmt:"2021-02-27T05:09:49",guid:{rendered:"https://content.karlherrick.com/?p=5887"},modified:"2024-12-26T00:58:27",modified_gmt:"2024-12-26T04:58:27",slug:"the-web-is-dynamic",status:"publish",type:"post",link:"https://content.karlherrick.com/2021/02/27/the-web-is-dynamic/",title:{rendered:"The Web Is Dynamic"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[21,39],tags:[],class_list:["post-5887","post","type-post","status-publish","format-standard","hentry","category-javascript","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5887"}],"version-history":[{count:56,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887/revisions"}],"predecessor-version":[{id:6344,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5887/revisions/6344"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5887"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5887"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5887"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5858,date:"2020-12-12T21:19:45",date_gmt:"2020-12-13T01:19:45",guid:{rendered:"https://content.karlherrick.com/?p=5858"},modified:"2024-12-25T23:31:32",modified_gmt:"2024-12-26T03:31:32",slug:"code-highlighting",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/12/12/code-highlighting/",title:{rendered:"Code Highlighting"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[6,21,31,32,45],tags:[],class_list:["post-5858","post","type-post","status-publish","format-standard","hentry","category-bash","category-javascript","category-php","category-python","category-xml"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5858"}],"version-history":[{count:32,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858/revisions"}],"predecessor-version":[{id:6337,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5858/revisions/6337"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5858"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5858"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5858"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5658,date:"2020-05-30T16:51:03",date_gmt:"2020-05-30T20:51:03",guid:{rendered:"https://content.karlherrick.com/?p=5658"},modified:"2020-12-10T00:02:07",modified_gmt:"2020-12-10T04:02:07",slug:"fast-traxx-pi",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/05/30/fast-traxx-pi/",title:{rendered:"Fast Traxx Pi"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[6,18,21,22,33,41],tags:[],class_list:["post-5658","post","type-post","status-publish","format-standard","hentry","category-bash","category-hardware","category-javascript","category-linux","category-raspberry-pi","category-wireless"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5658"}],"version-history":[{count:6,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658/revisions"}],"predecessor-version":[{id:5803,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5658/revisions/5803"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5658"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5658"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5658"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5583,date:"2020-03-08T14:24:05",date_gmt:"2020-03-08T18:24:05",guid:{rendered:"https://content.karlherrick.com/?p=5583"},modified:"2022-12-09T22:41:26",modified_gmt:"2022-12-10T02:41:26",slug:"tensorflow-js-component-playground",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/03/08/tensorflow-js-component-playground/",title:{rendered:"TensorFlow.js Component Playground"},content:{rendered:`
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
`,protected:!1},author:2,featured_media:0,comment_status:"closed",ping_status:"closed",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[17,21,95,39],tags:[],class_list:["post-5583","post","type-post","status-publish","format-standard","hentry","category-google","category-javascript","category-wasm","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5583"}],"version-history":[{count:43,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583/revisions"}],"predecessor-version":[{id:6028,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5583/revisions/6028"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5583"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5583"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5583"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5562,date:"2020-01-28T20:22:28",date_gmt:"2020-01-29T00:22:28",guid:{rendered:"https://content.karlherrick.com/?p=5562"},modified:"2024-12-25T23:31:35",modified_gmt:"2024-12-26T03:31:35",slug:"compiling-pwgen-to-webassembly",status:"publish",type:"post",link:"https://content.karlherrick.com/2020/01/28/compiling-pwgen-to-webassembly/",title:{rendered:"Compiling pwgen to WebAssembly"},content:{rendered:`
<p style="text-align:center;">
  <a href="https://kherrick.github.io/pwgen/" onclick="document.location.href='https://kherrick.github.io/pwgen/'">
    <picture>
      <source srcset="https://content.karlherrick.com/wp-content/uploads/2020/01/x-pwgen-screenshot-200.webp" type="image/webp">
      <img decoding="async" alt="A progressive web app with pwgen." src="https://content.karlherrick.com/wp-content/uploads/2020/01/x-pwgen-screenshot-200.png">
    </picture>
  </a>
</p>



<p>While there are many ways to generate strong passwords, I&#8217;ve been a fan of using pwgen for systems that I stand up. It&#8217;s usually been an &#8220;<em>apt-get install</em>&#8221; away, but there have been times while away from a Linux machine where I couldn&#8217;t access it like I normally would; right on the cli.</p>



<p>After coming across a Docker image that sets up most of the environment to <a href="https://github.com/trzecieu/emscripten-docker">compile a C/C++ project using Emscripten</a>, it got me thinking that it might be easier than I thought to build a Wasm version of the <a href="https://github.com/tytso/pwgen">original pwgen</a>. It progressed something like this, &#8220;I can currently use it on the Linux command lin<em>e\u2014</em>but with WebAssembly on Node.js and Wasmer, I <em>could</em> run it on Mac OS X, Windows, and really anywhere a runtime is<em>\u2014</em>I think I <em>can </em>wrap this in a custom element.&#8221;</p>



<p>So, I gave it a shot, and I couldn&#8217;t be more pleased with how easy the results are to use and in how many environments it runs on. Does the system already have a recent setup of npm/npx installed? Start generating passwords with the command below (<a href="https://wapm.io/package/kherrick/pwgen">wapm is similar</a>), or pass &#8220;<em>\u2010\u2010help</em>&#8221; for additional options to be printed.</p>



<x-postpress-code type="bash"><pre>npx pwgen</pre></x-postpress-code>



<p>What about from the browser?</p>



<p>The PWA works offline, includes a minimal view for displaying passwords, some sliders to adjust the settings, and the <a href="https://github.com/kherrick/pwgen/blob/a9191f2075b577cc982e1dbdebb7d6a8fd87aa62/lib/esm/component/Xpwgen.js">x-pwgen Web Component</a> that wraps up everything. At first I was a bit surprised that the JavaScript wrapper that Emscripten provides to load the module is larger than the Wasm itself, but <a href="https://webpagetest.org/result/210918_BiDc62_0ab13f74d02f715ee97b4e628c76c0f3/">it still loads fast</a>. To use it in React, Angular or anywhere else HTML likes to hide out, declare the following:</p>



<x-postpress-code type="html"><pre>&lt;x-pwgen&gt;&lt;/x-pwgen&gt;

&lt;script type="module"&gt;
  import 'https://unpkg.com/pwgen'
&lt;/script&gt;</pre></x-postpress-code>



<p>Finally, I felt like this was a good opportunity to investigate Web Bundles [<a href="https://github.com/WICG/webpackage#web-bundles">1</a> ,<a href="https://web.dev/web-bundles/">2</a>] seeing how <a href="https://kherrick.github.io/pwgen/">the hosted version</a> is a just a set of static files.  If you use Chrome 80 or higher and want to test it, set your browser&#8217;s <code>chrome://flags/#web-bundles</code> flag to <code>enabled</code>, <a href="https://raw.githubusercontent.com/kherrick/pwgen/master/lib/wbn/dist/pwgen.wbn">download the pwgen.wbn file</a>, and then drag and drop it onto a Chrome window.</p>



<p>Checkout <a href="https://github.com/kherrick/pwgen">the project at Github</a>, or browse some demos [<a href="https://jsbin.com/yikizelado/1/edit?html,output">1</a>, <a href="https://jsbin.com/jecoyiwuya/1/edit?html,console,output">2</a>] to find out more.</p>



<script type="module">
  if (
    location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
  ) {
    var cdn = "https://unpkg.com/";
    import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`);
  }
<\/script>
`,protected:!1},excerpt:{rendered:`<p>While there are many ways to generate strong passwords, I&#8217;ve been a fan of using pwgen for systems that I stand up. It&#8217;s usually been an &#8220;apt-get install&#8221; away, but there have been times while away from a Linux machine where I couldn&#8217;t access it like I normally would; right on the cli. After coming &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2020/01/28/compiling-pwgen-to-webassembly/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Compiling pwgen to WebAssembly&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[4,14,17,21,22,24,25,95,39,40],tags:[],class_list:["post-5562","post","type-post","status-publish","format-standard","hentry","category-apple","category-firefox","category-google","category-javascript","category-linux","category-microsoft","category-mozilla","category-wasm","category-web-development","category-windows"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5562"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5562"}],"version-history":[{count:36,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5562/revisions"}],"predecessor-version":[{id:6338,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5562/revisions/6338"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5562"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5562"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5562"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}},{id:5545,date:"2019-12-30T17:48:09",date_gmt:"2019-12-30T21:48:09",guid:{rendered:"https://content.karlherrick.com/?p=5545"},modified:"2024-12-25T23:31:41",modified_gmt:"2024-12-26T03:31:41",slug:"php-inside-a-web-component",status:"publish",type:"post",link:"https://content.karlherrick.com/2019/12/30/php-inside-a-web-component/",title:{rendered:"PHP Web Component"},content:{rendered:`
<p><em>&#8220;<a href="https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en">WebAssembly becomes the fourth language for the Web which allows code to run in the browser</a></em>&#8220;</p>



<p>I&#8217;ve been enjoying learning a little bit more about WebAssembly. The journey has been long and a bit sporadic as my first introduction to the concepts were with <a href="https://emscripten.org/">Emscripten</a> shortly after the release of <a href="http://asmjs.org/">asm.js</a>. Since then, the scope of the project seems to have widened and the landscape has grown \u2014 it&#8217;s more than the browser [<a href="https://webassembly.org/docs/non-web/">1</a>, <a href="https://wasmer.io/">2</a>, <a href="https://github.com/bytecodealliance/wasm-micro-runtime">3</a>, <a href="https://wasmtime.dev/">4</a>].</p>



<p>With that said, here are a few projects that have caught my attention for use in that environment:</p>



<ul class="wp-block-list">
<li><a href="https://github.com/AssemblyScript/assemblyscript">AssemblyScript</a> in <a href="https://webassembly.studio/">WebAssembly Studio</a></li>



<li><a href="https://yew.rs/docs/">Yew</a>, and isomorphic rendering with <a href="https://github.com/chinedufn/percy">Percy</a></li>



<li><a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor</a>. The default blazorwasm builds from .NET have been a quick way to get up and running for exploring this way of producing web applications from Microsoft. In my tests, I re-created the <a href="https://github.com/kherrick/postview/blob/master/Shared/SurveyPrompt.razor">SurveyPrompt Razor component</a> as <a href="https://github.com/kherrick/postview/blob/master/wwwroot/custom-elements/SurveyPrompt.js">a custom element</a> and then published the result on GitHub Pages: <a href="https://kherrick.github.io/postview/">https://kherrick.github.io/postview/</a></li>



<li><a href="https://www.youtube.com/watch?v=ipNW6lJHVEs&amp;t=11m52s">The codecs</a> in <a href="https://squoosh.app/">Squoosh</a></li>



<li>Python inside <a href="https://alpha.iodide.io/tryit/">Iodide</a></li>



<li>and PHP in the browser using <a href="https://github.com/oraoto/pib">PIB</a></li>
</ul>



<p>&#8230;wait, PHP in the browser. I&#8217;ve always wanted that.</p>



<p>So just for fun I decided to clone PIB, build with the latest versions, and wrap it up as Web Component called <a href="https://github.com/kherrick/x-php">&lt;x-php&gt;</a>. In my opinion, the most exciting part is defining the contents of the PHP script inside of an actual HTML script tag and passing it along inside of the <a href="https://github.com/kherrick/x-php/blob/092039ccbcd910767bbe7f4bb7753de9292bf9fc/src/x-php-app/src/components/XPHP/XPHP.js#L87">default slot</a>. The MIME type I chose for the type attribute <a href="https://cweiske.de/tagebuch/php-mimetype.htm">is debatable</a>, but it seems to work in the browsers I&#8217;ve tested it in.</p>



<p>Try it out <a href="https://jsbin.com/yugefiyubo/edit">live in the browser</a> or in an HTML document:</p>



<x-postpress-code type="html"><pre>&lt;x-php&gt;
  &lt;script type="text/php"&gt;
  &lt;?php
    $it = new RecursiveIteratorIterator(
      new RecursiveDirectoryIterator('.')
    );

    foreach ($it as $name =&gt; $entry) {
      echo "$name &lt;br/&gt;";
    }
  &lt;/script&gt;
&lt;/x-php&gt;
&lt;script&gt;
  window.__XPHP_REMOTE_PACKAGE_BASE =
  'https://kherrick.github.io/x-php/assets/'
&lt;/script&gt;
&lt;script
  src="https://kherrick.github.io/x-php/dist/esm/XPHP.js"
  type="module"
&gt;&lt;/script&gt;</pre></x-postpress-code>



<script type="module">
  if (
    location?.pathname?.toLowerCase()?.includes("feeds/karl-herrick") === false
  ) {
    var cdn = "https://unpkg.com/";
    import(\`\${cdn}x-postpress-code@1.0.7/dist/x-postpress-code.js\`);
  }
<\/script>
`,protected:!1},excerpt:{rendered:`<p>&#8220;WebAssembly becomes the fourth language for the Web which allows code to run in the browser&#8220; I&#8217;ve been enjoying learning a little bit more about WebAssembly. The journey has been long and a bit sporadic as my first introduction to the concepts were with Emscripten shortly after the release of asm.js. Since then, the scope &hellip; </p>
<p class="link-more"><a href="https://karlherrick.com/2019/12/30/php-inside-a-web-component/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;PHP Web Component&#8221;</span></a></p>
`,protected:!1},author:2,featured_media:0,comment_status:"open",ping_status:"open",sticky:!1,template:"",format:"standard",meta:{footnotes:""},categories:[96,17,21,24,25,31,95,39],tags:[],class_list:["post-5545","post","type-post","status-publish","format-standard","hentry","category-c","category-google","category-javascript","category-microsoft","category-mozilla","category-php","category-wasm","category-web-development"],_links:{self:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5545"}],collection:[{href:"https://content.karlherrick.com/wp-json/wp/v2/posts"}],about:[{href:"https://content.karlherrick.com/wp-json/wp/v2/types/post"}],author:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/users/2"}],replies:[{embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/comments?post=5545"}],"version-history":[{count:28,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5545/revisions"}],"predecessor-version":[{id:6339,href:"https://content.karlherrick.com/wp-json/wp/v2/posts/5545/revisions/6339"}],"wp:attachment":[{href:"https://content.karlherrick.com/wp-json/wp/v2/media?parent=5545"}],"wp:term":[{taxonomy:"category",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/categories?post=5545"},{taxonomy:"post_tag",embeddable:!0,href:"https://content.karlherrick.com/wp-json/wp/v2/tags?post=5545"}],curies:[{name:"wp",href:"https://api.w.org/{rel}",templated:!0}]}}];function P(r,t){if(r&1&&(s(0,"article")(1,"h1"),l(2,"a",1),a(),s(3,"h2"),k(4),v(5,"date"),a(),l(6,"p")(7,"div",2)(8,"hr"),a()),r&2){let e=t.$implicit,n=f();o(2),b("href",n.buildArticleLink(e.link,"content.karlherrick.com","karlherrick.com"),d),c("innerHTML",n.trustHtml(e.title.rendered),p),o(2),y(x(5,4,e.date_gmt,"medium")),o(3),c("innerHTML",n.trustHtml(e.content.rendered),p)}}var H=class r{httpClient=i(T);sanitizer=i(S);posts=W;buildArticleLink(t,e,n){return t.replace(e,n)}trustHtml(t){return this.sanitizer.bypassSecurityTrustHtml(t)}constructor(){this.httpClient.get(`${I.API_URL_KARLHERRICK}?per_page=10`).subscribe(n=>{this.posts=n.map(h=>this.posts.find(z=>z.id===h.id)??h)});let t="feedKarlHerrickAdditions",e=globalThis?.document?.getElementById(t);e||(e=globalThis?.document?.createElement("script"),e?.setAttribute("id",t),e?.setAttribute("src",`${globalThis?.document?.querySelector("base")?.href}assets/scripts/feed-karl-herrick-additions.js`),globalThis?.document?.body.appendChild(e))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=m({type:r,selectors:[["x-karl-herrick"]],decls:3,vars:0,consts:[["article-container",""],[3,"href","innerHTML"],[3,"innerHTML"]],template:function(e,n){e&1&&(s(0,"div",0),g(1,P,9,7,"article",null,u),a()),e&2&&(o(),w(n.posts))},dependencies:[_,j,C],styles:[`[article-container]{--x-postpress-article-width: 100%;--x-postpress-img-max-width: 100%;--x-postpress-img-display: flex;--x-postpress-img-margin: auto;display:flex;flex-direction:column;align-items:center;padding:0 1rem}[article-container] article{font-size:larger;max-width:85vw}[article-container] hr{margin:2rem}[article-container] h1{font-size:larger;font-weight:700}[article-container] .wp-block-columns{display:flex;justify-content:space-around}[article-container] a,[article-container] a:link,[article-container] a:visited{color:var(--x-postpress-a-color);text-decoration:var(--x-postpress-a-text-decoration)}[article-container] a:hover{text-decoration:var(--x-postpress-a-hover-text-decoration)}[article-container] article,[article-container] ::slotted(article){clear:var(--x-postpress-article-clear, inherit);margin:var(--x-postpress-article-margin, inherit);width:var(--x-postpress-article-width, inherit)}[article-container] article .gallery{display:var(--x-postpress-article-gallery-display, inherit);flex-wrap:wrap}[article-container] article .gallery-item{align-items:center;display:flex;flex-direction:column;flex:var(--x-postpress-article-gallery-item-flex, inherit);justify-content:flex-start;line-height:1;margin:var(--x-postpress-article-gallery-item-margin, inherit);padding:var(--x-postpress-article-gallery-item-padding, inherit)}[article-container] article .gallery-columns-2 .gallery-item{flex-basis:43.3%;padding:3%}[article-container] article .gallery-columns-3 .gallery-item{flex-basis:23.3%;padding:3%}[article-container] article .gallery-icon{padding:0 .25rem}[article-container] .alignleft{float:left;margin:0}[article-container] .alignright{float:right;margin:0}[article-container] figure{margin:auto;padding:0 .25rem 1rem;text-align:center}[article-container] figure.alignleft{padding:0 1rem 0 0}[article-container] figure>figcaption{font-size:smaller;margin-top:1rem;min-height:2rem;text-align:center}[article-container] h1{color:var(--x-postpress-h1-color, inherit);font-size:var(--x-postpress-h1-font-size, inherit);font-weight:var(--x-postpress-h1-font-weight, inherit);margin:var(--x-postpress-h1-margin, inherit);text-align:var(--x-postpress-h1-text-align, initial)}[article-container] h1 a,[article-container] h1 a:visited,[article-container] h1 a:link,[article-container] h1 a:hover{text-decoration:none}[article-container] h2{color:var(--x-postpress-h2-color, #777);display:var(--x-postpress-h2-display, initial);font-size:var(--x-postpress-h2-font-size, smaller);text-align:var(--x-postpress-h2-text-align, initial)}[article-container] hr{clear:var(--x-postpress-hr-clear, both);display:var(--x-postpress-hr-display, block);margin:var(--x-postpress-hr-margin, initial);padding:var(--x-postpress-hr-padding, initial)}[article-container] .wp-block-gallery img{display:var(--x-postpress-wp-block-gallery-img-display, inherit);float:var(--x-postpress-wp-block-gallery-img-float, inherit);height:var(--x-postpress-wp-block-gallery-img-height, auto);margin:var(--x-postpress-wp-block-gallery-img-margin, inherit);max-height:var(--x-postpress-wp-block-gallery-img-max-height, inherit);max-width:var(--x-postpress-wp-block-gallery-img-max-width, inherit);min-height:var(--x-postpress-wp-block-gallery-img-min-height, inherit);min-width:var(--x-postpress-wp-block-gallery-img-min-width, inherit);padding:var(--x-postpress-wp-block-gallery-img-padding, inherit);width:var(--x-postpress-wp-block-gallery-img-width, auto)}[article-container] img{display:var(--x-postpress-img-display, inherit);float:var(--x-postpress-img-float, inherit);height:var(--x-postpress-img-height, auto);margin:var(--x-postpress-img-margin, inherit);max-height:var(--x-postpress-img-max-height, inherit);max-width:var(--x-postpress-img-max-width, inherit);min-height:var(--x-postpress-img-min-height, inherit);min-width:var(--x-postpress-img-min-width, inherit);padding:var(--x-postpress-img-padding, inherit);width:var(--x-postpress-img-width, auto)}[article-container] ul{display:var(--x-postpress-ul-display, inherit);list-style-type:var(--x-postpress-ul-list-style-type, inherit);margin:var(--x-postpress-ul-margin, inherit);padding:var(--x-postpress-ul-padding, inherit)}[article-container] li{display:var(--x-postpress-li-display, inherit);margin:var(--x-postpress-li-margin, inherit);padding:var(--x-postpress-li-padding, inherit)}[article-container] p{clear:var(--x-postpress-p-clear, inherit);text-align:var(--x-postpress-p-text-align, inherit)}[article-container] pre{overflow:auto}[article-container] x-postpress-code{margin:1rem 0}[article-container] #singlePostNavigation,[article-container] #previousPost,[article-container] #nextPost{display:flex;flex:1;justify-content:space-evenly;margin:0 1.5rem;text-align:center}[article-container] #previousPost,[article-container] #nextPost{max-width:33vw}[article-container] #previousPost span,[article-container] #nextPost span{display:inline-flex}
`],encapsulation:3})};export{H as KarlHerrickComponent};
