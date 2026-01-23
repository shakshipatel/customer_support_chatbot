import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-8">
          Trusted by modern product teams
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-90">
          {/* ACME */}
          <span className="text-lg font-bold tracking-tight text-white">
            ACME
          </span>

          {/* Sphere */}
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            Sphere
          </span>

          {/* NEXUS */}
          <span className="text-lg font-semibold tracking-tight text-white">
            NEXUS
          </span>

          {/* Vantage */}
          <span className="text-lg font-bold tracking-tight text-white italic font-serif">
            Vantage.
          </span>

          {/* HORIZON */}
          <span className="text-lg font-light tracking-[0.2em] text-white">
            HORIZON
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
