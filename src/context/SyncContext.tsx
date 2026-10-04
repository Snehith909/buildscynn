import React, { createContext, useContext, useState } from 'react';
import {
  Perspective,
  ClientTab,
  ContractorTab,
  MaterialItem,
  DayAttendance,
  ChatMessage,
  SyncActivity,
  ArchitecturalDoc,
} from '../types';

interface SyncContextType {
  // Perspective & Navigation
  perspective: Perspective;
  setPerspective: (p: Perspective) => void;
  clientTab: ClientTab;
  setClientTab: (tab: ClientTab) => void;
  contractorTab: ContractorTab;
  setContractorTab: (tab: ContractorTab) => void;

  // Sync state & Telemetry
  isSyncing: boolean;
  lastSyncTime: string;
  triggerSync: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;

  // Labour state
  mainWorkers: number;
  helpers: number;
  setMainWorkers: (n: number) => void;
  setHelpers: (n: number) => void;
  rateMain: number;
  rateHelper: number;
  selectedTrade: string;
  setSelectedTrade: (t: string) => void;
  attendanceMatrix: DayAttendance[];
  totalLabourPayment: number;
  cycleApproved: boolean;
  approveCyclePayment: () => void;
  syncLabourToClient: () => void;

  // Material state
  pendingDelivery: MaterialItem | null;
  recentMaterials: MaterialItem[];
  acknowledgeDelivery: (id: string) => void;
  flagDelivery: (id: string) => void;
  addNewMaterialPO: (item: Omit<MaterialItem, 'id'>) => void;
  approvedSpend: number;
  totalAllocatedBudget: number;

  // Chat feed
  chatMessages: ChatMessage[];
  sendChatMessage: (text: string) => void;

  // Architectural documents & Lightbox
  activeDoc: ArchitecturalDoc | null;
  setActiveDoc: (doc: ArchitecturalDoc | null) => void;
  lightboxImage: { url: string; title: string; subtitle?: string } | null;
  openLightbox: (url: string, title: string, subtitle?: string) => void;
  closeLightbox: () => void;

  // Recent Synced Activities
  activities: SyncActivity[];

  // Client Preferences
  instantDeliveryAlerts: boolean;
  setInstantDeliveryAlerts: (val: boolean) => void;
  dailyLabourSummary: boolean;
  setDailyLabourSummary: (val: boolean) => void;
  weeklyFinancialAudit: boolean;
  setWeeklyFinancialAudit: (val: boolean) => void;
}

const SyncContext = createContext<SyncContextType | undefined>(undefined);

