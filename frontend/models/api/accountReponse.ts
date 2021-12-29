export interface AccountResponse {
  account_id: string;
  account_type: string;
  iban: string;
  swift_bic: string;
  sort_code: string;
  account_number: string;
  currency: string;
  available: number;
  current: number;
  update_timestamp: string;
}
