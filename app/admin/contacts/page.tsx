import { prisma } from "@/lib/prisma";
import {
    Mail,
    Phone,
    Calendar,
    Building2,
    Briefcase,
    ChevronRight,
} from "lucide-react";


type Contact = {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    company: string | null;
    service: string | null;
    scope: string | null;
    fileUrl: string | null;
    createdAt: Date;
};

export default async function ContactsPage() {
    const contacts: Contact[] = await prisma.contactDetails.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -z-10" />

        
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>

                        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em]">
                            Lead Management
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Client Contact details 
                    </h1>
                </header>

                {/* Contacts Container */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-[1rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/[0.02]">
                                    <th className="p-6 text-xs font-mono text-white/40 uppercase tracking-widest">
                                        Client Details
                                    </th>

                                    <th className="p-6 text-xs font-mono text-white/40 uppercase tracking-widest">
                                        Service & Company
                                    </th>

                                    <th className="p-6 text-xs font-mono text-white/40 uppercase tracking-widest text-right">
                                        Submitted
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/5">
                                {contacts.length > 0 ? (
                                    contacts.map((contact) => (
                                        <tr
                                            key={contact.id}
                                            className="group hover:bg-white/[0.03] transition-all duration-300"
                                        >
                                            <td className="p-6">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                        {contact.fullName}
                                                    </span>

                                                    <div className="flex flex-col gap-1 mt-2">
                                                        <a
                                                            href={`mailto:${contact.email}`}
                                                            className="text-xs text-white/30 hover:text-white flex items-center gap-2"
                                                        >
                                                            <Mail size={12} />
                                                            {contact.email}
                                                        </a>

                                                        <span className="text-xs text-white/30 flex items-center gap-2">
                                                            <Phone size={12} />
                                                            {contact.phone}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="p-6">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-sm text-white/80">
                                                        <Briefcase
                                                            size={14}
                                                            className="text-blue-500"
                                                        />

                                                        {contact.service || "General Inquiry"}
                                                    </div>

                                                    <div className="flex items-center gap-2 text-xs text-white/30">
                                                        <Building2 size={12} />

                                                        {contact.company || "Individual"}
                                                    </div>
                                                </div>
                                            </td>

                                           

                                            <td className="p-6 text-right">
                                                <div className="flex flex-col items-end gap-2">
                                                    <span className="text-sm font-mono text-white/40">
                                                        {new Date(
                                                            contact.createdAt
                                                        ).toLocaleDateString(undefined, {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        })}
                                                    </span>

                                                    <button className="p-2 rounded-full bg-white/5 border border-white/5 text-white/20 group-hover:text-white group-hover:border-white/20 transition-all">
                                                        <ChevronRight size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="p-20 text-center text-white/20 font-mono text-sm"
                                        >
                                            NO INQUIRIES FOUND IN DATABASE
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

