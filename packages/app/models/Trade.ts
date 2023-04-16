export interface TradeItem {
  price: number;
  amount: number;
}

export interface TradeResponse {
  id: string;
  price: number;
  amount: number;
  fromMosaicId: string;
  toMosaicId: string;
  publicKey: string;
}
