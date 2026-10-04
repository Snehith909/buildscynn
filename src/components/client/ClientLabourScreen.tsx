import React from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ClientBottomNav } from '../common/ClientBottomNav';

export const ClientLabourScreen: React.FC = () => {
  const {
    setPerspective,
    setContractorTab,
    setClientTab,
    mainWorkers,
    helpers,
    rateMain,
    rateHelper,
    totalLabourPayment,
    cycleApproved,
    approveCyclePayment,
    openLightbox,
    showToast,
  } = useSync();

  const snap1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC5WLIWtdQSW3OYeaPst84g-iesODMa9FuoZ_-HmeI_WXYBT65AG3GwDRkUSiOvEdHYXdd1QeUL-hXziOWeUaBoYbrexRD3rxl-OardFAVhS_pgrmETX1pSC84bg3K2ms9Vw8_SyxjXNpek2zZ806jKaawMylo2MO7Ftn3SUFFs0E8jHbUHgJDLP7-LhqG6-RH0HrQsV5lSrH9P7wI_0QY-OjBGwjMqzZ_k4XRPoKHiBlzex5TVrfKNMQ';

  const snap2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAy3UMuIOY7N9Ug9KkPG6niykOzckz7QRNOUk26_eIe2DxYTD7dOtPJU4rAR8dW-PRytFUnVYiJrSNPmL8tAcKs2Q8QOyeTOQRvz3aftyF6vUdZizMJPPBcqP8pYIPb-8j2KCEKT5mmo4CjXTmDzC_fm9n91XlSBFylxuob-t1EyONW8kA2d6h8lqyV0Ex2XRcYN7ChfpNkmOoYvdbh06qH0wyIFV6rt-IStWLodU6ut2Dyd_sB2aW6cA';

  const mainSubtotal = mainWorkers * rateMain;
  const helperSubtotal = helpers * rateHelper;
  const todayBurn = mainSubtotal + helperSubtotal;

  const handleDownloadTimesheet = () => {
    showToast('Generating Verified Timesheet Audit (W42_Skyline_Villa.pdf)...');
    setTimeout(() => {
      showToast('Timesheet PDF generated with cryptographic contractor signature.');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Labour" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Perspective Switch & Live Sync Status */}
        <div className="flex items-center justify-between bg-[#232a3a] px-4 py-2.5 rounded-xl border border-[#2e3545]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#93ccff] shadow-[0_0_10px_rgba(147,204,255,0.6)]"></div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#93ccff] font-bold">
              Client Audit Perspective
            </span>
          </div>
          <button
            onClick={() => {
              setPerspective('contractor');
              setContractorTab('labour');
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#191f2f] hover:bg-[#323949] text-[#dce2f7] transition-colors border border-[#232a3a]"
          >
            <span className="material-symbols-outlined text-[14px] text-[#ffc174]">
              swap_horiz
            </span>
            <span className="font-label-sm text-[10px] text-[#ffc174] font-semibold uppercase">
              Contractor Entry View
            </span>
          </button>
        </div>

        {/* Synchronized Contractor Header Card */}
        <div className="relative overflow-hidden bg-[#191f2f] rounded-xl p-4 shadow-md border border-[#232a3a]">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#3198dc]/10 blur-2xl pointer-events-none"></div>
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-label-sm text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-[#2e3545] text-[#93ccff] font-bold">
                  Phase 2: Villa Enclosure
                </span>
                <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-[#3198dc]/20 text-[#93ccff] font-bold">
                  Daily Log #41
                </span>
              </div>
              <h2 className="font-title-md text-title-md text-[#dce2f7] pt-1">
                Labour Breakdown & Attendance
              </h2>
              <button
                onClick={() => setClientTab('chat')}
                className="inline-flex items-center gap-1.5 text-[#d8c3ad] hover:text-[#ffc174] transition-colors group mt-1"
              >
                <span className="material-symbols-outlined text-[16px] text-[#ffc174] group-hover:scale-110 transition-transform">
                  chat_bubble
                </span>
                <span className="font-body-sm text-[12px]">
                  Sync active with Site Lead{' '}
                  <strong className="text-[#dce2f7] underline underline-offset-2">John M.</strong>
                </span>
                <span className="material-symbols-outlined text-[14px] text-[#ffc174]">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="shrink-0 p-2.5 rounded-xl bg-[#2e3545] text-[#93ccff] border border-[#232a3a]">
              <span className="material-symbols-outlined text-[26px]">groups</span>
            </div>
          </div>
        </div>

        {/* Today's Workforce Overview Strip */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#191f2f] rounded-xl p-4 flex flex-col justify-between border border-[#232a3a]">
            <div className="flex items-center justify-between text-[#d8c3ad]">
              <span className="font-label-sm text-[10px] uppercase font-bold">Active Workforce</span>
              <span className="material-symbols-outlined text-[18px] text-[#ffc174]">
                engineering
              </span>
            </div>
            <div className="pt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] font-bold">
                  {mainWorkers + helpers}
                </span>
                <span className="font-body-sm text-[12px] text-[#d8c3ad]">Operatives</span>
              </div>
              <p className="font-label-sm text-[10px] text-[#93ccff] pt-0.5 font-mono">
                Shift: 07:00 – 17:00
              </p>
            </div>
          </div>

          <div className="bg-[#191f2f] rounded-xl p-4 flex flex-col justify-between border border-[#232a3a]">
            <div className="flex items-center justify-between text-[#d8c3ad]">
              <span className="font-label-sm text-[10px] uppercase font-bold">Today's Total Burn</span>
              <span className="material-symbols-outlined text-[18px] text-[#93ccff]">payments</span>
            </div>
            <div className="pt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] font-bold">
                  ₹{todayBurn.toFixed(0)}
                </span>
                <span className="font-label-sm text-[11px] text-[#d8c3ad]">.00</span>
              </div>
              <p className="font-label-sm text-[10px] text-[#ffb95f] pt-0.5 font-semibold">
                Masonry Package
              </p>
            </div>
          </div>
        </div>

        {/* Itemized Trade Breakdown */}
        <div className="bg-[#191f2f] rounded-xl p-4 space-y-3 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#93ccff]">
                receipt_long
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#dce2f7] font-bold">
                Itemized Trade Roster
              </span>
            </div>
            <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-[#232a3a] text-[#d8c3ad]">
              Verified by Foreperson
            </span>
          </div>

          <div className="space-y-2 pt-1">
            {/* Masons Tier */}
            <div className="p-3 rounded-lg bg-[#141b2b] flex items-center justify-between gap-3 hover:bg-[#232a3a] transition-colors border border-[#232a3a]/40">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#232a3a] flex items-center justify-center text-[#ffc174] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">construction</span>
                </div>
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-[#dce2f7] truncate font-semibold">
                    Master Masons
                  </p>
                  <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                    {mainWorkers} workers • ₹{rateMain.toFixed(2)} / day
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="font-label-lg text-label-lg text-[#dce2f7] font-bold">
                  ₹{mainSubtotal.toFixed(2)}
                </span>
                <p className="font-label-sm text-[10px] text-[#93ccff]">Standard Tier</p>
              </div>
            </div>

            {/* Helpers Tier */}
            <div className="p-3 rounded-lg bg-[#141b2b] flex items-center justify-between gap-3 hover:bg-[#232a3a] transition-colors border border-[#232a3a]/40">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#232a3a] flex items-center justify-center text-[#93ccff] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">handyman</span>
                </div>
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-[#dce2f7] truncate font-semibold">
                    Skilled Mason Helpers
                  </p>
                  <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                    {helpers} workers • ₹{rateHelper.toFixed(2)} / day
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="font-label-lg text-label-lg text-[#dce2f7] font-bold">
                  ₹{helperSubtotal.toFixed(2)}
                </span>
                <p className="font-label-sm text-[10px] text-[#93ccff]">Support Tier</p>
              </div>
            </div>
          </div>

          {/* Daily Proof of Presence Snaps */}
          <div className="pt-2">
            <div className="flex items-center justify-between pb-2">
              <span className="font-label-sm text-[10px] uppercase tracking-wide text-[#d8c3ad] font-bold">
                Site Verification Snaps
              </span>
              <span className="font-label-sm text-[10px] text-[#93ccff] font-semibold">
                GPS Matched • Skyline Villa
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() =>
                  openLightbox(
                    snap1,
                    '08:14 AM • Morning Roll Call',
                    'Skilled workers laying natural stone masonry on North Wall'
                  )
                }
                className="relative group rounded-lg overflow-hidden bg-[#2e3545] cursor-pointer border border-[#232a3a]"
              >
                <img
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                  alt="Morning Roll Call"
                  src={snap1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d]/90 via-transparent to-transparent flex items-end p-2">
                  <div className="flex items-center gap-1 text-[#dce2f7]">
                    <span className="material-symbols-outlined text-[12px] text-[#93ccff]">
                      schedule
                    </span>
                    <span className="font-label-sm text-[10px]">08:14 AM • Morning Roll</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  openLightbox(
                    snap2,
                    '11:30 AM • Midday Progress',
                    'Masonry assistants mixing mortar and inspecting limestone cladding'
                  )
                }
                className="relative group rounded-lg overflow-hidden bg-[#2e3545] cursor-pointer border border-[#232a3a]"
              >
                <img
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                  alt="Midday Progress"
                  src={snap2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d]/90 via-transparent to-transparent flex items-end p-2">
                  <div className="flex items-center gap-1 text-[#dce2f7]">
                    <span className="material-symbols-outlined text-[12px] text-[#93ccff]">
                      schedule
                    </span>
                    <span className="font-label-sm text-[10px]">11:30 AM • Midday Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Attendance Matrix (Week 14 Mon - Sat) */}
        <div className="bg-[#191f2f] rounded-xl p-4 space-y-3 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#ffc174]">
                calendar_month
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#dce2f7] font-bold">
                Cycle Attendance Matrix
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Week 14 (Mon - Sat)</span>
          </div>

          <div className="space-y-1.5 pt-1">
            {/* Mon */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141b2b] border border-[#232a3a]/40">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#d8c3ad] font-bold">Mon</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#dce2f7]">5 Workers</span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad]">(• 8 hrs)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  ₹275.00
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#232a3a] text-[#93ccff] font-label-sm text-[10px]">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                </span>
              </div>
            </div>

            {/* Tue */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141b2b] border border-[#232a3a]/40">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#d8c3ad] font-bold">Tue</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#dce2f7]">5 Workers</span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad]">(• 8 hrs)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  ₹275.00
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#232a3a] text-[#93ccff] font-label-sm text-[10px]">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                </span>
              </div>
            </div>

            {/* Wed */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141b2b] border border-[#232a3a]/40">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#d8c3ad] font-bold">Wed</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#dce2f7]">4 Workers</span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad]">(• 8 hrs)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  ₹220.00
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#232a3a] text-[#93ccff] font-label-sm text-[10px]">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                </span>
              </div>
            </div>

            {/* Thu */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141b2b] border border-[#232a3a]/40">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#d8c3ad] font-bold">Thu</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#dce2f7]">5 Workers</span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad]">(• 8 hrs)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  ₹275.00
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#232a3a] text-[#93ccff] font-label-sm text-[10px]">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                </span>
              </div>
            </div>

            {/* Fri (Today) */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#3198dc]/15 border border-[#3198dc]/30">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#93ccff] font-bold">Fri</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#dce2f7] font-semibold">
                    {mainWorkers + helpers} Workers
                  </span>
                  <span className="font-body-sm text-[12px] text-[#93ccff]">(• Active)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#dce2f7] font-semibold">
                  ₹{todayBurn.toFixed(2)}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#93ccff] text-[#003351] font-label-sm text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003351] animate-pulse"></span>{' '}
                  Today
                </span>
              </div>
            </div>

            {/* Sat (Scheduled) */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141b2b] opacity-75 border border-[#232a3a]/40">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md w-9 text-[#d8c3ad] font-bold">Sat</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-md text-body-md text-[#d8c3ad]">5 Workers</span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad]">(• Half-day)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-[#d8c3ad] font-semibold">
                  ₹137.50
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#232a3a] text-[#d8c3ad] font-label-sm text-[10px]">
                  <span className="material-symbols-outlined text-[12px]">event</span> Scheduled
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary & Approval Action Card */}
        <div className="bg-[#191f2f] rounded-xl p-4 space-y-4 shadow-md border border-[#232a3a]">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#d8c3ad] font-bold">
                Accrued Labour Billable
              </span>
              <div className="flex items-baseline gap-1 pt-1">
                <span className="font-headline-xl-mobile text-headline-xl-mobile text-[#dce2f7] font-bold">
                  ₹{totalLabourPayment.toFixed(0)}
                </span>
                <span className="font-title-md text-title-md text-[#d8c3ad]">.00</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#232a3a] text-[#93ccff] font-label-sm text-[11px] font-semibold border border-[#2e3545]">
                <span className="material-symbols-outlined text-[14px]">verified</span> Verified
              </span>
              <span className="font-label-sm text-[11px] text-[#d8c3ad]">Contractor John M.</span>
            </div>
          </div>

          {/* Client Audit Transparency Note */}
          <div className="p-3 rounded-lg bg-[#141b2b] flex items-start gap-2.5 text-[#d8c3ad] border border-[#232a3a]/40">
            <span className="material-symbols-outlined text-[18px] text-[#93ccff] shrink-0 pt-0.5">
              info
            </span>
            <p className="font-body-sm text-[12px] leading-relaxed">
              All entries are immutable audits locked directly from on-site geo-fenced check-ins.
              Review timesheet evidence before releasing escrow draw.
            </p>
          </div>

          {/* Client Action Buttons */}
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={approveCyclePayment}
              disabled={cycleApproved}
              className={`w-full h-12 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm font-bold ${
                cycleApproved
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-[#ffc174] hover:bg-[#f59e0b] text-[#472a00]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {cycleApproved ? 'check' : 'thumb_up'}
              </span>
              <span>
                {cycleApproved
                  ? 'Cycle Approved & Escrow Released'
                  : `Approve Cycle Payment (₹${totalLabourPayment.toFixed(2)})`}
              </span>
            </button>

            <button
              onClick={handleDownloadTimesheet}
              className="w-full h-12 rounded-xl bg-[#232a3a] text-[#dce2f7] font-label-md text-label-md flex items-center justify-center gap-2 transition-colors hover:bg-[#2e3545] active:scale-[0.98] font-semibold border border-[#2e3545]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#93ccff]">
                description
              </span>
              <span>Download Verified Timesheet PDF</span>
            </button>
          </div>
        </div>
      </main>

      <ClientBottomNav />
    </div>
  );
};
