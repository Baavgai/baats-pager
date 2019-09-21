export interface PagerProps {
    totalPages: number;
    currentPage: number;
    autoCollapse?: boolean;
    hideFirstLast?: boolean;
    showPages?: number;
    itemCount?: number; // include if you want item count to show
    pagerClassName?: string;
    pagerStyle?: any; // React.CSSProperties;
    onPageChange(page: number): void;
}

export enum NavEnds { First, Prev, Next, Last }

export type PagerComponentProps = PagerProps & { firstPage: number, lastPage: number };

export type NavEndProps = PagerComponentProps & { navEnd: NavEnds };
