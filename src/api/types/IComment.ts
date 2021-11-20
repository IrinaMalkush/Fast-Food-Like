interface IInnerItem {
  id: number;
  name: string;
  date: string;
  text: string;
}

export interface ICommentItem {
  id: number;
  name: string;
  date: string;
  text: string;
  comment?: IInnerItem[];
}

export interface ICommentsList {
  items: ICommentItem[];
  total: number;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