export const SyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [perspective, setPerspective] = useState<Perspective>('portal');
  const [clientTab, setClientTab] = useState<ClientTab>('designs');
  const [contractorTab, setContractorTab] = useState<ContractorTab>('field');

  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('2m ago');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const triggerSync = () => {
    setIsSyncing(true);
    showToast('Dual-Sync Pipeline: Synchronizing cloud audit trail...');
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime('Just now');
      showToast('Live Cloud Mesh: Synchronized with 100% integrity.');
    }, 1200);
  };

  // Labour State
  const [selectedTrade, setSelectedTrade] = useState('Mason');
  const [mainWorkers, setMainWorkers] = useState(3);
  const [helpers, setHelpers] = useState(2);
  const rateMain = 65.0;
  const rateHelper = 40.0;
  const daysLogged = 5;

  const [cycleApproved, setCycleApproved] = useState(false);

  const totalLabourPayment =
    mainWorkers * rateMain * daysLogged + helpers * rateHelper * daysLogged;

  const [attendanceMatrix] = useState<DayAttendance[]>([
    { day: 'Mon', label: 'Mon', workersCount: 5, hours: 8, cost: 275.0, status: 'verified' },
    { day: 'Tue', label: 'Tue', workersCount: 5, hours: 8, cost: 275.0, status: 'verified' },
    { day: 'Wed', label: 'Wed', workersCount: 4, hours: 8, cost: 220.0, status: 'verified' },
    { day: 'Thu', label: 'Thu', workersCount: 5, hours: 8, cost: 275.0, status: 'verified' },
    { day: 'Fri', label: 'Fri', workersCount: 5, hours: 8, cost: 275.0, status: 'active' },
    { day: 'Sat', label: 'Sat', workersCount: 5, hours: 4, cost: 137.5, status: 'scheduled' },
  ]);

  // Material state
  const totalAllocatedBudget = 250000;
  const [approvedSpend, setApprovedSpend] = useState(84200.0);

  const [pendingDelivery, setPendingDelivery] = useState<MaterialItem | null>({
    id: 'mat-pending-1',
    name: 'Ready-Mix Concrete / Portland Cement',
    category: 'Concrete',
    vendor: 'Apex Building Supplies',
    slipRef: '#DS-88421',
    gate: 'Gate 3 Unload',
    date: 'October 24, 2024',
    time: '09:42 AM',
    quantity: 120,
    unit: 'Bags',
    unitPrice: 11.5,
    totalPrice: 1380.0,
    status: 'pending',
    ocrMatchPercent: 99.4,
    signedBy: 'John M. (Site Superintendent)',
    slipPhotoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Eul9V3zdu8DXGmiUy3-d_UhvVNbkoGcarXoUsBZNMvYg-yLDvgL3_B-KEUBi60fwVgT7bUlcC-z-ebcC9DOZ4czN2oclDT5wOIDpIch-FDUEQUTW6YQocDfNy7y60eAkVjItQi78VAFg8kIFDPfDNAbvpJCce1lbJJZbma5Pp-j0BHc9ZHIdN2AEe4w2rJG7aZBHlPq7iOWcgbQtx0oxUFhQVafcPFXzjpnevM-nGu8ovifSmDa33w',
    notes: 'Physical manifest matched 120 units against PO-2024-C9',
  });

  const [recentMaterials, setRecentMaterials] = useState<MaterialItem[]>([
    {
      id: 'mat-1',
      name: 'Steel Rebar 12mm',
      category: 'Steel',
      vendor: 'SteelPro Corp',
      slipRef: '#DS-88102',
      date: 'Oct 22',
      quantity: 2.5,
      unit: 'Tons',
      unitPrice: 1140.0,
      totalPrice: 2850.0,
      status: 'verified',
    },
    {
      id: 'mat-2',
      name: 'Portland Cement',
      category: 'Concrete',
      vendor: 'Apex Supplies',
      slipRef: '#DS-88044',
      date: 'Oct 20',
      quantity: 80,
      unit: 'Bags',
      unitPrice: 11.5,
      totalPrice: 920.0,
      status: 'verified',
    },
    {
      id: 'mat-3',
      name: 'Coarse River Sand',
      category: 'Aggregates',
      vendor: 'Valley Earthworks',
      slipRef: '#DS-87989',
      date: 'Oct 19',
      quantity: 2,
      unit: 'Trucks',
      unitPrice: 370.0,
      totalPrice: 740.0,
      status: 'verified',
    },
  ]);

  // Activities Feed
  const [activities, setActivities] = useState<SyncActivity[]>([
    {
      id: 'act-1',
      title: '3 Masons added for Monday',
      subtitle: "Synced to Sarah's Ledger",
      category: 'labour',
      timeAgo: '12m ago',
      icon: 'groups',
      badge: 'Labour Synced',
    },
    {
      id: 'act-2',
      title: '150 Bags UltraTech Cement saved',
      subtitle: 'PO #482 Verified & Synced',
      category: 'material',
      timeAgo: '45m ago',
      icon: 'pallet',
      badge: 'Material PO',
    },
    {
      id: 'act-3',
      title: 'Site Elevation Photo uploaded',
      subtitle: "Synced to Client's Design & Photos",
      category: 'photo',
      timeAgo: '2h ago',
      icon: 'photo_camera',
      badge: 'Photo Mesh',
    },
  ]);

  // Chat Feed
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'contractor',
      senderName: 'John M. (Apex)',
      senderRole: 'Lead Builder',
      timestamp: '10:15 AM',
      text: 'Good morning Sarah! Structural concrete inspection passed at 09:45 AM. Sending updated batch slip and photos.',
    },
    {
      id: 'msg-2',
      sender: 'contractor',
      senderName: 'John M. (Apex)',
      senderRole: 'Lead Builder',
      timestamp: '10:16 AM',
      text: '',
      richCard: {
        type: 'batch_docs',
        slipId: '#DS-88421',
        slipTitle: 'Verified Batch Documentation',
        amount: 1380.0,
        amountFormatted: '₹1,380.00',
        images: [
          {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3VGlg1oxO1prI4nFFrSnmJD7G_d86D49pixMDRFH63VHXbTbn26Gy3FY6C7fDgpYb-HbKXiXiPLvkIvhbYMzlbq12A-ZlbvBeTZrbG6Lw0ZS4tuVZJVSbNfLsiBdytPx3beinlHJVUAnn4Bgmi8D38xA3JgbqldXCEkoULYPTdNn0ujFtuA64l9P7AOZ8s4fcoUmzmO07fTPxA_Bo5GvG2Plbg7gMAHAz8B8C4eT8XN3vgrBbOEYppg',
            label: 'Slip DS-88421',
            alt: 'Delivery receipt clipboard approved',
          },
          {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3_EOCasiFBmwQjtRSs4804ian2kJ0OarwpzpdvvRtAvY5HrlGNMs2Exy1hhtSAp9Zhe8PV8K19Pk4q0jvQQqI_YXM3bb9o-syYYVbmmX9zAOG6pr9auGpA9uLJR69dbf5_xExRqqAIaCPiuhzg4GCsjBSE7LL0IrXsw07OwwBimCZZlFZP1-0tN__2RPWFBx_kUnTCpRS0J2nuJ7STn_SEOuyKw-_ulkqzDNJnqLaUbGK-gs1CsrAfQ',
            label: 'Pour Cam #04',
            alt: 'Foundation concrete pour',
          },
        ],
        targetTab: 'material',
      },
    },
    {
      id: 'msg-3',
      sender: 'client',
      senderName: 'You (Client)',
      senderRole: 'Property Owner',
      timestamp: '10:22 AM',
      text: 'Looks great John! Did the inspector approve the perimeter rebars as well?',
    },
    {
      id: 'msg-4',
      sender: 'contractor',
      senderName: 'John M. (Apex)',
      senderRole: 'Lead Builder',
      timestamp: '10:25 AM',
      text: "Yes, 100% green flag. I have also logged 3 Masons and 2 Helpers for today's shift in the Labour tab.",
    },
    {
      id: 'msg-5',
      sender: 'system',
      senderName: 'Automated Ledger Sync',
      timestamp: 'Just now',
      text: '120 Bags Ready-Mix Concrete (₹1,380.00) logged into your Material Ledger.',
      richCard: {
        type: 'auto_ledger',
        amountFormatted: '₹1,380.00',
        verifiedBadge: 'Budget Updated • INV-APX-4902',
        targetTab: 'material',
      },
    },
  ]);

  const sendChatMessage = (text: string) => {
    if (!text.trim()) return;
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: perspective === 'contractor' ? 'contractor' : 'client',
      senderName:
        perspective === 'contractor' ? 'John M. (Apex)' : 'Sarah Jenkins (Client)',
      senderRole: perspective === 'contractor' ? 'Lead GC' : 'Property Owner',
      timestamp: 'Just now',
      text: text.trim(),
    };

    setChatMessages((prev) => [...prev, newMsg]);
    showToast('Message encrypted and pushed to synced channel.');

    // Simulated automated acknowledgment if client asked a question
    if (perspective === 'client') {
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now() + 1}`,
            sender: 'contractor',
            senderName: 'John M. (Apex)',
            senderRole: 'Lead GC',
            timestamp: 'Just now',
            text: 'Acknowledged Sarah! On it right away. Site telemetry updated in real time.',
          },
        ]);
        showToast('New response received from John M. (Apex)');
      }, 1500);
    }
  };

  // Actions
  const syncLabourToClient = () => {
    setCycleApproved(false);
    showToast(
      `⚡ Auto-Synced: Sarah's Labour tab updated immediately with ₹${totalLabourPayment.toFixed(
        2
      )} billable!`
    );

    // Add activity
    const newAct: SyncActivity = {
      id: `act-${Date.now()}`,
      title: `${mainWorkers} Masons & ${helpers} Helpers logged`,
      subtitle: `Synced to Sarah's Ledger (₹${totalLabourPayment.toFixed(2)})`,
      category: 'labour',
      timeAgo: 'Just now',
      icon: 'groups',
      badge: 'Labour Synced',
    };
    setActivities((prev) => [newAct, ...prev]);
  };

  const approveCyclePayment = () => {
    setCycleApproved(true);
    showToast(
      `Cycle Approved! ₹${totalLabourPayment.toFixed(2)} escrow release verified for Apex Builders.`
    );
  };

  const acknowledgeDelivery = (id: string) => {
    if (pendingDelivery && pendingDelivery.id === id) {
      setApprovedSpend((prev) => prev + pendingDelivery.totalPrice);
      setPendingDelivery((prev) => (prev ? { ...prev, status: 'acknowledged' } : null));

      setRecentMaterials((prev) => [
        {
          ...pendingDelivery,
          status: 'verified',
        },
        ...prev,
      ]);

      showToast(
        `Delivery ${pendingDelivery.slipRef} acknowledged and locked into approved budget.`
      );
    }
  };

  const flagDelivery = (id: string) => {
    if (pendingDelivery && pendingDelivery.id === id) {
      setPendingDelivery((prev) => (prev ? { ...prev, status: 'flagged' } : null));
      showToast('Discrepancy flagged: Superintendent John notified to inspect gate slip.');
    }
  };

  const addNewMaterialPO = (itemData: Omit<MaterialItem, 'id'>) => {
    const newItem: MaterialItem = {
      ...itemData,
      id: `mat-${Date.now()}`,
    };

    setPendingDelivery(newItem);
    showToast(
      `🚀 Material PO ${newItem.slipRef} (${newItem.name}) pushed directly to Sarah's Material Tab!`
    );

    // Also inject into chat feed as system update
    const autoSyncMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'system',
      senderName: 'Automated Ledger Sync',
      timestamp: 'Just now',
      text: `${newItem.quantity} ${newItem.unit} of ${newItem.name} (₹${newItem.totalPrice.toFixed(
        2
      )}) logged into Material Ledger.`,
      richCard: {
        type: 'auto_ledger',
        amountFormatted: `₹${newItem.totalPrice.toFixed(2)}`,
        verifiedBadge: `Budget Updated • Slip ${newItem.slipRef}`,
        targetTab: 'material',
      },
    };
    setChatMessages((prev) => [...prev, autoSyncMsg]);
  };

  // Lightbox & Doc Viewer
  const [activeDoc, setActiveDoc] = useState<ArchitecturalDoc | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const openLightbox = (url: string, title: string, subtitle?: string) => {
    setLightboxImage({ url, title, subtitle });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Client Preferences
  const [instantDeliveryAlerts, setInstantDeliveryAlerts] = useState(true);
  const [dailyLabourSummary, setDailyLabourSummary] = useState(true);
  const [weeklyFinancialAudit, setWeeklyFinancialAudit] = useState(true);

  return (
    <SyncContext.Provider
      value={{
        perspective,
        setPerspective,
        clientTab,
        setClientTab,
        contractorTab,
        setContractorTab,
        isSyncing,
        lastSyncTime,
        triggerSync,
        toastMessage,
        showToast,
        mainWorkers,
        helpers,
        setMainWorkers,
        setHelpers,
        rateMain,
        rateHelper,
        selectedTrade,
        setSelectedTrade,
        attendanceMatrix,
        totalLabourPayment,
        cycleApproved,
        approveCyclePayment,
        syncLabourToClient,
        pendingDelivery,
        recentMaterials,
        acknowledgeDelivery,
        flagDelivery,
        addNewMaterialPO,
        approvedSpend,
        totalAllocatedBudget,
        chatMessages,
        sendChatMessage,
        activeDoc,
        setActiveDoc,
        lightboxImage,
        openLightbox,
        closeLightbox,
        activities,
        instantDeliveryAlerts,
        setInstantDeliveryAlerts,
        dailyLabourSummary,
        setDailyLabourSummary,
        weeklyFinancialAudit,
        setWeeklyFinancialAudit,
      }}
    >
      {children}
    </SyncContext.Provider>
  );
};

export const useSync = () => {
  const context = useContext(SyncContext);
  if (!context) {
    throw new Error('useSync must be used within a SyncProvider');
  }
  return context;
};
