"use client";

import { useState } from "react";
import Search from "./Search";
import PokemonCard from "./PokemonCard";
import StatsChart from "./StatsChart";

export default function ClientWrapper({ data }) {
  const [query, setQuery] = useState("");

  const filtered = (data || []).filter((p) => p.name.includes(query));
  const hasResults = filtered.length > 0;

  return (
    <div className="space-y-6">
      <Search onSearch={setQuery} />

      {hasResults ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300/80 bg-white/70 px-6 py-10 text-center shadow-sm">
          <p className="text-base font-semibold text-slate-700">
            No Pokémon found
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Try a different spelling or search for another favorite.
          </p>
        </div>
      )}

      {filtered.length === 1 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Stats Chart</h3>
          <StatsChart pokemon={filtered[0]} />
        </div>
      )}
    </div>
  );
}
