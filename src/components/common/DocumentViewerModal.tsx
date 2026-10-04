import React from 'react';
import { useSync } from '../../context/SyncContext';

export const DocumentViewerModal: React.FC = () => {
  const { activeDoc, setActiveDoc, showToast } = useSync();

  if (!activeDoc) return null;

  const handleDownload = () => {
    showToast(`Downloading ${activeDoc.title} (${activeDoc.size})...`);
    setTimeout(() => {
      showToast(`${activeDoc.title} downloaded successfully.`);
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setActiveDoc(null)}
    >
      <div
        className="relative max-w-xl w-full bg-[#191f2f] rounded-2xl overflow-hidden border border-[#2e3545] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1322] border-b border-[#232a3a]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[#232a3a] text-[#ffc174] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">{activeDoc.icon}</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-title-md text-[16px] text-[#dce2f7] font-semibold truncate">
                  {activeDoc.title}
                </h3>
                <span className="px-1.5 py-0.5 rounded bg-[#232a3a] text-[10px] font-label-sm text-[#93ccff]">
                  {activeDoc.type}
                </span>
              </div>
              <p className="font-body-sm text-[12px] text-[#d8c3ad] flex items-center gap-1">
                <span>{activeDoc.size}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">{activeDoc.status}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveDoc(null)}
            className="w-9 h-9 rounded-lg bg-[#232a3a] text-[#dce2f7] hover:bg-[#323949] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Blueprint Viewer Canvas Mock */}
        <div className="relative w-full h-80 bg-[#070e1d] p-4 flex flex-col items-center justify-center overflow-hidden border-y border-[#232a3a]/40">
          {/* Blueprint grid lines background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(#3198dc 1px, transparent 1px), linear-gradient(90deg, #3198dc 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center p-6 bg-[#141b2b]/90 border border-[#3198dc]/30 rounded-xl max-w-sm shadow-xl backdrop-blur-sm">
            <span className="material-symbols-outlined text-[#3198dc] text-[48px] mb-2 animate-pulse">
              schema
            </span>
            <span className="font-headline-md text-headline-md text-white mb-1">
              {activeDoc.title}
            </span>
            <p className="font-body-sm text-[#93ccff] text-[12px] mb-3">
              Official Revision • Stamped by Licensed Civil Engineer (PE #88410)
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#d8c3ad] bg-[#0c1322] px-3 py-1.5 rounded-lg border border-[#232a3a]">
              <span>HASH: 4F9B-2024-SKYLINE-VILLA</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141b2b]">
          <span className="font-label-sm text-[11px] text-[#d8c3ad] uppercase tracking-wider">
            Verified Vault Document
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="h-10 px-4 rounded-xl bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00] font-label-md text-[13px] font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
