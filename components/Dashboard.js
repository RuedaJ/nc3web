'use client';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [
  { name: 'Ene', score: 62 },{ name: 'Feb', score: 68 },{ name: 'Mar', score: 72 },
  { name: 'Abr', score: 78 },{ name: 'May', score: 83 },{ name: 'Jun', score: 85 },
];
export default function Dashboard() {
  return (
    <div id="dashboard-card" className="rounded-2xl border border-emerald-200/50 overflow-hidden shadow-md">
      <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-200 text-stone-800 font-medium flex items-center justify-between">
        <span>Score Regenerativo (mock)</span>
        <span className="text-sm text-stone-600">Actualizado: ahora</span>
      </div>
      <div className="p-4" style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#84cc16" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[50, 100]} />
            <Tooltip />
            <Area type="monotone" dataKey="score" stroke="#059669" fillOpacity={1} fill="url(#colorScore)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}