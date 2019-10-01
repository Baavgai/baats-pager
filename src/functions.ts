import {
    PagerRange, PagerProps, PagerComponentProps, NavEndProps, NavEnds, PagerMetrics, PagerMetricsRanges
} from "./types";

const toPagerRange = (current: number, size: number, maxSize: number): PagerRange => {
    const first = Math.floor((current - 1) / size) * size + 1;
    const last = Math.min(maxSize, first + size - 1);
    return { first, last };
};

const pageItemCount = (p: Pick<Partial<PagerMetrics>, "pageSize" | "pageCount" | "itemCount">) => {
    let pageCount = 1;
    let itemCount: number | undefined;
    let pageSize: number | undefined;
    if (p.itemCount !== undefined && p.itemCount > 0) {
        pageSize = p.pageSize !== undefined && p.pageSize > 0 ? p.pageSize : 5;
        pageCount = Math.floor(p.itemCount / pageSize)
            + ((p.itemCount % pageSize) === 0 ? 0 : 1);
        itemCount = p.itemCount;
    } else if (p.pageCount !== undefined && p.pageCount > 0) {
        pageCount = p.pageCount;
    }
    return { pageSize, pageCount, itemCount };
}

const calcMetrics = (p: Partial<PagerMetrics>): PagerMetricsRanges & PagerMetrics => {
    const pagesShown = p.pagesShown !== undefined && p.pagesShown > 0 ? p.pagesShown : 10;
    const { pageSize, pageCount, itemCount } = pageItemCount(p);
    // const totalPages = itemCount === 0 ? 1 : (Math.floor(itemCount / pageSize) + 1);
    const currentPage = p.currentPage === undefined || p.currentPage < 1 || itemCount === 0
        ? 1
        : (p.currentPage > pageCount ? pageCount : p.currentPage);
    const pageRange = toPagerRange(currentPage, pagesShown, pageCount);
    const itemRange = pageSize === undefined || itemCount === undefined
        ? undefined
        : toPagerRange((currentPage - 1) * pageSize + 1, pageSize, itemCount);
    return { pagesShown, pageSize, pageCount, itemCount, currentPage, pageRange, itemRange };
};

export const toPagerComponentProps = (p: Partial<PagerProps>): PagerComponentProps => {
    const pagerClassName = p.pagerClassName ? `pagination ${p.pagerClassName}` : "pagination";
    const onPageChange = (page: number) => {
        if (p.onPageChange) {
            p.onPageChange(page);
        }
    };
    return {
        ...calcMetrics(p),
        pagerClassName,
        pagerStyle: p.pagerStyle || {},
        autoCollapse: !!p.autoCollapse,
        hideFirstLast: !!p.hideFirstLast,
        showCount: !!p.showCount,
        onPageChange
    };
};

export const itemsSlug = ({ itemRange, itemCount, pageCount, currentPage }: PagerComponentProps) =>
    itemRange === undefined || itemCount === undefined
        ? `${currentPage} of ${pageCount}`
        : `${itemRange.first} - ${itemRange.last} of ${itemCount} item${itemCount === 1 ? "" : "s"}`;
// p.itemCount < 1        ? 1        : Math.floor(itemCount / pageSize) + 1;
//         const first = (currentPage - 1) * 
//         const s = `${itemCount} item${itemCount === 1 ? "" : "s"}`;
// "btn btn-link" disabled={true}
// 1 - 10 of 86 items
// return <li className="disabled"><PageLink disabled={true} aria-label={s}>{s}</PageLink></li>;
// <button type="button" class="btn btn-outline-primary">Primary</button>

export const isHidden = (p: NavEndProps) => {
    const t = p.navEnd;
    if ((t === NavEnds.First || t === NavEnds.Last) && p.hideFirstLast) {
        return true;
    } else if (p.autoCollapse && getChangeNum(p)) {
        const { pageRange, pageCount } = p;
        return (pageRange.first === 1 && pageRange.last === pageCount);
    } else if (p.autoCollapse) {
        return true;
    }
    return false;
};

export const getChangeNum = (p: NavEndProps) => {
    const t = p.navEnd;
    const { pageRange, pageCount } = p;
    if (t === NavEnds.First && (p.currentPage !== 1)) {
        return 1;
    } else if (t === NavEnds.Prev && (p.currentPage !== 1)) {
        const n = pageRange.first - 1;
        return (n > 0) ? n : 1;
    } else if (t === NavEnds.Next && (p.currentPage !== pageCount)) {
        const n = pageRange.last + 1;
        return (n < pageCount) ? n : pageCount;
    } else if (t === NavEnds.Last && (p.currentPage !== pageCount)) {
        return pageCount;
    } else {
        return undefined;
    }
};

export const range = (size: number) => {
    const xs = new Array<number>(size);
    for (let i = 0; i < size; i++) { xs[i] = i; }
    return xs;
};
