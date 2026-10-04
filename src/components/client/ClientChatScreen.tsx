import React, { useState } from 'react';
import { useSync } from '../../context/SyncContext';
import { Header } from '../common/Header';
import { ClientBottomNav } from '../common/ClientBottomNav';

export const ClientChatScreen: React.FC = () => {
  const { chatMessages, sendChatMessage, openLightbox, setClientTab, showToast } = useSync();
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const johnAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuADkVCZMbuhwKq4DoFjqIyGf1SBKl6-DV7mvmOAmtMk2wAw6Kc0i_m4WhUCWhqMRf9HepJ0KKeVul3j3vHUfIPVgZTRCc4dVCNymTG4ITT_ZYV5H8qmJngCqSsPDdpAMEu06aeXnMftd3wPpXOuVh64SA4WX_GCWO3Pd30RGz91dSOxl_KYFv-uR-WqBkG-szGGkUFy5rOyXU0eFSEiHy_5HlMclLR_mHigTUbMNtnDocHrKJe-kxxIaA';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(inputText);
    setInputText('');
  };

  const handleVoiceToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      showToast('Recording voice memo for John M...');
      setTimeout(() => {
        setIsRecording(false);
        sendChatMessage('🎙️ Voice Memo (0:14) • "Hi John, thanks for the update on the pour."');
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  const handleAttach = () => {
    showToast('Attaching recent camera capture...');
    setTimeout(() => {
      sendChatMessage('📎 Shared inspection snapshot from East Retaining Wall.');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1322] text-[#dce2f7] antialiased">
      <Header title="Chat" />

      <main className="flex-1 flex flex-col relative w-full max-w-xl mx-auto pt-24 pb-28 px-4">
        {/* Contractor Field Presence Ribbon */}
        <div className="w-full bg-[#232a3a] rounded-xl p-3 mb-4 shadow-md border border-[#2e3545]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  className="w-11 h-11 rounded-lg object-cover"
                  alt="John Miller Lead Builder"
                  src={johnAvatar}
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#232a3a]"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-[15px] font-bold text-[#dce2f7] truncate">
                    John Miller
                  </span>
                  <span className="font-label-sm text-[10px] text-[#ffc174] bg-[#ffc174]/15 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                    Lead Builder
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#93ccff]">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span className="font-body-sm text-[12px] truncate">
                    Apex Builders • Zone C (Upper Deck)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="tel:+18005550199"
                className="w-9 h-9 rounded-lg bg-[#191f2f] flex items-center justify-center text-[#dce2f7] hover:bg-[#323949] transition-colors"
                title="Site Direct Line"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              </a>
              <button
                onClick={() => showToast('Direct P2P Link verified with John M.')}
                className="w-9 h-9 rounded-lg bg-[#191f2f] flex items-center justify-center text-[#dce2f7] hover:bg-[#323949] transition-colors"
                title="Sync Status"
              >
                <span className="material-symbols-outlined text-[20px] text-[#93ccff]">sync</span>
              </button>
            </div>
          </div>
        </div>

        {/* Perspective Sync Indicator Pill */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3198dc] animate-pulse"></span>
            <span className="font-label-sm text-[10px] text-[#93ccff] uppercase tracking-widest font-bold">
              Client Sync Feed • Live Verified
            </span>
          </div>
          <span className="font-label-sm text-[11px] text-[#d8c3ad]">Today, Oct 24</span>
        </div>

        {/* Synchronized Chat Timeline */}
        <div className="flex flex-col gap-4 w-full flex-1 mb-4">
          {chatMessages.map((msg) => {
            if (msg.sender === 'system') {
              return (
                <div key={msg.id} className="w-full my-1">
                  <div
                    onClick={() => setClientTab('material')}
                    className="block bg-[#141b2b] hover:bg-[#191f2f] rounded-xl p-3.5 shadow-sm transition-colors cursor-pointer border border-[#232a3a]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#ffc174]">
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[10px] text-[#ffc174] uppercase font-bold tracking-wider">
                            Automated Ledger Sync
                          </span>
                          <span className="font-label-sm text-[10px] text-[#d8c3ad] font-mono">
                            {msg.timestamp}
                          </span>
                        </div>
                        <p className="font-body-md text-[13px] text-[#dce2f7] mt-0.5">
                          {msg.text}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#232a3a]/40">
                          <div className="flex items-center gap-3">
                            <span className="font-label-sm text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>{' '}
                              Budget Updated
                            </span>
                            <span className="text-[#a08e7a]">•</span>
                            <span className="font-label-sm text-[10px] text-[#d8c3ad] font-mono">
                              INV-APX-4902
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-[#93ccff] text-[16px]">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isContractor = msg.sender === 'contractor';

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  isContractor
                    ? 'items-start max-w-[92%] sm:max-w-[85%]'
                    : 'items-end self-end max-w-[90%] sm:max-w-[80%]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  <span
                    className={`font-label-sm text-[11px] font-bold ${
                      isContractor ? 'text-[#ffc174]' : 'text-[#93ccff]'
                    }`}
                  >
                    {msg.senderName}
                  </span>
                  <span className="font-label-sm text-[10px] text-[#d8c3ad] font-mono">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.text && (
                  <div
                    className={`p-3.5 shadow-sm rounded-2xl ${
                      isContractor
                        ? 'bg-[#232a3a] text-[#dce2f7] rounded-tl-sm border border-[#2e3545]'
                        : 'bg-[#3198dc] text-white rounded-tr-sm font-medium'
                    }`}
                  >
                    <p className="font-body-md text-[13px] leading-relaxed">{msg.text}</p>

                    {/* Quick navigation tags inside contractor messages */}
                    {isContractor && msg.id === 'msg-4' && (
                      <div className="mt-2.5 pt-2 flex items-center gap-2 border-t border-[#2e3545]">
                        <span className="font-label-sm text-[10px] text-emerald-400 bg-[#191f2f] px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[13px]">task_alt</span>{' '}
                          Rebars Approved
                        </span>
                        <button
                          onClick={() => setClientTab('labour')}
                          className="font-label-sm text-[10px] text-[#93ccff] hover:underline flex items-center gap-1 font-bold"
                        >
                          <span className="material-symbols-outlined text-[13px]">
                            engineering
                          </span>{' '}
                          5 Workers Logged →
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Rich Card for verified batch docs */}
                {msg.richCard && msg.richCard.type === 'batch_docs' && (
                  <div className="w-full bg-[#191f2f] rounded-2xl rounded-tl-sm p-3 shadow-md border border-[#232a3a] mt-1">
                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#232a3a]">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#ffc174] text-[18px]">
                          verified
                        </span>
                        <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#dce2f7] font-bold">
                          {msg.richCard.slipTitle}
                        </span>
                      </div>
                      <span className="font-label-sm text-[10px] text-[#93ccff] bg-[#232a3a] px-2 py-0.5 rounded font-mono font-bold">
                        {msg.richCard.slipId}
                      </span>
                    </div>

                    {/* Media Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {msg.richCard.images?.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => openLightbox(img.url, img.label, 'Verified on-site pour')}
                          className="relative rounded-lg overflow-hidden h-28 bg-[#141b2b] group cursor-pointer border border-[#232a3a]"
                        >
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            alt={img.alt}
                            src={img.url}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                            <span className="font-label-sm text-[10px] text-white flex items-center gap-1 font-bold">
                              <span className="material-symbols-outlined text-[13px]">
                                {i === 0 ? 'receipt_long' : 'photo_camera'}
                              </span>{' '}
                              {img.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View in Material Tab button */}
                    <button
                      onClick={() => setClientTab('material')}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#232a3a] hover:bg-[#2e3545] flex items-center justify-between text-[#93ccff] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">layers</span>
                        <span className="font-label-md text-[12px] font-semibold">
                          View in Material Tab
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Message Dock / Field Action Input Bar */}
        <div className="sticky bottom-20 left-0 right-0 pt-2 pb-2 bg-[#0c1322]/95 backdrop-blur-md">
          <form
            onSubmit={handleSend}
            className="bg-[#232a3a] rounded-2xl p-1.5 shadow-xl flex items-center gap-1.5 border border-[#2e3545]"
          >
            {/* Attachment Button */}
            <button
              type="button"
              onClick={handleAttach}
              className="w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#323949] flex items-center justify-center text-[#d8c3ad] hover:text-[#ffc174] transition-all shrink-0"
              title="Attach Blueprint or Site Photo"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>

            {/* Voice Note Button */}
            <button
              type="button"
              onClick={handleVoiceToggle}
              className={`w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#323949] flex items-center justify-center transition-all shrink-0 ${
                isRecording ? 'text-red-400 animate-pulse bg-red-950' : 'text-[#d8c3ad]'
              }`}
              title="Record Voice Memo"
            >
              <span className="material-symbols-outlined text-[19px]">mic</span>
            </button>

            {/* Text Input */}
            <div className="flex-1 min-w-0 px-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Message contractor John..."
                className="w-full bg-transparent text-[#dce2f7] placeholder:text-[#a08e7a] font-body-md text-[13px] focus:outline-none py-1.5"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-[#f59e0b] hover:bg-[#ffc174] text-[#472a00] font-bold flex items-center justify-center shadow-lg transition-transform active:scale-95 shrink-0"
              title="Send Synchronized Message"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </main>

      <ClientBottomNav />
    </div>
  );
};
