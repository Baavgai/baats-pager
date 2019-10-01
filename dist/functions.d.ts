import { PagerComponentProps, NavEndProps } from "./types";
export declare const toPagerComponentProps: (p: Partial<Partial<import("./types").PagerConcreteProps>>) => PagerComponentProps;
export declare const itemsSlug: ({ itemRange, itemCount, pageCount, currentPage }: PagerComponentProps) => string;
export declare const isHidden: (p: NavEndProps) => boolean;
export declare const getChangeNum: (p: NavEndProps) => number | undefined;
export declare const range: (size: number) => number[];
