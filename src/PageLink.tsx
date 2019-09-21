import * as React from "react";

export const PageLink: React.FC<{ onClick?: () => void }> = p =>
    <button className="page-link" onClick={p.onClick}>
        {p.children}
    </button>;
