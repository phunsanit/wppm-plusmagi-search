
import React from "react";
import "./index.css";
import "./code-html-migrated.css";

const laravelLogo = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#fff"/>
    <path d="M8.5 24.5L18 8L27.5 24.5H8.5Z" fill="#ff2d20"/>
  </svg>
);

export default function MainPage() {
  return (
    <>
      {/* Laravel-style Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow border-b border-gray-200">
        <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-20">
          <div className="flex items-center gap-8">
            <a href="https://laravel.com" className="flex items-center gap-2">
              {laravelLogo}
              <span className="text-2xl font-black text-[#ff2d20] tracking-tight font-headline">Laravel</span>
            </a>
            <div className="hidden md:flex gap-6 text-[1rem] font-medium">
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Ecosystem</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Cloud</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Docs</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">News</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Partners</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Community</a>
              <a className="text-gray-900 hover:text-[#ff2d20] transition-colors" href="#">Sponsor</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-900 hover:text-[#ff2d20] font-medium transition-colors">Login</a>
            <a href="#" className="text-gray-900 hover:text-[#ff2d20] font-medium transition-colors">Register</a>
            <a href="#" className="ml-4 px-6 py-2 rounded-lg bg-[#ff2d20] text-white font-bold shadow hover:bg-[#e62a1a] transition-all">Get Started</a>
          </div>
        </div>
      </nav>
      <main className="pt-20">
        {/* Laravel-style Hero Section */}
        <section className="relative flex flex-col justify-center items-center px-8 text-center overflow-hidden min-h-[600px] bg-gradient-to-b from-white to-[#f8fafc] border-b border-gray-200">
          <div className="max-w-3xl relative z-10 pt-24 pb-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#111] leading-[1.08] mb-8 font-headline">
              The clean stack for <br className="hidden md:block" />Artisans and agents.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 font-body">
              Ship web apps with the <span className="text-[#ff2d20] font-bold">AI-enabled</span> framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="px-8 py-4 rounded-lg bg-[#ff2d20] text-white font-bold text-lg shadow hover:bg-[#e62a1a] transition-all">Explore the framework</a>
              <a href="#" className="px-8 py-4 rounded-lg bg-white border border-[#ff2d20] text-[#ff2d20] font-bold text-lg shadow hover:bg-[#fff5f5] transition-all">Deploy on Cloud</a>
            </div>
          </div>
        </section>
        {/* Feature Grid Section (Laravel style) */}
        <section className="bg-white border-b border-gray-200 py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[#ff2d20] text-4xl">bolt</span>
              <h3 className="text-2xl font-bold text-[#111]">Starter kits for React, Vue, and Svelte</h3>
              <p className="text-gray-700">Jumpstart your next project with ready-to-go front-end integrations.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[#ff2d20] text-4xl">smart_toy</span>
              <h3 className="text-2xl font-bold text-[#111]">AI SDK and Boost AI assistant</h3>
              <p className="text-gray-700">Supercharge your workflow with built-in AI tools and assistants.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[#ff2d20] text-4xl">layers</span>
              <h3 className="text-2xl font-bold text-[#111]">Open source ecosystem</h3>
              <p className="text-gray-700">Over 30 packages for queues, auth, ORM, and more.</p>
            </div>
          </div>
        </section>

        {/* Community/Testimonial Section */}
        <section className="bg-[#f8fafc] py-24 px-8 border-b border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-12">Trusted by millions of developers all over the world</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
                <img src="https://laravel.com/images/home/community/adam-wathan.png" alt="Adam Wathan" className="w-16 h-16 rounded-full mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-2">“I've been using Laravel for nearly a decade and have never been tempted to switch to anything else.”</blockquote>
                <span className="font-bold text-[#ff2d20]">Adam Wathan</span>
                <span className="text-gray-500 text-sm">Founder, Tailwind</span>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
                <img src="https://laravel.com/images/home/community/ian-callahan.jpg" alt="Ian Callahan" className="w-16 h-16 rounded-full mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-2">“Laravel is our sourdough starter and multitool for web projects large and small. 10 years in, it remains fresh and useful.”</blockquote>
                <span className="font-bold text-[#ff2d20]">Ian Callahan</span>
                <span className="text-gray-500 text-sm">Harvard Art Museums</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer (Laravel style) */}
        <footer className="bg-[#111] w-full py-16 border-t border-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              {laravelLogo}
              <span className="text-2xl font-black text-white tracking-tight font-headline">Laravel</span>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-[#ff2d20] transition-colors">Docs</a>
              <a href="#" className="hover:text-[#ff2d20] transition-colors">Ecosystem</a>
              <a href="#" className="hover:text-[#ff2d20] transition-colors">Partners</a>
              <a href="#" className="hover:text-[#ff2d20] transition-colors">Community</a>
              <a href="#" className="hover:text-[#ff2d20] transition-colors">Sponsor</a>
            </div>
            <div className="text-gray-400 text-xs">© {new Date().getFullYear()} Laravel. All rights reserved.</div>
          </div>
        </footer>

        {/* Demo Mockup */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16 grid grid-cols-1 md:grid-cols-2 items-end gap-8">
              <h2 className="text-4xl font-bold tracking-tighter text-on-surface leading-tight">Built for the <br/>Digital Architect.</h2>
              <p className="text-on-surface-variant text-sm tracking-wide max-w-sm ml-auto">Visualizing the flow of data through our custom indexing engine, optimized for metadata density and lightning fast retrieval.</p>
            </div>
            <div className="relative bg-surface-container-highest rounded-lg p-1 md:p-2 neon-glow overflow-hidden">
              <div className="bg-background rounded-md overflow-hidden border border-outline-variant/20 shadow-2xl">
                {/* Search UI Mockup */}
                <div className="p-4 border-b border-outline-variant/30 flex items-center gap-4 bg-surface-container-low">
                  <span className="material-symbols-outlined text-primary">search</span>
                  <input className="bg-transparent border-none text-on-surface w-full focus:ring-0 font-light text-lg italic" readOnly type="text" value="Architectural patterns..." />
                </div>
                <div className="flex flex-col md:flex-row h-[400px]">
                  <div className="w-full md:w-64 border-r border-outline-variant/30 p-4 space-y-4 bg-surface-container">
                    <span className="text-[0.6rem] font-bold text-primary uppercase tracking-widest">Filter By</span>
                    <div className="text-sm py-1.5 px-3 bg-primary-dim/10 text-primary border-l-2 border-primary">Documentation</div>
                    <div className="text-sm py-1.5 px-3 text-on-surface-variant hover:bg-surface-container-high transition-colors">Blog Posts</div>
                    <div className="text-sm py-1.5 px-3 text-on-surface-variant hover:bg-surface-container-high transition-colors">Products</div>
                  </div>
                  <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    <div className="group cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-on-surface font-bold text-lg group-hover:text-primary transition-colors">Implementing Headless PM with GraphQL</h4>
                        <span className="text-[0.6rem] bg-surface-container-highest px-2 py-0.5 text-on-surface-variant border border-outline-variant">GUIDE</span>
                      </div>
                      <p className="text-on-surface-variant text-sm line-clamp-2">A deep dive into the architectural benefits of separating the presentation layer from the content repository using PlusMagi indices...</p>
                    </div>
                    <div className="group cursor-pointer opacity-60">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-on-surface font-bold text-lg">Optimizing Search Metadata</h4>
                        <span className="text-[0.6rem] bg-surface-container-highest px-2 py-0.5 text-on-surface-variant border border-outline-variant">TECH DOC</span>
                      </div>
                      <p className="text-on-surface-variant text-sm line-clamp-2">Learn how to configure smart prefixes to reduce query time by 40% across large enterprise datasets.</p>
                    </div>
                    <div className="group cursor-pointer opacity-40">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-on-surface font-bold text-lg">Integration: Next.js + WordPress</h4>
                        <span className="text-[0.6rem] bg-surface-container-highest px-2 py-0.5 text-on-surface-variant border border-outline-variant">VIDEO</span>
                      </div>
                      <p className="text-on-surface-variant text-sm line-clamp-2">A video walkthrough of setting up real-time search indexing for React-based frontends.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Feature 1: Large */}
              <div className="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-between group">
                <div className="max-w-md">
                  <span className="material-symbols-outlined text-primary-dim text-4xl mb-6">security</span>
                  <h3 className="text-3xl font-bold tracking-tighter text-on-surface mb-4">Granular Access Control</h3>
                  <p className="text-on-surface-variant leading-relaxed">Secure your data at the search level. Define specific visibility rules for different user roles and memberships without performance overhead.</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm tracking-tight cursor-pointer hover:gap-4 transition-all">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              {/* Feature 2: Small */}
              <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">database</span>
                <h3 className="text-xl font-bold tracking-tighter text-on-surface mb-2">Deep Search</h3>
                <p className="text-on-surface-variant text-sm">Index every custom field, taxonomy, and metadata entry in your database.</p>
              </div>
              {/* Feature 3: Small */}
              <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">settings_ethernet</span>
                <h3 className="text-xl font-bold tracking-tighter text-on-surface mb-2">Smart Prefixes</h3>
                <p className="text-on-surface-variant text-sm">Auto-categorize queries with intelligent prefixing for instant UI feedback.</p>
              </div>
              {/* Feature 4: Large */}
              <div className="md:col-span-8 bg-surface-container-low p-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-primary-dim text-4xl mb-6">speed</span>
                  <h3 className="text-3xl font-bold tracking-tighter text-on-surface mb-4">Optimized Performance</h3>
                  <p className="text-on-surface-variant leading-relaxed">Built with a focus on core web vitals, our search engine utilizes advanced caching to ensure zero impact on your server's CPU.</p>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="text-4xl font-black text-primary">0.02s</span>
                    <div className="text-[0.6rem] text-on-surface-variant uppercase tracking-widest mt-1">LATENCY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold tracking-tighter text-on-surface mb-8">Ready in <br/>seconds.</h2>
              <p className="text-on-surface-variant mb-8">We've simplified the installation process to a single terminal command. No complex configuration required for initial deployment.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-on-surface">Install Plugin</h4>
                    <p className="text-xs text-on-surface-variant">Via PM CLI or Dashboard</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-outline-variant text-on-surface-variant flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-on-surface-variant">Initialize Index</h4>
                    <p className="text-xs text-on-surface-variant">Automated metadata scanning</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-outline-variant text-on-surface-variant flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-on-surface-variant">Deploy UI</h4>
                    <p className="text-xs text-on-surface-variant">Customizable search component</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-surface-container p-1 rounded-sm border border-outline-variant/10">
              <div className="bg-[#000000] p-6 font-mono text-sm overflow-x-auto text-on-surface-variant">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-error-dim"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffcc00]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00cc00]"></div>
                </div>
                <p className="mb-2"><span className="text-primary-dim">$</span> PM plugin install plusmagi-site-search --activate</p>
                <p className="text-on-surface-variant/40">Success: Plugin 'PlusMagi Site Search' installed and activated.</p>
                <p className="mt-4 mb-2"><span className="text-primary-dim">$</span> PM plusmagi index --all</p>
                <p className="text-on-surface-variant/40">Indexing 14,502 entries... [####################] 100%</p>
                <p className="mt-4"><span className="text-primary-dim">$</span> PM plusmagi config --set-mode=architectural</p>
                <p className="text-on-surface-variant/40">Configuration updated. System optimized for high-density metadata.</p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ & Changelog */}
        <section className="py-24 px-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-on-surface mb-10">Frequently Asked</h3>
              <div className="space-y-4">
                <details className="group bg-surface-container-low border-b border-outline-variant/20 p-4">
                  <summary className="flex justify-between items-center font-bold text-on-surface cursor-pointer list-none">
                    How does it differ from default PM Search?
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Unlike default WordPress search which relies on heavy SQL LIKE queries, PlusMagi creates a specialized index optimized for high-speed metadata retrieval and complex filtering.</p>
                </details>
                <details className="group bg-surface-container-low border-b border-outline-variant/20 p-4">
                  <summary className="flex justify-between items-center font-bold text-on-surface cursor-pointer list-none">
                    Is it compatible with ACF?
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Yes, PlusMagi has native support for Advanced Custom Fields, indexing all data types including repeaters and flexible content layouts automatically.</p>
                </details>
                <details className="group bg-surface-container-low border-b border-outline-variant/20 p-4">
                  <summary className="flex justify-between items-center font-bold text-on-surface cursor-pointer list-none">
                    What about massive databases?
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">We've tested indices with up to 1 million posts. The search remains sub-100ms thanks to our aggressive architectural caching layer.</p>
                </details>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-on-surface mb-10">Changelog</h3>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-outline-variant/30">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <span className="text-[0.6rem] font-bold text-primary uppercase tracking-widest block mb-1">MAY 2024 • v4.2.0</span>
                  <h4 className="font-bold text-on-surface mb-2">The Multi-Layer Update</h4>
                  <p className="text-sm text-on-surface-variant">Introduced nested search capabilities and native GraphQL support for headless implementations.</p>
                </div>
                <div className="relative pl-10 opacity-60">
                  <div className="absolute left-0 top-1.5 w-4 h-4 bg-outline-variant rounded-full border-4 border-background"></div>
                  <span className="text-[0.6rem] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">MARCH 2024 • v4.1.2</span>
                  <h4 className="font-bold text-on-surface mb-2">Performance Patch</h4>
                  <p className="text-sm text-on-surface-variant">Reduced index rebuild time by 30% for sites with high-frequency content updates.</p>
                </div>
                <div className="relative pl-10 opacity-40">
                  <div className="absolute left-0 top-1.5 w-4 h-4 bg-outline-variant rounded-full border-4 border-background"></div>
                  <span className="text-[0.6rem] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">JAN 2024 • v4.0.0</span>
                  <h4 className="font-bold text-on-surface mb-2">Architectural Rebirth</h4>
                  <p className="text-sm text-on-surface-variant">Core engine rewrite utilizing the new monolithic indexing pattern for extreme scalability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#091421] w-full py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto border-t border-[#5e3f39]/15 pt-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-black text-[#ffb4a4] block mb-4 uppercase tracking-tighter">PlusMagi Site Search</span>
            <p className="font-['Inter'] text-sm tracking-wide text-[#d9e3f6]/60 leading-relaxed">
              © 2024 PlusMagi Site Search. <br/>Built for the Digital Architect.
            </p>
          </div>
          <div>
            <h5 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-6">Resources</h5>
            <ul className="space-y-3 font-['Inter'] text-sm tracking-wide text-[#d9e3f6]/60">
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">GitHub</a></li>
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-3 font-['Inter'] text-sm tracking-wide text-[#d9e3f6]/60">
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">Legal</a></li>
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:underline decoration-[#ff5634] underline-offset-4 text-[#d9e3f6]/50 hover:text-[#ffb4a4] transition-colors" href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-6">Stay Connected</h5>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#d9e3f6]/60 hover:text-[#ffb4a4] cursor-pointer">rss_feed</span>
              <span className="material-symbols-outlined text-[#d9e3f6]/60 hover:text-[#ffb4a4] cursor-pointer">alternate_email</span>
              <span className="material-symbols-outlined text-[#d9e3f6]/60 hover:text-[#ffb4a4] cursor-pointer">terminal</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
