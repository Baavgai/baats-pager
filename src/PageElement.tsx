import * as React from "react";

import { PageLink } from "./PageLink";
import { NavEndProps, NavEnds } from "./types";

const NavSymbol = ({ navEnd }: NavEndProps) => {
    switch (navEnd) {
        case NavEnds.First: return <span aria-hidden="true">&lsaquo;</span>;
        case NavEnds.Prev: return <span aria-hidden="true">&laquo;</span>;
        case NavEnds.Next: return <span aria-hidden="true">&raquo;</span>;
        case NavEnds.Last: return <span aria-hidden="true">&rsaquo;</span>;
        default: return <></>;
    }
};

export const PageElement = (p: NavEndProps) => {
    if (isHidden(p)) {
        return (<></>);
    } else {
        const value = getChangeNum(p);
        return (
            <li className={!!value ? "page-item" : "page-item disabled"}>
                <PageLink onClick={value !== undefined ? () => p.onPageChange(value!) : undefined}>
                    <NavSymbol {...p} />
                </PageLink>
            </li>
        );
    }
};

function isHidden(p: NavEndProps) {
    const t = p.navEnd;
    if ((t === NavEnds.First || t === NavEnds.Last) && p.hideFirstLast) {
        return true;
    } else if (p.autoCollapse && getChangeNum(p)) {
        const { firstPage, lastPage } = p;
        return (firstPage === 1 && lastPage === p.totalPages);
    } else if (p.autoCollapse) {
        return true;
    }
    return false;

}

function getChangeNum(p: NavEndProps) {
    const t = p.navEnd;
    if (t === NavEnds.First && (p.currentPage !== 1)) {
        return 1;
    } else if (t === NavEnds.Prev && (p.currentPage !== 1)) {
        const { firstPage } = p;
        const n = firstPage - 1;
        return (n > 0) ? n : 1;
    } else if (t === NavEnds.Next && (p.currentPage !== p.totalPages)) {
        const { lastPage } = p;
        const n = lastPage + 1;
        return (n < p.totalPages) ? n : p.totalPages;
    } else if (t === NavEnds.Last && (p.currentPage !== p.totalPages)) {
        return p.totalPages;
    } else {
        return undefined;
    }
}

/*
const navName = (x: NavEnds) => {
    switch (x) {
        case NavEnds.First: return "First";
        case NavEnds.Prev: return "Previous";
        case NavEnds.Next: return "Next";
        case NavEnds.Last: return "Last";
        default:
            return "";
        // assertNever(navEnd);
    }
};
*/
