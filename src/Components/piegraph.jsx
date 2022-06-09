import React from 'react';
import './graph.css';
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from 'recharts';

const data = [
  { name: 'Present', value: 400 },
  { name: 'Absent', value: 600 },
  { name: 'Leave', value: 300 },
];

const state = [
  {name: 'Present', value: 500},
  {name: 'Absent', value: 60},
  {name: 'Leave', value: 80}
];
const COLORS = ['#329A45', '#DF2A2A', '#DEA82A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Piegraph() {

 
    return (
      <div  className="piegraph">
      <PieChart width={150} height={250}>
        <Pie
          data={data}
          cx={75}
          cy={105}
          innerRadius={30}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend/>
        </PieChart>
        <PieChart width={200} height={250}>
      <Pie
      cx={110}
          data={state}
          innerRadius={30}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend/>
        <Tooltip/>
      </PieChart>
      </div>
    );
  }
export default Piegraph;

