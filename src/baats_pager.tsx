import * as React from "react";

import { PagerProps } from "./types";
import { PageElement } from "./PageElement";
import { Pages } from "./Pages";
import { NavEnds, PagerComponentProps } from "./types";

const SHOW_PAGES_DEFAULT = 5;

function getItemRange(pageSize: number, totalItems: number, itemNum: number) {
    const row = Math.floor((itemNum - 1) / pageSize);
    const firstPage = (row * pageSize) + 1;
    const lastPage = Math.min(totalItems, firstPage + pageSize - 1);
    return { firstPage, lastPage };
}

const getPageRange = (p: PagerProps) =>
    getItemRange(p.showPages || SHOW_PAGES_DEFAULT, p.totalPages, p.currentPage);

const ItemsBlock = ({ itemCount }: PagerProps) => {
    if (itemCount === undefined) {
        return <></>;
    } else {
        const s = `${itemCount} item${itemCount === 1 ? "" : "s"}`;
        return <li className="disabled"><a href="#" aria-label={s}>{s}</a></li>;
    }
};

const ViewComponent = (p: PagerComponentProps) =>
    <ul className={`pagination ${p.pagerClassName}`} style={p.pagerStyle}>
        <PageElement {...p} navEnd={NavEnds.First} />
        <PageElement {...p} navEnd={NavEnds.Prev} />
        <Pages {...p} />
        <PageElement {...p} navEnd={NavEnds.Next} />
        <PageElement {...p} navEnd={NavEnds.Last} />
        <ItemsBlock {...p} />
    </ul>;

export const Pager = (p: PagerProps) =>
    <ViewComponent {...{...p, ...getPageRange(p)}} />;
