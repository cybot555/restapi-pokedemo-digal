"use client";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");
  const hasValue = value.length > 0;

  return (
    <div className="sticky top-4 z-10" role="search">
      <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur transition focus-within:border-slate-300 focus-within:ring-2 focus-within:ring-slate-300/40">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <label htmlFor="pokemon-search" className="sr-only">
          Search Pokémon
        </label>
        <input
          id="pokemon-search"
          type="search"
          placeholder="Search Pokémon..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onSearch(e.target.value.toLowerCase());
          }}
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          aria-label="Search Pokémon"
        />
        {hasValue && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              onSearch("");
            }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
            aria-label="Clear search"
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
      </div>
    </div>
  );
}
