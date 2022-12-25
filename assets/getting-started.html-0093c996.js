import{_ as i,M as t,p as l,q as c,R as n,t as a,N as s,V as r,a1 as p}from"./framework-96b046e1.js";const d={},u=p('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><p>The vuebulma package is made to make Bulma development easier simplify it&#39;s learning curve on where and which elements do classes apply.</p><p><em>Developed with/for Vue v3.2.45 and Bulma v0.9.4</em></p><h2 id="warning" tabindex="-1"><a class="header-anchor" href="#warning" aria-hidden="true">#</a> <strong>WARNING</strong></h2><p>This package is still under very active development and is not stable by any means and is in pre-release stages. Feel free to help or report any issues😃.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6),m={href:"https://npmjs.com/@csc530/vuebulma",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/csc530/vuebulma",target:"_blank",rel:"noopener noreferrer"},k=p(`<div class="language-bat" data-ext="bat"><pre class="language-bat"><code>npm install @csc530/vuebulma
</code></pre></div><div class="language-ps1" data-ext="ps1"><pre class="language-ps1"><code>yarn add @csc530/vuebulma
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="importing-a-component" tabindex="-1"><a class="header-anchor" href="#importing-a-component" aria-hidden="true">#</a> Importing a component</h3><p>This is a modular library allowing you to import a component from anywhere as needed. To do such is the same as importing a locally defined component.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BulmaHeading</span><span class="token punctuation">&gt;</span></span>I&#39;m a Bulma styled title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BulmaHeading</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//Import the desired component</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>BulmaHeading<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@csc530/vuebulma&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import-the-whole-library" tabindex="-1"><a class="header-anchor" href="#import-the-whole-library" aria-hidden="true">#</a> Import the whole library</h3><p>This is not the recommended approach as many of the IDE code hints (don&#39;t seem to be) aren&#39;t available.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//Import vuebulma package</span>
<span class="token keyword">import</span> vuebulma <span class="token keyword">from</span> <span class="token string">&#39;@csc530/vuebulma&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">//Import vuebulma package to Vue app</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuebulma<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=n("h2",{id:"additional-help",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#additional-help","aria-hidden":"true"},"#"),a(" Additional help")],-1),g=n("ul",null,[n("li")],-1);function b(f,_){const e=t("ExternalLinkIcon"),o=t("RouterLink");return l(),c("div",null,[u,n("p",null,[a("This package is hosted on the "),n("a",m,[a("npm registry"),s(e)]),a(" and it's source code is available on "),n("a",h,[a("Github"),s(e)]),a(".")]),k,n("p",null,[a("To learn more about specific components use and examples please refer to "),s(o,{to:"/components/"},{default:r(()=>[a("the components documentation")]),_:1})]),v,g])}const w=i(d,[["render",b],["__file","getting-started.html.vue"]]);export{w as default};
