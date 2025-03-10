import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LucideMilk, LucideTrendingDown, LucideTrendingUp } from 'lucide-react';

const data = [
  { name: 'Mon', milkIn: 50, milkOut: 30 },
  { name: 'Tue', milkIn: 60, milkOut: 35 },
  { name: 'Wed', milkIn: 55, milkOut: 40 },
  { name: 'Thu', milkIn: 70, milkOut: 50 },
  { name: 'Fri', milkIn: 65, milkOut: 45 },
  { name: 'Sat', milkIn: 80, milkOut: 60 },
  { name: 'Sun', milkIn: 75, milkOut: 55 }
];

const Dashboard = () => {
  const totalMilkIn = data.reduce((sum, day) => sum + day.milkIn, 0);
  const totalMilkOut = data.reduce((sum, day) => sum + day.milkOut, 0);
  const stockMilk = totalMilkIn - totalMilkOut;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dairy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Milk In</h2>
              <p className="text-2xl font-bold">{totalMilkIn} L</p>
            </div>
            <LucideTrendingUp size={32} className="text-green-400" />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Milk Out</h2>
              <p className="text-2xl font-bold">{totalMilkOut} L</p>
            </div>
            <LucideTrendingDown size={32} className="text-red-400" />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Stock Milk</h2>
              <p className="text-2xl font-bold">{stockMilk} L</p>
            </div>
            <LucideMilk size={32} className="text-blue-400" />
          </CardContent>
        </Card>
      </div>
      <div className="bg-gray-800 p-6 mt-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Milk Flow Over the Week</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} />
            <Bar dataKey="milkIn" fill="#22c55e" name="Milk In" />
            <Bar dataKey="milkOut" fill="#ef4444" name="Milk Out" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
