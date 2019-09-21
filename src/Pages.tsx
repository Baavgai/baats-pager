import * as React from "react";

import { PageLink } from "./PageLink";
import { PagerComponentProps } from "./types";

const Page = (p: PagerComponentProps & { page: number }) =>
    (p.page === p.currentPage)
        ? <li key={p.page} className="page-item active">
            <PageLink>{p.page}</PageLink>
        </li>
        : <li key={p.page} className="page-item">
            <PageLink onClick={() => p.onPageChange(p.page)}>{p.page}</PageLink>
        </li>
    ;

const pageNums = ({ firstPage, lastPage }: PagerComponentProps) =>
    // [1,2,3];
    new Array<number>(lastPage - firstPage + 1)        .fill(0)        .map((_, i) => i + firstPage);

export const Pages = (p: PagerComponentProps) =>
    <>{pageNums(p).map((page, i) => <Page key={i} {...p} page={page} />)}</>;
