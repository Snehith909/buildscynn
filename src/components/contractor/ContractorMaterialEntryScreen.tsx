import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ContractorBottomNav } from '../common/ContractorBottomNav';

export const ContractorMaterialEntryScreen: React.FC = () => {
  const {
    setContractorTab,
    setPerspective,
    setClientTab,
    addNewMaterialPO,
    recentMaterials,
    openLightbox,
  } = useSync();

  const [materialType, setMaterialType] = useState('cement');
  const [quantity, setQuantity] = useState(120);
  const [selectedUnit, setSelectedUnit] = useState('Bags');
  const [isPushing, setIsPushing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const slipPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB03RswhZCP0BtQC0S0NJuPHsx5eQ9E384A53u5yX4vlJYQpE44wWx0RP_zyWZuNDcMEaxHjaSlllKb0osO4PGdDyzVb05E3bin_1sUD7VyLOcZXDAee3iHlHr4k6b7teqqn5jBy6ZIK42_T6Fg1NFxqlo8w58HokyadMJAU9J86tyF9pR09pyhf4skylYDQs0trLfQbeZX7mb5k6cdxwmhkrWryM74CLxPOVu2ejiwPFqTNAIdnFpD5g';

  const unitRates: Record<string, number> = {
    cement: 11.5,
    steel: 1140.0,
    tiles: 34.0,
    timber: 85.0,
    pvc: 8.5,
  };

  const currentRate = unitRates[materialType] || 11.5;
  const totalBillable = quantity * currentRate;

  const handleSaveAndSync = () => {
    setIsPushing(true);

    const nameMap: Record<string, string> = {
      cement: 'Ready-Mix Concrete / Portland Cement',
      steel: 'High-Tensile TMT Steel Rebar',
      tiles: 'Vitrified Architectural Floor Tiles',
      timber: 'Seasoned Teak Timber Joists',
      pvc: 'Heavy Duty Rigid PVC Conduits',
    };

    const categoryMap: Record<string, any> = {
      cement: 'Concrete',
      steel: 'Steel',
      tiles: 'Aggregates',
      timber: 'Timber',
      pvc: 'Plumbing',
    };

    addNewMaterialPO({
      name: nameMap[materialType] || 'Ready-Mix Concrete / Portland Cement',
      category: categoryMap[materialType] || 'Concrete',
      vendor: 'Apex Building Supplies',
      slipRef: '#DS-88421',
      gate: 'Gate 3 Unload',
      date: 'October 24, 2024',
      time: '09:42 AM',
      quantity,
      unit: selectedUnit,
      unitPrice: currentRate,
      totalPrice: totalBillable,
      status: 'pending',
      ocrMatchPercent: 99.4,
      signedBy: 'John M. (Site Superintendent)',
      slipPhotoUrl: slipPhoto,
      notes: 'Physical manifest matched against PO-2024-C9',
    });

    setTimeout(() => {
      setIsPushing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header
        title="Task Inspection Details"
        subtitle="Material PO"
        showBack
        onBack={() => setContractorTab('field')}
      />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Interactive Perspective & Project Status Banner */}
        <section className="p-3 bg-[#141b2b] rounded-xl border border-[#232a3a]">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shrink-0 animate-pulse"></span>
              <span className="font-label-sm text-[10px] text-[#ffc174] uppercase tracking-wider font-bold truncate">
                Contractor Mode
              </span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#232a3a] border border-[#2e3545]">
              <span className="material-symbols-outlined text-[#93ccff] text-[14px]">cloud_sync</span>
              <span className="font-label-sm text-[10px] text-[#93ccff] font-bold uppercase">
                Live P2P Bridge
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              setPerspective('client');
              setClientTab('material');
            }}
            className="p-3 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] transition-colors flex items-center justify-between gap-3 shadow-sm border border-[#232a3a] cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#232a3a] flex items-center justify-center text-[#ffc174] shrink-0">
                <span className="material-symbols-outlined text-[22px]">domain</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase tracking-wider mb-0.5">
                  Active Destination
                </span>
                <p className="font-headline-md text-headline-md text-[#dce2f7] truncate">
                  Skyline Villa
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] block mb-0.5">
                Client Account
              </span>
              <span className="font-label-md text-label-md text-[#93ccff] font-bold flex items-center justify-end gap-1">
                Sarah Jenkins{' '}
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Material Entry Form Container */}
        <div className="p-4 rounded-xl bg-[#191f2f] shadow-md space-y-4 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <label
              className="font-label-lg text-label-lg text-[#dce2f7] flex items-center gap-1.5 font-bold"
              htmlFor="material-select"
            >
              <span className="material-symbols-outlined text-[#ffc174] text-[18px]">category</span>
              Material Specification
            </label>
            <span className="font-label-sm text-[10px] text-[#ffc174] font-bold px-2 py-0.5 rounded bg-[#f59e0b]/20 border border-[#f59e0b]/30">
              Required
            </span>
          </div>

          <div className="relative">
            <select
              id="material-select"
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
              className="w-full h-12 bg-[#070e1d] text-[#dce2f7] font-title-md text-title-md rounded-lg px-4 pr-10 appearance-none focus:outline-none border border-[#232a3a] shadow-inner"
            >
              <option value="cement">Ready-Mix Concrete / Cement</option>
              <option value="steel">Steel TMT Bars</option>
              <option value="tiles">Ceramic Tiles</option>
              <option value="timber">Teak Timber</option>
              <option value="pvc">PVC Conduits</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#d8c3ad]">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>

          {/* Quantity Stepper & Unit Selector */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase font-bold">
                Quantity Units
              </span>
              <div className="flex items-center bg-[#070e1d] rounded-lg p-1 border border-[#232a3a]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(5, quantity - 5))}
                  className="w-10 h-10 rounded bg-[#191f2f] hover:bg-[#232a3a] text-[#dce2f7] flex items-center justify-center font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full text-center bg-transparent text-[#dce2f7] font-headline-md font-bold focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 5)}
                  className="w-10 h-10 rounded bg-[#191f2f] hover:bg-[#232a3a] text-[#dce2f7] flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase font-bold">
                Measure Unit
              </span>
              <div className="grid grid-cols-3 gap-1 h-12 items-center bg-[#070e1d] p-1 rounded-lg border border-[#232a3a]">
                {['Bags', 'Tons', 'Pcs'].map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setSelectedUnit(u)}
                    className={`h-full rounded font-label-sm text-[11px] transition-colors ${
                      selectedUnit === u
                        ? 'bg-[#f59e0b] text-[#472a00] font-bold shadow-sm'
                        : 'text-[#d8c3ad] hover:text-[#dce2f7]'
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Calculation Matrix */}
          <div className="p-3 rounded-lg bg-[#141b2b] grid grid-cols-2 gap-3 items-center border border-[#232a3a]/40">
            <div>
              <span className="font-label-sm text-[10px] text-[#d8c3ad] block uppercase tracking-wider font-bold">
                Unit Rate
              </span>
              <p className="font-title-md text-title-md text-[#dce2f7] font-semibold">
                ₹{currentRate.toFixed(2)}{' '}
                <span className="font-body-sm text-[11px] text-[#d8c3ad] font-normal">
                  / {selectedUnit.toLowerCase()}
                </span>
              </p>
            </div>
            <div className="text-right">
              <span className="font-label-sm text-[10px] text-[#93ccff] block uppercase tracking-wider font-bold">
                Total Billable
              </span>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-[#ffc174] font-bold tracking-tight">
                ₹{totalBillable.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Site Logistics & Dispatch Details */}
        <div className="p-4 rounded-xl bg-[#191f2f] shadow-md space-y-3 border border-[#232a3a]">
          <h2 className="font-label-lg text-label-lg text-[#dce2f7] flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-[#93ccff] text-[18px]">
              local_shipping
            </span>
            Dispatch & Vendor Context
          </h2>

          <div className="space-y-3">
            <div>
              <label className="font-label-sm text-[11px] text-[#d8c3ad] block mb-1">
                Receipt Date
              </label>
              <div className="flex items-center gap-2 h-12 px-3.5 bg-[#070e1d] rounded-lg text-[#dce2f7] font-body-md text-body-md border border-[#232a3a]">
                <span className="material-symbols-outlined text-[#d8c3ad] text-[18px]">
                  calendar_today
                </span>
                <span>October 24, 2024</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-label-sm text-[11px] text-[#d8c3ad] block mb-1">
                  Vendor Partner
                </label>
                <div className="h-12 px-3.5 bg-[#070e1d] rounded-lg flex items-center text-[#dce2f7] font-label-md text-label-md truncate border border-[#232a3a]">
                  Apex Building Supplies
                </div>
              </div>
              <div>
                <label className="font-label-sm text-[11px] text-[#d8c3ad] block mb-1">
                  Delivery Slip Ref
                </label>
                <div className="h-12 px-3.5 bg-[#070e1d] rounded-lg flex items-center text-[#ffc174] font-label-md text-label-md truncate font-mono font-bold border border-[#232a3a]">
                  #DS-88421
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Delivery & Digital Receipt Attachment */}
        <div className="p-4 rounded-xl bg-[#191f2f] shadow-md space-y-3 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <span className="font-label-lg text-label-lg text-[#dce2f7] flex items-center gap-1.5 font-bold">
              <span className="material-symbols-outlined text-[#3198dc] text-[18px]">
                receipt_long
              </span>
              Delivery Slip Document
            </span>
            <span className="font-label-sm text-[10px] text-[#93ccff] flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[14px]">lock_reset</span> Signed on
              Site
            </span>
          </div>

          <div
            onClick={() =>
              openLightbox(
                slipPhoto,
                'Delivery Slip #DS-88421',
                'Apex Building Supplies • Verified On-Site'
              )
            }
            className="relative rounded-lg overflow-hidden bg-[#141b2b] group cursor-pointer border border-[#232a3a]"
          >
            <div className="w-full h-36 relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                alt="Physical paper delivery receipt"
                src={slipPhoto}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d]/90 via-transparent to-transparent"></div>

              {/* OCR Verified Badge */}
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#070e1d]/90 backdrop-blur-md flex items-center gap-1.5 shadow-md border border-[#232a3a]">
                <span className="w-2 h-2 rounded-full bg-[#93ccff]"></span>
                <span className="font-label-sm text-[10px] text-[#93ccff] font-bold">
                  OCR Verified Slip
                </span>
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[#dce2f7]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#ffc174]">
                    verified
                  </span>
                  <span className="font-label-md text-label-md truncate">
                    Slip_DS88421_signed.jpg
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#232a3a]/80 flex items-center justify-center text-[#dce2f7]">
                  <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action Trigger & Instant Sync Feedback */}
        <div className="space-y-3 pt-1">
          <button
            type="button"
            disabled={isPushing}
            onClick={handleSaveAndSync}
            className={`w-full h-14 rounded-xl font-label-lg text-label-lg uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all ${
              isSuccess
                ? 'bg-[#3198dc] text-white'
                : 'bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00]'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">
              {isPushing ? 'refresh' : isSuccess ? 'verified' : 'save'}
            </span>
            <span>
              {isPushing
                ? 'PUSHING TO CLIENT VAULT...'
                : isSuccess
                ? 'SUCCESSFULLY SYNCED & BILLED'
                : 'SAVE & SYNC MATERIAL'}
            </span>
          </button>

          <div
            onClick={() => {
              setPerspective('client');
              setClientTab('material');
            }}
            className="p-3 rounded-xl bg-[#3198dc]/10 hover:bg-[#3198dc]/20 transition-colors flex items-start gap-3 border border-[#3198dc]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#93ccff] shrink-0 text-[20px] mt-0.5">
              sync_alt
            </span>
            <p className="font-body-sm text-[12px] text-[#dce2f7]">
              <strong className="text-[#93ccff] font-semibold">Instant Client Update:</strong>{' '}
              Appears directly in Client's Material Tab & adjusts remaining budget % in real time.{' '}
              <span className="text-[#93ccff] font-semibold inline-flex items-center gap-0.5">
                View Ledger{' '}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </p>
          </div>
        </div>

        {/* Recent Synced Material Log Feed */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-label-lg text-label-lg text-[#dce2f7] flex items-center gap-1.5 font-bold">
              <span className="material-symbols-outlined text-[#ffc174] text-[18px]">history</span>
              Recent Logged Materials
            </h3>
            <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase font-bold">
              Site Feed
            </span>
          </div>

          <div className="space-y-2">
            {recentMaterials.map((mat) => (
              <div
                key={mat.id}
                className="p-3 rounded-xl bg-[#191f2f] flex items-center justify-between gap-3 border border-[#232a3a]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#141b2b] flex items-center justify-center text-[#ffc174] shrink-0 border border-[#232a3a]">
                    <span className="material-symbols-outlined text-[20px]">
                      {mat.category === 'Steel'
                        ? 'reorder'
                        : mat.category === 'Concrete'
                        ? 'architecture'
                        : 'terrain'}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-[#dce2f7] font-semibold truncate mb-0.5">
                      {mat.name}
                    </p>
                    <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                      {mat.quantity} {mat.unit} • {mat.vendor}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-label-md text-label-md text-[#ffc174] font-bold mb-0.5">
                    ₹{mat.totalPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1 text-[#93ccff]">
                    <span className="material-symbols-outlined text-[14px]">done_all</span>
                    <span className="font-label-sm text-[10px] font-semibold">Synced</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ContractorBottomNav />
    </div>
  );
};
