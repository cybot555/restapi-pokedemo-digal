"use client";
import { useState } from "react";
import StatsModal from "./StatsModal";
import { getTypeClasses } from "./typeStyles";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  return (
    <>
      <div className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
        <div className="flex flex-col items-center gap-4 px-5 pb-4 pt-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-slate-200/70">
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} sprite`}
              className="h-16 w-16 object-contain"
              loading="lazy"
            />
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-lg font-semibold capitalize text-slate-900">
              {pokemon.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {pokemon.types.map((t) => (
                <span
                  key={t.type.name}
                  className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${getTypeClasses(
                    t.type.name
                  )}`}
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto px-5 pb-5">
          <button
            onClick={() => setShowStats((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
            aria-haspopup="dialog"
            aria-expanded={showStats}
            aria-controls={`stats-${pokemon.id}`}
          >
            {showStats ? "Hide Stats" : "Show Stats"}
          </button>
        </div>
      </div>

      <StatsModal
        pokemon={pokemon}
        isOpen={showStats}
        onClose={() => setShowStats(false)}
      />
    </>
  );
}
