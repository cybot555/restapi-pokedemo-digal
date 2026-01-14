export default function Loading() {
  const cards = Array.from({ length: 6 });

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-10 animate-pulse">
        <div className="space-y-3">
          <div className="h-3 w-24 rounded-full bg-slate-200/80" />
          <div className="h-10 w-56 rounded-xl bg-slate-200/80" />
          <div className="h-4 w-72 rounded-full bg-slate-200/80" />
        </div>

        <div className="sticky top-4">
          <div className="h-12 rounded-xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-slate-200/80" />
              <div className="mt-5 h-4 w-32 rounded-full bg-slate-200/80" />
              <div className="mt-3 flex gap-2">
                <div className="h-6 w-16 rounded-full bg-slate-200/80" />
                <div className="h-6 w-16 rounded-full bg-slate-200/80" />
              </div>
              <div className="mt-6 h-9 w-24 rounded-full bg-slate-200/80" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
