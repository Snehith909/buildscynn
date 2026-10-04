import React from 'react';
import { useSync } from '../../context/SyncContext';
import { ContractorTab } from '../../types';

export const ContractorBottomNav: React.FC = () => {
  const { contractorTab, setContractorTab, setPerspective, setClientTab } = useSync();

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-[#070e1d]/90 backdrop-blur-xl border-t border-[#232a3a]/80 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-xl mx-auto px-1 flex items-center justify-around">
        {/* 1. Field Dashboard */}
        <button
          onClick={() => setContractorTab('field')}
          className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all ${
            contractorTab === 'field'
              ? 'text-[#ffc174] bg-[#232a3a] shadow-inner font-bold'
              : 'text-[#d8c3ad] hover:text-[#dce2f7]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={contractorTab === 'field' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            dashboard
          </span>
          <span className="font-label-sm text-[10px] mt-1">Field</span>
        </button>

        {/* 2. Punch / Labour Entry */}
        <button
          onClick={() => setContractorTab('labour')}
          className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all relative ${
            contractorTab === 'labour'
              ? 'text-[#ffc174] bg-[#232a3a] shadow-inner font-bold'
              : 'text-[#d8c3ad] hover:text-[#dce2f7]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={contractorTab === 'labour' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            checklist_rtl
          </span>
          <span className="font-label-sm text-[10px] mt-1">Punch</span>
          <span className="absolute top-1 right-2.5 px-1.5 py-0.2 bg-[#f59e0b] text-[#472a00] font-label-sm text-[9px] rounded-full font-bold">
            4
          </span>
        </button>

        {/* 3. Plans */}
        <button
          onClick={() => setContractorTab('plans')}
          className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all ${
            contractorTab === 'plans'
              ? 'text-[#ffc174] bg-[#232a3a] shadow-inner font-bold'
              : 'text-[#d8c3ad] hover:text-[#dce2f7]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={contractorTab === 'plans' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            architecture
          </span>
          <span className="font-label-sm text-[10px] mt-1">Plans</span>
        </button>

        {/* 4. Client Updates (Switch directly to Client perspective) */}
        <button
          onClick={() => {
            setPerspective('client');
            setClientTab('designs');
          }}
          className="flex flex-col items-center justify-center w-16 h-14 rounded-xl text-[#93ccff] hover:text-white transition-all relative group"
        >
          <span className="material-symbols-outlined text-[24px] group-hover:scale-105 transition-transform">
            published_with_changes
          </span>
          <span className="font-label-sm text-[10px] mt-1 text-[#93ccff]">Client View</span>
          <span className="absolute top-1.5 right-3 w-2 h-2 rounded-full bg-[#3198dc] animate-ping" />
          <span className="absolute top-1.5 right-3 w-2 h-2 rounded-full bg-[#3198dc]" />
        </button>

        {/* 5. Logs / Material Manager */}
        <button
          onClick={() => setContractorTab('material')}
          className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all ${
            contractorTab === 'material'
              ? 'text-[#ffc174] bg-[#232a3a] shadow-inner font-bold'
              : 'text-[#d8c3ad] hover:text-[#dce2f7]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={contractorTab === 'material' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            history_edu
          </span>
          <span className="font-label-sm text-[10px] mt-1">Logs</span>
        </button>
      </div>
    </nav>
  );
};
