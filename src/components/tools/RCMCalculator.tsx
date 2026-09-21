'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface RCMCalculatorProps {
    onAuditClick?: (metrics: { monthlyClaims: number; avgBilledAmount: number; denialRate: number; projectedRecovery: number }) => void;
}

const RCMCalculator: React.FC<RCMCalculatorProps> = ({ onAuditClick }) => {
    const router = useRouter();

    // Inputs (Defaults)
    const [monthlyClaims, setMonthlyClaims] = useState(500);
    const [avgBilledAmount, setAvgBilledAmount] = useState(150);
    const [denialRate, setDenialRate] = useState(15);
    const recoveryPotential = 65; // Fixed benchmark multiplier

    // Synchronous Derived Calculations (Zero Flash of False Zero)
    const monthlyRevenue = monthlyClaims * avgBilledAmount;
    const annualLeakage = monthlyRevenue * (denialRate / 100) * 12;
    const projectedAnnualRecovery = annualLeakage * (recoveryPotential / 100);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(val);
    };

    const handleExecuteAudit = () => {
        const metrics = {
            monthlyClaims,
            avgBilledAmount,
            denialRate,
            projectedRecovery: Math.round(projectedAnnualRecovery)
        };

        if (onAuditClick) {
            onAuditClick(metrics);
            return;
        }

        // Check if there is an in-page detailed analysis section
        const targetElement = document.getElementById('detailed-analysis');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Populate inputs if present
            const revenueInput = document.querySelector('input[name="revenue"]') as HTMLInputElement;
            if (revenueInput) {
                revenueInput.value = `$${monthlyRevenue.toLocaleString()}`;
                revenueInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } else {
            router.push(`/contact-us?type=audit&volume=${monthlyClaims}&revenue=${monthlyRevenue}`);
        }
    };

    return (
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,51,231,0.06)] border border-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Configuration Inputs */}
                <div className="p-10 md:p-14 lg:p-16 bg-white/50 border-r border-slate-100/50">
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-1 bg-[#0033e7] rounded-full"></span>
                            <span className="text-[#0033e7] font-black uppercase text-[10px] tracking-[5px] block">System Data</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">Practice Profile</h3>
                        <p className="text-slate-500 font-medium text-sm mt-4">Adjust the sliders to reflect your current practice metrics for an illustrative ROI analysis.</p>
                    </div>

                    <div className="space-y-16">
                        {/* Monthly Claims */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label htmlFor="monthlyClaimsSlider" className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-[#0033e7] transition-colors">
                                    Monthly Claim / Encounter Volume
                                </label>
                                <motion.span
                                    key={monthlyClaims}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[#0033e7] font-black text-3xl tabular-nums"
                                >
                                    {monthlyClaims.toLocaleString()}
                                </motion.span>
                            </div>
                            <input
                                id="monthlyClaimsSlider"
                                type="range"
                                min="100"
                                max="10000"
                                step="100"
                                value={monthlyClaims}
                                aria-label="Monthly Claim Volume Slider"
                                aria-valuemin={100}
                                aria-valuemax={10000}
                                aria-valuenow={monthlyClaims}
                                onChange={(e) => setMonthlyClaims(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0033e7]"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>100 Units</span>
                                <span>10,000+ Units</span>
                            </div>
                        </div>

                        {/* Avg Billed Amount */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label htmlFor="avgBilledSlider" className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-[#0033e7] transition-colors">
                                    Avg. Billed Revenue per Encounter
                                </label>
                                <motion.span
                                    key={avgBilledAmount}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[#0033e7] font-black text-3xl tabular-nums"
                                >
                                    {formatCurrency(avgBilledAmount)}
                                </motion.span>
                            </div>
                            <input
                                id="avgBilledSlider"
                                type="range"
                                min="50"
                                max="1000"
                                step="10"
                                value={avgBilledAmount}
                                aria-label="Average Revenue per Encounter Slider"
                                aria-valuemin={50}
                                aria-valuemax={1000}
                                aria-valuenow={avgBilledAmount}
                                onChange={(e) => setAvgBilledAmount(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0033e7]"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>$50.00</span>
                                <span>$1,000.00</span>
                            </div>
                        </div>

                        {/* Denial Rate */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label htmlFor="denialRateSlider" className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-red-500 transition-colors">
                                    Current Denial Index (D.I.)
                                </label>
                                <motion.span
                                    key={denialRate}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 font-black text-3xl tabular-nums"
                                >
                                    {denialRate}%
                                </motion.span>
                            </div>
                            <input
                                id="denialRateSlider"
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={denialRate}
                                aria-label="Current Denial Index Slider"
                                aria-valuemin={1}
                                aria-valuemax={40}
                                aria-valuenow={denialRate}
                                onChange={(e) => setDenialRate(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>1% (Optimal)</span>
                                <span>40% (Critical Alert)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 relative overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,51,231,0.08)] transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-[#0033e7]/5 transition-colors"></div>
                        <div className="w-16 h-16 bg-[#0033e7]/10 text-[#0033e7] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#0033e7]/20 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[2px] mb-1">Gross Estimated Monthly Billing</p>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter tabular-nums">{formatCurrency(monthlyRevenue)}</p>
                        </div>
                    </div>
                </div>

                {/* Right: ROI Assessment */}
                <div className="p-10 md:p-14 lg:p-16 bg-[#0B1F33] text-white relative flex flex-col justify-center overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="mb-14">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-1 bg-teal-400 rounded-full"></span>
                                <span className="text-teal-400 font-black uppercase text-[10px] tracking-[5px] block">Impact Report</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">Illustrative Recovery Potential</h3>
                        </div>

                        <div className="space-y-10">
                            {/* Leakage Assessment */}
                            <motion.div
                                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-10 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 21H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2h-3m-6 0V11m0 10l-4-4m4 4l4-4" /></svg>
                                </div>
                                <p className="text-[10px] text-white/70 font-black uppercase tracking-widest mb-4">Illustrative Yearly Revenue Exposure</p>
                                <motion.p
                                    key={annualLeakage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-black text-red-400 tracking-tighter tabular-nums"
                                >
                                    {formatCurrency(annualLeakage)}
                                </motion.p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="h-2 flex-grow bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(denialRate / 40) * 100}%` }}
                                            className="h-full bg-red-400"
                                        />
                                    </div>
                                    <span className="text-[10px] font-black text-red-400 uppercase tracking-widest whitespace-nowrap">
                                        {denialRate > 10 ? 'High Exposure' : 'Manageable'}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Recovery Opportunity */}
                            <motion.div
                                className="bg-[#0033e7] rounded-2xl p-10 shadow-[0_30px_60px_rgba(0,51,231,0.2)] relative overflow-hidden group hover:shadow-[0_40px_80px_rgba(0,51,231,0.3)] transition-all duration-500"
                            >
                                <div className="absolute bottom-0 right-0 p-8 opacity-20 rotate-12 transform group-hover:scale-110 transition-transform duration-500">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 1v22m5-18l-5-5-5 5m10 8l-5 5-5-5" /></svg>
                                </div>
                                <p className="text-[10px] text-white/80 font-bold uppercase tracking-[3px] mb-4">Projected Recoverable Potential (65% Benchmark Target)</p>
                                <motion.p
                                    key={projectedAnnualRecovery}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter tabular-nums"
                                >
                                    {formatCurrency(projectedAnnualRecovery)}
                                </motion.p>
                                <div className="mt-10 pt-8 border-t border-white/20">
                                    <button 
                                        type="button"
                                        onClick={handleExecuteAudit}
                                        className="w-full bg-white text-[#0033e7] font-black text-sm uppercase tracking-[2px] py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-slate-50 cursor-pointer"
                                    >
                                        Execute Full Audit
                                    </button>
                                    <p className="text-center mt-6 text-[10px] text-white/60 font-bold uppercase tracking-[2px]">
                                        Confidential Consultation Included
                                    </p>
                                    <p className="text-[10px] text-white/40 mt-4 leading-relaxed text-center font-normal italic">
                                        *Disclaimer: Illustrative estimate based on entered parameters and standard 65% addressable denial benchmark. Not a guaranteed financial return.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RCMCalculator;
