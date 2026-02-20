import React from 'react';

const UtilitySection = () => {
  const utilities = [
    {
      title: "GUARANTEED SLOT",
      desc: "Hold 6 NEXORA NFTs to secure a GTD slot in the ecosystem.",
      stat: "6+ NFTs",
      tag: "VIP ACCESS"
    },
    {
      title: "GAME CHIP MINT",
      desc: "Get early access to minting before the public sale begins.",
      stat: "1,111 TOTAL",
      tag: "ULTRA LIMITED"
    },
    {
      title: "BATTLE ROYALE",
      desc: "Earn rewards by competing and dominating the arena.",
      stat: "P2E ACTIVE",
      tag: "OWN THE ADVANTAGE"
    }
  ];

  return (
    <section className="bg-[#050505] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#BC13FE] pl-6">
          <h2 className="text-5xl font-black tracking-tighter italic">
            NEXORA <span className="text-[#BC13FE]">UTILITY</span>
          </h2>
          <p className="text-gray-400 mt-2 font-mono uppercase tracking-widest">
            The Key to the Gameverse
          </p>
        </div>

        {/* Utility Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {utilities.map((item, index) => (
            <div 
              key={index} 
              className="relative group bg-[#1A1A1A]/50 backdrop-blur-sm border border-white/10 p-8 rounded-br-3xl transition-all duration-300 hover:border-[#BC13FE]/50 hover:-translate-y-2"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#BC13FE] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-[#BC13FE] font-mono text-sm mb-4">[{item.tag}]</div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <div className="pt-4 border-t border-white/5">
                <span className="text-xl font-black font-mono text-white/90">
                  {item.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-mono animate-pulse">
            SYSTEM STATUS: PHASE 1 READY // HOLD NEXORA. PLAY TO WIN.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
