import * as React from 'react';
export interface IProps {
    totalPages: number;
    currentPage: number;
    autoCollapse?: boolean;
    hideFirstLast?: boolean;
    showPages?: number;
    itemCount?: number;
    pagerClassName?: string;
    pagerStyle?: any;
    onPageChange(page: number): void;
}
export declare class Pager extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export declare function getItemRange(pageSize: number, totalItems: number, itemNum: number): [number, number];
export declare function getPageRange(p: IProps): [number, number];
