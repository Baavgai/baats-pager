"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SHOW_PAGES_DEFAULT = 5;
var NavEnds;
(function (NavEnds) {
    NavEnds[NavEnds["First"] = 0] = "First";
    NavEnds[NavEnds["Prev"] = 1] = "Prev";
    NavEnds[NavEnds["Next"] = 2] = "Next";
    NavEnds[NavEnds["Last"] = 3] = "Last";
})(NavEnds || (NavEnds = {}));
;
var NavName = function (x) {
    switch (x) {
        case NavEnds.First: return "First";
        case NavEnds.Prev: return "Previous";
        case NavEnds.Next: return "Next";
        case NavEnds.Last: return "Last";
    }
};
var NavSymbol = function (x) {
    switch (x) {
        case NavEnds.First: return React.createElement("span", {"aria-hidden": "true"}, "‹");
        case NavEnds.Prev: return React.createElement("span", {"aria-hidden": "true"}, "«");
        case NavEnds.Next: return React.createElement("span", {"aria-hidden": "true"}, "»");
        case NavEnds.Last: return React.createElement("span", {"aria-hidden": "true"}, "›");
    }
};
var EndBlock = function (t, p) {
    var value = getChangeNum(t, p);
    var onClick = value ? function (e) { return p.onPageChange(value); } : undefined;
    return React.createElement("li", {className: !!value ? "" : "disabled"}, React.createElement("a", {href: "#", "aria-label": NavName(t), onClick: onClick}, NavSymbol(t)));
};
var ItemsBlock = function (n) {
    var s = n + " item" + (n === 1 ? "" : "s");
    return React.createElement("li", {className: "disabled"}, React.createElement("a", {href: "#", "aria-label": s}, s));
};
var Page = function (page, p) { return (page === p.currentPage)
    ? React.createElement("li", {key: page, className: "active"}, React.createElement("a", {href: "#"}, page))
    : React.createElement("li", {key: page}, React.createElement("a", {href: "#", onClick: function (e) { return p.onPageChange(page); }}, page)); };
var Pages = function (p) {
    var _a = getPageRange(p), first = _a[0], last = _a[1];
    var xs = [];
    for (var i = first; i <= last; i++) {
        xs.push(Page(i, p));
    }
    return xs;
};
var Pager = (function (_super) {
    __extends(Pager, _super);
    function Pager() {
        _super.apply(this, arguments);
    }
    Pager.prototype.render = function () {
        var p = this.props;
        var ht = function (t) { return isHidden(t, p) ? null : EndBlock(t, p); };
        var itemCount = p.itemCount ? ItemsBlock(p.itemCount) : null;
        var pages = Pages(p);
        if (pages.length === 1 && p.autoCollapse && p.currentPage === 1 && p.itemCount) {
            pages = null;
        }
        return (React.createElement("ul", {className: "pagination " + p.pagerClassName, style: p.pagerStyle}, ht(NavEnds.First), ht(NavEnds.Prev), pages, ht(NavEnds.Next), ht(NavEnds.Last), itemCount));
    };
    return Pager;
}(React.Component));
exports.Pager = Pager;
function isHidden(t, p) {
    if ((t === NavEnds.First || t === NavEnds.Last) && p.hideFirstLast) {
        return true;
    }
    else if (p.autoCollapse && getChangeNum(t, p)) {
        var _a = getPageRange(p), first = _a[0], last = _a[1];
        return (first === 1 && last === p.totalPages);
    }
    else if (p.autoCollapse) {
        return true;
    }
    return false;
}
function getChangeNum(t, p) {
    if (t === NavEnds.First && (p.currentPage !== 1)) {
        return 1;
    }
    else if (t === NavEnds.Prev && (p.currentPage !== 1)) {
        var n = getPageRange(p)[0] - 1;
        return (n > 0) ? n : 1;
    }
    else if (t === NavEnds.Next && (p.currentPage !== p.totalPages)) {
        var n = getPageRange(p)[1] + 1;
        return (n < p.totalPages) ? n : p.totalPages;
    }
    else if (t === NavEnds.Last && (p.currentPage !== p.totalPages)) {
        return p.totalPages;
    }
}
function getItemRange(pageSize, totalItems, itemNum) {
    var rows = Math.floor(totalItems / pageSize);
    var row = Math.floor((itemNum - 1) / pageSize);
    var firstPage = (row * pageSize) + 1;
    return [firstPage, Math.min(totalItems, firstPage + pageSize - 1)];
}
exports.getItemRange = getItemRange;
function getPageRange(p) {
    return getItemRange(p.showPages || SHOW_PAGES_DEFAULT, p.totalPages, p.currentPage);
}
exports.getPageRange = getPageRange;
//# sourceMappingURL=baats-pager.js.map