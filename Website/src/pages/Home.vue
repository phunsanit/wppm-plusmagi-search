<template>
  <div class="min-h-screen bg-[#040f1c] text-[#dee9fc] font-sans">
    <!-- TopAppBar -->
    <nav class="fixed top-0 w-full z-50 bg-[rgba(9,20,33,0.7)] backdrop-blur-lg shadow-lg h-20 flex items-center">
      <div class="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-full">
        <div class="flex items-center gap-8">
          <span class="text-xl font-bold text-[#d9e3f6] tracking-tighter">PlusMagi Site Search</span>
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
          <span class="text-[#ff8f77] tracking-[0.2em] font-bold text-[0.6875rem] uppercase mb-6 block">VERSION 1.0.0 NOW LIVE</span>
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1.1] mb-8">
            Powerful Search for <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f77] to-[#e12a00]">Modern WordPress</span> Sites
          </h1>
          <p class="text-[#a1acbd] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Transform your standard WordPress search into a high-performance, deep-indexed architectural component built for scale.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pitt.plusmagi.com" target="_blank" class="bg-[#e12a00] text-white px-10 py-4 font-bold tracking-tighter rounded-sm hover:bg-[#ff5c3b] transition-all active:scale-95">Live Demo</a>
            <a href="#" class="bg-[#ff8f77] text-[#4b0700] px-10 py-4 font-bold tracking-tighter rounded-sm hover:bg-[#ffb4a4] transition-all active:scale-95">Get Started</a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="max-w-4xl mx-auto mt-16 px-4">
        <h2 class="text-3xl font-bold mb-8 text-[#ff8f77]">Features</h2>
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
          <li><b>Advanced Filtering & Search Logic</b> (Custom Fields, Prefixes)</li>
          <li><b>Rich Results</b> (Thumbnails, Tabs)</li>
          <li><b>Admin-Like UI</b></li>
          <li><b>Theme Integration</b></li>
          <li><b>High Performance</b> (AJAX, Lightweight)</li>
          <li><b>Developer Friendly</b> (Shortcode, Block support)</li>
        </ul>
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
</style>
