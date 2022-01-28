export interface ITypeItem {
  type: string;
  price: number;
  amount: number;
}

export interface ICart {
  productId: string;
  name: string;
  value: ITypeItem[];
}

export interface ICartProps {
  cart: ICart[];
}
