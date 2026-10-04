import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';

export const PortalLoginScreen: React.FC = () => {
  const { setPerspective, setClientTab, setContractorTab, showToast } = useSync();

  const [activeRole, setActiveRole] = useState<'contractor' | 'client'>('contractor');
  const [email, setEmail] = useState('contractor@apexbuilders.io');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XhHK2Gh01OnupMDpwrCIHwj5I7RGTvnGiBm454bH8WG_rh7g4eZtKPhdptbtA6PEgM2Uo3H5PVMmdx70ufgQhYTPXHjGXrlKDL_Yg9-hiJSPrJ7s90ywzqq3TBsgunBRMfGS75xnfeNFrTPaYZB30ETUx-Zcx1lSVmPBBezhmFytPt1wWxei7SCOgpssrilcnWN5RaZWReOzsAwkPgV9rh1BVpNSdye93RMveeXdvYykOY3E9mFKMIEbBw';

  const johnAvatar =
    'https://lh3.googleusercontent.com/aida/AEtjO1VipNINwluy62etvO1BZwWL5LmHvKK75wyFumRw9Vl-1XAAZmEj9-sg04T7VuS_dMXLB9v8QDaEA6efICJkfGWEc4tDbjwfZupygoh6SP0r7ijTkcY_jP6fuLECMPd1sQHO7gDAS3DPlWBc99gIwyQb178CfMCdIPr0cAafoB1BjS98XfmV7gvcq_9rAIGTN4iQwTeALzVEWbzvhaw4_ERFvVGxzSzbExhIOONdm38J90CMU4OMhyH4zn4';

  const sarahAvatar =
    'https://lh3.googleusercontent.com/aida/AEtjO1Wg8wqWPVben0gLeRSMXpXqscv8IvU4L8GWl6wYurm3tXhzc7K0Ju4gjCtrQLnZogNmmeS3-mNg35OrFC16TSCyTUX21wv_SaquOOdr3eNngPOr67S_gz4v2AuIlL2u20NyuTPAczVlHNKLhrF0MRA1IC9jMwR5WkO3mm35B681dxalpY5KDswmJSHCxIJVShfGVbIXAw1hKxoqA9EOCTMFGYjn7tLRsSPiTMSkKrt7vmuxehCX0PM_ghKz';

  const handleRoleSelect = (role: 'contractor' | 'client') => {
    setActiveRole(role);
    if (role === 'contractor') {
      setEmail('contractor@apexbuilders.io');
    } else {
      setEmail('sarah.jenkins@skylinevilla.com');
    }
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeRole === 'contractor') {
      setPerspective('contractor');
      setContractorTab('field');
      showToast('Authenticated as John Miller (General Foreman) - Apex Builders Co.');
    } else {
      setPerspective('client');
      setClientTab('designs');
      showToast('Authenticated as Sarah Jenkins (Property Owner) - Skyline Villa.');
    }
  };

  const launchPersona = (role: 'contractor' | 'client') => {
    handleRoleSelect(role);
    if (role === 'contractor') {
      setPerspective('contractor');
      setContractorTab('field');
      showToast('Live Sandbox: Launched John Miller GC session.');
    } else {
      setPerspective('client');
      setClientTab('designs');
      showToast('Live Sandbox: Launched Sarah Jenkins Client session.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto px-4 pb-12 pt-4">
        {/* 1. Top Header & Branding */}
        <section className="relative w-full pt-2 pb-5 flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#232a3a] border border-[#534434]/30 mb-3 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-label-sm text-[11px] tracking-wider uppercase text-[#dce2f7] font-semibold">
              Dual-Sync Pipeline Online
            </span>
            <span className="material-symbols-outlined text-[#93ccff] text-[14px]">sync_alt</span>
          </div>

          {/* BuildSync Logo */}
          <div className="relative w-16 h-16 mb-2 rounded-2xl bg-[#141b2b] p-2 shadow-xl border border-[#534434]/20 flex items-center justify-center">
            <img
              alt="BuildSync Logo"
              className="w-full h-full object-contain rounded-xl"
              src={logoUrl}
            />
          </div>

          {/* Title & Tagline */}
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-[#dce2f7] tracking-tight">
            Build<span className="text-[#ffc174] font-bold">Sync</span>
          </h1>
          <p className="font-label-sm text-[11px] text-[#ffb95f] uppercase tracking-wider font-semibold mt-0.5">
            Zero Double-Entry Construction Sync
          </p>
        </section>

        {/* 2. Role Selection Tabs (Segmented Switcher) */}
        <section className="mb-4">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-label-sm text-[11px] uppercase text-[#d8c3ad] font-bold tracking-wider">
              Select Role Portal
            </span>
            <span className="font-label-sm text-[11px] text-[#ffc174] flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[13px]">swap_horiz</span> Instant Switch
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#070e1d] border border-[#2e3545] shadow-inner">
            {/* Tab 1: Contractor */}
            <button
              onClick={() => handleRoleSelect('contractor')}
              type="button"
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 text-center ${
                activeRole === 'contractor'
                  ? 'bg-[#232a3a] border-2 border-[#ffc174] shadow-[0_0_15px_rgba(245,158,11,0.25)] text-[#ffc174]'
                  : 'bg-[#141b2b]/60 border-2 border-transparent text-[#d8c3ad] hover:text-[#dce2f7]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md font-bold">
                <span>👷</span>
                <span>CONTRACTOR</span>
              </div>
              <span className="font-label-sm text-[11px] text-[#ffb95f] mt-0.5 font-medium">
                Foreman & Site Lead
              </span>
              <div
                className={`w-2 h-2 rounded-full mt-1.5 transition-colors ${
                  activeRole === 'contractor' ? 'bg-[#f59e0b]' : 'bg-transparent'
                }`}
              />
            </button>

            {/* Tab 2: Client */}
            <button
              onClick={() => handleRoleSelect('client')}
              type="button"
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 text-center ${
                activeRole === 'client'
                  ? 'bg-[#232a3a] border-2 border-[#93ccff] shadow-[0_0_15px_rgba(147,204,255,0.25)] text-[#93ccff]'
                  : 'bg-[#141b2b]/60 border-2 border-transparent text-[#d8c3ad] hover:text-[#dce2f7]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md font-bold">
                <span>👤</span>
                <span>CLIENT</span>
              </div>
              <span
                className={`font-label-sm text-[11px] mt-0.5 font-medium ${
                  activeRole === 'client' ? 'text-[#cce5ff]' : 'text-[#d8c3ad]'
                }`}
              >
                Property Owner & Investor
              </span>
              <div
                className={`w-2 h-2 rounded-full mt-1.5 transition-colors ${
                  activeRole === 'client' ? 'bg-[#3198dc]' : 'bg-transparent'
                }`}
              />
            </button>
          </div>
        </section>

        {/* 3. Role Details & Workflow Tabs Preview */}
        <section className="mb-5">
          <div
            className={`rounded-xl p-3.5 bg-[#191f2f] border shadow-md flex flex-col gap-2.5 transition-all duration-300 ${
              activeRole === 'contractor' ? 'border-[#ffc174]/25' : 'border-[#93ccff]/25'
            }`}
          >
            {/* Header inside details */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    activeRole === 'contractor' ? 'text-[#ffc174]' : 'text-[#93ccff]'
                  }`}
                >
                  {activeRole === 'contractor' ? 'construction' : 'grid_view'}
                </span>
                <span className="font-label-md text-label-md text-[#dce2f7] font-bold uppercase tracking-wider">
                  {activeRole === 'contractor'
                    ? 'Contractor Workflow Architecture'
                    : 'Client Synchronized Portal'}
                </span>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-label-sm font-bold uppercase border ${
                  activeRole === 'contractor'
                    ? 'bg-[#f59e0b]/20 text-[#ffc174] border-[#f59e0b]/30'
                    : 'bg-[#3198dc]/20 text-[#93ccff] border-[#3198dc]/30'
                }`}
              >
                {activeRole === 'contractor' ? '3 Core Modules' : '5 Live Tabs'}
              </span>
            </div>

            {/* Tab badges preview */}
            <div className="flex flex-wrap gap-1.5">
              {activeRole === 'contractor' ? (
                <>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#ffc174] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">apartment</span>{' '}
                    Business Details
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">person_search</span>{' '}
                    Search Client Hub
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">badge</span> Contractor
                    Profile
                  </span>
                </>
              ) : (
                <>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#93ccff] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">photo_camera</span>{' '}
                    Design & Photos
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">chat</span> Direct Chat
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">engineering</span>{' '}
                    Labour Audit
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">layers</span> Material
                    Ledger
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#070e1d] text-[#dce2f7] font-label-sm text-[11px] border border-[#534434]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">person</span> Client
                    Profile
                  </span>
                </>
              )}
            </div>

            {/* Subtext capability highlight */}
            <p className="font-body-sm text-[12px] text-[#d8c3ad] leading-relaxed">
              {activeRole === 'contractor'
                ? 'Rapid Field Data Logging (Labour & Materials) with auto-sync straight into client-facing milestones and audit logs.'
                : 'Real-time visual feeds, audited labour work logs, validated material billing, and high-resolution CAD document vault.'}
            </p>
          </div>
        </section>

        {/* 4. Dynamic Sign-In Form */}
        <section className="mb-5">
          <form
            onSubmit={handleSignIn}
            className="bg-[#232a3a] rounded-xl p-4 shadow-lg border border-[#534434]/25 flex flex-col gap-3.5"
          >
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d8c3ad] text-[20px]">lock</span>
                <h3 className="font-title-md text-title-md text-[#dce2f7]">
                  Account Authentication
                </h3>
              </div>
              <span
                className={`font-label-sm text-[10px] uppercase px-2.5 py-0.5 rounded-full font-bold shadow-sm ${
                  activeRole === 'contractor'
                    ? 'bg-[#f59e0b] text-[#472a00]'
                    : 'bg-[#93ccff] text-[#003351]'
                }`}
              >
                {activeRole === 'contractor' ? 'Contractor Access' : 'Client Access'}
              </span>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-[11px] text-[#d8c3ad] font-medium"
                htmlFor="auth-email-input"
              >
                Work Email Address
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#d8c3ad] text-[20px]">
                  mail
                </span>
                <input
                  id="auth-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#070e1d] text-[#dce2f7] pl-11 pr-4 py-3 rounded-lg font-body-md text-body-md border border-[#534434]/30 focus:border-[#ffc174] focus:outline-none shadow-inner"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-[11px] text-[#d8c3ad] font-medium"
                htmlFor="auth-password-input"
              >
                Security Password
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#d8c3ad] text-[20px]">
                  key
                </span>
                <input
                  id="auth-password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#070e1d] text-[#dce2f7] pl-11 pr-11 py-3 rounded-lg font-body-md text-body-md border border-[#534434]/30 focus:border-[#ffc174] focus:outline-none shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password view"
                  className="absolute right-3.5 text-[#d8c3ad] hover:text-[#dce2f7] flex items-center"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#070e1d] accent-[#f59e0b]"
                />
                <span className="font-body-sm text-body-sm text-[#d8c3ad]">
                  Stay authenticated
                </span>
              </label>
              <span className="font-label-sm text-[11px] text-[#ffc174] hover:underline font-semibold cursor-pointer">
                Forgot pass?
              </span>
            </div>

            {/* Primary Sign In Button */}
            <button
              type="submit"
              className={`w-full h-12 rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all font-bold mt-1 ${
                activeRole === 'contractor'
                  ? 'bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00]'
                  : 'bg-[#93ccff] hover:bg-[#cce5ff] text-[#003351]'
              }`}
            >
              <span>{activeRole === 'contractor' ? 'Sign In as Contractor' : 'Sign In as Client'}</span>
              <span className="material-symbols-outlined text-lg font-bold">arrow_forward</span>
            </button>
          </form>
        </section>

        {/* 5. Dedicated 1-Tap Direct Sign-In Quick Action Buttons */}
        <section className="mb-5">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-label-sm text-[11px] uppercase text-[#d8c3ad] font-bold tracking-wider">
              Direct Instant Access (1-Tap)
            </span>
            <span className="font-label-sm text-[11px] text-[#93ccff] flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[13px]">bolt</span> Bypass Auth
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Direct Button 1: Contractor Workspace */}
            <button
              onClick={() => {
                setPerspective('contractor');
                setContractorTab('field');
                showToast('Entered Contractor Workspace: Apex Builders Site HQ');
              }}
              className="group w-full p-3.5 rounded-xl bg-[#141b2b] hover:bg-[#191f2f] border border-[#ffc174]/30 flex items-center justify-between transition-all shadow-md active:scale-[0.99] text-left"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-xl">👷</span>
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-label-lg text-label-lg text-[#ffc174] font-bold truncate">
                    Enter Contractor Workspace
                  </span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                    Site Hub, Labour logger & Material entry
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#ffc174] text-[22px] shrink-0 group-hover:translate-x-0.5 transition-transform">
                chevron_right
              </span>
            </button>

            {/* Direct Button 2: Client Experience */}
            <button
              onClick={() => {
                setPerspective('client');
                setClientTab('designs');
                showToast('Entered Client Experience: Sarah Jenkins (Skyline Villa)');
              }}
              className="group w-full p-3.5 rounded-xl bg-[#141b2b] hover:bg-[#191f2f] border border-[#93ccff]/30 flex items-center justify-between transition-all shadow-md active:scale-[0.99] text-left"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#3198dc]/20 text-[#93ccff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-xl">👤</span>
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-label-lg text-label-lg text-[#93ccff] font-bold truncate">
                    Enter Client Experience
                  </span>
                  <span className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                    Budget tracker, verified photos & audit ledgers
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#93ccff] text-[22px] shrink-0 group-hover:translate-x-0.5 transition-transform">
                chevron_right
              </span>
            </button>
          </div>
        </section>

        {/* 6. Test Sandbox Persona Cards */}
        <section className="mb-2">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-label-sm text-[11px] text-[#d8c3ad] uppercase font-bold tracking-wider">
              Test Sandbox Personas
            </span>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Switch Credentials</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Persona 1: John Miller */}
            <button
              onClick={() => launchPersona('contractor')}
              className="flex flex-col p-3 rounded-xl bg-[#141b2b] hover:bg-[#191f2f] border border-[#534434]/20 shadow-sm transition-all group text-left"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#ffc174]/40 shrink-0">
                  <img
                    alt="John Miller avatar"
                    className="w-full h-full object-cover"
                    src={johnAvatar}
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-[11px] text-[#ffc174] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span> John Miller
                  </span>
                  <span className="font-body-sm text-[11px] text-[#d8c3ad] block truncate">
                    Lead GC
                  </span>
                </div>
              </div>
              <span className="font-label-sm text-[12px] text-[#dce2f7] font-semibold truncate">
                Apex Builders Co.
              </span>
              <span className="font-body-sm text-[11px] text-[#d8c3ad] truncate mt-0.5">
                Skyline Villa Lead
              </span>
              <div className="mt-2 pt-2 border-t border-[#2e3545]/60 flex items-center justify-between text-[#ffc174] font-label-sm text-[11px]">
                <span>Launch Lead</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </button>

            {/* Persona 2: Sarah Jenkins */}
            <button
              onClick={() => launchPersona('client')}
              className="flex flex-col p-3 rounded-xl bg-[#141b2b] hover:bg-[#191f2f] border border-[#534434]/20 shadow-sm transition-all group text-left"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#93ccff]/40 shrink-0">
                  <img
                    alt="Sarah Jenkins avatar"
                    className="w-full h-full object-cover"
                    src={sarahAvatar}
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-[11px] text-[#93ccff] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#93ccff]"></span> Sarah Jenkins
                  </span>
                  <span className="font-body-sm text-[11px] text-[#d8c3ad] block truncate">
                    Owner & Investor
                  </span>
                </div>
              </div>
              <span className="font-label-sm text-[12px] text-[#dce2f7] font-semibold truncate">
                Skyline Villa Owner
              </span>
              <span className="font-body-sm text-[11px] text-[#d8c3ad] truncate mt-0.5">
                Sunset Bluff Terrace
              </span>
              <div className="mt-2 pt-2 border-t border-[#2e3545]/60 flex items-center justify-between text-[#93ccff] font-label-sm text-[11px]">
                <span>Launch Portal</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
