export type Perspective = 'portal' | 'contractor' | 'client';

export type ClientTab = 'designs' | 'chat' | 'labour' | 'material' | 'profile';
export type ContractorTab = 'field' | 'labour' | 'material' | 'plans' | 'logs';

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Concrete' | 'Steel' | 'Aggregates' | 'Plumbing' | 'Timber';
  vendor: string;
  slipRef: string;
  gate?: string;
  date: string;
  time?: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
  status: 'pending' | 'verified' | 'acknowledged' | 'flagged';
  ocrMatchPercent?: number;
  slipPhotoUrl?: string;
  signedBy?: string;
  notes?: string;
}

export interface LabourTrade {
  id: string;
  trade: string;
  mainWorkers: number;
  helpers: number;
  rateMain: number;
  rateHelper: number;
  standardHours: number;
}

export interface DayAttendance {
  day: string;
  label: string;
  workersCount: number;
  hours: number;
  cost: number;
  status: 'verified' | 'active' | 'scheduled';
}

export interface ChatMessage {
  id: string;
  sender: 'contractor' | 'client' | 'system';
  senderName: string;
  senderRole?: string;
  timestamp: string;
  text: string;
  richCard?: {
    type: 'batch_docs' | 'auto_ledger' | 'photo_snap';
    slipId?: string;
    slipTitle?: string;
    amount?: number;
    amountFormatted?: string;
    images?: { url: string; label: string; alt: string }[];
    targetTab?: ClientTab;
    verifiedBadge?: string;
  };
}

export interface ArchitecturalDoc {
  id: string;
  title: string;
  type: 'PDF' | 'DWG' | 'ZIP';
  size: string;
  status: string;
  icon: string;
  downloadUrl?: string;
}

export interface SyncActivity {
  id: string;
  title: string;
  subtitle: string;
  category: 'labour' | 'material' | 'photo' | 'approval';
  timeAgo: string;
  icon: string;
  badge?: string;
}
