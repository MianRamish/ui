
import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis,  Tooltip,LabelList, Legend } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
const colors = scaleOrdinal(schemeCategory10).range();
const barColors = [ '#390842', '#dc2424', '#fcda00', '#8383ba', '#23dbbd', '#131615', '#402511', '#520F00', '#2E2328' ];
const data = [
  {
    name: "1st",
    ClassStrength: 400,
   
  },
  {
    name: "2nd",
    ClassStrength: 300,
    
  },
  {
    name: "3rd",
    ClassStrength: 200,
   
  },
  {
    name: "4th",
    ClassStrength: 278,
    
  },
  {
    name: "6th",
    ClassStrength: 189,
    
  },
  {
    name: "7th",
    ClassStrength: 239,
    
  },
  {
    name: "8th",
    ClassStrength: 349,
  },
  {
    name: "9th",
    ClassStrength: 800,
  },
  {
    name: "10th",
    ClassStrength: 1149,
    
  },
];


export default function Bargraph() {
  return (
    <div className="bar-chart">
      <BarChart
      width={300}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        Animated:(true),
        bottom: 5
      }}
    >
      <Legend/>
      <XAxis dataKey="name" />
      
      <defs>
  {barColors.map((color, index) => (
   <linearGradient id={`colorUv${index}`} x1='100%' y1='100%' spreadMethod='reflect'>
    <stop offset='0' stopColor='#ffffff' />
    <stop offset='1' stopColor={color} />
   </linearGradient>
  ))}
 </defs>
      <Tooltip/>
      <Bar
        dataKey="ClassStrength"
        label={{ position: "top" }}
      >
     
 {data.map((entry, index) => (
   <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
  ))}
  
      </Bar>
    </BarChart>
    </div>
  );
}