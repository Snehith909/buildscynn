import React from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ContractorBottomNav } from '../common/ContractorBottomNav';
import { ArchitecturalDoc } from '../../types';

export const ContractorPlansScreen: React.FC = () => {
  const { setContractorTab, setActiveDoc, openLightbox } = useSync();

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

  const previewCad =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-voa6ec-e-V74e3esF0DmG0qkyv3xZHr5f3dWQXaZhf5KHu0BBfEsSRA9Wnm1UhaxaWTacYmg21hb9xACf-u7s4tPCPNPNYjNf0bJ1pUiaGhCJfkxoo410pJE9EghVZ5yEbR7b7UNwzrx3XK_lTxYYF3eKkXwDuS-kU4gmlm1jV8qZjfnlYD-SgmcQQzXVJBxKQjeGc85b6JeJ1sg4waBJAvJ8MnTQCWmAmo6nBi99SMqHFI7yIdxhg';

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header
        title="Field Plans & Vault"
        subtitle="Skyline Villa"
        showBack
        onBack={() => setContractorTab('field')}
      />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4 space-y-4">
        {/* Active CAD Sheet Preview Banner */}
        <div
          onClick={() =>
            openLightbox(
              previewCad,
              'Structural Blueprint Rev 3.2',
              'Pacific Palisades North Hills Zone C'
            )
          }
          className="relative rounded-2xl overflow-hidden bg-[#141b2b] border border-[#232a3a] shadow-lg cursor-pointer group"
        >
          <div className="h-48 w-full bg-[#070e1d] flex items-center justify-center relative overflow-hidden">
            <img
              src={previewCad}
              alt="Floor plan schematic"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-black/30" />
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-label-sm text-[10px] font-bold border border-emerald-500/30">
              City Stamped
            </div>
          </div>
          <div className="p-4 bg-[#191f2f] flex items-center justify-between">
            <div>
              <h3 className="font-title-md text-title-md text-[#dce2f7] font-semibold">
                Ground & Cantilever Tier Floorplan
              </h3>
              <p className="font-body-sm text-[12px] text-[#d8c3ad] mt-0.5">
                Rev 3.2 • Stamped October 12, 2024
              </p>
            </div>
            <button className="w-10 h-10 rounded-xl bg-[#232a3a] text-[#ffc174] flex items-center justify-center hover:bg-[#323949] transition-colors">
              <span className="material-symbols-outlined text-[20px]">zoom_in</span>
            </button>
          </div>
        </div>

        {/* Architectural Vault Documents */}
        <div className="bg-[#191f2f] rounded-xl p-4 shadow-md space-y-3 border border-[#232a3a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
                architecture
              </span>
              <h3 className="font-headline-md text-headline-md text-[#dce2f7]">
                Approved Drawing Sets
              </h3>
            </div>
            <span className="font-label-sm text-[10px] text-[#93ccff] bg-[#232a3a] px-2 py-0.5 rounded font-bold">
              3 Sets
            </span>
          </div>

          <div className="space-y-2">
            {architecturalDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-3 bg-[#141b2b] rounded-xl flex items-center justify-between gap-3 hover:bg-[#232a3a] transition-colors border border-[#232a3a]/40"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 text-[#ffc174] flex items-center justify-center shrink-0">
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
                    title="Inspect Blueprint"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>
                  <button
                    onClick={() => setActiveDoc(doc)}
                    className="w-8 h-8 rounded-lg bg-[#323949] text-[#dce2f7] hover:bg-[#ffc174] hover:text-[#472a00] flex items-center justify-center transition-colors"
                    title="Download CAD"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </button>
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
