'use client';

import { usePathname } from 'next/navigation';

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // Hide sidebar on login page
  const hideSidebar = pathname === '/admin/login';

  return (
    <div className="min-h-screen bg-black text-white flex">

      {!hideSidebar && <AdminSidebar />}

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}