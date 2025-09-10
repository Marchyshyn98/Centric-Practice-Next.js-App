import type { PropsWithChildren } from "react";

export default function Layout({children} : PropsWithChildren<unknown>) {
    return <div className="theme-selector light-mode">
        {children}
    </div>
}
