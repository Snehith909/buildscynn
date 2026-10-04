import React from 'react';
import { useSync } from '../../context/SyncContext';

export const LightboxModal: React.FC = () => {
  const { lightboxImage, closeLightbox } = useSync();

  if (!lightboxImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-3xl w-full bg-[#191f2f] rounded-2xl overflow-hidden border border-[#2e3545] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1322] border-b border-[#232a3a]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
              verified
            </span>
            <div className="min-w-0">
              <h3 className="font-title-md text-[16px] text-[#dce2f7] font-semibold truncate">
                {lightboxImage.title}
              </h3>
              {lightboxImage.subtitle && (
                <p className="font-body-sm text-[12px] text-[#d8c3ad] truncate">
                  {lightboxImage.subtitle}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={closeLightbox}
            aria-label="Close photo preview"
            className="w-9 h-9 rounded-lg bg-[#232a3a] text-[#dce2f7] hover:bg-[#323949] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full max-h-[70vh] bg-[#070e1d] flex items-center justify-center overflow-hidden p-2">
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            className="w-full h-auto max-h-[66vh] object-contain rounded-lg"
          />
        </div>

        {/* Footer with actions */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141b2b] border-t border-[#232a3a]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#232a3a] text-emerald-400 font-label-sm text-[10px] uppercase font-bold">
              <span className="material-symbols-outlined text-[13px]">check_circle</span>
              GPS & Cryptographically Stamped
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={lightboxImage.url}
              target="_blank"
              rel="noreferrer"
              className="h-9 px-3 rounded-lg bg-[#232a3a] hover:bg-[#323949] text-[#dce2f7] font-label-sm text-[12px] flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              <span>Full Res</span>
            </a>
            <button
              onClick={closeLightbox}
              className="h-9 px-4 rounded-lg bg-[#f59e0b] text-[#472a00] font-label-sm text-[12px] font-bold hover:bg-[#ffc174] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
