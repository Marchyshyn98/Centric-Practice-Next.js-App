import Link from "next/link";

type ButtonLink = {
    link: string,
    children: string
}

export function ButtonLink({link, children}: ButtonLink) {
    return (
    <div>
        <Link href={link} className="text-[13px] rounded-4xl bg-[linear-gradient(267.29deg,_#097FE2,_#096BE1_100%)] hover:bg-[linear-gradient(267.29deg,_#097FE2,_#085CDB_100%)] px-4 py-2">{children}</Link>
    </div>
    )
}
