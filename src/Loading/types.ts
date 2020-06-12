//类声明文件
// export type Kind = 'info' | 'positive' | 'negative' | 'warning';
// export type KindMap = Record<Kind, string>;

export enum LoadingStateType {
    LOADING = 0,
    SUCCESS = 1,
    FAIL = 2,
}

export interface LoadingProps {
    state: LoadingStateType;
    txt?: string;
    className?: string;
}