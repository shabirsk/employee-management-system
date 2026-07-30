import React from 'react';
import { MoreVertical, Mail, Phone, Edit2, Trash2 } from 'lucide-react';

const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Software Engineer', department: 'Engineering', email: 'alice@company.com', phone: '+1 (555) 123-4567', status: 'Active' },
  { id: 2, name: 'Bob Smith', role: 'Product Manager', department: 'Product', email: 'bob@company.com', phone: '+1 (555) 987-6543', status: 'Active' },
  { id: 3, name: 'Charlie Brown', role: 'UX Designer', department: 'Design', email: 'charlie@company.com', phone: '+1 (555) 555-5555', status: 'On Leave' },
  { id: 4, name: 'Diana Prince', role: 'HR Director', department: 'Human Resources', email: 'diana@company.com', phone: '+1 (555) 111-2222', status: 'Active' },
];

const EmployeeDirectory = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Employee Directory</h2>
          <p className="text-muted-foreground mt-1">Manage and view all employee information.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
          Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{emp.name}</p>
                        <p className="text-xs text-muted-foreground">ID: #{emp.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-sm text-foreground">{emp.role}</p>
                    <p className="text-xs text-muted-foreground">{emp.department}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5"/> {emp.email}</div>
                      <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5"/> {emp.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      emp.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors bg-white hover:bg-muted rounded-md shadow-sm border border-border">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors bg-white hover:bg-red-50 rounded-md shadow-sm border border-border">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
