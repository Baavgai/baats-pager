import * as React from "react";
import { itemsSlug, toPagerComponentProps } from "./functions";
import { PagerProps, NavEnds, PagerComponentProps } from "./types";
import { PageElement } from "./PageElement";
import { Pages } from "./Pages";

const ItemsBlock = (p: PagerComponentProps) => {
    if (!p.showCount) {
        return <></>;
    } else {
        return <span>{itemsSlug(p)}</span>;
    }
};

const ViewComponent = (p: PagerComponentProps) =>
    <div className="row">
        <div className="col">
            <ul className={p.pagerClassName} style={p.pagerStyle}>
                <PageElement {...p} navEnd={NavEnds.First} />
                <PageElement {...p} navEnd={NavEnds.Prev} />
                <Pages {...p} />
                <PageElement {...p} navEnd={NavEnds.Next} />
                <PageElement {...p} navEnd={NavEnds.Last} />
            </ul>
        </div>
        <div className="col">
            <ItemsBlock {...p} />
        </div>
        <div className="w-100"></div>
    </div>;

export const Pager = (p: PagerProps) =>
    <ViewComponent {...toPagerComponentProps(p)} />;
