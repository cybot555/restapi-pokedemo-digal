import ClientWrapper from "./components/ClientWrapper";

async function fetchPokemon(limit = 20) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const list = await res.json();

  const detailed = await Promise.all(
    list.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return detailed;
}

export default async function Page() {
  const data = await fetchPokemon(12);

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-10">
        <header className="space-y-3 text-center sm:text-left">
          <p className="text-sm text-slate-500 sm:text-base">
            Explore Pokémon profiles with clean visuals, quick search, and
            detailed stats at a glance.
          </p>
        </header>

        <ClientWrapper data={data} />
      </div>
    </main>
  );
}
