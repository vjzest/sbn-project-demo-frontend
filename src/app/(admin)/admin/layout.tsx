'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/AdminAuthProvider';
import { FaTachometerAlt, FaBlog, FaEnvelope, FaSearch, FaSignOutAlt, FaBars, FaTimes, FaUserCircle, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { logout, loading, admin } = useAdminAuth();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Auth Guard
    const hasToken = typeof window !== 'undefined' && localStorage.getItem('adminToken');

    const isSeoEditor = admin?.role === 'seo_editor';

    // Route access guard for SEO Editor
    React.useEffect(() => {
        if (isSeoEditor && (pathname.startsWith('/admin/contacts') || pathname.startsWith('/admin/error-logs'))) {
            router.push('/admin/dashboard');
        }
    }, [isSeoEditor, pathname, router]);

    if (pathname === '/admin') return <>{children}</>;

    if (loading && !admin && hasToken) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#07090F]">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-[#0033e7] border-t-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-4 border-4 border-white/10 border-b-transparent rounded-full animate-spin [animation-duration:2s]"></div>
                    </div>
                    <div className="text-center">
                        <p className="text-white font-black text-xs uppercase tracking-[4px]">Nexus System</p>
                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Authenticating Profile...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!admin && !loading) return null;

    const allNavItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Blogs', href: '/admin/blogs', icon: <FaBlog /> },
        { name: 'Inquiries', href: '/admin/contacts', icon: <FaEnvelope />, adminOnly: true },
        { name: 'SEO Engine', href: '/admin/seo', icon: <FaSearch /> },
        { name: 'Error Logs', href: '/admin/error-logs', icon: <FaExclamationTriangle />, adminOnly: true },
    ];

    const navItems = isSeoEditor ? allNavItems.filter(item => !item.adminOnly) : allNavItems;

    return (
        <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
            {/* Desktop Sidebar - Improved Spacing and Color */}
            <aside className="hidden lg:flex w-72 min-w-[288px] flex-shrink-0 bg-[#0F172A] text-white flex-col h-full relative z-40 shadow-[10px_0_50px_rgba(0,0,0,0.2)] border-r border-white/5">
                {/* Brand Identity */}
                <div className="pt-16 pb-12 px-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2.5 shadow-2xl transition-all duration-500 group-hover:border-[#0033e7]/50">
                            <Image src="/Logo.webp" alt="Logo" fill className="object-contain p-1.5" />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-[18px] font-black text-white tracking-[5px] leading-none uppercase">Nexus</h2>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-[4px] mt-2 opacity-50 italic">Control Panel</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow px-4 pb-10 overflow-y-auto custom-scrollbar">
                    <div className="mb-10">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[4px] px-6 mb-8 opacity-40">Core Application</p>
                        <ul className="space-y-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-5 px-6 py-4.5 rounded-2xl text-[11px] font-black transition-all duration-500 relative group ${isActive
                                                ? 'bg-white/[0.05] text-white'
                                                : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.02]'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="indicator"
                                                    className="absolute left-0 w-1 h-6 bg-[#0033e7] rounded-r-full shadow-[0_0_15px_rgba(0,51,231,1)]"
                                                    initial={false}
                                                />
                                            )}
                                            <span className={`text-[18px] transition-all duration-500 ${isActive ? 'text-[#0033e7] scale-110' : 'group-hover:text-slate-300'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="tracking-[2.5px] uppercase">{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="space-y-10 pt-6">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[4px] px-6 opacity-40">Security Status</p>

                        <div className="px-3">
                            <div className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 space-y-4 shadow-inner">
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[2px] flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                    Connection: Active
                                </p>
                            </div>
                        </div>

                        <div className="px-3">
                            <div className="p-6 rounded-[1.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 flex items-center gap-4 group cursor-default">
                                <div className="w-10 h-10 rounded-xl bg-[#080C14] flex items-center justify-center text-slate-500 border border-white/5 group-hover:border-[#0033e7]/30 transition-all">
                                    <FaUserCircle size={22} className="group-hover:text-white transition-all" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-black text-white uppercase tracking-widest leading-none">System</p>
                                    <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[2px] mt-2 italic">Super User</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Footer Section */}
                <div className="p-6 mt-auto">
                    <button
                        onClick={logout}
                        className="flex items-center justify-center gap-4 px-6 py-5 rounded-2xl text-[10px] font-black text-slate-500 hover:text-white hover:bg-red-500 transition-all duration-700 group border border-white/[0.02] hover:border-red-400 w-full uppercase tracking-[4px]"
                    >
                        <FaSignOutAlt className="text-sm group-hover:-translate-x-1 transition-transform" />
                        <span>Terminate</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#0F172A]/90 backdrop-blur-2xl border-b border-white/5 z-50 px-6 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 relative rounded-xl overflow-hidden border border-white/10 bg-white/5 p-2">
                        <Image src="/Logo.webp" alt="Logo" fill className="object-contain p-1.5" />
                    </div>
                    <div>
                        <h2 className="text-[14px] font-black text-white uppercase tracking-[3px] leading-none">Nexus</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[2px] mt-1">Admin Dashboard</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-white shadow-xl active:scale-90 transition-all border border-white/10"
                >
                    {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-[#0F172A] text-white z-[70] lg:hidden flex flex-col shadow-[20px_0_60px_rgba(0,0,0,0.5)] border-r border-white/5"
                        >
                            <div className="p-8 border-b border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                        <Image src="/Logo.webp" alt="Logo" fill className="object-contain p-2" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-black text-white tracking-[4px] leading-none uppercase">Nexus</h2>
                                        <p className="text-[10px] font-black text-[#0033e7] uppercase tracking-[2px] mt-1">Mobile Access</p>
                                    </div>
                                </div>
                            </div>

                            <nav className="flex-grow mt-10 px-6">
                                <ul className="space-y-4">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`flex items-center gap-4 px-7 py-5 rounded-2xl text-[12px] font-black transition-all relative overflow-hidden ${isActive
                                                        ? 'bg-white/[0.08] text-white'
                                                        : 'text-slate-500 hover:text-white'
                                                        }`}
                                                >
                                                    {isActive && (
                                                        <div className="absolute left-0 w-1 h-6 bg-[#0033e7] rounded-r-full shadow-[0_0_15px_rgba(0,51,231,0.8)]" />
                                                    )}
                                                    <span className={`text-[20px] ${isActive ? 'text-[#0033e7]' : 'text-slate-600'}`}>{item.icon}</span>
                                                    <span className="uppercase tracking-[3px]">{item.name}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            <div className="p-8 border-t border-white/5 space-y-6">
                                <div className="flex items-center gap-5 p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.05]">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                                        <FaUserCircle size={22} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[11px] font-black text-white uppercase tracking-widest leading-none">{admin?.user?.split('@')[0] || 'User'}</p>
                                        <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[2px] mt-1.5 line-clamp-1 italic">Admin Access</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                    className="flex items-center justify-center gap-4 px-6 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[4px] text-slate-500 hover:text-white hover:bg-red-500 transition-all border border-white/[0.03] w-full"
                                >
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto bg-[#F8FAFC] pt-16 lg:pt-0 custom-scrollbar">
                <style jsx global>{`
                    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
                `}</style>
                <div className="max-w-[1700px] mx-auto p-4 lg:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthProvider>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </AdminAuthProvider>
    );
}
