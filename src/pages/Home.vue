<template>
  <div class="min-h-screen bg-[#040f1c] text-[#dee9fc] font-sans">
    <!-- TopAppBar -->
    <nav class="fixed top-0 w-full z-50 bg-[rgba(9,20,33,0.7)] backdrop-blur-lg shadow-lg h-20 flex items-center">
      <div class="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-full">
        <div class="flex items-center gap-8">
          <a href="https://plusmagi-site-search.plusmagi.com" target="_blank" rel="noopener noreferrer" class="text-xl font-bold text-[#d9e3f6] tracking-tighter">PlusMagi Site Search</a>
          <div class="hidden md:flex gap-6">
            <a class="text-[#ffb4a4] font-bold border-b-2 border-[#ff5634] pb-1 tracking-tighter" href="#">Home</a>
            <a class="text-[#d9e3f6]/80 hover:text-[#ffb4a4] tracking-tighter" href="#documentation">Documentation</a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="bg-[#e12a00] text-white px-6 py-2 font-bold tracking-tighter text-sm rounded-sm hover:bg-[#ff5c3b] transition-all active:scale-95">Get Started</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="pt-24">
      <section class="relative min-h-[707px] flex flex-col justify-center items-center px-8 text-center overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,48,3,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div class="max-w-4xl relative z-10">
          <span class="text-[#ff8f77] tracking-[0.2em] font-bold text-[0.6875rem] uppercase mb-6 block">VERSION 1.0.1 NOW LIVE</span>
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1.1] mb-8">
            WordPress Ajax Search Plugin <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f77] to-[#e12a00]">for Fast, Role-Based Results</span>
          </h1>
          <p class="text-[#a1acbd] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            PlusMagi Site Search helps teams run a lightweight WordPress search plugin with Ajax UI, role-based access control, and deep custom field indexing.
          </p>
          <p class="text-[#d7e4fb] text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the Fastest Ajax Search for WordPress with Role-Based Security. Live Search requests are powered by REST API endpoints, so results appear instantly while keeping server overhead low for a true zero-bloat architecture.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pitt.plusmagi.com" target="_blank" class="bg-[#e12a00] text-white px-10 py-4 font-bold tracking-tighter rounded-sm hover:bg-[#ff5c3b] transition-all active:scale-95">Live Demo</a>
            <a href="https://wordpress.org/plugins/plusmagi-site-search/" target="_blank" rel="noopener noreferrer" class="bg-[#ff8f77] text-[#4b0700] px-10 py-4 font-bold tracking-tighter rounded-sm hover:bg-[#ffb4a4] transition-all active:scale-95">Get Started</a>
          </div>
          <div class="mt-12 max-w-6xl mx-auto text-left">
            <h2 class="text-2xl font-bold mb-4 text-[#ff8f77]">Live Search Preview: All 3 Tabs</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <figure class="bg-[#111f31] rounded border border-[#2b394a] p-3">
                <div class="demo-search-card">
                  <input class="demo-search-input" value="ajax" readonly />
                  <div class="demo-tabs">
                    <div class="demo-tab demo-tab-active">Posts (20)</div>
                    <div class="demo-tab">Category (0)</div>
                    <div class="demo-tab">Tag (2)</div>
                  </div>
                  <div class="demo-results">
                    <div class="demo-item">
                      <span class="demo-icon">📌</span>
                      <div>
                        <div class="demo-title">WordPress: search ง่าย ๆ แบบ ajax</div>
                        <div class="demo-date">2021-06-12</div>
                      </div>
                    </div>
                    <div class="demo-item">
                      <span class="demo-icon">📌</span>
                      <div>
                        <div class="demo-title">slick: carousel / slideshow จาก ajax</div>
                        <div class="demo-date">2019-01-26</div>
                      </div>
                    </div>
                    <div class="demo-item">
                      <span class="demo-icon demo-icon-highlight">📌</span>
                      <div>
                        <div class="demo-title">jQuery: Ajax รับข้อมูลแบบ stream</div>
                        <div class="demo-date">2016-10-29</div>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption class="text-sm text-[#c6d3ea] mt-2">Posts Tab</figcaption>
              </figure>

              <figure class="bg-[#111f31] rounded border border-[#2b394a] p-3">
                <div class="demo-search-card">
                  <input class="demo-search-input" value="ajax" readonly />
                  <div class="demo-tabs">
                    <div class="demo-tab">Posts (20)</div>
                    <div class="demo-tab demo-tab-active">Category (0)</div>
                    <div class="demo-tab">Tag (2)</div>
                  </div>
                  <div class="demo-results">
                    <div class="demo-empty">No results found.</div>
                  </div>
                </div>
                <figcaption class="text-sm text-[#c6d3ea] mt-2">Category Tab</figcaption>
              </figure>

              <figure class="bg-[#111f31] rounded border border-[#2b394a] p-3">
                <div class="demo-search-card">
                  <input class="demo-search-input" value="ajax" readonly />
                  <div class="demo-tabs">
                    <div class="demo-tab">Posts (20)</div>
                    <div class="demo-tab">Category (0)</div>
                    <div class="demo-tab demo-tab-active">Tag (2)</div>
                  </div>
                  <div class="demo-results">
                    <div class="demo-item">
                      <span class="demo-icon">🏷</span>
                      <div class="demo-title">AJAX</div>
                    </div>
                    <div class="demo-item">
                      <span class="demo-icon demo-icon-highlight">🏷</span>
                      <div class="demo-title">Ajax Search</div>
                    </div>
                  </div>
                </div>
                <figcaption class="text-sm text-[#c6d3ea] mt-2">Tag Tab</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="max-w-4xl mx-auto mt-16 px-4">
        <h2 class="text-3xl font-bold mb-4 text-[#ff8f77]">Why Choose PlusMagi Site Search?</h2>
        <h3 class="text-xl font-semibold mb-8 text-[#d9e3f6]">Advanced Filtering for WordPress with Zero-Bloat Performance</h3>
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full border border-[#3e4958] rounded text-left">
            <thead class="bg-[#172739]">
              <tr>
                <th class="py-2 px-4 border-b border-[#3e4958]">Role</th>
                <th class="py-2 px-4 border-b border-[#3e4958]">Can See</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b border-[#3e4958]">Public</td>
                <td class="py-2 px-4 border-b border-[#3e4958]">Published posts only</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b border-[#3e4958]">Author</td>
                <td class="py-2 px-4 border-b border-[#3e4958]">Own drafts/pending + all published</td>
              </tr>
              <tr>
                <td class="py-2 px-4">Admin/Editor</td>
                <td class="py-2 px-4">Everything (all statuses)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="grid md:grid-cols-2 gap-6 text-left">
          <li><b>Strict Access Control</b> (see table above)</li>
          <li><b>Advanced Filtering & Search Logic</b> (Custom Fields, Prefixes, Taxonomies)</li>
          <li><b>Rich Results</b> (Thumbnails, Tabs)</li>
          <li><b>Admin-Like UI</b></li>
          <li><b>Theme Integration</b></li>
          <li><b>High Performance</b> (AJAX, Lightweight)</li>
          <li><b>Developer Friendly</b> (Shortcode, Block support)</li>
        </ul>
      </section>

      <!-- Use Cases Section -->
      <section class="max-w-5xl mx-auto mt-16 px-4">
        <h2 class="text-3xl font-bold mb-4 text-[#ff8f77]">Use Cases That Drive Organic Traffic</h2>
        <h3 class="text-xl font-semibold mb-8 text-[#d9e3f6]">Role-based search WordPress and custom-field discovery in real projects</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-[#172739] rounded p-6 border border-[#2b394a]">
            <h3 class="text-xl font-semibold mb-3 text-[#ffb4a4]">How to enable SKU search in WordPress</h3>
            <p class="text-[#c6d3ea] leading-relaxed">
              Show merchants how to search WooCommerce products by SKU using custom field indexing. This targets users searching for "Search custom fields WordPress".
            </p>
          </article>
          <article class="bg-[#172739] rounded p-6 border border-[#2b394a]">
            <h3 class="text-xl font-semibold mb-3 text-[#ffb4a4]">Managing search privacy for membership sites</h3>
            <p class="text-[#c6d3ea] leading-relaxed">
              Explain how role-based visibility prevents private content leakage, ideal for teams comparing "Role-based search WordPress" plugins.
            </p>
          </article>
        </div>
      </section>

      <!-- Who Is It For Section -->
      <section class="max-w-5xl mx-auto mt-16 px-4">
        <h2 class="text-3xl font-bold mb-4 text-[#ff8f77]">Who Is It For?</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-[#111f31] rounded p-6 border border-[#2b394a]">
            <h3 class="text-xl font-semibold mb-3 text-[#ffb4a4]">Membership Sites</h3>
            <p class="text-[#c6d3ea] leading-relaxed">
              Role-Based Access Control ensures each member level sees only authorized search results, reducing accidental content exposure in private communities.
            </p>
          </article>
          <article class="bg-[#111f31] rounded p-6 border border-[#2b394a]">
            <h3 class="text-xl font-semibold mb-3 text-[#ffb4a4]">E-commerce & Catalogs</h3>
            <p class="text-[#c6d3ea] leading-relaxed">
              Deep custom-field and meta-data indexing helps customers find products by SKU, product code, and other catalog-specific identifiers.
            </p>
          </article>
        </div>
      </section>

      <!-- SEO Summary Section -->
      <section class="max-w-5xl mx-auto mt-16 px-4 mb-20">
        <h2 class="text-3xl font-bold mb-4 text-[#ff8f77]">Technical SEO Checklist</h2>
        <h3 class="text-xl font-semibold mb-8 text-[#d9e3f6]">Built for mobile-friendly search UX and Core Web Vitals</h3>
        <div class="grid md:grid-cols-3 gap-5 text-left">
          <div class="bg-[#111f31] rounded p-5 border border-[#2b394a]">
            <h3 class="text-lg font-semibold mb-2 text-[#ffb4a4]">Performance</h3>
            <p class="text-[#c6d3ea]">Lightweight frontend and Ajax-only requests help maintain fast interactive search performance.</p>
          </div>
          <div class="bg-[#111f31] rounded p-5 border border-[#2b394a]">
            <h3 class="text-lg font-semibold mb-2 text-[#ffb4a4]">Mobile Friendly</h3>
            <p class="text-[#c6d3ea]">Responsive layouts and touch-friendly controls keep search usable on phones and tablets.</p>
          </div>
          <div class="bg-[#111f31] rounded p-5 border border-[#2b394a]">
            <h3 class="text-lg font-semibold mb-2 text-[#ffb4a4]">Structured Data</h3>
            <p class="text-[#c6d3ea]">SoftwareApplication schema helps search engines classify this page as a WordPress plugin product.</p>
          </div>
        </div>
      </section>

      <!-- Documentation Section -->
      <section id="documentation" class="max-w-4xl mx-auto mt-16 px-4">
        <h2 class="text-3xl font-bold mb-8 text-[#ff8f77]">Documentation</h2>
        <h3 class="text-xl font-semibold mt-4 mb-2">Installation</h3>
        <ol class="list-decimal list-inside mb-6 space-y-1">
          <li>Download <b>plusmagi-site-search.zip</b> from the <b>build/</b> folder or generate it with <code>./build.sh</code></li>
          <li>Upload the zip file to the Plugins page in your WordPress admin</li>
          <li>Click Activate to enable the plugin</li>
        </ol>
        <h3 class="text-xl font-semibold mt-4 mb-2">Add to Theme</h3>
        <ul class="list-disc list-inside space-y-1 mb-6">
          <li>Add <code>[plusmagi_search]</code> to any page or post content</li>
          <li>Or insert the shortcode directly in your theme file, for example:<br>
            <code>&lt;?php echo do_shortcode('[plusmagi_search]'); ?&gt;</code>
          </li>
        </ul>
        <div class="bg-[#172739] rounded p-4 text-sm text-[#dee9fc]">
          <b>Tip:</b> You can customize the CSS via your theme or a Custom CSS plugin to match your site design.
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="max-w-4xl mx-auto mt-16 px-4 mb-20">
        <h2 class="text-3xl font-bold mb-8 text-[#ff8f77]">FAQ</h2>
        <div class="space-y-4">
          <details class="bg-[#111f31] border border-[#2b394a] rounded p-4">
            <summary class="cursor-pointer font-semibold text-[#ffb4a4]">Does it search Custom Fields?</summary>
            <p class="mt-3 text-[#c6d3ea]">Yes, PlusMagi Site Search indexes post meta and custom fields automatically.</p>
          </details>
          <details class="bg-[#111f31] border border-[#2b394a] rounded p-4">
            <summary class="cursor-pointer font-semibold text-[#ffb4a4]">Is it secure?</summary>
            <p class="mt-3 text-[#c6d3ea]">Absolutely, it uses permission callbacks to ensure users only see search results they are authorized to view.</p>
          </details>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// No logic needed for static page
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap');
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
body {
  font-family: 'Inter', sans-serif;
}

.demo-search-card {
  background: #ececec;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  overflow: hidden;
}

.demo-search-input {
  width: calc(100% - 24px);
  margin: 12px;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  padding: 8px 10px;
  color: #2f2f2f;
  background: #fff;
  font-size: 14px;
}

.demo-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  background: #f3f3f3;
}

.demo-tab {
  text-align: center;
  font-size: 12px;
  color: #2f2f2f;
  padding: 10px 6px;
  border-right: 1px solid #d7d7d7;
}

.demo-tab:last-child {
  border-right: none;
}

.demo-tab-active {
  font-weight: 700;
}

.demo-results {
  background: #fff;
}

.demo-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 10px 12px;
  border-top: 1px solid #e4e4e4;
}

.demo-item:first-child {
  border-top: none;
}

.demo-icon {
  font-size: 14px;
  line-height: 1;
  color: #4c4c4c;
  margin-top: 2px;
}

.demo-icon-highlight {
  color: #1f66d1;
}

.demo-title {
  color: #222;
  font-size: 12px;
  line-height: 1.35;
}

.demo-date {
  color: #6c6c6c;
  font-size: 11px;
  margin-top: 2px;
}

.demo-empty {
  color: #333;
  font-size: 12px;
  text-align: center;
  padding: 18px 10px;
}
</style>
