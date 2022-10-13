export interface Application {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export interface Price {
  id: string;
  market_cap_rank: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
};

export interface PageProps {
  initialPrice: Price[];
};