'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, FolderPlus, Layers, LogOut, ExternalLink, Plus, Mail } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin/login');
  };

  // Mock data for display
  const stats = [
    { label: 'Live Projects', value: '12', color: 'text-emerald-400' },
    { label: 'In Progress', value: '05', color: 'text-blue-400' },
    { label: 'Total Tech Stack', value: '08', color: 'text-purple-400' },
  ];

  const recentProjects = [
    { name: 'NMF News', type: 'News Platform', stack: 'Laravel/AMP', status: 'Live' },
    { name: 'Sentinel Project', type: 'Automation', stack: 'Python/SQL', status: 'Dev' },
    { name: 'World91', type: 'Video Portal', stack: 'Flutter/Firebase', status: 'Live' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex font-sans">
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Overview</p>
            <h1 className="text-4xl font-bold">Admin Console</h1>
          </div>
          <Link 
            href="/admin/projects/create"
            className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all"
          >
            <Plus size={18} /> Add Project
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all group">
              <h3 className="text-sm text-white/40 mb-4">{stat.label}</h3>
              <p className={`text-5xl font-bold tracking-tighter ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects Table */}
          <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">Active Deployments</h3>
              <button className="text-xs text-white/40 hover:text-white transition-colors">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentProjects.map((project, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs font-bold">
                      {project.name[0]}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{project.name}</h4>
                      <p className="text-xs text-white/30">{project.type}</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/60 border border-white/10">{project.stack}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
                    <button className="text-white/20 hover:text-white"><ExternalLink size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Distribution / Expertise */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-semibold mb-6">Service Pillars</h3>
            <div className="space-y-6">
              <TechProgress label="Mobile Apps (Flutter)" percent={85} />
              <TechProgress label="Web Platforms (Laravel)" percent={95} />
              <TechProgress label="Python Automation" percent={70} />
              <TechProgress label="UI/UX Minimalist" percent={90} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${
        active 
          ? 'bg-white text-black shadow-lg shadow-white/10' 
          : 'text-white/40 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function TechProgress({ label, percent }: { label: string, percent: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-white/50">{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-1000" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}