import React from 'react';
import { useSync } from '../../context/SyncContext';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  showPerspectiveSwitch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = 'Skyline Villa • Phase 2',
  showBack = false,
  onBack,
  showPerspectiveSwitch = true,
}) => {
  const { perspective, setPerspective, clientTab, setClientTab, contractorTab, setContractorTab } =
    useSync();

  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XhHK2Gh01OnupMDpwrCIHwj5I7RGTvnGiBm454bH8WG_rh7g4eZtKPhdptbtA6PEgM2Uo3H5PVMmdx70ufgQhYTPXHjGXrlKDL_Yg9-hiJSPrJ7s90ywzqq3TBsgunBRMfGS75xnfeNFrTPaYZB30ETUx-Zcx1lSVmPBBezhmFytPt1wWxei7SCOgpssrilcnWN5RaZWReOzsAwkPgV9rh1BVpNSdye93RMveeXdvYykOY3E9mFKMIEbBw';

  const sarahAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAZRseKf4YfGDhzNsQpvFukrgxg31YosOPYwAfCykYenUFJYBy2hdDiH-HxnYBiUCAcGCPpP0rEDv8pPmDk4d1_En_uRsaWWh_5iysQDdKKsSjwX2pr8xSfRnq-_CbOiMPOscksjKSaeMta4q7B-gbTJijMvGM2b-F8VJ0uIc2afUuk5N0gNfXHiYLBIe2Io1v0Gn4KDJZK2XaxRYfZzs_aV_94-GgWPEwCvSqW8c8rb04dILk_UyyCxw';

  const johnAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsa2dfyODk7pHj2XyHUCNwAI-PYHOH6QUctmJKqBL1IdAq8neMd_txRYx0WZqQWOdzYnCxL56aeHFOemsAP-zbfOQ7mBGb-SrKYnPeVynH72ovOTGuC82fwOT-Tew2i1FvgC-JLMWTKIzwOl-aZV236nkpHlaIKyFyiA6Yu-mLLA5HCII_76lUj5jkrajFCBqJjgVyn6RqOdn3g1Kr2gmYDfOTdO7WprVryF9iLDWWzyJGXkpOecowZA';

  const togglePerspective = () => {
    if (perspective === 'contractor') {
      setPerspective('client');
      setClientTab('designs');
    } else {
      setPerspective('contractor');
      setContractorTab('field');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-safe bg-[#0c1322]/85 backdrop-blur-xl border-b border-[#232a3a]/60 shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-xl mx-auto px-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {showBack ? (
            <button
              onClick={onBack}
              aria-label="Go back"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#191f2f] text-[#dce2f7] hover:bg-[#232a3a] hover:text-[#ffc174] transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          ) : (
            <button
              onClick={() => setPerspective('portal')}
              title="Return to Portal Screen"
              className="shrink-0 focus:outline-none transition-transform active:scale-95"
            >
              <img
                alt="BuildSync Logo"
                className="h-8 w-auto object-contain shrink-0"
                src={logoUrl}
              />
            </button>
          )}

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-md text-headline-md tracking-tight text-[#dce2f7] truncate">
                {title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-label-sm text-label-sm uppercase tracking-wide text-[#93ccff] bg-[#191f2f] px-1.5 py-0.5 rounded border border-[#232a3a]/40">
                {subtitle}
              </span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#232a3a] border border-[#2e3545]/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-400 font-semibold">
                  LIVE SYNC ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 shrink-0">
          {showPerspectiveSwitch && (
            <button
              onClick={togglePerspective}
              title={`Switch to ${perspective === 'contractor' ? 'Client' : 'Contractor'} View`}
              className={`h-9 px-2.5 rounded-lg flex items-center gap-1.5 font-label-sm text-[11px] font-bold uppercase transition-all shadow-sm active:scale-95 border ${
                perspective === 'contractor'
                  ? 'bg-[#191f2f] text-[#93ccff] border-[#3198dc]/40 hover:bg-[#232a3a]'
                  : 'bg-[#191f2f] text-[#ffc174] border-[#f59e0b]/40 hover:bg-[#232a3a]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">swap_horiz</span>
              <span className="hidden sm:inline">
                {perspective === 'contractor' ? 'Client Mode' : 'Contractor'}
              </span>
            </button>
          )}

          <div
            onClick={() => {
              if (perspective === 'client') {
                setClientTab('profile');
              } else {
                setContractorTab('field');
              }
            }}
            className="p-0.5 rounded-full bg-[#232a3a] ring-2 ring-[#ffc174]/30 cursor-pointer hover:ring-[#ffc174]/70 transition-all shrink-0"
            title={perspective === 'client' ? 'Sarah Jenkins Profile' : 'John Miller GC'}
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src={perspective === 'client' ? sarahAvatar : johnAvatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
