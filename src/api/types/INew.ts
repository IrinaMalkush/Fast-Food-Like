export interface INewsItem {
  id: number;
  promotion?: string;
  dateOfNew: string;
  image: string;
  newsItem: string;
}

export interface INewsList {
  items: INewsItem[];
  total: number;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
