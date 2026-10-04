import React from 'react';
import { SyncProvider, useSync } from './context/SyncContext';
import { PortalLoginScreen } from './components/portal/PortalLoginScreen';
import { ClientDesignsScreen } from './components/client/ClientDesignsScreen';
import { ClientChatScreen } from './components/client/ClientChatScreen';
import { ClientLabourScreen } from './components/client/ClientLabourScreen';
import { ClientMaterialScreen } from './components/client/ClientMaterialScreen';
import { ClientProfileScreen } from './components/client/ClientProfileScreen';
import { ContractorDashboardScreen } from './components/contractor/ContractorDashboardScreen';
import { ContractorLabourEntryScreen } from './components/contractor/ContractorLabourEntryScreen';
import { ContractorMaterialEntryScreen } from './components/contractor/ContractorMaterialEntryScreen';
import { ContractorPlansScreen } from './components/contractor/ContractorPlansScreen';
import { LightboxModal } from './components/common/LightboxModal';
import { DocumentViewerModal } from './components/common/DocumentViewerModal';

const MainAppContent: React.FC = () => {
  const {
    perspective,
    setPerspective,
    clientTab,
    contractorTab,
    toastMessage,
  } = useSync();

  return (
    <div className="min-h-screen bg-[#0c1322] text-[#dce2f7] relative">
      {/* Floating Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[90] max-w-md w-[92%] px-4 py-3 rounded-xl bg-[#232a3a]/95 backdrop-blur-xl border border-[#ffc174]/40 shadow-2xl text-[#dce2f7] text-[13px] font-medium flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <span className="material-symbols-outlined text-[#ffc174] text-[20px] shrink-0 animate-pulse">
            bolt
          </span>
          <span className="flex-1 truncate">{toastMessage}</span>
        </div>
      )}

      {/* Screen Routing */}
      {perspective === 'portal' && <PortalLoginScreen />}

      {perspective === 'client' && (
        <>
          {clientTab === 'designs' && <ClientDesignsScreen />}
          {clientTab === 'chat' && <ClientChatScreen />}
          {clientTab === 'labour' && <ClientLabourScreen />}
          {clientTab === 'material' && <ClientMaterialScreen />}
          {clientTab === 'profile' && <ClientProfileScreen />}
        </>
      )}

      {perspective === 'contractor' && (
        <>
          {contractorTab === 'field' && <ContractorDashboardScreen />}
          {contractorTab === 'labour' && <ContractorLabourEntryScreen />}
          {contractorTab === 'material' && <ContractorMaterialEntryScreen />}
          {contractorTab === 'plans' && <ContractorPlansScreen />}
          {contractorTab === 'logs' && <ContractorMaterialEntryScreen />}
        </>
      )}

      {/* Persistent Floating Mini-HUD (Quick Perspective Switcher) */}
      {perspective !== 'portal' && (
        <div className="fixed top-3 right-4 z-[60] hidden md:flex items-center gap-1.5 p-1 bg-[#141b2b]/90 backdrop-blur-md rounded-full border border-[#2e3545] shadow-lg">
          <button
            onClick={() => setPerspective('contractor')}
            className={`px-3 py-1 rounded-full font-label-sm text-[11px] font-bold transition-all ${
              perspective === 'contractor'
                ? 'bg-[#f59e0b] text-[#472a00]'
                : 'text-[#d8c3ad] hover:text-[#dce2f7]'
            }`}
          >
            👷 Contractor
          </button>
          <button
            onClick={() => setPerspective('client')}
            className={`px-3 py-1 rounded-full font-label-sm text-[11px] font-bold transition-all ${
              perspective === 'client'
                ? 'bg-[#3198dc] text-white'
                : 'text-[#d8c3ad] hover:text-[#dce2f7]'
            }`}
          >
            👤 Client
          </button>
          <button
            onClick={() => setPerspective('portal')}
            className="w-7 h-7 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#d8c3ad] flex items-center justify-center text-[12px]"
            title="Portal Switcher"
          >
            <span className="material-symbols-outlined text-[14px]">logout</span>
          </button>
        </div>
      )}

      {/* Global Interactive Modals */}
      <LightboxModal />
      <DocumentViewerModal />
    </div>
  );
};

export default function App() {
  return (
    <SyncProvider>
      <MainAppContent />
    </SyncProvider>
  );
}
