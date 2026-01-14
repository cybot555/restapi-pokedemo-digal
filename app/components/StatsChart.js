"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

// register radar components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function StatsChart({ pokemon }) {
  const labels = pokemon.stats.map((s) => s.stat.name);
  const values = pokemon.stats.map((s) => s.base_stat);

  const data = {
    labels,
    datasets: [
      {
        label: pokemon.name,
        data: values,
      },
    ],
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
      <Radar data={data} />
    </div>
  );
}
