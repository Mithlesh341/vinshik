// // src/components/Sidebar.jsx
// import { Home, Calendar, Map, Users, Briefcase, FileText, Wrench } from "lucide-react";

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Home", icon: <Home size={20} /> },
//     { name: "Calendar", icon: <Calendar size={20} /> },
//     { name: "Map", icon: <Map size={20} /> },
//     { name: "Clients", icon: <Users size={20} /> },
//     { name: "Jobs", icon: <Briefcase size={20} /> },
//     { name: "Quotes", icon: <FileText size={20} /> },
//     { name: "My Services", icon: <Wrench size={20} /> },
//   ];

//   return (
//     <div className="w-60 h-screen bg-white border-r flex flex-col">
//       <h1 className="text-2xl font-bold px-6 py-4">
//         <span className="text-blue-500">Vin</span>Shik
//       </h1>
//       <nav className="flex-1 px-4">
//         {menuItems.map((item) => (
//           <div
//             key={item.name}
//             className="flex items-center gap-3 px-3 py-2 my-1 rounded-lg hover:bg-blue-50 cursor-pointer"
//           >
//             {item.icon}
//             <span>{item.name}</span>
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
import {
  Home,
  Calendar,
  Map,
  Users,
  Briefcase,
  FileText,
  Wrench,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Calendar", icon: <Calendar size={20} /> },
    { name: "Map", icon: <Map size={20} /> },
    { name: "Clients", icon: <Users size={20} /> },
    { name: "Jobs", icon: <Briefcase size={20} /> },
    { name: "Quotes", icon: <FileText size={20} /> },
    { name: "My Services", icon: <Wrench size={20} /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-screen bg-white border-r border-gray-300 shadow-md shadow-gray-300 z-50 transform transition-transform duration-300 w-60 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo + Close button */}
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-5xl font-bold">
            <span className="text-[#088597]">Vin</span>Shik
          </h1>
          <button
            className="lg:hidden p-2 rounded hover:bg-gray-100"
            onClick={closeSidebar}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 hover:text-[#088597] px-3 py-2 my-1 hover:border-2 rounded-lg hover:border-[#088597] cursor-pointer"
            >
              <span    >{item.icon}</span>
              <span >{item.name}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
