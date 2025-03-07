// Prefinery API Types
interface PrefineryConfig {
  id: string;
  domain?: string;
  waitlist_id: number;
}

interface PrefineryUser {
  email: string;
  referral_code?: string;
  profile?: {
    first_name?: string;
    last_name?: string;
    [key: string]: any;
  };
}

interface PrefineryResponse {
  success: boolean;
  user?: {
    id: number;
    email: string;
    referral_code: string;
    referral_count: number;
    position: number;
    status: string;
    profile?: {
      first_name?: string;
      last_name?: string;
      [key: string]: any;
    };
  };
  error?: string;
}

declare global {
  interface Window {
    Prefinery: {
      widget: {
        new (config: PrefineryConfig): {
          addUser: (user: PrefineryUser) => Promise<PrefineryResponse>;
          getReferralCode: () => string;
          getPosition: () => Promise<number>;
          getStatus: () => Promise<string>;
        };
      };
    };
  }
}

export type { PrefineryConfig, PrefineryUser, PrefineryResponse };