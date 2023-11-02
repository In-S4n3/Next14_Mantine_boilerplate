export type ApplicationType =
  | 'pl'
  | 'pl_es'
  | 'pl_pt'
  | 'pl_tr'
  | 'pl_gr'
  | 'pl_be'
  | 'pl_it'
  | 'fmm'
  | 'eta'
  | 'esta'
  | 'uk_certificates'
  | 'cr'
  | 'dbs'
  | 'dl'
  | 'lr'
  | 'ein'
  | 'eta_au';

export type Currency = 'usd' | 'gbp' | 'eur';

export type Color = {
  hue: number;
  saturation: number;
  brightness: number;
  alpha?: number;
};

export type Product = {
  slug: string;
  price: number;
  fee: number;
  subscriptionPeriodDays: number;
  trialPeriodDays: number;
  trialPrice: number;
};

export type Theme = {
  slug: string | null;
  scriptEnabled: boolean;
  script: string | null;
  confirmationScriptEnabled: boolean;
  confirmationScript: string | null;
  gAnalyticsEnabled: boolean;
  gAnalyticsId: string | null;
  gtmEnabled: boolean;
  gtmID: string | null;
  abTestingScriptEnabled: boolean;
  abTestingScript: string | null;
  verificationPage: 'none' | 'v1' | 'v2' | 'v3';
  landingPage:
    | 'v0'
    | 'v1'
    | 'v2'
    | 'v3'
    | 'v4'
    | 'v5'
    | 'v6'
    | 'v7'
    | 'v8'
    | 'v9'
    | 'v10'
    | 'v11'
    | 'lpo1'
    | 'lpo2'
    | 'unsub';
  paymentPage: 'v1' | 'v2' | 'v3' | 'v4';
  progressBar: 'v1' | 'v2' | 'v3';
  loader: 'yes' | 'no';
  popup: 'edit' | 'convert' | 'no';
  cloackingEnabled: boolean;
  products: Product[] | null;
  headerColor: Color;
  primaryColor: Color;
  primaryDarkColor: Color;
  boxHeaderColor: Color;
  boxBackgroundColor: Color;
  boxBorderColor: Color;
  email?: string;
  descriptor?: string;
  websiteTitle?: string;
  favicon?: string;
  logoHeader?: string;
  logoHeaderWhite?: string;
  logoFooter?: string;
  company: {
    name: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
    vatNumber: string;
    companyNumber: string;
  };
  phonePrefix?: string;
  phoneNumber?: string;
  currency: string | null;
};

export type RiskZone = {
  id: number;
  countryCode: string;
  locationCode: string;
  country: string;
  location: string;
  startDate: string | null;
  endDate: string | null;
};

export type ApplicationStatus =
  | 'received'
  | 'submitted'
  | 'scheduled'
  | 'wait'
  | 'clear'
  | 'error'
  | 'completed'
  | 'to submit'
  | 'submitting'
  | 'contacted'
  | 'manual'
  | 'done'
  | 'duplicate'
  | 'd1 form'
  | 'd2 form'
  | 'subscription';

export type SubscriptionStatus =
  | 'active'
  | 'not_active'
  | 'pending_cancellation'
  | 'cancelled';

export interface TermsProps {
  address: string;
  websiteUrl: string;
  companyName: string;
  companyNumber: string;
  vatNumber: string;
  phone: string;
  email: string;
}
