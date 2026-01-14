"use client";

import { useEffect } from "react";
import { getTypeClasses } from "./typeStyles";

const STAT_LABELS = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "SPD",
};

const MAX_STAT = 200;

export default function StatsModal({ pokemon, isOpen, onClose }) {
  const dialogId = `stats-${pokemon.id}`;
  const titleId = `stats-title-${pokemon.id}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4 py-8 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        id={dialogId}
        className="w-full max-w-lg rounded-2xl border border-slate-200/70 bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 pb-4 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-slate-200/70">
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} sprite`}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <h2
                id={titleId}
                className="text-lg font-semibold capitalize text-slate-900"
              >
                {pokemon.name}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
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
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
            aria-label="Close stats"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="space-y-4 px-6 py-6">
          {pokemon.stats.map((stat) => {
            const label = STAT_LABELS[stat.stat.name] || stat.stat.name;
            const percent = Math.min(
              100,
              Math.round((stat.base_stat / MAX_STAT) * 100)
            );

            return (
              <div key={stat.stat.name} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                  <span>{label}</span>
                  <span className="tabular-nums text-slate-800">
                    {stat.base_stat}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-slate-900/80"
                    style={{ width: `${percent}%` }}
                    role="progressbar"
                    aria-label={`${label} stat`}
                    aria-valuenow={stat.base_stat}
                    aria-valuemin={0}
                    aria-valuemax={MAX_STAT}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
