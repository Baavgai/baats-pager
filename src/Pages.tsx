import * as React from "react";
import { PageLink } from "./PageLink";
import { PagerComponentProps } from "./types";
import { range } from "./functions";

const Page = (p: PagerComponentProps & { page: number }) =>
    (p.page === p.currentPage)
        ? <li key={p.page} className="page-item active">
            <PageLink>{p.page}</PageLink>
        </li>
        : <li key={p.page} className="page-item">
            <PageLink onClick={() => p.onPageChange(p.page)}>{p.page}</PageLink>
        </li>
    ;

const pageNums = ({ pageRange }: PagerComponentProps) =>
    range(pageRange.last - pageRange.first + 1).map(i => i + pageRange.first);

export const Pages = (p: PagerComponentProps) =>
    <>{pageNums(p).map((page, i) => <Page key={i} {...p} page={page} />)}</>;
