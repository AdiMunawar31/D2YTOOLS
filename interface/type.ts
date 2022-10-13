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
};

export interface PageProps {
  initialPrice: Price[];
};