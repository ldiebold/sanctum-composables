import{c as n}from"./app.18c439ee.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="customize-fortify-redirects" tabindex="-1"><a class="header-anchor" href="#customize-fortify-redirects" aria-hidden="true">#</a> Customize fortify redirects</h2><p><code>FortifyServiceProvider.php</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Fortify<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>LoginResponse</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Fortify<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>LogoutResponse</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FortifyServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Register any application services.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token class-name static-context">LogoutResponse</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">implements</span> <span class="token class-name">LogoutResponse</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toResponse</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token class-name static-context">LoginResponse</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">implements</span> <span class="token class-name">LoginResponse</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toResponse</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><h2 id="disabling-views" tabindex="-1"><a class="header-anchor" href="#disabling-views" aria-hidden="true">#</a> Disabling Views</h2><p><code>fortify.php</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;views&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h2><div class="language-yaml ext-yml"><pre class="language-yaml"><code>APP_URL=http<span class="token punctuation">:</span>//localhost
</code></pre></div>`,8);function t(e,o){return p}var i=s(a,[["render",t]]);export{i as default};
