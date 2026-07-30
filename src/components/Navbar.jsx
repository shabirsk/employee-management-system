import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-border px-6 py-3 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center bg-muted px-3 py-2 rounded-md w-96 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <Search className="w-4 h-4 text-muted-foreground mr-2" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none w-full text-sm placeholder:text-muted-foreground text-foreground"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <UserCircle className="w-8 h-8 text-primary" />
          <div className="hidden md:block text-sm">
            <p className="font-medium text-foreground leading-none">Admin User</p>
            <p className="text-muted-foreground text-xs mt-1">admin@company.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
