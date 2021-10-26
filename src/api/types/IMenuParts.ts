interface IMenuTab {
    id: number;
    partname: string;
    listname: string;
}

export interface IMenuParts {
    items: IMenuTab[];
    total: number;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage?: string;
}
