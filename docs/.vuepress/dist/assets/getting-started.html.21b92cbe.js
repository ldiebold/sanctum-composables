import{r as p,a as o,b as n,d as t,F as c,c as e,e as s,o as l}from"./app.18c439ee.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=e(`<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># yarn (the cool kids)</span>
<span class="token function">yarn</span> <span class="token function">add</span> sanctum-composables firebase

<span class="token comment"># or npm (the oldschoolers)</span>
<span class="token function">npm</span> <span class="token function">install</span> sanctum-composables firebase --save
</code></pre></div><h2 id="add-credentials" tabindex="-1"><a class="header-anchor" href="#add-credentials" aria-hidden="true">#</a> Add Credentials</h2><p>Here&#39;s how you can find your credentials:</p>`,5),k=s("Head over to the "),d={href:"https://console.firebase.google.com/",target:"_blank",rel:"noopener noreferrer"},g=s("firebase console"),h=n("li",null,"Select your project",-1),m=n("li",null,[s("At the top right of the page, next to "),n("strong",null,"Project Overview"),s(", click on the \u2699\uFE0F icon, then "),n("strong",null,"Project settings")],-1),X=n("li",null,[s("scroll to the bottom of the page. Your credentials are inside "),n("code",null,"const firebaseConfig = ")],-1),f=n("li",null,"have a cookie \u{1F36A}",-1),_=e(`<blockquote><p>In the code snippet from step 4, firebase shows you how to initialize the app. You don&#39;t need any of this code, as <strong>sanctum-composables</strong> handles it for you!</p></blockquote><p>before we can use sanctum-composables, we need to install the plugin. The file below will usually be <code>main.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> firebasePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sanctum-composables&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  apiKey<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  authDomain<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  projectId<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  storageBucket<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  messagingSenderId<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  appId<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span><span class="token punctuation">,</span>
  measurementId<span class="token operator">:</span> <span class="token string">&#39;XXXXXXXXXXX&#39;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>firebasePlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> firebaseConfig
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="email-password-signin" tabindex="-1"><a class="header-anchor" href="#email-password-signin" aria-hidden="true">#</a> Email/Password SignIn</h2><h3 id="enabling-signin-with-firebase" tabindex="-1"><a class="header-anchor" href="#enabling-signin-with-firebase" aria-hidden="true">#</a> Enabling SignIn with Firebase</h3><p>First, ensure that the &quot;Email/Password&quot; provider is enabled in firebase. Here&#39;s how you do it:</p>`,6),b=s("Wack this link to go to the firebase console \u{1F44A}"),w={href:"https://console.firebase.google.com/",target:"_blank",rel:"noopener noreferrer"},v=s("firebase console"),y=n("li",null,"Select your project",-1),q=n("li",null,[s("Select "),n("strong",null,"Authentication")],-1),S=n("li",null,[s("Select "),n("strong",null,"Sign-in method")],-1),x=n("li",null,[s("Select "),n("strong",null,"Add new provider")],-1),I=n("li",null,[s("Ensure "),n("strong",null,"Email/Password"),s(" has a tick \u2714\uFE0F, otherwise, set it up")],-1),A=s("Send a tweet to "),j={href:"https://vuejs.org/v2/guide/team.html",target:"_blank",rel:"noopener noreferrer"},E=s("someone on the Vue team"),P=s(" to say thankyou \u{1F49A}"),C=e(`<h3 id="using-useemailsignin" tabindex="-1"><a class="header-anchor" href="#using-useemailsignin" aria-hidden="true">#</a> Using <code>useEmailSignIn</code></h3><p>Sign in is easy, let&#39;s dive into the code. Hang on, grabbing my snorkel \u{1F93F}</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sanctum-composables&#39;</span>

<span class="token comment">// \u{1F93F} first we yank out the form, and sign in function</span>
<span class="token comment">// from the composable.</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">,</span>
  signIn<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u{1F93F} and the auth state, to ensure the user is signed in</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuthState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u{1F93F} Then, we simply model the &#39;email&#39; and... --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.email<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
\u{1F41A}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u{1F93F} The password. --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.password<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\u{1F41F}

    <span class="token comment">&lt;!-- Then, we call the signIn button on click! --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>signIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Sign In
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- And display the user --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ user }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Ahhhh!!! \u{1F3CA} \u{1F988} --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>And that&#39;s it.</p>`,4);function T(V,B){const a=p("OutboundLink");return l(),o(c,null,[r,n("ol",null,[n("li",null,[k,n("a",d,[g,t(a)])]),h,m,X,f]),_,n("ol",null,[n("li",null,[b,n("a",w,[v,t(a)])]),y,q,S,x,I,n("li",null,[A,n("a",j,[E,t(a)]),P])]),C],64)}var N=u(i,[["render",T]]);export{N as default};
