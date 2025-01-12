import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 78, physics: 84, chemistry: 73 },
        { id: 2, name: "Bob", math: 85, physics: 76, chemistry: 88 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 95 },
        { id: 4, name: "David", math: 65, physics: 70, chemistry: 68 },
        { id: 5, name: "Ella", math: 88, physics: 92, chemistry: 86 },
        { id: 6, name: "Frank", math: 74, physics: 68, chemistry: 75 },
        { id: 7, name: "Grace", math: 81, physics: 85, chemistry: 80 },
        { id: 8, name: "Hannah", math: 95, physics: 90, chemistry: 94 },
        { id: 9, name: "Ian", math: 67, physics: 72, chemistry: 65 },
        { id: 10, name: "Jack", math: 89, physics: 87, chemistry: 82 },
      ];
      
    return (
        <div>
           <LChart width={700} height={400} data={studentMarks}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
           <Line dataKey="math" stroke='red'></Line>
           <Line dataKey="physics" stroke='yellow'></Line>
           <Line dataKey="chemistry" stroke='blue'></Line>
           </LChart>
        </div>
    );
};

export default LineChart;