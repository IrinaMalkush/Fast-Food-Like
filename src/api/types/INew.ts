export interface INewsItem {
    id: number, 
    promotion?: string,
    dateofnew: string,
    image: string,
    newsitem: string,
}

export interface INewsList {
    items: INewsItem[],
    total: number,
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage?: string
}
