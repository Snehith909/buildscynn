import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ClientBottomNav } from '../common/ClientBottomNav';

export const ClientProfileScreen: React.FC = () => {
  const {
    setPerspective,
    setContractorTab,
    instantDeliveryAlerts,
    setInstantDeliveryAlerts,
    dailyLabourSummary,
    setDailyLabourSummary,
    weeklyFinancialAudit,
    setWeeklyFinancialAudit,
    showToast,
  } = useSync();

  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const sarahAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAZRseKf4YfGDhzNsQpvFukrgxg31YosOPYwAfCykYenUFJYBy2hdDiH-HxnYBiUCAcGCPpP0rEDv8pPmDk4d1_En_uRsaWWh_5iysQDdKKsSjwX2pr8xSfRnq-_CbOiMPOscksjKSaeMta4q7B-gbTJijMvGM2b-F8VJ0uIc2afUuk5N0gNfXHiYLBIe2Io1v0Gn4KDJZK2XaxRYfZzs_aV_94-GgWPEwCvSqW8c8rb04dILk_UyyCxw';

  const handleExportLedger = () => {
    setIsExporting(true);
    showToast('Compiling complete cryptographic audit ledger PDF & CSV...');
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      showToast('Export Ready: Skyline_Villa_P2_Audit.pdf (2.4 MB)');
      setTimeout(() => {
        setExportComplete(false);
      }, 4000);
    }, 1500);
  };

  const handleSwitchToContractor = () => {
    setPerspective('contractor');
    setContractorTab('field');
    showToast('Dual Perspective Activated: Switched to John M. Contractor HUD.');
  };

  const handleLogOut = () => {
    setPerspective('portal');
    showToast('Client Session Safely Terminated.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Profile" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Perspective Indicator Pill */}
        <div className="flex items-center justify-between bg-[#141b2b] px-4 py-2.5 rounded-xl border border-[#232a3a]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#93ccff] shadow-[0_0_10px_rgba(147,204,255,0.6)]"></span>
            <span className="font-label-md text-label-md text-[#93ccff] tracking-wider uppercase font-bold">
              Client Overseer Terminal
            </span>
          </div>
          <span className="font-label-sm text-[10px] text-[#d8c3ad] bg-[#232a3a] px-2 py-0.5 rounded border border-[#2e3545]">
            Encrypted Portal
          </span>
        </div>

        {/* Section 1: Client Profile Identity Header */}
        <div className="relative overflow-hidden bg-[#191f2f] rounded-xl p-4 shadow-md border border-[#232a3a]">
          <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-gradient-to-br from-[#3198dc]/10 via-[#f59e0b]/5 to-transparent pointer-events-none blur-2xl"></div>

          <div className="flex items-start gap-4 relative z-10">
            <div className="relative shrink-0">
              <img
                alt="Sarah Jenkins Portrait"
                className="w-20 h-20 rounded-full object-cover shadow-lg ring-2 ring-[#ffc174]/40"
                src={sarahAvatar}
              />
              <div className="absolute bottom-0 right-0 bg-[#f59e0b] text-[#472a00] p-1 rounded-full flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[16px] font-bold">verified</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-headline-md text-headline-md text-[#dce2f7] tracking-tight truncate">
                  Sarah Jenkins
                </h2>
              </div>
              <p className="font-label-md text-label-md text-[#93ccff] truncate">
                @sarah_jenkins_villa
              </p>
              <p className="font-body-sm text-[12px] text-[#d8c3ad] mt-0.5">
                Property Owner & Investor
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#232a3a] text-[#ffc174] border border-[#2e3545]">
                <span
                  className="material-symbols-outlined text-[15px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_with_heart
                </span>
                <span className="font-label-sm text-[10px] uppercase tracking-wide font-bold">
                  Verified Client Account
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Metric Band */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 bg-[#141b2b]/70 rounded-lg p-3 border border-[#232a3a]/40">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-headline-md text-headline-md text-[#ffc174] font-bold">02</span>
              <span className="font-label-sm text-[10px] uppercase text-[#d8c3ad]">Properties</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-[#232a3a]">
              <span className="font-headline-md text-headline-md text-[#93ccff] font-bold">68%</span>
              <span className="font-label-sm text-[10px] uppercase text-[#d8c3ad]">
                Phase 2 Done
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-[#232a3a]">
              <span className="font-headline-md text-headline-md text-emerald-400 font-bold">0</span>
              <span className="font-label-sm text-[10px] uppercase text-[#d8c3ad]">
                Punch Blocs
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Active Property & Project Portfolio */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-lg text-label-lg tracking-wide uppercase text-[#dce2f7]">
              Active Portfolio
            </span>
            <span className="font-label-sm text-[10px] text-[#93ccff] bg-[#191f2f] px-2 py-0.5 rounded uppercase font-bold border border-[#232a3a]">
              Primary Assignment
            </span>
          </div>

          <div className="bg-[#191f2f] rounded-xl p-4 shadow-md space-y-3.5 border border-[#232a3a]">
            {/* Title & Status Ribbon */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-label-sm text-[10px] px-2 py-0.5 bg-[#ffc174]/20 text-[#ffc174] uppercase rounded font-bold">
                  In Construction
                </span>
                <h3 className="font-headline-md text-headline-md text-[#dce2f7] mt-1">
                  Skyline Villa Renovation • Phase 2
                </h3>
              </div>
              <div className="p-2 bg-[#232a3a] rounded-lg text-[#93ccff]">
                <span className="material-symbols-outlined text-[24px]">villa</span>
              </div>
            </div>

            {/* Address Location Line */}
            <div className="flex items-center gap-2 text-[#d8c3ad] bg-[#141b2b] px-3 py-2 rounded-lg border border-[#232a3a]/40">
              <span className="material-symbols-outlined text-[18px] text-[#ffc174] shrink-0">
                pin_drop
              </span>
              <span className="font-body-md text-[13px] truncate">
                742 Evergreen Terrace, North Hills Zone C
              </span>
            </div>

            {/* Milestone Track Bar */}
            <div className="bg-[#141b2b] p-3 rounded-lg space-y-1.5 border border-[#232a3a]/40">
              <div className="flex items-center justify-between text-[#dce2f7]">
                <span className="font-label-sm text-[10px] uppercase text-[#d8c3ad] font-bold">
                  Contract Schedule
                </span>
                <span className="font-label-sm text-[11px] text-[#93ccff] font-bold">
                  142 Days Running
                </span>
              </div>
              <div className="w-full bg-[#2e3545] h-2 rounded-full overflow-hidden flex">
                <div
                  className="bg-[#93ccff] h-full rounded-full transition-all duration-500"
                  style={{ width: '68%' }}
                />
              </div>
              <div className="flex items-center justify-between font-label-sm text-[11px] text-[#d8c3ad] pt-1">
                <span>Start: Sept 15, 2024</span>
                <span className="text-[#ffc174] font-bold">Target: Feb 28, 2025</span>
              </div>
            </div>

            {/* Contract Agreement Specifications */}
            <div className="flex items-center gap-3 bg-[#232a3a]/60 p-3 rounded-lg border border-[#232a3a]">
              <div className="p-2 rounded bg-[#191f2f] text-[#ffc174] shrink-0">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-[10px] uppercase text-[#d8c3ad] tracking-wider font-bold">
                  Governing Agreement
                </span>
                <span className="font-body-md text-[13px] font-semibold text-[#dce2f7] truncate">
                  Fixed Price + Cost-Plus Material Protocol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Connected Contractor Hub */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-lg text-label-lg tracking-wide uppercase text-[#dce2f7]">
              Prime Contractor Hub
            </span>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#232a3a] border border-[#2e3545]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-label-sm text-[10px] uppercase text-emerald-400 font-bold">
                Live Linked
              </span>
            </div>
          </div>

          <div className="bg-[#191f2f] rounded-xl p-4 shadow-md space-y-4 border border-[#232a3a]">
            {/* General Contractor Info */}
            <div
              onClick={handleSwitchToContractor}
              className="flex items-center justify-between group p-1 -m-1 rounded-lg hover:bg-[#232a3a]/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-lg bg-[#2e3545] flex items-center justify-center text-[#ffc174] shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">handyman</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-title-md text-title-md text-[#dce2f7] font-semibold truncate group-hover:text-[#ffc174] transition-colors">
                      John M.
                    </h4>
                    <span className="material-symbols-outlined text-[16px] text-[#93ccff]">
                      arrow_forward
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-[#d8c3ad] truncate">
                    Apex Builders Co.
                  </p>
                  <span className="inline-block mt-0.5 font-label-sm text-[10px] bg-[#070e1d] text-[#93ccff] px-1.5 py-0.5 rounded border border-[#232a3a]">
                    Lic #GC-992140
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-[#232a3a] text-[#ffc174]">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
            </div>

            {/* Instant Contact Action Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <a
                className="h-12 flex items-center justify-center gap-1.5 bg-[#232a3a] hover:bg-[#323949] rounded-lg text-[#dce2f7] transition-colors border border-[#2e3545]"
                href="tel:+18005550199"
                title="Chat / Call Contractor"
              >
                <span className="material-symbols-outlined text-[18px] text-[#ffc174]">call</span>
                <span className="font-label-md text-label-md font-semibold">Phone</span>
              </a>
              <a
                className="h-12 flex items-center justify-center gap-1.5 bg-[#232a3a] hover:bg-[#323949] rounded-lg text-[#dce2f7] transition-colors border border-[#2e3545]"
                href="mailto:john.m@apexbuilders.co"
                title="Email Contractor"
              >
                <span className="material-symbols-outlined text-[18px] text-[#93ccff]">mail</span>
                <span className="font-label-md text-label-md font-semibold">Email</span>
              </a>
              <button
                onClick={handleSwitchToContractor}
                className="h-12 flex items-center justify-center gap-1.5 bg-[#232a3a] hover:bg-[#323949] rounded-lg text-[#dce2f7] transition-colors border border-[#2e3545]"
                title="Contractor Field Dashboard"
              >
                <span className="material-symbols-outlined text-[18px] text-[#f59e0b]">
                  support_agent
                </span>
                <span className="font-label-md text-label-md font-semibold">Office</span>
              </button>
            </div>

            {/* Sync Protocol Status Badge */}
            <div className="flex items-center gap-3 bg-[#070e1d] p-3 rounded-lg border border-[#232a3a]">
              <span
                className="material-symbols-outlined text-[#93ccff] text-[22px] shrink-0 animate-spin"
                style={{ animationDuration: '6s' }}
              >
                sync
              </span>
              <div className="min-w-0">
                <div className="font-label-sm text-[10px] uppercase text-[#93ccff] font-bold">
                  Dual Sync Protocol
                </div>
                <div className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                  Instant P2P Push & Cloud Audit Trail Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Preferences & Notification Settings */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-lg text-label-lg tracking-wide uppercase text-[#dce2f7]">
              Client Feed Preferences
            </span>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Real-Time Alerts</span>
          </div>

          <div className="bg-[#191f2f] rounded-xl p-4 shadow-md space-y-2 border border-[#232a3a]">
            {/* Toggle 1: Instant Material Delivery */}
            <div className="flex items-center justify-between gap-3 bg-[#141b2b] p-3 rounded-lg border border-[#232a3a]/40">
              <div className="flex items-start gap-3 min-w-0">
                <div className="p-2 rounded bg-[#191f2f] text-[#93ccff] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                </div>
                <div className="min-w-0">
                  <span className="font-body-md text-[13px] font-semibold text-[#dce2f7] block leading-tight">
                    Instant Material Delivery Alerts
                  </span>
                  <span className="font-body-sm text-[11px] text-[#d8c3ad] block mt-0.5">
                    Push on gate check-in & intake photos
                  </span>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={instantDeliveryAlerts}
                onClick={() => setInstantDeliveryAlerts(!instantDeliveryAlerts)}
                className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                  instantDeliveryAlerts ? 'bg-[#ffc174]' : 'bg-[#2e3545]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-[#0c1322] shadow-md transition duration-200 ease-in-out ${
                    instantDeliveryAlerts ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Toggle 2: Daily Labour Summary */}
            <div className="flex items-center justify-between gap-3 bg-[#141b2b] p-3 rounded-lg border border-[#232a3a]/40">
              <div className="flex items-start gap-3 min-w-0">
                <div className="p-2 rounded bg-[#191f2f] text-[#ffc174] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                </div>
                <div className="min-w-0">
                  <span className="font-body-md text-[13px] font-semibold text-[#dce2f7] block leading-tight">
                    Daily Labour Headcount Summary
                  </span>
                  <span className="font-body-sm text-[11px] text-[#d8c3ad] block mt-0.5">
                    Automated dispatch summary at 17:30
                  </span>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={dailyLabourSummary}
                onClick={() => setDailyLabourSummary(!dailyLabourSummary)}
                className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                  dailyLabourSummary ? 'bg-[#ffc174]' : 'bg-[#2e3545]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-[#0c1322] shadow-md transition duration-200 ease-in-out ${
                    dailyLabourSummary ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Toggle 3: Weekly Financial Audit */}
            <div className="flex items-center justify-between gap-3 bg-[#141b2b] p-3 rounded-lg border border-[#232a3a]/40">
              <div className="flex items-start gap-3 min-w-0">
                <div className="p-2 rounded bg-[#191f2f] text-[#ff956b] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">
                    account_balance_wallet
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="font-body-md text-[13px] font-semibold text-[#dce2f7] block leading-tight">
                    Weekly Financial Audit Generation
                  </span>
                  <span className="font-body-sm text-[11px] text-[#d8c3ad] block mt-0.5">
                    Itemized PDF escrow ledger every Monday
                  </span>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={weeklyFinancialAudit}
                onClick={() => setWeeklyFinancialAudit(!weeklyFinancialAudit)}
                className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                  weeklyFinancialAudit ? 'bg-[#ffc174]' : 'bg-[#2e3545]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-[#0c1322] shadow-md transition duration-200 ease-in-out ${
                    weeklyFinancialAudit ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Section 5: Account & Security Actions */}
        <div className="flex flex-col space-y-2.5">
          <span className="font-label-lg text-label-lg tracking-wide uppercase text-[#dce2f7] px-1">
            Controls & Governance
          </span>

          {/* Contractor Mode Switcher Card */}
          <div className="bg-gradient-to-r from-[#f59e0b]/20 to-[#191f2f] rounded-xl p-4 shadow-md flex items-center justify-between gap-4 border border-[#f59e0b]/30">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[#ffc174]">
                <span className="material-symbols-outlined text-[18px]">construction</span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider">
                  Dual Perspective Mode
                </span>
              </div>
              <h5 className="font-title-md text-title-md text-[#dce2f7] font-semibold mt-1">
                Switch to Contractor Demo
              </h5>
              <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                Review the field interface seen by foremen & subs
              </p>
            </div>
            <button
              onClick={handleSwitchToContractor}
              className="h-12 px-4 rounded-lg bg-[#ffc174] text-[#472a00] font-label-md text-label-md font-bold hover:bg-[#ffddb8] transition-colors shrink-0 flex items-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Switch</span>
              <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
            </button>
          </div>

          {/* Export Complete Project Audit Ledger */}
          <button
            onClick={handleExportLedger}
            disabled={isExporting}
            className="h-14 w-full rounded-xl bg-[#191f2f] hover:bg-[#232a3a] text-[#dce2f7] font-label-md text-[13px] font-semibold flex items-center justify-between px-4 transition-all shadow-md border border-[#232a3a] active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <span
                className={`material-symbols-outlined text-[#93ccff] text-[22px] ${
                  isExporting ? 'animate-bounce text-[#ffc174]' : ''
                }`}
              >
                {exportComplete ? 'download_done' : 'receipt_long'}
              </span>
              <span className={exportComplete ? 'text-emerald-400 font-bold' : ''}>
                {isExporting
                  ? 'Generating Cryptographic Ledger PDF...'
                  : exportComplete
                  ? 'Ledger Ready (Skyline_Villa_P2_Audit.pdf)'
                  : 'Export Complete Project Audit Ledger (CSV/PDF)'}
              </span>
            </div>
            <span className="font-label-sm text-[10px] text-[#93ccff] uppercase font-bold">
              {exportComplete ? '2.4 MB' : 'DOWNLOAD'}
            </span>
          </button>

          {/* Sign Out Action */}
          <button
            onClick={handleLogOut}
            className="h-12 w-full rounded-xl bg-[#141b2b] hover:bg-red-950/40 text-[#ffb4ab] font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-colors border border-red-900/30"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Log Out Client Session</span>
          </button>
        </div>

        {/* Micro Copyright / Cryptographic Stamp */}
        <div className="text-center pt-2 pb-2">
          <p className="font-label-sm text-[10px] text-[#d8c3ad] uppercase tracking-widest font-mono">
            Hash: 9A-448F • Skyline Villa P2 Cloud Ledger
          </p>
        </div>
      </main>

      <ClientBottomNav />
    </div>
  );
};
