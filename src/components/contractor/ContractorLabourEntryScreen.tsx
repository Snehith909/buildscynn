import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ContractorBottomNav } from '../common/ContractorBottomNav';

export const ContractorLabourEntryScreen: React.FC = () => {
  const {
    setContractorTab,
    setPerspective,
    setClientTab,
    mainWorkers,
    helpers,
    setMainWorkers,
    setHelpers,
    rateMain,
    rateHelper,
    selectedTrade,
    setSelectedTrade,
    totalLabourPayment,
    syncLabourToClient,
    openLightbox,
    showToast,
  } = useSync();

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmittedSuccess, setTransmittedSuccess] = useState(false);

  const trades = ['Mason', 'General Labour', 'Plumber', 'Electrician', 'Painter', 'Other'];

  const snap1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDLzPIZfW03Bg6K9Ar_g1YQv8i1YXt0SLvfm_Ww1sHq7a0nQtFkWIIFkIituRwNtpV3sAIeBMB2XI6CC4XadeFh_bT9W-qayAVSfSYir_he3WmRk9hTUTYlzDhRjQhMXWuEcsH0Mppil2qjB8rOnGk-Fx7r4MW3kv2QyZGVtHXyXMPnTGsmxlbQk5Mtc63zkdvAe-aY0F-i87_NG9g6hKq2qWmh7sm668Yb3PuKSscyvEe5xm2DsJFghg';

  const snap2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAdez-R2yX7_YcEWEr3WzJ55lw99987VdqD4iX6EFv0wDAIRkq0JicMt-6AOdGs_Nzsc2xVPUN4y94hRzpaEHtM4MJ2VwmzO7CUqsnLYoB3XaHWwNchDelcwopgV8JZx0V4dceU_hh1T8LctOxcllU2UhjYdw-W81UnlNolufJ_vfrBuFpUqD8Pz5QfAI0N1PanXx1vh26hXSxU1wFayaZzsfIAc5NvL6I1SoJKw8fZdcf8w-0FB3LyUQ';

  const daysLogged = 5;
  const mainSubtotal = mainWorkers * rateMain * daysLogged;
  const helperSubtotal = helpers * rateHelper * daysLogged;

  const handleSyncClick = () => {
    setIsTransmitting(true);
    syncLabourToClient();

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmittedSuccess(true);
      setTimeout(() => {
        setTransmittedSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header
        title="New Punch Item"
        subtitle="Labour Entry"
        showBack
        onBack={() => setContractorTab('field')}
      />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Interactive Synced Ribbon Header */}
        <div className="bg-[#232a3a] rounded-xl p-4 shadow-md flex flex-col gap-3 relative overflow-hidden border border-[#2e3545]">
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#f59e0b]/10 rounded-full blur-xl pointer-events-none"></div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#2e3545] flex items-center justify-center text-[#ffc174] shrink-0 shadow-sm border border-[#232a3a]">
                <span className="material-symbols-outlined text-[22px]">person_pin_circle</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-md text-headline-md text-[#dce2f7] truncate">
                    @sarah_jenkins
                  </span>
                  <span className="material-symbols-outlined text-[#93ccff] text-[16px]">
                    verified
                  </span>
                </div>
                <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate mt-0.5">
                  Skyline Villa • Phase 2 Structural
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setPerspective('client');
                setClientTab('labour');
              }}
              className="px-2.5 py-1 rounded-full bg-[#070e1d] text-[#93ccff] font-label-sm text-[10px] font-bold uppercase tracking-wider shrink-0 hover:bg-[#3198dc] hover:text-white transition-colors border border-[#3198dc]/30"
            >
              Live Client
            </button>
          </div>

          <div className="mt-1 flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#141b2b] text-[#ffddb8] border border-[#232a3a]">
            <span className="material-symbols-outlined text-[#ffc174] text-[18px] animate-pulse">
              bolt
            </span>
            <span className="font-label-md text-[12px] font-semibold truncate">
              ⚡ Auto-Sync to Client Labour Tab enabled (₹ Live Sync)
            </span>
          </div>
        </div>

        {/* Perspective Switch & Context Banner */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-sm"></span>
            <span className="font-label-md text-label-md text-[#dce2f7] font-bold uppercase tracking-wider">
              Contractor View • Day 28
            </span>
          </div>
          <span className="font-label-sm text-[11px] text-[#d8c3ad] font-mono">
            Shift: 07:00 - 17:00
          </span>
        </div>

        {/* Trade Selector Chips */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-1">
            <label className="font-label-md text-label-md text-[#dce2f7] font-semibold tracking-wide uppercase">
              Select Labour Type
            </label>
            <span
              onClick={() => showToast('Preset: Standard Tier Residential Rates Applied')}
              className="font-label-sm text-[11px] text-[#ffc174] cursor-pointer hover:underline font-bold"
            >
              Quick Presets
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
            {trades.map((trade) => {
              const isActive = selectedTrade === trade;
              return (
                <button
                  key={trade}
                  onClick={() => setSelectedTrade(trade)}
                  type="button"
                  className={`px-4 py-2.5 rounded-xl font-label-md text-label-md shrink-0 transition-transform active:scale-95 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#ffc174] text-[#472a00] font-bold shadow-md'
                      : 'bg-[#232a3a] text-[#d8c3ad] hover:text-[#dce2f7]'
                  }`}
                >
                  {trade === 'Mason' && (
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      construction
                    </span>
                  )}
                  <span>{trade}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Crew Breakdown Card */}
        <div className="bg-[#191f2f] rounded-xl p-4 shadow-lg flex flex-col gap-4 relative border border-[#232a3a]">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#93ccff]"></div>
              <span className="font-headline-md text-headline-md text-[#dce2f7]">
                {selectedTrade} Crew Breakdown
              </span>
            </div>
            <span className="font-label-sm text-[10px] px-2.5 py-1 rounded bg-[#2e3545] text-[#93ccff] font-bold border border-[#232a3a]">
              Standard Rates
            </span>
          </div>

          {/* Main Workers Input Group */}
          <div className="flex items-center justify-between bg-[#141b2b] rounded-xl p-3.5 shadow-sm border border-[#232a3a]/40">
            <div className="flex flex-col min-w-0 pr-2 space-y-1">
              <span className="font-label-lg text-label-lg text-[#dce2f7] font-bold">
                Main Workers
              </span>
              <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                ₹{rateMain.toFixed(2)} / day standard
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setMainWorkers(Math.max(0, mainWorkers - 1))}
                aria-label="Decrease main workers"
                className="w-11 h-11 rounded-lg bg-[#2e3545] text-[#dce2f7] flex items-center justify-center text-title-md active:bg-[#323949] shadow-sm hover:text-[#ffc174] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <div className="w-12 h-11 rounded-lg bg-[#070e1d] flex items-center justify-center font-headline-md text-headline-md text-[#ffc174] font-bold shadow-inner border border-[#232a3a]">
                {mainWorkers}
              </div>
              <button
                type="button"
                onClick={() => setMainWorkers(mainWorkers + 1)}
                aria-label="Increase main workers"
                className="w-11 h-11 rounded-lg bg-[#ffc174] text-[#472a00] flex items-center justify-center text-title-md active:bg-[#f59e0b] shadow-sm hover:opacity-95 transition-opacity"
              >
                <span className="material-symbols-outlined text-[20px] font-bold">add</span>
              </button>
            </div>
          </div>

          {/* Helpers Input Group */}
          <div className="flex items-center justify-between bg-[#141b2b] rounded-xl p-3.5 shadow-sm border border-[#232a3a]/40">
            <div className="flex flex-col min-w-0 pr-2 space-y-1">
              <span className="font-label-lg text-label-lg text-[#dce2f7] font-bold">Helpers</span>
              <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                ₹{rateHelper.toFixed(2)} / day standard
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setHelpers(Math.max(0, helpers - 1))}
                aria-label="Decrease helpers"
                className="w-11 h-11 rounded-lg bg-[#2e3545] text-[#dce2f7] flex items-center justify-center text-title-md active:bg-[#323949] shadow-sm hover:text-[#93ccff] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <div className="w-12 h-11 rounded-lg bg-[#070e1d] flex items-center justify-center font-headline-md text-headline-md text-[#93ccff] font-bold shadow-inner border border-[#232a3a]">
                {helpers}
              </div>
              <button
                type="button"
                onClick={() => setHelpers(helpers + 1)}
                aria-label="Increase helpers"
                className="w-11 h-11 rounded-lg bg-[#93ccff] text-[#003351] flex items-center justify-center text-title-md active:bg-[#3198dc] shadow-sm hover:opacity-95 transition-opacity"
              >
                <span className="material-symbols-outlined text-[20px] font-bold">add</span>
              </button>
            </div>
          </div>

          {/* Total Live Tally Highlight Box */}
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#070e1d] shadow-inner my-1 border border-[#232a3a]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffc174] text-[20px]">groups</span>
              <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                Today's Headcount
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#ffc174] font-label-md text-label-md font-bold border border-[#f59e0b]/30">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping"></span>
              <span>{mainWorkers + helpers} Active on Site Today</span>
            </div>
          </div>

          {/* Add Another Trade Button */}
          <button
            type="button"
            onClick={() => showToast('Secondary Trade logged: Plumber Crew initialized.')}
            className="w-full h-12 rounded-xl bg-[#232a3a] text-[#dce2f7] font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-sm hover:bg-[#323949] hover:text-[#ffc174] border border-[#2e3545]"
          >
            <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
              add_circle
            </span>
            <span>+ Add Another Trade</span>
          </button>
        </div>

        {/* Visual Evidence Micro-Strip */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-md text-label-md text-[#dce2f7] font-bold uppercase tracking-wider">
              Site Verification Snaps
            </span>
            <span className="font-label-sm text-[11px] text-[#93ccff] font-semibold">
              3 Photos Tagged
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() =>
                openLightbox(snap1, 'Masonry North Elevation', '08:14 AM • Quality brickwork')
              }
              className="relative rounded-lg overflow-hidden h-20 bg-[#191f2f] shadow-sm group cursor-pointer border border-[#232a3a]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                alt="Brick masonry work"
                src={snap1}
              />
              <span className="absolute bottom-1 left-1 font-label-sm text-[9px] px-1.5 py-0.5 rounded bg-black/80 text-white font-bold">
                08:14 AM
              </span>
            </div>

            <div
              onClick={() =>
                openLightbox(snap2, 'Mortar Mixing & Scaffolding', '11:30 AM • Shift progress')
              }
              className="relative rounded-lg overflow-hidden h-20 bg-[#191f2f] shadow-sm group cursor-pointer border border-[#232a3a]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                alt="Construction workers mixing cement"
                src={snap2}
              />
              <span className="absolute bottom-1 left-1 font-label-sm text-[9px] px-1.5 py-0.5 rounded bg-black/80 text-white font-bold">
                11:30 AM
              </span>
            </div>

            <button
              type="button"
              onClick={() => showToast('Camera triggered: Frame snapshot captured.')}
              className="h-20 rounded-lg bg-[#141b2b] flex flex-col items-center justify-center gap-1 text-[#d8c3ad] hover:text-[#ffc174] transition-colors shadow-sm border border-[#232a3a]"
            >
              <span className="material-symbols-outlined text-[24px]">add_a_photo</span>
              <span className="font-label-sm text-[10px] font-semibold">+ Add Shot</span>
            </button>
          </div>
        </div>

        {/* Weekly Timesheet Matrix */}
        <div className="bg-[#141b2b] rounded-xl p-4 shadow-md flex flex-col gap-2.5 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#93ccff] text-[20px]">
                calendar_month
              </span>
              <span className="font-headline-md text-headline-md text-[#dce2f7]">
                Weekly Attendance Matrix
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Cycle W42</span>
          </div>

          <div className="grid grid-cols-6 gap-1.5 pt-1">
            <div className="flex flex-col items-center p-2 rounded-lg bg-[#232a3a] shadow-sm text-center border border-[#2e3545]">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] font-bold">MON</span>
              <span
                className="material-symbols-outlined text-[#ffc174] text-[18px] my-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="font-label-sm text-[10px] text-[#dce2f7] font-bold">5 Wk</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-lg bg-[#232a3a] shadow-sm text-center border border-[#2e3545]">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] font-bold">TUE</span>
              <span
                className="material-symbols-outlined text-[#ffc174] text-[18px] my-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="font-label-sm text-[10px] text-[#dce2f7] font-bold">5 Wk</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-lg bg-[#232a3a] shadow-sm text-center border border-[#2e3545]">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] font-bold">WED</span>
              <span
                className="material-symbols-outlined text-[#ffc174] text-[18px] my-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="font-label-sm text-[10px] text-[#dce2f7] font-bold">4 Wk</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-lg bg-[#232a3a] shadow-sm text-center border border-[#2e3545]">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] font-bold">THU</span>
              <span
                className="material-symbols-outlined text-[#ffc174] text-[18px] my-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="font-label-sm text-[10px] text-[#dce2f7] font-bold">5 Wk</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-lg bg-[#ffc174] text-[#472a00] shadow-md text-center">
              <span className="font-label-sm text-[10px] text-[#472a00] font-bold">FRI</span>
              <span
                className="material-symbols-outlined text-[#472a00] text-[18px] my-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                today
              </span>
              <span className="font-label-sm text-[10px] text-[#472a00] font-bold">
                {mainWorkers + helpers} Wk
              </span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-lg bg-[#070e1d] opacity-60 text-center border border-[#232a3a]">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] font-bold">SAT</span>
              <span className="material-symbols-outlined text-[#d8c3ad] text-[18px] my-1">
                pending
              </span>
              <span className="font-label-sm text-[10px] text-[#d8c3ad]">Soon</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[#d8c3ad] font-body-sm text-[12px] px-1 pt-1">
            <span>
              Completed Days: <strong className="text-[#dce2f7]">5 of 6</strong>
            </span>
            <span className="text-[#93ccff] font-semibold">1 Day Upcoming</span>
          </div>
        </div>

        {/* Financial Calculation Breakdown */}
        <div className="bg-[#191f2f] rounded-xl p-4 shadow-lg flex flex-col gap-3.5 border border-[#232a3a]">
          <div className="flex items-center justify-between pb-1">
            <span className="font-label-md text-label-md text-[#dce2f7] font-bold uppercase tracking-wider">
              Financial Calculation Breakdown
            </span>
            <span className="font-label-sm text-[10px] px-2.5 py-1 rounded bg-[#232a3a] text-[#ffc174] font-bold border border-[#2e3545]">
              Verified Rates
            </span>
          </div>

          <div className="flex flex-col gap-2.5 pt-1 font-body-md text-body-md">
            {/* Main Line */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#141b2b] shadow-sm border border-[#232a3a]/40">
              <div className="flex flex-col min-w-0 space-y-0.5">
                <span className="text-[#dce2f7] font-medium">
                  Main Workers ({mainWorkers} × ₹{rateMain.toFixed(0)} × {daysLogged} days)
                </span>
                <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Skilled Master Trades
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-[#dce2f7] font-bold shrink-0 ml-2">
                ₹{mainSubtotal.toFixed(2)}
              </span>
            </div>

            {/* Helpers Line */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#141b2b] shadow-sm border border-[#232a3a]/40">
              <div className="flex flex-col min-w-0 space-y-0.5">
                <span className="text-[#dce2f7] font-medium">
                  Helpers ({helpers} × ₹{rateHelper.toFixed(0)} × {daysLogged} days)
                </span>
                <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Support & Site Material Logistics
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-[#dce2f7] font-bold shrink-0 ml-2">
                ₹{helperSubtotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Cycle Total Grand Banner */}
          <div className="mt-2 p-4 rounded-xl bg-[#2e3545] shadow-inner flex items-center justify-between gap-3 border border-[#232a3a]">
            <div className="flex flex-col space-y-1">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase font-bold tracking-wider">
                Total Labour Payment This Cycle
              </span>
              <span className="font-body-sm text-[12px] text-[#93ccff] font-semibold">
                Billable directly to Sarah Jenkins
              </span>
            </div>
            <div className="font-headline-xl-mobile text-headline-xl-mobile text-[#ffc174] font-bold shrink-0">
              ₹{totalLabourPayment.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Primary Action & Sync Real-Time Area */}
        <div className="pt-2 pb-4 flex flex-col gap-3">
          <button
            type="button"
            disabled={isTransmitting}
            onClick={handleSyncClick}
            className={`w-full py-4 px-4 rounded-xl font-headline-md text-headline-md font-bold shadow-xl flex flex-col items-center justify-center gap-1.5 transition-all active:scale-[0.98] ${
              transmittedSuccess
                ? 'bg-[#3198dc] text-white'
                : 'bg-[#ffc174] hover:bg-[#f59e0b] text-[#472a00]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-[22px]">{transmittedSuccess ? '✅' : '🚀'}</span>
              <span>
                {isTransmitting
                  ? 'TRANSMITTING TO SKYLINE VILLA TAB...'
                  : transmittedSuccess
                  ? 'SUCCESSFULLY SYNCED TO SARAH'
                  : 'SEND & SYNC TO CLIENT'}
              </span>
            </div>
            <span className="font-body-sm text-[12px] text-[#472a00] font-medium">
              {transmittedSuccess
                ? `Logged & itemized on Sarah's dashboard instantly (₹${totalLabourPayment.toFixed(2)})`
                : `Updates Sarah's Labour Tab immediately with itemized ₹${totalLabourPayment.toFixed(
                    2
                  )} billable`}
            </span>
          </button>

          {/* Feedback Card */}
          <div
            onClick={() => {
              setPerspective('client');
              setClientTab('labour');
            }}
            className="p-3.5 rounded-xl bg-[#141b2b] hover:bg-[#191f2f] transition-colors shadow-sm flex items-center gap-3 cursor-pointer border border-[#232a3a]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#232a3a] flex items-center justify-center text-[#93ccff] shrink-0">
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            </div>
            <div className="flex flex-col min-w-0 space-y-0.5">
              <span className="font-label-md text-label-md text-[#dce2f7] font-bold">
                Synchronization Status
              </span>
              <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                Tap to view real-time sync in Sarah's Client Labour View →
              </span>
            </div>
          </div>
        </div>
      </main>

      <ContractorBottomNav />
    </div>
  );
};
