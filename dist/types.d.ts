export interface PagerProps {
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
export declare enum NavEnds {
    First = 0,
    Prev = 1,
    Next = 2,
    Last = 3
}
export declare type PagerComponentProps = PagerProps & {
    firstPage: number;
    lastPage: number;
};
export declare type NavEndProps = PagerComponentProps & {
    navEnd: NavEnds;
};
