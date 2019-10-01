import * as React from "react";

export const PageLink: React.FC<{ disabled?: boolean; onClick?: () => void }> = p =>
    <button className="page-link" disabled={!!p.disabled} onClick={p.onClick}>
        {p.children}
    </button>;

// <button className={`page-link ${p.disabled ? "disabled" : ""}`} onClick={p.onClick}>
