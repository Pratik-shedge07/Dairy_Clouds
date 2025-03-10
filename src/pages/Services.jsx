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
    <div>Services</div>
  )
}

export default Services