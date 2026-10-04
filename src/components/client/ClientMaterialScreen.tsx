import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ClientBottomNav } from '../common/ClientBottomNav';

export const ClientMaterialScreen: React.FC = () => {
  const {
    pendingDelivery,
    recentMaterials,
    acknowledgeDelivery,
    flagDelivery,
    approvedSpend,
    openLightbox,
    setClientTab,
  } = useSync();

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Items' },
    { id: 'Concrete', label: 'Concrete & Cement' },
    { id: 'Steel', label: 'Steel' },
    { id: 'Aggregates', label: 'Aggregates' },
    { id: 'Plumbing', label: 'Plumbing' },
  ];

  const filteredMaterials = recentMaterials.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const isPendingAcknowledged = pendingDelivery?.status === 'acknowledged';
  const isPendingFlagged = pendingDelivery?.status === 'flagged';

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Material" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Perspective Switch & Live Sync Status Banner */}
        <div className="flex items-center justify-between bg-[#141b2b] px-4 py-2.5 rounded-xl border border-[#232a3a]">
          <div className="flex items-center gap-2">
            <div className="flex h-6 px-2.5 items-center gap-1.5 rounded-full bg-[#3198dc]/20 text-[#93ccff]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93ccff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#93ccff]"></span>
              </span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#93ccff] font-bold">
                Client Verified View
              </span>
            </div>
            <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
              Live Synced Ledger
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#d8c3ad]">
            <span className="material-symbols-outlined text-[16px] text-[#93ccff]">sync</span>
            <span className="font-label-sm text-[11px] text-[#93ccff] font-semibold">0m ago</span>
          </div>
        </div>

        {/* Header Summary Card */}
        <div className="bg-[#191f2f] rounded-xl p-4 shadow-md space-y-4 relative overflow-hidden border border-[#232a3a]">
          <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#93ccff]/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#d8c3ad] font-bold">
              Material Spend Overview
            </span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#232a3a] text-[#93ccff] border border-[#2e3545]">
              <span className="material-symbols-outlined text-[14px]">cloud_done</span>
              <span className="font-label-sm text-[11px] font-semibold">Auto-updated from Site</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex flex-col bg-[#141b2b] p-3 rounded-lg border border-[#232a3a]/40">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174]"></span>
                Approved Spend
              </span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] tracking-tight mt-1 font-bold">
                ₹{approvedSpend.toLocaleString('en-IN')}
                <span className="text-body-sm text-[#d8c3ad]">.00</span>
              </span>
              <span className="font-label-sm text-[10px] text-[#d8c3ad] mt-0.5">
                {recentMaterials.length + 35} Verified Deliveries
              </span>
            </div>

            <div className="flex flex-col bg-[#141b2b] p-3 rounded-lg border border-[#232a3a]/40">
              <span className="font-label-sm text-[10px] text-[#ff956b] flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff956b] animate-pulse"></span>
                Pending Verification
              </span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-[#ffc174] tracking-tight mt-1 font-bold">
                {pendingDelivery && !isPendingAcknowledged
                  ? `₹${pendingDelivery.totalPrice.toLocaleString('en-IN')}`
                  : '₹0'}
                <span className="text-body-sm text-[#ffc174]/70">.00</span>
              </span>
              <span className="font-label-sm text-[10px] text-[#ff956b] mt-0.5">
                {pendingDelivery && !isPendingAcknowledged ? '1 Delivery Today' : '0 Pending Items'}
              </span>
            </div>
          </div>

          {/* Progress vs Allocated Material Budget */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center text-[#d8c3ad]">
              <span className="font-label-sm text-[11px]">Phase 2 Material Budget (₹1,10,000)</span>
              <span className="font-label-sm text-[11px] text-[#dce2f7] font-semibold">
                77.8% Committed
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#2e3545] overflow-hidden flex border border-[#232a3a]">
              <div className="h-full bg-[#3198dc]" style={{ width: '76.5%' }} />
              <div className="h-full bg-[#f59e0b]" style={{ width: '1.3%' }} />
            </div>
          </div>
        </div>

        {/* Today's Incoming Delivery Card */}
        {pendingDelivery && (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse"></span>
                <h2 className="font-title-md text-title-md text-[#dce2f7]">
                  Site Delivery Awaiting Sign-off
                </h2>
              </div>
              <span className="font-label-sm text-[10px] text-[#ffc174] bg-[#ffc174]/10 px-2 py-0.5 rounded-full font-bold">
                New Entry Today
              </span>
            </div>

            <div
              className={`rounded-xl p-4 shadow-lg space-y-3.5 relative overflow-hidden transition-all duration-300 border ${
                isPendingAcknowledged
                  ? 'bg-[#232a3a] border-emerald-500/40'
                  : isPendingFlagged
                  ? 'bg-[#232a3a] border-red-500/40'
                  : 'bg-[#191f2f] border-[#232a3a]'
              }`}
            >
              {/* Amber glow bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  isPendingAcknowledged
                    ? 'bg-emerald-500'
                    : isPendingFlagged
                    ? 'bg-red-500'
                    : 'bg-[#f59e0b]'
                }`}
              />

              <div className="flex items-start justify-between gap-2 pl-2">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-label-sm text-[10px] bg-[#232a3a] text-[#93ccff] px-1.5 py-0.5 rounded uppercase font-bold">
                      {pendingDelivery.category}
                    </span>
                    <span className="font-label-sm text-[11px] text-[#d8c3ad]">
                      {pendingDelivery.vendor}
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-[#dce2f7] truncate">
                    {pendingDelivery.name}
                  </h3>
                  <p className="font-label-md text-label-md text-[#d8c3ad] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">receipt_long</span>
                    Slip {pendingDelivery.slipRef} • {pendingDelivery.gate}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-headline-md text-headline-md text-[#ffc174] block font-bold">
                    ₹{pendingDelivery.totalPrice.toFixed(2)}
                  </span>
                  <span className="font-label-sm text-[11px] text-[#d8c3ad] block">
                    {pendingDelivery.quantity} {pendingDelivery.unit} @ ₹
                    {pendingDelivery.unitPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* OCR Verified Proof Panel */}
              <div className="bg-[#141b2b] rounded-lg p-3 pl-3 space-y-2.5 border border-[#232a3a]/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0">
                      verified
                    </span>
                    <span className="font-label-md text-label-md text-[#dce2f7] truncate">
                      OCR Matched & Verified On-Site
                    </span>
                  </div>
                  <span className="font-label-sm text-[10px] text-emerald-400 bg-[#232a3a] px-1.5 py-0.5 rounded font-bold">
                    {pendingDelivery.ocrMatchPercent}% Match
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Thumbnail */}
                  <div
                    onClick={() =>
                      pendingDelivery.slipPhotoUrl &&
                      openLightbox(
                        pendingDelivery.slipPhotoUrl,
                        `Delivery Slip ${pendingDelivery.slipRef}`,
                        `${pendingDelivery.vendor} • Signed by Superintendent`
                      )
                    }
                    className="relative w-16 h-16 rounded-md overflow-hidden bg-[#232a3a] shrink-0 group cursor-pointer border border-[#2e3545]"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      alt="Delivery Slip Scan"
                      src={pendingDelivery.slipPhotoUrl}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-[18px]">
                        zoom_in
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col min-w-0 space-y-0.5">
                    <span className="font-body-sm text-[12px] text-[#dce2f7] font-semibold truncate">
                      {pendingDelivery.signedBy}
                    </span>
                    <span className="font-label-sm text-[11px] text-[#d8c3ad]">
                      {pendingDelivery.notes}
                    </span>
                    <span className="font-label-sm text-[11px] text-[#93ccff] flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[12px]">schedule</span>{' '}
                      {pendingDelivery.date}, {pendingDelivery.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons or Acknowledged State */}
              {!isPendingAcknowledged && !isPendingFlagged ? (
                <div className="flex items-center gap-2 pt-1 pl-2">
                  <button
                    onClick={() => acknowledgeDelivery(pendingDelivery.id)}
                    className="flex-1 h-12 bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00] font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md font-bold"
                  >
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>Acknowledge Delivery</span>
                  </button>
                  <button
                    onClick={() => flagDelivery(pendingDelivery.id)}
                    className="h-12 px-4 bg-[#232a3a] hover:bg-[#2e3545] text-[#ffb4ab] font-label-md text-label-md rounded-lg flex items-center justify-center gap-1.5 transition-colors font-semibold"
                  >
                    <span className="material-symbols-outlined text-[18px]">flag</span>
                    <span>Discrepancy</span>
                  </button>
                </div>
              ) : isPendingAcknowledged ? (
                <div className="bg-[#3198dc]/20 text-[#dce2f7] rounded-lg p-3 pl-3 flex items-center justify-between border border-[#3198dc]/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#93ccff] text-[20px]">
                      task_alt
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-[#93ccff] font-bold">
                        Delivery Acknowledged & Locked
                      </span>
                      <span className="font-label-sm text-[11px] text-[#d8c3ad]">
                        Moved to approved spend balance
                      </span>
                    </div>
                  </div>
                  <span className="font-label-sm text-[10px] text-[#93ccff] bg-[#232a3a] px-2 py-0.5 rounded font-bold">
                    Synced
                  </span>
                </div>
              ) : (
                <div className="bg-red-500/20 text-[#ffb4ab] rounded-lg p-3 pl-3 flex items-center justify-between border border-red-500/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-400 text-[20px]">
                      report
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold text-red-300">
                        Discrepancy Flagged
                      </span>
                      <span className="font-label-sm text-[11px] text-[#d8c3ad]">
                        Site superintendent notified for inspection
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setClientTab('chat')}
                    className="font-label-sm text-[11px] text-[#93ccff] hover:underline"
                  >
                    Open Chat
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Category Filter Chips */}
        <div className="flex flex-col space-y-2 pt-1">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#d8c3ad] font-bold">
              Filter Ledger
            </span>
            <span className="font-label-sm text-[11px] text-[#93ccff] font-semibold">
              {filteredMaterials.length} Entries Available
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-colors ${
                    isActive
                      ? 'bg-[#f59e0b] text-[#472a00] font-bold shadow-sm'
                      : 'bg-[#232a3a] hover:bg-[#2e3545] text-[#dce2f7]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Synchronized Material Ledger History */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-title-md text-title-md text-[#dce2f7]">
              Recent Synchronized Material
            </h2>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Audit Tracked</span>
          </div>

          <div className="space-y-2">
            {filteredMaterials.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-[#191f2f] rounded-xl shadow-sm hover:bg-[#232a3a] transition-colors border border-[#232a3a]/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#141b2b] flex items-center justify-center text-[#ffc174] shrink-0 border border-[#232a3a]/50">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.category === 'Steel'
                        ? 'reorder'
                        : item.category === 'Concrete'
                        ? 'inventory_2'
                        : 'grain'}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md text-label-md text-[#dce2f7] font-semibold truncate">
                        {item.name}
                      </span>
                      <span className="font-label-sm text-[10px] text-emerald-400 bg-[#141b2b] px-1.5 py-0.5 rounded font-bold">
                        Verified
                      </span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                      {item.quantity} {item.unit} • {item.vendor}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-2">
                  <span className="font-label-lg text-label-lg text-[#dce2f7] block font-bold">
                    ₹{item.totalPrice.toFixed(2)}
                  </span>
                  <span className="font-label-sm text-[10px] text-[#d8c3ad] block font-mono">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Client Ledger Assurance Note */}
        <div className="p-3 bg-[#141b2b] rounded-xl flex items-center gap-3 text-[#d8c3ad] border border-[#232a3a]/40">
          <span className="material-symbols-outlined text-[#93ccff] text-[22px] shrink-0">
            shield
          </span>
          <p className="font-body-sm text-[12px] text-[#d8c3ad]">
            Every line item is cryptographically tethered to field photos and superintendent GPS
            check-in stamps.
          </p>
        </div>
      </main>

      <ClientBottomNav />
    </div>
  );
};
