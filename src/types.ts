import { CSSProperties } from "react";

export interface PagerMetrics {
    currentPage: number;
    pageCount: number;
    pageSize?: number;
    itemCount?: number;
    pagesShown: number; // number of pages shown in bar
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

export type PagerProps = Partial<PagerConcreteProps>;

export type PagerComponentProps = PagerConcreteProps & PagerMetricsRanges;

export enum NavEnds { First, Prev, Next, Last }

// export type PagerComponentProps = PagerProps & { firstPage: number, lastPage: number };

export type NavEndProps = PagerComponentProps & { navEnd: NavEnds };

/*
export interface PagerProps {
    pageSize: number;
    currentPage: number;
    itemCount: number;
    pagesShown: number; // number of pages shown in bar
}

export interface PagerRange {
    first: number;
    last: number;
}

export interface PagerComponentProps extends PagerProps {
    pageRange: PagerRange;
    itemRange: PagerRange;
};

*/
