interface IMenuTab {
  id: string;
  partname: string;
}

export interface IMenuParts {
  items: IMenuTab[];
  total: number;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
