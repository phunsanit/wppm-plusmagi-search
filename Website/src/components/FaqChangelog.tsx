import React from "react";

export default function FaqChangelog() {
  return (
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
  );
}
