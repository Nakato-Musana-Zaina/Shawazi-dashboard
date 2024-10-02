// import React, { useEffect, useState } from 'react';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
// import { Card, CardContent, CardHeader } from '../Ui';
// import useAgreementsData from '@/app/hooks/useAgreementData';

// const AgreementsProgressChart = () => {
//   const { agreementsData, loading, error } = useAgreementsData();
//   const [totalAgreements, setTotalAgreements] = useState(0);

//   useEffect(() => {
//     if (agreementsData) {
      
//       const total = agreementsData.length;
//       setTotalAgreements(total);
//     }
//   }, [agreementsData]);

//   const data = [
//     { name: 'Total Agreements', value: totalAgreements }
//   ];

//   const COLORS = ['#562B00']; 

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <Card className="w-full h-[400px]">
//       <CardHeader>
//         <h2 className="text-xl font-bold">Agreements Progress</h2>
//         <p className="text-sm text-gray-500">Total Agreements: {totalAgreements}</p>
//       </CardHeader>
//       <CardContent>
//         <div className="w-full h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({ value }) => `${value}`} 
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default AgreementsProgressChart;


































"use client"
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '../Ui';
import useAgreementsData from '@/app/hooks/useAgreementData';
import dayjs from 'dayjs'; 
import advancedFormat from 'dayjs/plugin/advancedFormat'; 
dayjs.extend(advancedFormat); 

const AgreementsProgressChart = () => {
  const { agreementsData, loading, error } = useAgreementsData();
  const [monthlyAgreements, setMonthlyAgreements] = useState([]);

  useEffect(() => {
    if (agreementsData) {
      const counts = {};

      agreementsData.forEach((agreement) => {
        const month = dayjs(agreement.date_created).format('YYYY-MM'); 
        counts[month] = (counts[month] || 0) + 1; 
      });

      const data = Object.keys(counts).map((month) => ({
        month: dayjs(month).format('MMMM YYYY'),
        count: counts[month],
      }));

      setMonthlyAgreements(data);
    }
  }, [agreementsData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className="w-full md:w-3/4 lg:w-full h-[400px] mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold">Agreements Progress</h2>
        <p className="text-sm text-gray-500">
          Total Agreements: {monthlyAgreements.reduce((acc, curr) => acc + curr.count, 0)}
        </p>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyAgreements}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#E4960E" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgreementsProgressChart;




