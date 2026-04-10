import React from "react";

export default function MonolithHeader() {
  return (
    <section className="monolith-header w-full border-t-2 border-[#ff5c3b] bg-black" style={{borderBottom:'2px solid #ff5c3b'}}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-8 gap-8">
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-white text-3xl font-black tracking-tight">1.2M+</span>
          <span className="text-[#ff5c3b] text-xs font-extrabold uppercase tracking-widest mt-1">ACTIVE QUERIES</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-white text-3xl font-black tracking-tight">45ms</span>
          <span className="text-[#ff5c3b] text-xs font-extrabold uppercase tracking-widest mt-1">AVG LATENCY</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-white text-3xl font-black tracking-tight">100%</span>
          <span className="text-[#ff5c3b] text-xs font-extrabold uppercase tracking-widest mt-1">OPEN SOURCE</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-white text-3xl font-black tracking-tight">15k+</span>
          <span className="text-[#ff5c3b] text-xs font-extrabold uppercase tracking-widest mt-1">GITHUB STARS</span>
        </div>
      </div>
    </section>
  );
}
