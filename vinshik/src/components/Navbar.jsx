// // src/components/Navbar.jsx
// import { Mail, Settings } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
//       <h2 className="text-xl font-semibold">Welcome back, Julie 👋</h2>
//       <div className="flex items-center gap-4">
//         <Mail className="cursor-pointer" />
//         <Settings className="cursor-pointer" />
//         <img
//           src="https://via.placeholder.com/40"
//           alt="profile"
//           className="w-10 h-10 rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { Mail, Settings, Menu, Dot } from "lucide-react";
import profile from '../assets/profile.jpg';


const Navbar = ({ openSidebar }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300 shadow-md shadow-gray-300">
      <div className="flex items-center gap-4">
        {/* Hamburger menu (only on mobile) */}
        <button
          onClick={openSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu />
        </button>
        
      </div>

      <div className="flex items-center gap-8">
        <Dot color="#088597" className="absolute ml-3 mb-8" size={55}/>
        <Mail className="cursor-pointer border-2 border-gray-200 rounded-xl px-2 py-2 w-10 h-10" />
        <Settings className="cursor-pointer border-2 border-gray-200 rounded-xl  px-2 py-2 w-10 h-10" />
        <img
          src={profile}
          alt="profile"
          className="w-10 h-12 rounded-2xl border-2 border-[#088597] px-1 py-1"
        />
      </div>
    </div>
  );
};

export default Navbar;
