// import { 
//   Newspaper, 
//   Building2, 
//   Sprout, 
//   Briefcase, 
//   MessageSquare, 
//   Store, 
//   CalendarDays, 
//   Users, 
//   Settings 
// } from "lucide-react";

// const navigationItems = [
//   { name: "News & Announcements", icon: Newspaper, color: "#fe640b" },
//   { name: "Local Services Directory", icon: Building2, color: "#fe640b" },
//   { name: "Agriculture & Farmer Support", icon: Sprout, color: "#fe640b" },
//   { name: "Job Portal & Skill Development", icon: Briefcase, color: "#fe640b" },
//   { name: "Grievance & Feedback", icon: MessageSquare, color: "#fe640b" },
//   { name: "Local Marketplace", icon: Store, color: "#fe640b" },
//   { name: "Events & Community Calendar", icon: CalendarDays, color: "#fe640b" },
//   { name: "Users & Roles", icon: Users, color: "#fe640b" },
//   { name: "Settings", icon: Settings, color: "#fe640b" },
// ];

// export function Sidebar({ activeSection, onSectionChange }) {
//   return (
//     <aside className="w-74 bg-white border-r border-[#dce0e8] shadow-lg flex flex-col h-full">
//       <div className="p-6 border-b border-[#dce0e8] flex-shrink-0">
//         <h1 className="text-[#fe640b]">Village Admin Panel</h1>
//         <p className="text-[#6c6f85] mt-1">Manage your village services</p>
//       </div>
      
//       <nav className="p-4 flex-1 overflow-y-auto">
//         {navigationItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeSection === item.name;
          
//           return (
//             <button
//               key={item.name}
//               onClick={() => onSectionChange(item.name)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
//                 isActive 
//                   ? "shadow-md transform scale-[1.02]" 
//                   : "hover:bg-[#e6e9ef]"
//               }`}
//               style={{
//                 backgroundColor: isActive ? item.color : "transparent",
//                 color: isActive ? "#ffffff" : "#4c4f69",
//               }}
//             >
//               <Icon className="w-5 h-5 flex-shrink-0" />
//               <span className="text-left">{item.name}</span>
//             </button>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }


import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Newspaper,
  Briefcase,
  CalendarDays,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Grievance & Feedback", icon: MessageSquare },
  { name: "Users & Roles", icon: Users },
  { name: "News & Announcements", icon: Newspaper },
  { name: "Jobs", icon: Briefcase },
  { name: "Events", icon: CalendarDays },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({ activeSection, onSectionChange }) {
  return (
    <aside className="w-72 bg-white border-r border-gray-200">
      <div className="p-6 border-b">
        <h1 className="text-xl text-orange-600">Village Admin</h1>
        <p className="text-sm text-gray-500">Admin Control Panel</p>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.name;

          return (
            <button
              key={item.name}
              onClick={() => onSectionChange(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
