export interface ICarouselItem {
    id: number,
    photo: string
}

export interface ICarouselList {
    items: ICarouselItem[],
    total: number,
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage?: string
}
