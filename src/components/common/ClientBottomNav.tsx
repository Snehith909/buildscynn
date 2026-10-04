import React from 'react';
import { useSync } from '../../context/SyncContext';
import { ClientTab } from '../../types';

export const ClientBottomNav: React.FC = () => {
  const { clientTab, setClientTab } = useSync();

  const tabs: { id: ClientTab; label: string; icon: string; badge?: number }[] = [
    { id: 'designs', label: 'Designs', icon: 'architecture' },
    { id: 'chat', label: 'Chat', icon: 'chat_bubble', badge: 2 },
    { id: 'labour', label: 'Labour', icon: 'engineering' },
    { id: 'material', label: 'Material', icon: 'layers' },
    { id: 'profile', label: 'Profile', icon: 'account_circle' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-[#0c1322]/90 backdrop-blur-xl border-t border-[#232a3a]/70 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center h-20 max-w-xl mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = clientTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setClientTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[48px] py-1 transition-all relative ${
                isActive
                  ? 'text-[#ffc174] font-semibold'
                  : 'text-[#d8c3ad] hover:text-[#dce2f7]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {tab.icon}
                </span>
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 bg-[#f59e0b] text-[#472a00] font-label-sm text-[10px] rounded-full flex items-center justify-center font-bold shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="font-label-sm text-[11px] tracking-wide text-center truncate">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
