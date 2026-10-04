import React from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ClientBottomNav } from '../common/ClientBottomNav';
import { ArchitecturalDoc } from '../../types';

export const ClientDesignsScreen: React.FC = () => {
  const {
    setPerspective,
    setContractorTab,
    setClientTab,
    lastSyncTime,
    isSyncing,
    triggerSync,
    openLightbox,
    setActiveDoc,
    approvedSpend,
    totalAllocatedBudget,
  } = useSync();

  const mainVillaPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrFOWDb8bu4pJS-AR1ie8WTlR6r4QkeUnaaoJHaAW07bbdsf_N0x8WXTQ3nR9eEJt6mmMjwB2ifhxWVKbc370EADAGjAqx11tD-cI36jinW1BxHaYtae4p87NuuDj2ynR_NzgA8SnhFKIbtRtJhx6bw8jpiHBAsQKz1mI298zSoBg1w0CIbTlUCgNubWjTWoxD-iap1_LQgds7P5rTWAPNei6cCDmWtkdTQYD1WkLyE9nOAc-GNHNb7w';

  const footingPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1ZTKORJIFuZCkh1-1BP3DR6pYgrB1w7wyfLtlsvw1unQR6xXOFzMEIjZBxC6GoRyoYRsMJwrsTZkjDhrVTfJqCu_Zq5EF2H6W5Z2fqUx1Rf28gn1G1RbDBAyY-ubraCLgLZYuLxa3-gc-GWCd7IyQj5TBz7QRdXs7EZuiumjLk-cB6XRoWtkOlGjhanv4W7mK-1ocSICHNtiLm6L_2M4oi5amJ_817FoHFz68yG6FReEFoKBnXHXow';

  const framingPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-KA7nkuxybmwTMA16xVMXkqVoGvV0WUHBX77rv6NCBW3NUA3IJhVKHuP0UzkO_VHx_4zHchvYG_qIj6wyJ6rjiCK2QK1EvZTWmSnHpt-iuk3kg9xmQMx69h1qmvBXvVnAmvf6R3XcQ995GlbEuRavuJsmGn6Ga71fFug3FM_r7q-ViZxwMQ9MaFowyETvHN1wY-tSf93eBDCnFk6wBrlDW5D7ZWsSjJtgmfcmusoSForGQ7W2ItVCaQ';

  const elecPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA5dEL9JqHGvsnenmZaXa-0oWQPpUVFi8xfMrrKaS72p2zQWzcwvDMf7zIRVHq3UWk1zbqSzv5eOeGs7Jy4uHMtIOnkJwdsUfZ69mqsqA50OeILTua6WW-wtTEKuf3ZZ5ocDcBKsWW3iAIM8nP0ZeAAel8hPe8G9gnF6AFTQb0ABTcZ6pOeR-N0JukUmLqtaITWqgTxOatMBvzgFAGZW3WjU5OqWMa-yQH6AaHIdJEZmd8NOLlnz677aQ';

  const johnAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYDzVlCBJ4NuTyKtuHqlNHFHBuauQKbrVK_AgS9E3vKq38GpU3ptIOd4BKNf6458JXGZBPF2zUG6-tQllVks70B--qsO7gz7f_xxiaDCXhvU8qe3e17DfhfdSqMxFjLBiwZNGPKSAm2B6EYzK6MeMBzvPt6GjakJcK5Go1jDx1kSQUDaZ7EcKP3bCAqht-7cz6I4hRv2b_GCPIgX5clyfQKaFqAJyOl8e-PGd6h30paERyKdbAVF6I5g';

  const architecturalDocs: ArchitecturalDoc[] = [
    {
      id: 'doc-1',
      title: 'Structural Plan Rev 3.2',
      type: 'PDF',
      size: '18.4 MB',
      status: 'City Approved',
      icon: 'design_services',
    },
    {
      id: 'doc-2',
      title: 'Electrical & Low-Voltage Map',
      type: 'DWG',
      size: '9.2 MB',
      status: 'Signed by Sub',
      icon: 'schema',
    },
    {
      id: 'doc-3',
      title: 'Interior Daylight Renders (4K)',
      type: 'ZIP',
      size: '142 MB',
      status: 'Client Accepted',
      icon: 'view_in_ar',
    },
  ];

  const committedTotal = 160000;
  const remainingTotal = totalAllocatedBudget - committedTotal;

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Designs" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Dynamic Perspective Pill Switcher */}
        <div className="w-full flex items-center justify-between p-1 bg-[#191f2f] rounded-xl shadow-inner border border-[#232a3a]">
          <button
            onClick={() => setClientTab('material')}
            className="text-[#93ccff] font-label-sm text-[11px] uppercase flex items-center gap-0.5 hover:underline px-3 py-1"
          >
            <span>Full Audit</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
          <button
            onClick={() => {
              setPerspective('contractor');
              setContractorTab('field');
            }}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-[#d8c3ad] font-label-md text-[12px] hover:text-[#dce2f7] transition-all bg-[#232a3a]/60 hover:bg-[#232a3a]"
          >
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] opacity-80 animate-pulse"></span>
            <span>SWITCH TO CONTRACTOR HUD</span>
          </button>
        </div>

        {/* Real-time Synchronization Status Header */}
        <div className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#232a3a] rounded-xl border border-[#2e3545]/70 shadow-sm">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#3198dc]/20 text-[#93ccff]">
              <span
                className={`material-symbols-outlined text-[18px] ${
                  isSyncing ? 'animate-spin' : ''
                }`}
              >
                sync
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-[11px] text-[#93ccff] uppercase tracking-widest font-bold">
                  Live Cloud Mesh
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#93ccff] animate-pulse"></span>
              </div>
              <p className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                Connected to John M. • Verified {lastSyncTime}
              </p>
            </div>
          </div>
          <button
            onClick={triggerSync}
            disabled={isSyncing}
            className="px-2.5 py-1.5 bg-[#323949] hover:bg-[#2e3545] text-[#dce2f7] font-label-sm text-[11px] font-bold rounded-lg flex items-center gap-1 transition-colors active:scale-95 shadow-sm"
          >
            <span
              className={`material-symbols-outlined text-[14px] ${isSyncing ? 'animate-spin' : ''}`}
            >
              refresh
            </span>
            <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
          </button>
        </div>

        {/* Project Overview & Lead Contractor Card */}
        <div className="w-full bg-[#191f2f] p-4 rounded-xl flex flex-col space-y-3 shadow-md border border-[#232a3a]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col min-w-0">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#93ccff]/10 text-[#93ccff] w-max">
                <span className="material-symbols-outlined text-[13px]">villa</span>
                <span className="font-label-sm text-[10px] tracking-wider uppercase font-semibold">
                  Residential Re-Architecture
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] mt-1 truncate">
                Skyline Villa Renovation
              </h2>
              <p className="font-body-sm text-body-sm text-[#d8c3ad]">
                Zone 4B • Sunset Bluff Terrace, Pacific Palisades
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#f59e0b] text-[#472a00] font-label-sm text-[11px] uppercase tracking-wider font-bold whitespace-nowrap shadow-sm">
              PHASE 2 ACTIVE
            </span>
          </div>

          {/* Contractor Quick Profile Subcard */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#141b2b] border border-[#232a3a]/40">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative">
                <img
                  className="w-11 h-11 rounded-lg object-cover bg-[#323949]"
                  alt="John M. Lead GC"
                  src={johnAvatar}
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#141b2b]"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-label-md text-label-md text-[#dce2f7] font-semibold truncate">
                    John M.
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-[#93ccff]">
                    verified
                  </span>
                </div>
                <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                  Lead GC • Apex Builders Co.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                className="w-9 h-9 rounded-lg bg-[#323949] text-[#ffc174] flex items-center justify-center hover:bg-[#2e3545] transition-colors"
                href="tel:+18005550199"
                title="Call Contractor"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
              <button
                onClick={() => setClientTab('chat')}
                className="px-3 h-9 rounded-lg bg-[#ffc174] text-[#472a00] font-label-md text-[12px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform hover:bg-[#f59e0b]"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Budget Tracking Card (Financial Ledger) */}
        <div className="w-full bg-[#191f2f] p-4 rounded-xl flex flex-col space-y-4 shadow-md border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  account_balance_wallet
                </span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-[#dce2f7]">
                  Financial Ledger
                </span>
                <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Updated today via verified receipts
                </p>
              </div>
            </div>
            <button
              onClick={() => setClientTab('material')}
              className="text-[#93ccff] font-label-sm text-[11px] uppercase flex items-center gap-0.5 hover:underline font-bold"
            >
              <span>Full Audit</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          {/* Dual Metric KPI Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-[#141b2b] rounded-xl flex flex-col justify-between border border-[#232a3a]/40">
              <div className="flex items-center justify-between text-[#d8c3ad]">
                <span className="font-label-sm text-[10px] uppercase font-bold">Total Allocated</span>
                <span className="material-symbols-outlined text-[16px]">pie_chart</span>
              </div>
              <div className="mt-2">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] tracking-tight font-bold">
                  ₹2,50,000
                </span>
                <span className="block font-body-sm text-[11px] text-[#d8c3ad]">
                  Guaranteed Max Price
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#141b2b] rounded-xl flex flex-col justify-between border border-[#232a3a]/40">
              <div className="flex items-center justify-between text-emerald-400">
                <span className="font-label-sm text-[10px] uppercase font-bold">Remaining Funds</span>
                <span className="material-symbols-outlined text-[16px]">savings</span>
              </div>
              <div className="mt-2">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-emerald-400 tracking-tight font-bold">
                  ₹{remainingTotal.toLocaleString('en-IN')}
                </span>
                <span className="block font-body-sm text-[11px] text-emerald-400/80">
                  36.0% Contingency Safe
                </span>
              </div>
            </div>
          </div>

          {/* Visual Linear Segmented Progress Meter */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  Committed Expenditure
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#f59e0b] text-[#472a00] font-label-sm text-[10px] font-bold">
                  64.0%
                </span>
              </div>
              <span className="font-label-md text-label-md text-[#ffc174] font-bold">
                ₹{committedTotal.toLocaleString('en-IN')} Incurred
              </span>
            </div>

            <div className="w-full h-3 bg-[#070e1d] rounded-full overflow-hidden flex p-0.5 border border-[#232a3a]">
              <div
                className="h-full bg-[#f59e0b] rounded-l-full transition-all"
                style={{ width: '25%' }}
                title="Labour: 25%"
              />
              <div
                className="h-full bg-[#ffb95f] ml-0.5 transition-all"
                style={{ width: '34%' }}
                title="Material: 34%"
              />
              <div
                className="h-full bg-[#ff956b] ml-0.5 rounded-r-full transition-all"
                style={{ width: '5%' }}
                title="Permits: 5%"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#d8c3ad] font-label-sm pt-0.5 font-mono">
              <span>₹0 Baseline</span>
              <span className="text-[#ffc174] font-semibold">₹160k Current Milestone</span>
              <span>₹250k Cap</span>
            </div>
          </div>

          {/* Category Expenditure Breakdown Chips */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => setClientTab('labour')}
              className="p-2.5 rounded-lg bg-[#232a3a] hover:bg-[#2e3545] transition-colors flex flex-col text-left"
            >
              <div className="flex items-center gap-1 text-[#f59e0b] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                <span className="font-label-sm text-[10px] uppercase font-bold">Labour</span>
              </div>
              <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                ₹62,400
              </span>
              <span className="text-[10px] text-[#d8c3ad] font-body-sm mt-0.5">39% spent</span>
            </button>

            <button
              onClick={() => setClientTab('material')}
              className="p-2.5 rounded-lg bg-[#232a3a] hover:bg-[#2e3545] transition-colors flex flex-col text-left"
            >
              <div className="flex items-center gap-1 text-[#ffb95f] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
                <span className="font-label-sm text-[10px] uppercase font-bold">Material</span>
              </div>
              <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                ₹{approvedSpend.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-[#d8c3ad] font-body-sm mt-0.5">52.6% spent</span>
            </button>

            <div className="p-2.5 rounded-lg bg-[#232a3a] flex flex-col">
              <div className="flex items-center gap-1 text-[#ff956b] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#ff956b]"></span>
                <span className="font-label-sm text-[10px] uppercase font-bold">Permits</span>
              </div>
              <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                ₹13,400
              </span>
              <span className="text-[10px] text-[#d8c3ad] font-body-sm mt-0.5">8.4% spent</span>
            </div>
          </div>
        </div>

        {/* Synchronized Site Photos Section */}
        <div className="w-full bg-[#191f2f] p-4 rounded-xl flex flex-col space-y-3.5 shadow-md border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#93ccff]/20 text-[#93ccff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-[#dce2f7]">
                  Site Visual Stream
                </span>
                <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Live telemetry directly from trade leads
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#3198dc]/20 text-[#93ccff] font-label-sm text-[10px] uppercase font-bold">
              6 New Captures
            </span>
          </div>

          {/* Main Highlighted Verification Photo */}
          <div
            onClick={() =>
              openLightbox(
                mainVillaPhoto,
                'Elevation Concrete Cast & LED Recess',
                'Today • 11:30 AM • Upper Cantilever Tier'
              )
            }
            className="relative w-full rounded-xl overflow-hidden bg-[#070e1d] group cursor-pointer border border-[#232a3a]"
          >
            <div
              className="w-full h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${mainVillaPhoto}')` }}
            />
            {/* Top Badges Overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-[#070e1d]/80 backdrop-blur-md text-emerald-400 font-label-sm text-[11px] flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>Verified by Contractor</span>
              </span>
              <span className="px-2 py-1 rounded-md bg-[#f59e0b] text-[#472a00] font-label-sm text-[10px] uppercase tracking-wider font-bold">
                LATEST SYNC
              </span>
            </div>

            {/* Bottom Glassmorphism Info Scrim */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#070e1d] via-[#070e1d]/90 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-label-lg text-label-lg text-[#dce2f7] font-semibold">
                    Elevation Concrete Cast & LED Recess
                  </h3>
                  <p className="font-body-sm text-[12px] text-[#d8c3ad] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[13px] text-[#ffc174]">
                      schedule
                    </span>
                    <span>Today • 11:30 AM • Upper Cantilever Tier</span>
                  </p>
                </div>
                <button
                  className="w-9 h-9 rounded-lg bg-[#323949]/90 backdrop-blur text-[#dce2f7] flex items-center justify-center hover:bg-[#93ccff] hover:text-[#003351] transition-colors"
                  title="Expand View"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </button>
              </div>
            </div>
          </div>

          {/* Synchronized Recent Photo Grid */}
          <div className="grid grid-cols-3 gap-2">
            {/* Thumbnail 1: Footing */}
            <div
              onClick={() =>
                openLightbox(
                  footingPhoto,
                  'Footing Pour Inspection',
                  'Reinforced concrete footings tie points'
                )
              }
              className="relative rounded-lg overflow-hidden aspect-square bg-[#141b2b] group cursor-pointer border border-[#232a3a]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                alt="Footing Pour"
                src={footingPhoto}
              />
              <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#f59e0b] text-[#472a00] font-label-sm text-[9px] uppercase font-bold">
                NEW
              </div>
              <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-[#070e1d] to-transparent text-[11px] font-label-sm text-[#dce2f7] truncate">
                Footing Pour
              </div>
            </div>

            {/* Thumbnail 2: Wall Framing */}
            <div
              onClick={() =>
                openLightbox(
                  framingPhoto,
                  'Wall Framing Structural Inspection',
                  'High ceiling modern open floorplan villa'
                )
              }
              className="relative rounded-lg overflow-hidden aspect-square bg-[#141b2b] group cursor-pointer border border-[#232a3a]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                alt="Wall Framing"
                src={framingPhoto}
              />
              <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#f59e0b] text-[#472a00] font-label-sm text-[9px] uppercase font-bold">
                NEW
              </div>
              <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-[#070e1d] to-transparent text-[11px] font-label-sm text-[#dce2f7] truncate">
                Wall Framing
              </div>
            </div>

            {/* Thumbnail 3: Rough-In Elec */}
            <div
              onClick={() =>
                openLightbox(
                  elecPhoto,
                  'Rough-In Electrical & Conduit Channels',
                  'Yellow Romex & junction boxes in architectural channels'
                )
              }
              className="relative rounded-lg overflow-hidden aspect-square bg-[#141b2b] group cursor-pointer border border-[#232a3a]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                alt="Rough-In Elec"
                src={elecPhoto}
              />
              <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#3198dc] text-white font-label-sm text-[9px] uppercase font-bold">
                SYNC
              </div>
              <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-[#070e1d] to-transparent text-[11px] font-label-sm text-[#dce2f7] truncate">
                Rough-In Elec
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Architectural Designs & Blueprints Section */}
        <div className="w-full bg-[#191f2f] p-4 rounded-xl flex flex-col space-y-3.5 shadow-md border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2e3545] text-[#dce2f7] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">architecture</span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-[#dce2f7]">
                  Architectural Vault
                </span>
                <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Stamp-approved blueprints and renders
                </p>
              </div>
            </div>
            <button
              className="p-2 rounded-lg bg-[#323949] text-[#dce2f7] hover:text-[#ffc174] transition-colors"
              title="Filter docs"
            >
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
          </div>

          {/* Document Cards */}
          <div className="space-y-2">
            {architecturalDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-3 bg-[#141b2b] rounded-xl flex items-center justify-between gap-3 hover:bg-[#232a3a] transition-colors border border-[#232a3a]/40"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">{doc.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md text-label-md text-[#dce2f7] font-semibold truncate">
                        {doc.title}
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-[#323949] text-[10px] font-label-sm text-[#93ccff]">
                        {doc.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-[#d8c3ad]">
                      <span className="font-body-sm text-[12px]">{doc.size}</span>
                      <span>•</span>
                      <span className="font-label-sm text-[11px] text-emerald-400 flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[12px]">verified</span>
                        <span>{doc.status}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setActiveDoc(doc)}
                    className="w-8 h-8 rounded-lg bg-[#323949] text-[#dce2f7] hover:bg-[#93ccff] hover:text-[#003351] flex items-center justify-center transition-colors"
                    title="Instant View"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>
                  <button
                    onClick={() => setActiveDoc(doc)}
                    className="w-8 h-8 rounded-lg bg-[#323949] text-[#dce2f7] hover:bg-[#ffc174] hover:text-[#472a00] flex items-center justify-center transition-colors"
                    title="Download CAD File"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Client Action Prompt Bar */}
        <div className="w-full p-4 rounded-xl bg-gradient-to-r from-[#232a3a] to-[#191f2f] flex items-center justify-between shadow-md border border-[#232a3a]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#f59e0b] text-[#472a00] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">draw</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-[#dce2f7]">Next Milestone Approval</h4>
              <p className="font-body-sm text-[12px] text-[#d8c3ad]">Stage 3 Rough-In Walkthrough</p>
            </div>
          </div>
          <button
            onClick={() => setClientTab('labour')}
            className="px-3.5 py-2 rounded-lg bg-[#f59e0b] text-[#472a00] font-label-md text-[12px] font-semibold hover:bg-[#ffc174] transition-all active:scale-95 inline-flex items-center justify-center"
          >
            Review
          </button>
        </div>
      </main>

      <ClientBottomNav />
    </div>
  );
};
