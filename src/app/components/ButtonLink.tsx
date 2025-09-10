import Link from "next/link";
import styles from "../styles/ButtonLink.module.css"

type ButtonLink = {
    link: string,
    children: string
}

export function ButtonLink({link, children}: ButtonLink) {
    return (
    <div>
        <Link href={link} className={styles.btn + ' ' + styles.btnBlue}>{children}</Link>
    </div>
    )
}
