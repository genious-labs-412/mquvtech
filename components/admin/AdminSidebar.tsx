"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FolderPlus,
  Layers,
  LogOut,
  Mail,
} from "lucide-react";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  return (
    <aside className="w-72 border-r border-white/5 p-8 flex flex-col h-screen sticky top-0 bg-black">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white">
          <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-xs">
            M
          </span>

          MQuv Tech
        </h2>
      </div>

      <nav className="space-y-2 flex-1">
        <NavItem
          href="/admin/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={pathname === "/admin/dashboard"}
        />

        <NavItem
          href="/admin/projects"
          icon={<Layers size={18} />}
          label="All Projects"
          active={pathname === "/admin/projects"}
        />

        <NavItem
          href="/admin/projects/create"
          icon={<FolderPlus size={18} />}
          label="New Project"
          active={pathname === "/admin/projects/create"}
        />

        <NavItem
          href="/admin/contacts"
          icon={<Mail size={18} />}
          label="Contacts"
          active={pathname === "/admin/contacts"}
        />
      </nav>

      <button
        onClick={logout}
        className="mt-auto flex items-center gap-3 text-red-500/70 hover:text-red-400 transition-colors py-3 px-4 rounded-xl hover:bg-red-500/5"
      >
        <LogOut size={18} />

        <span className="text-sm font-medium">Logout</span>
      </button>
    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${
        active
          ? "bg-white text-black shadow-lg shadow-white/10"
          : "text-white/40 hover:text-white hover:bg-white/5"
      }`}
    >
      {icon}

      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
