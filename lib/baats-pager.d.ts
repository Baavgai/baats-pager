import * as React from 'react';
export interface IProps {
    hideFirstLast?: boolean;
    showPages?: number;
    totalPages: number;
    currentPage: number;
    itemCount?: number;
    onPageChange(page: number): void;
}
export declare class Pager extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export declare function getItemRange(pageSize: number, totalItems: number, itemNum: number): [number, number];
export declare function getPageRange(p: IProps): [number, number];
