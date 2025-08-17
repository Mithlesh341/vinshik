// // src/components/Card.jsx
// const Card = ({ title, value, percent, color }) => {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm border w-60">
//       <p className="text-sm text-gray-500">{title}</p>
//       <h2 className="text-2xl font-bold">{value}</h2>
//       <p className={`text-sm ${percent > 0 ? "text-green-500" : "text-red-500"}`}>
//         {percent > 0 ? `+${percent}%` : `${percent}%`}
//       </p>
//       <div className={`h-10 mt-2 rounded bg-gradient-to-r ${color}`}></div>
//     </div>
//   );
// };

// export default Card;



// src/components/Card.jsx
import {
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import  { TrendingUp, TrendingDown } from "lucide-react";


const Card = ({ title, value, icon, percent, data, barColor }) => {
  return (
    <div className="bg-white p-4 rounded-xl  border border-gray-300 shadow-md  shadow-gray-400 w-72">
        <p className="text-sm text-black font-semibold">{title}</p>
        <div className="justify-between flex flex-row mt-3 space-x-6">
          <div className="flex flex-col  space-y-3 ">
            
            <p
        className={`flex flex-row space-x-2   text-sm `}
      >
        {icon}
        <span className="text-gray-500 font-semibold">{percent > 0 ? `+${percent}%` : `${percent}%`}</span>
        
      </p>
      <h2 className="text-2xl font-bold">{value}</h2>
    
        </div>
      

      {/* Mini Chart */}
      <div className="h-16 w-full flex justify-end ">
        <ResponsiveContainer width="35%" height="90%">
          <BarChart data={data}>
            <Bar dataKey="value" fill={barColor} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
        </div>
       
  );
};

export default Card;
