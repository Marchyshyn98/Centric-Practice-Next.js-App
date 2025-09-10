import Image from "next/image"
import logo from "../../../public/Header_Centric_Software_Logo_White.svg"
import styles from "../styles/HeaderNavigation.module.css"
import { ButtonLink } from "./ButtonLink"
import Link from "next/link"

export function HeaderNavigation() {
    return <div className={styles.headerNav + ' flex justify-between'}>
        <Link href="/">
            <Image src={logo} alt="logo" />
        </Link>
        <nav>
            <Link className={styles.navLink} href="/centric-planning">Centric Planning</Link>
            <Link className={styles.navLink} href="/posts">Posts</Link>
            <Link className={styles.navLink} href="/blog">Blog</Link>
        </nav>
        <ButtonLink link="https://www.centricsoftware.com/request-a-demo/">Request a demo</ButtonLink> 
    </div>
}
