export type SolutionTier = {
  shortTittle: string;
  longTittle: string;
  generalDescription: string;
  basic: string;
  pro: string;
  premium: string;
};

export type ServiceKey = string;

export interface PriceItem {
  price: {
    basic: number;
    pro: number;
    premium: number;
  };
  offer: number;
}

export type ChannelItem = {
  href: string;
};