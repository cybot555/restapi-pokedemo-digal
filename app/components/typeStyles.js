const TYPE_STYLES = {
  bug: "bg-lime-100 text-lime-700 border-lime-200",
  dark: "bg-slate-200 text-slate-700 border-slate-300",
  dragon: "bg-indigo-100 text-indigo-700 border-indigo-200",
  electric: "bg-amber-100 text-amber-800 border-amber-200",
  fairy: "bg-pink-100 text-pink-700 border-pink-200",
  fighting: "bg-orange-100 text-orange-700 border-orange-200",
  fire: "bg-orange-100 text-orange-800 border-orange-200",
  flying: "bg-sky-100 text-sky-700 border-sky-200",
  ghost: "bg-violet-100 text-violet-700 border-violet-200",
  grass: "bg-emerald-100 text-emerald-700 border-emerald-200",
  ground: "bg-yellow-100 text-yellow-700 border-yellow-200",
  ice: "bg-cyan-100 text-cyan-700 border-cyan-200",
  normal: "bg-zinc-100 text-zinc-700 border-zinc-200",
  poison: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  psychic: "bg-rose-100 text-rose-700 border-rose-200",
  rock: "bg-amber-100 text-amber-700 border-amber-200",
  steel: "bg-slate-100 text-slate-700 border-slate-200",
  water: "bg-blue-100 text-blue-700 border-blue-200",
};

export function getTypeClasses(type) {
  return TYPE_STYLES[type] || "bg-slate-100 text-slate-700 border-slate-200";
}
