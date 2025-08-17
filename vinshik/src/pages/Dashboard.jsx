// // src/pages/Dashboard.jsx
// import Card from "../components/Card";

// const Dashboard = () => {
//   const stats = [
//     { title: "Active Jobs", value: "43.7k", percent: 12.2, color: "from-blue-400 to-blue-600" },
//     { title: "Jobs In Progress", value: "92.3k", percent: -3.11, color: "from-orange-400 to-orange-600" },
//     { title: "Finished Jobs", value: "66.3k", percent: 3.3, color: "from-green-400 to-green-600" },
//     { title: "New Leads", value: "92.3k", percent: 31, color: "from-purple-400 to-purple-600" },
//   ];

//   return (
//     <div className="p-6">
//       <h3 className="text-gray-600 mb-6">Here's what you need to focus on today</h3>
//       <div className="flex gap-6 flex-wrap">
//         {stats.map((stat, i) => (
//           <Card key={i} {...stat} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// src/pages/Dashboard.jsx
import Card from "../components/Card";
import  { TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Jobs",
      icon: <TrendingDown className="rounded-full w-5 h-5 px-1 py-1 bg-green-200"/>,
      value: "43.7k",
      percent: 12.2,
      barColor: "#3b82f6", // Tailwind blue-500
      data: [
        { value: 8 },
        { value: 14 },
        { value: 9 },
   
        { value: 9 },
        { value: 11 },
        { value: 7 },
        { value: 9 },
      ],
    },
    {
      title: "Jobs In Progress",
      icon:<TrendingUp color="red" className="rounded-full w-5 h-5 px-1 py-1 bg-red-200"  />,
      value: "92.3k",
      percent: -3.11,
      barColor: "#f97316", // Tailwind orange-500
      data: [
        { value: 8 },
        { value: 14 },
        { value: 9 },
   
        { value: 9 },
        { value: 11 },
        { value: 7 },
        { value: 9 },
      ],
    },
    {
      title: "Finished Jobs",
      icon:<TrendingUp className="rounded-full w-5 h-5 px-1 py-1 bg-green-200"/>,
      value: "66.3k",
      percent: 3.3,
      barColor: "#22c55e", // Tailwind green-500
      data: [
        { value: 8 },
        { value: 14 },
        { value: 9 },
   
        { value: 9 },
        { value: 11 },
        { value: 7 },
        { value: 9 },
      ],
    },
    {
      title: "New Leads",
      icon:<TrendingUp className="rounded-full w-5 h-5 px-1 py-1 bg-green-200"/>,
      value: "92.3k",
      percent: 31,
      barColor: "#a855f7", // Tailwind purple-500
      data: [
        { value: 8 },
        { value: 14 },
        { value: 9 },
   
        { value: 9 },
        { value: 11 },
        { value: 7 },
        { value: 9 },
    
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-bold ml-3">Welcome back, Julie <span className="text-3xl">👋</span></h2>
      <h3 className="text-gray-500 text-sm mt-2 mb-6 ml-3">
        Here's what you need to focus on today
      </h3>
      <div className="flex gap-6 flex-wrap ml-5 mr-1">
        {stats.map((stat, i) => (
          <Card key={i} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
