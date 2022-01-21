export interface ICart {
  name: string;
  price: number;
  count: number;
}

export interface ICartList {
  items: ICart[];
  total: number;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
