export interface Props {
    state: LoadingStateType;
    description?: string;
    className?: string;
}

export enum LoadingStateType {
    LOADING = 0,
    SUCCESS = 1,
    FAIL = 2
}