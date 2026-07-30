import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Directory', path: '/employees' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-border flex flex-col shadow-sm z-20">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">E</span>
          </div>
          <h1 className="font-bold text-xl text-foreground tracking-tight">EmpManage</h1>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
          Menu
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="flex items-center space-x-3 text-muted-foreground hover:text-red-500 transition-colors w-full px-3 py-2 rounded-md hover:bg-red-50">
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
