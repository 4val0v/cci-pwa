export interface CurrencyListItem {
  id: string;
  symbol: string;
  title: string;
  amount: number;
}

export interface CurrencyPrice {
  usd: number;
  btc: number;
}

export interface CurrencyInfo {
  '24h_volume_usd': string;
  available_supply: string;
  id: string;
  last_updated: string;
  market_cap_usd: string;
  name: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: string;
  symbol: string;
  total_supply: string;
}
