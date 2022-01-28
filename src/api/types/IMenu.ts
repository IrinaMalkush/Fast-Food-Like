interface IPriceList {
  pricename: string;
  price: number;
}

export interface IMenuItem {
  id: string;
  image: string;
  fullimage: string;
  name: string;
  description: string;
  pricelist: IPriceList[];
}

export interface IMenuList {
  items: IMenuItem[];
  total: number;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
