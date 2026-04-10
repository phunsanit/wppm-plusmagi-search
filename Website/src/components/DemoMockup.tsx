import React from "react";

export default function DemoMockup() {
  return (
    <section className="py-24 px-8 bg-[#101a27]">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16 grid grid-cols-1 md:grid-cols-2 items-end gap-8">
          <h2 className="text-5xl font-black tracking-tight text-white leading-tight">Built for the <br/>Digital Architect.</h2>
          <p className="text-[#a1acbd] text-lg tracking-wide max-w-sm ml-auto font-medium">Visualizing the flow of data through our custom indexing engine, optimized for metadata density and lightning fast retrieval.</p>
        </div>
        <div className="relative bg-[#172739] rounded-xl p-2 neon-glow overflow-hidden">
          <div className="bg-[#040f1c] rounded-lg overflow-hidden border border-[#3e4958]/20 shadow-2xl">
            {/* Search UI Mockup */}
            <div className="p-4 border-b border-[#3e4958]/30 flex items-center gap-4 bg-[#081422]">
              <span className="material-symbols-outlined text-[#ff8f77] text-2xl">search</span>
              <input className="bg-transparent border-none text-white w-full focus:ring-0 font-light text-lg italic" readOnly type="text" value="Architectural patterns..." />
            </div>
            <div className="flex flex-col md:flex-row h-[400px]">
              <div className="w-full md:w-64 border-r border-[#3e4958]/30 p-4 space-y-4 bg-[#0d1a2a]">
                <span className="text-[0.7rem] font-extrabold text-[#ff8f77] uppercase tracking-widest">Filter By</span>
                <div className="text-sm py-1.5 px-3 bg-[#ff5c3b]/10 text-[#ff5c3b] border-l-2 border-[#ff5c3b] font-bold">Documentation</div>
                <div className="text-sm py-1.5 px-3 text-[#a1acbd] hover:bg-[#122032] transition-colors cursor-pointer">Blog Posts</div>
                <div className="text-sm py-1.5 px-3 text-[#a1acbd] hover:bg-[#122032] transition-colors cursor-pointer">Products</div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-bold text-lg group-hover:text-[#ff8f77] transition-colors">Implementing Headless PM with GraphQL</h4>
                    <span className="text-[0.7rem] bg-[#172739] px-2 py-0.5 text-[#a1acbd] border border-[#3e4958] font-bold">GUIDE</span>
                  </div>
                  <p className="text-[#a1acbd] text-sm line-clamp-2">A deep dive into the architectural benefits of separating the presentation layer from the content repository using PlusMagi indices...</p>
                </div>
                <div className="group cursor-pointer opacity-60">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-bold text-lg">Optimizing Search Metadata</h4>
                    <span className="text-[0.7rem] bg-[#172739] px-2 py-0.5 text-[#a1acbd] border border-[#3e4958] font-bold">TECH DOC</span>
                  </div>
                  <p className="text-[#a1acbd] text-sm line-clamp-2">Learn how to configure smart prefixes to reduce query time by 40% across large enterprise datasets.</p>
                </div>
                <div className="group cursor-pointer opacity-40">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-bold text-lg">Integration: Next.js + WordPress</h4>
                    <span className="text-[0.7rem] bg-[#172739] px-2 py-0.5 text-[#a1acbd] border border-[#3e4958] font-bold">VIDEO</span>
                  </div>
                  <p className="text-[#a1acbd] text-sm line-clamp-2">A video walkthrough of setting up real-time search indexing for React-based frontends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
