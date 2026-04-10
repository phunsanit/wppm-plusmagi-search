

import TopAppBar from "./components/TopAppBar";
import MonolithHeader from "./components/MonolithHeader";
import DemoMockup from "./components/DemoMockup";
import FaqChangelog from "./components/FaqChangelog";

export default function App() {
  return (
    <div className="bg-background min-h-screen font-body">
      <TopAppBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[707px] flex flex-col justify-center items-center px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,48,3,0.08)_0%,transparent_80%)] pointer-events-none"></div>
          <div className="max-w-4xl relative z-10">
            <span className="text-primary tracking-[0.2em] font-extrabold text-[0.875rem] uppercase mb-8 block">VERSION 4.2.0 NOW LIVE</span>
            <h1 className="text-[3.5rem] md:text-[5.5rem] font-black tracking-[-0.04em] text-on-surface leading-[1.08] mb-10">
              Powerful Search for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim font-black">Modern WordPress</span> Sites
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Transform your standard WordPress search into a high-performance, deep-indexed architectural component built for scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff5c3b] text-white px-12 py-4 font-extrabold tracking-tight rounded-sm text-lg shadow-md hover:bg-[#ff775b] transition-all active:scale-95">Download Free</button>
              <button className="border border-white text-white px-12 py-4 font-extrabold tracking-tight rounded-sm text-lg shadow-md hover:bg-surface-container-high transition-all active:scale-95">View Documentation</button>
            </div>
          </div>
        </section>
        {/* Monolith Header (Stats Bar) */}
        <MonolithHeader />
        <DemoMockup />
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
                <p className="mt-4 mb-2"><span className="text-primary-dim">$</span> plusmagi-site-search index --all</p>
                <p className="text-on-surface-variant/40">Indexing 14,502 entries... [####################] 100%</p>
              </div>
            </div>
          </div>
        </section>
        <FaqChangelog />
      </main>
    </div>
  );
}
