import { CSSProperties } from "react";
export interface PagerMetrics {
    currentPage: number;
    pageCount: number;
    pageSize?: number;
    itemCount?: number;
    pagesShown: number;
}
export interface PagerRange {
    first: number;
    last: number;
}
export interface PagerMetricsRanges {
    pageRange: PagerRange;
    itemRange?: PagerRange;
}
export interface PagerConcreteProps extends PagerMetrics {
    pagerClassName: string;
    pagerStyle: CSSProperties;
    autoCollapse: boolean;
    hideFirstLast: boolean;
    showCount: boolean;
    onPageChange(page: number): void;
}
export declare type PagerProps = Partial<PagerConcreteProps>;
export declare type PagerComponentProps = PagerConcreteProps & PagerMetricsRanges;
export declare enum NavEnds {
    First = 0,
    Prev = 1,
    Next = 2,
    Last = 3
}
export declare type NavEndProps = PagerComponentProps & {
    navEnd: NavEnds;
};
