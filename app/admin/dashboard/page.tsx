'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  ExternalLink,
  Plus,
  Mail,
  Phone,
  Building2,
  Briefcase,
  LogOut,
} from 'lucide-react';

interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  scope?: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin/login');
  };



  // FETCH CONTACTS
  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');

      const data = await response.json();

      if (data.success) {
        setContacts(data.contacts);
      }

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  // Fetch contacts
  useEffect(() => {

    const loadContacts = async () => {
      await fetchContacts();
    };

    loadContacts();

  }, []);

  // Stats
  const stats = [
    {
      label: 'Total Requests',
      value: contacts.length,
      color: 'text-emerald-400',
    },
    {
      label: 'Services',
      value: '08',
      color: 'text-blue-400',
    },
    {
      label: 'Projects',
      value: '12',
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex font-sans">

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">

          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-1">
              Overview
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              Admin Console
            </h1>
          </div>

          <div className="flex items-center gap-4">

            <Link
              href="/admin/projects/create"
              className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all"
            >
              <Plus size={18} />
              Add Project
            </Link>

            <button
              onClick={logout}
              className="border border-white/10 px-5 py-3 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>

          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all"
            >
              <h3 className="text-sm text-white/40 mb-4">
                {stat.label}
              </h3>

              <p className={`text-5xl font-bold tracking-tighter ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CLIENT REQUESTS */}
          <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden p-8">

            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">
                Client Requests
              </h3>

              <span className="text-xs text-white/40">
                Latest Inquiries
              </span>
            </div>

            {/* Loading */}
            {loading && (
              <div className="text-center py-20 text-white/40">
                Loading requests...
              </div>
            )}

            {/* Empty State */}
            {!loading && contacts.length === 0 && (
              <div className="text-center py-20 text-white/40">
                No client requests found
              </div>
            )}

            {/* CONTACT LIST */}
            <div className="space-y-5">

              {contacts.map((contact) => (

                <div
                  key={contact.id}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
                >

                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-5">

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-700 to-black border border-white/10 flex items-center justify-center font-bold">
                        {contact.fullName?.charAt(0)}
                      </div>

                      <div>

                        <h4 className="text-lg font-semibold">
                          {contact.fullName}
                        </h4>

                        <p className="text-sm text-white/40 mt-1 flex items-center gap-2">
                          <Building2 size={14} />
                          {contact.company || 'No Company'}
                        </p>

                      </div>

                    </div>

                    <div>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                        {contact.service || 'General Inquiry'}
                      </span>
                    </div>

                  </div>

                  {/* INFO */}
                  <div className="space-y-3 text-sm text-white/70">

                    <div className="flex items-center gap-3">
                      <Mail size={15} className="text-white/40" />
                      {contact.email}
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={15} className="text-white/40" />
                      {contact.phone}
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase
                        size={15}
                        className="text-white/40 mt-1"
                      />

                      <p className="leading-relaxed text-white/60">
                        {contact.scope || 'No project scope provided'}
                      </p>
                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">

                    <p className="text-xs text-white/30">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </p>

                    <button className="text-white/30 hover:text-white transition-all">
                      <ExternalLink size={16} />
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8">

            <h3 className="text-xl font-semibold mb-8">
              Service Pillars
            </h3>

            <div className="space-y-6">

              <TechProgress
                label="Web Development"
                percent={95}
              />

              <TechProgress
                label="UI / UX Design"
                percent={90}
              />

              <TechProgress
                label="Mobile Apps"
                percent={80}
              />

              <TechProgress
                label="Backend Systems"
                percent={88}
              />

              <TechProgress
                label="Automation"
                percent={70}
              />

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}


// TECH PROGRESS
function TechProgress({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between text-xs font-medium">
        <span className="text-white/50">
          {label}
        </span>

        <span>
          {percent}%
        </span>
      </div>

      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-1000"
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  );
}