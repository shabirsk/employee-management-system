import React from 'react';
import { Users, UserPlus, UserCheck, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
      </div>
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
      <span className="text-green-500 font-medium">{trend}</span>
      <span className="text-muted-foreground ml-2">vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Employees" value="156" icon={Users} trend="+12%" />
        <StatCard title="New Hires" value="24" icon={UserPlus} trend="+4%" />
        <StatCard title="Active Status" value="142" icon={UserCheck} trend="+8%" />
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-border p-6 h-[400px] flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="text-lg">Dashboard Analytics</p>
          <p className="text-sm">(Placeholder for charts/graphs)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
