import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ContractorBottomNav } from '../common/ContractorBottomNav';

export const ContractorDashboardScreen: React.FC = () => {
  const {
    setContractorTab,
    setPerspective,
    setClientTab,
    activities,
    openLightbox,
    showToast,
  } = useSync();

  const [searchTerm, setSearchTerm] = useState('@sarah_jenkins_villa');
  const [showLogModal, setShowLogModal] = useState(false);

  const sarahAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBny_x8-g7zDEHXv9YU8lQb8MwalR60uQSdmEWS5jE29iF9QPcB_WxQRFbAA5XYYR-P0j0DDAJnZZsqpWm-yWXq36uDJB32-OT9xQjynRcuN1X1QKBxHrLgUOnN2hhPl1NUUNosdcCqfDTPWaVhMSUkHxk1UwKhn0O-PdIhb2RSJcmb7NQa6RyPsr8Wjlf4lX6I5snheaEQIZxdn3AvMWnTwK3t-BZh1eXc1z9-t7Lya0MB_QtsJnRrbw';

  const previewPhoto =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDoY3R3K4a3LAPqR0rgL_vaNMfb_BfwWlgTwdrpSegCzXQTG4vemvZ5WFmZZZo9rSb5Nf3ZO7XhKXoW0CYk-VuPqhxUrFXtJ_9n77XpyJ0HmSx5yrnbSy88kBUCUIUuIU1PxjcZAVZnS5bGFv6ur1aQSGZDcOVcQcHG5NlxlY_TKiF4pZlqryYnqZQDhFTl5nslccl2VhHnCZseb_-4Lupta1QE9V-W3Ea1pwJHboPTQgzcC2Npfq6XuA';

  const previewCad =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-voa6ec-e-V74e3esF0DmG0qkyv3xZHr5f3dWQXaZhf5KHu0BBfEsSRA9Wnm1UhaxaWTacYmg21hb9xACf-u7s4tPCPNPNYjNf0bJ1pUiaGhCJfkxoo410pJE9EghVZ5yEbR7b7UNwzrx3XK_lTxYYF3eKkXwDuS-kU4gmlm1jV8qZjfnlYD-SgmcQQzXVJBxKQjeGc85b6JeJ1sg4waBJAvJ8MnTQCWmAmo6nBi99SMqHFI7yIdxhg';

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Field Dashboard" subtitle="BuildSync Pro" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Top Contractor Perspective & Organization Bar */}
        <section className="p-3 bg-[#070e1d] rounded-xl border border-[#232a3a]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#ffc174]">
                <span className="material-symbols-outlined text-[22px]">construction</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-sm text-[10px] tracking-wider uppercase text-[#ffc174] font-bold">
                    Contractor Mode
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#a08e7a]"></span>
                  <span className="font-label-sm text-[11px] text-[#d8c3ad] truncate">
                    Apex Builders Co.
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-[#dce2f7] font-semibold truncate">
                  Lead: John M. (General Foreman)
                </p>
              </div>
            </div>
            <button
              onClick={() => showToast('Connected to Site HQ Server (Asia-East Mesh).')}
              className="flex items-center gap-1.5 bg-[#191f2f] hover:bg-[#232a3a] px-2.5 py-1.5 rounded-lg shrink-0 transition-colors border border-[#232a3a]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#ffc174]">verified</span>
              <span className="font-label-sm text-[11px] text-[#dce2f7] font-bold">Site HQ</span>
            </button>
          </div>
        </section>

        {/* Search Client Username & Workspace Hub */}
        <section className="relative w-full">
          <div className="relative flex items-center bg-[#141b2b] rounded-xl shadow-md border border-[#232a3a]">
            <span className="material-symbols-outlined absolute left-3.5 text-[#d8c3ad] text-[20px]">
              person_search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Client by Username (e.g. @sarah_jenkins_villa)"
              className="w-full h-12 bg-transparent pl-11 pr-10 text-[#dce2f7] font-body-md text-body-md placeholder:text-[#d8c3ad]/50 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                aria-label="Clear input"
                className="absolute right-3 text-[#d8c3ad] hover:text-[#dce2f7] p-1 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">cancel</span>
              </button>
            )}
          </div>

          {/* Quick Autocomplete Dropdown Pill List */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 no-scrollbar">
            <button
              onClick={() => setSearchTerm('@sarah_jenkins_villa')}
              className="px-3 py-1 bg-[#232a3a] rounded-full font-label-sm text-[11px] text-[#ffc174] flex items-center gap-1 shrink-0 shadow-sm border border-[#f59e0b]/30 font-bold"
            >
              <span className="material-symbols-outlined text-[14px]">check_circle</span>{' '}
              @sarah_jenkins (Active)
            </button>
            <button
              onClick={() => setSearchTerm('@marcus_apt_4b')}
              className="px-3 py-1 bg-[#191f2f] rounded-full font-label-sm text-[11px] text-[#d8c3ad] flex items-center gap-1 shrink-0 border border-[#232a3a]"
            >
              <span className="material-symbols-outlined text-[14px]">history</span> @marcus_apt_4b
            </button>
            <button
              onClick={() => setSearchTerm('@oakridge_remodel')}
              className="px-3 py-1 bg-[#191f2f] rounded-full font-label-sm text-[11px] text-[#d8c3ad] flex items-center gap-1 shrink-0 border border-[#232a3a]"
            >
              <span className="material-symbols-outlined text-[14px]">history</span>{' '}
              @oakridge_remodel
            </button>
          </div>
        </section>

        {/* Active Selected Client Profile Card */}
        <section className="relative overflow-hidden bg-[#141b2b] rounded-xl shadow-lg p-4 border border-[#232a3a]">
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#3198dc]/15 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-start justify-between gap-3 relative z-10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-xl bg-[#232a3a] flex items-center justify-center shrink-0 overflow-hidden shadow-inner border border-[#2e3545]">
                <img
                  className="w-full h-full object-cover"
                  alt="Sarah Jenkins client portrait"
                  src={sarahAvatar}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#3198dc]"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-md text-headline-md text-[#dce2f7] truncate">
                    Sarah Jenkins
                  </span>
                  <span className="font-label-sm text-[10px] text-[#93ccff] font-bold">
                    @sarah_jenkins
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-[#ffc174] font-semibold truncate">
                  Skyline Villa Renovation • Phase 2
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setPerspective('client');
                setClientTab('designs');
              }}
              title="View from Sarah's Perspective"
              className="p-2 rounded-lg bg-[#191f2f] hover:bg-[#232a3a] text-[#93ccff] flex items-center justify-center transition-colors border border-[#232a3a]"
            >
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[#d8c3ad] bg-[#191f2f]/80 px-3 py-1.5 rounded-lg border border-[#232a3a]/40">
            <span className="material-symbols-outlined text-[18px] text-[#ff956b]">pin_drop</span>
            <span className="font-body-sm text-[12px] truncate text-[#dce2f7]">
              742 Evergreen Terrace, North Hills Site Zone C
            </span>
          </div>

          <div className="mt-3 pt-3 flex items-center justify-between gap-3 border-t border-[#232a3a]/60">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="w-3 h-3 rounded-full bg-[#3198dc] animate-ping opacity-75"></span>
                <span className="absolute w-2 h-2 rounded-full bg-[#3198dc]"></span>
              </div>
              <span className="font-label-md text-label-md text-[#93ccff] font-semibold">
                Connected & Syncing
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-[#d8c3ad]">Last sync: 2 mins ago</span>
          </div>
        </section>

        {/* Interactive Project Workspaces Navigator */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
                view_quilt
              </span>
              <h2 className="font-title-md text-title-md text-[#dce2f7]">Client Workspaces</h2>
            </div>
            <span className="font-label-sm text-[10px] text-[#d8c3ad] uppercase tracking-wider font-bold">
              3 Modules Active
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {/* 1. Chat & Media Sync */}
            <div
              onClick={() => {
                setPerspective('client');
                setClientTab('chat');
              }}
              className="bg-[#141b2b] hover:bg-[#191f2f] transition-all rounded-xl p-4 shadow-md cursor-pointer group border border-[#232a3a]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#3198dc]/20 text-[#93ccff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      chat_bubble_outline
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-title-md text-title-md text-[#dce2f7] font-bold">
                        Chat & Media Sync
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#3198dc] text-white font-label-sm text-[10px] font-bold">
                        Client Sync
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-[#d8c3ad] mt-0.5 truncate">
                      Send messages, site photos & architectural drawings
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#d8c3ad] group-hover:text-[#ffc174] transition-colors text-[22px]">
                  chevron_right
                </span>
              </div>

              {/* Preview thumbnails */}
              <div className="mt-3.5 pt-3 grid grid-cols-3 gap-2 border-t border-[#232a3a]/40">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(
                      previewPhoto,
                      'Villa Terrace Framing',
                      'High-resolution structural framing golden hour'
                    );
                  }}
                  className="relative h-16 rounded-lg overflow-hidden bg-[#232a3a] border border-[#2e3545]"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt="Structural framing"
                    src={previewPhoto}
                  />
                  <span className="absolute bottom-1 right-1 font-label-sm text-[9px] bg-black/80 text-[#93ccff] px-1 rounded">
                    Photo
                  </span>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(
                      previewCad,
                      'Villa Floor Plan CAD',
                      'Blueprint schematic rendered on tablet'
                    );
                  }}
                  className="relative h-16 rounded-lg overflow-hidden bg-[#232a3a] border border-[#2e3545]"
                >
                  <img className="w-full h-full object-cover" alt="CAD map" src={previewCad} />
                  <span className="absolute bottom-1 right-1 font-label-sm text-[9px] bg-black/80 text-[#93ccff] px-1 rounded">
                    CAD
                  </span>
                </div>

                <div className="h-16 rounded-lg bg-[#191f2f] flex flex-col items-center justify-center text-center p-1 border border-[#232a3a]">
                  <span className="material-symbols-outlined text-[18px] text-[#93ccff]">
                    mark_chat_unread
                  </span>
                  <span className="font-label-sm text-[10px] text-[#dce2f7] font-semibold">
                    2 New Unread
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Labour Logger Workspace */}
            <div
              onClick={() => setContractorTab('labour')}
              className="bg-[#141b2b] hover:bg-[#191f2f] transition-all rounded-xl p-4 shadow-md cursor-pointer group border border-[#232a3a]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 text-[#ffc174] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">engineering</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-title-md text-title-md text-[#dce2f7] font-bold">
                        Labour Logger
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#f59e0b] text-[#472a00] font-label-sm text-[10px] font-bold">
                        Field Active
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-[#d8c3ad] mt-0.5 truncate">
                      Log daily workforce, specialized trades & weekly rates
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#d8c3ad] group-hover:text-[#ffc174] transition-colors text-[22px]">
                  chevron_right
                </span>
              </div>

              {/* Metric Summary Chips */}
              <div className="mt-3.5 pt-3 flex items-center justify-between gap-2 border-t border-[#232a3a]/40">
                <div className="flex-1 bg-[#191f2f] px-3 py-2 rounded-lg border border-[#232a3a]/50">
                  <span className="font-label-sm text-[10px] text-[#d8c3ad] block uppercase font-bold">
                    On-Site Today
                  </span>
                  <span className="font-headline-md text-headline-md text-[#ffc174] font-bold">
                    5 Workers
                  </span>
                </div>
                <div className="flex-1 bg-[#191f2f] px-3 py-2 rounded-lg border border-[#232a3a]/50">
                  <span className="font-label-sm text-[10px] text-[#d8c3ad] block uppercase font-bold">
                    Weekly Cost Log
                  </span>
                  <span className="font-headline-md text-headline-md text-[#dce2f7] font-bold">
                    ₹1,375
                  </span>
                </div>
                <div className="flex-1 bg-[#191f2f] px-3 py-2 rounded-lg border border-[#232a3a]/50">
                  <span className="font-label-sm text-[10px] text-[#d8c3ad] block uppercase font-bold">
                    Trades
                  </span>
                  <span className="font-headline-md text-headline-md text-[#93ccff] font-bold">
                    Masons
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Material Manager Workspace */}
            <div
              onClick={() => setContractorTab('material')}
              className="bg-[#141b2b] hover:bg-[#191f2f] transition-all rounded-xl p-4 shadow-md cursor-pointer group border border-[#232a3a]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#ff956b]/20 text-[#ffbda5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-title-md text-title-md text-[#dce2f7] font-bold">
                        Material Manager
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#2e3545] text-[#ffbda5] font-label-sm text-[10px] font-bold">
                        Audited
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-[#d8c3ad] mt-0.5 truncate">
                      Track quantities, unit rates & invoice validations
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#d8c3ad] group-hover:text-[#ffc174] transition-colors text-[22px]">
                  chevron_right
                </span>
              </div>

              <div className="mt-3.5 pt-3 flex items-center justify-between text-[#d8c3ad] bg-[#191f2f] px-3 py-2 rounded-lg border border-[#232a3a]/40">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffc174] text-[18px]">
                    receipt_long
                  </span>
                  <span className="font-body-sm text-[12px] text-[#dce2f7]">
                    Ready-Mix Slip #DS-88421
                  </span>
                </div>
                <span className="font-label-md text-label-md text-[#ffc174] font-bold">
                  ₹1,380.00
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Synced Activities Feed */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#93ccff] text-[20px]">sync</span>
              <h2 className="font-title-md text-title-md text-[#dce2f7]">
                Recent Synced Activities
              </h2>
            </div>
            <button
              onClick={() => showToast('Displaying complete synchronization cloud trail.')}
              className="font-label-sm text-[11px] text-[#ffc174] font-bold hover:underline"
            >
              View All
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {activities.map((act) => (
              <div
                key={act.id}
                className="flex items-center justify-between p-3 rounded-xl bg-[#141b2b] shadow-sm border border-[#232a3a]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      act.category === 'labour'
                        ? 'bg-[#f59e0b]/15 text-[#ffc174]'
                        : act.category === 'material'
                        ? 'bg-[#ff956b]/15 text-[#ffbda5]'
                        : 'bg-[#3198dc]/15 text-[#93ccff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{act.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="font-body-md text-[13px] text-[#dce2f7] font-semibold truncate">
                      {act.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[14px] text-[#93ccff]">
                        cloud_done
                      </span>
                      <span className="font-label-sm text-[11px] text-[#93ccff] font-medium">
                        {act.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] text-[#d8c3ad] font-mono shrink-0">
                  {act.timeAgo}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sticky Thumb Zone Floating Quick Action Button */}
        <div className="fixed bottom-24 right-4 z-40 max-w-xl">
          <button
            onClick={() => setShowLogModal(true)}
            aria-label="Log New Field Entry"
            className="flex items-center gap-2 h-14 px-5 rounded-full bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00] font-label-lg text-label-lg font-bold shadow-xl active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">add_circle</span>
            <span>Log New Field Entry</span>
          </button>
        </div>

        {/* Interactive Quick Entry Bottom Sheet Modal */}
        {showLogModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0"
            onClick={() => setShowLogModal(false)}
          >
            <div
              className="w-full max-w-lg bg-[#141b2b] rounded-t-3xl p-6 shadow-2xl flex flex-col gap-4 border-t border-[#2e3545] animate-in slide-in-from-bottom duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffc174] text-[22px]">
                    post_add
                  </span>
                  <h3 className="font-title-md text-title-md text-[#dce2f7] font-bold">
                    New Field Entry
                  </h3>
                </div>
                <button
                  onClick={() => setShowLogModal(false)}
                  className="w-8 h-8 rounded-full bg-[#191f2f] flex items-center justify-center text-[#d8c3ad]"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <p className="font-body-sm text-[12px] text-[#d8c3ad]">
                Choose entry category for <span className="text-[#ffc174] font-bold">@sarah_jenkins</span>:
              </p>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    setShowLogModal(false);
                    setPerspective('client');
                    setClientTab('chat');
                  }}
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] transition-colors gap-2 text-center border border-[#232a3a]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3198dc]/20 text-[#93ccff] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                  </div>
                  <span className="font-label-sm text-[11px] text-[#dce2f7] font-bold">
                    Photo / CAD
                  </span>
                </button>

                <button
                  onClick={() => {
                    setShowLogModal(false);
                    setContractorTab('labour');
                  }}
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] transition-colors gap-2 text-center border border-[#232a3a]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 text-[#ffc174] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                  </div>
                  <span className="font-label-sm text-[11px] text-[#dce2f7] font-bold">
                    Daily Labour
                  </span>
                </button>

                <button
                  onClick={() => {
                    setShowLogModal(false);
                    setContractorTab('material');
                  }}
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] transition-colors gap-2 text-center border border-[#232a3a]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff956b]/20 text-[#ffbda5] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  </div>
                  <span className="font-label-sm text-[11px] text-[#dce2f7] font-bold">
                    Material PO
                  </span>
                </button>
              </div>

              <div className="p-3 bg-[#191f2f] rounded-xl flex items-center gap-2 border border-[#232a3a]/40">
                <span className="material-symbols-outlined text-[#93ccff] text-[18px]">
                  lock_reset
                </span>
                <span className="font-body-sm text-[12px] text-[#d8c3ad]">
                  Entries auto-lock and sync directly to Client Portal in real-time.
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <ContractorBottomNav />
    </div>
  );
};
