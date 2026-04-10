import React from "react";

export default function TopAppBar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] h-20 flex items-center" style={{backgroundColor:'#0b1622'}}>
      <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold text-white tracking-tight" style={{fontFamily:'Inter'}}>PlusMagi Site Search</span>
          <div className="hidden md:flex gap-8 ml-8">
            <a className="text-white font-extrabold border-b-4 border-[#ff5634] pb-1 px-2 font-['Inter'] tracking-tight" href="#" style={{color:'#ffb4a4'}}>Home</a>
            <a className="text-white/80 hover:text-[#ffb4a4] font-semibold px-2 font-['Inter'] tracking-tight transition-colors" href="#">Documentation</a>
            <a className="text-white/80 hover:text-[#ffb4a4] font-semibold px-2 font-['Inter'] tracking-tight transition-colors" href="#">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#ffb4a4] p-2 hover:bg-[#16202e] rounded-lg transition-colors active:scale-95 duration-200 text-2xl" data-icon="search">search</button>
          <button className="bg-[#ff5c3b] text-white px-6 py-2 font-extrabold tracking-tight text-base rounded-sm shadow-md hover:bg-[#ff775b] transition-all active:scale-95">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
