import Image from "next/image"
import logo from "../../../public/Header_Centric_Software_Logo_White.svg"
import { ButtonLink } from "./ButtonLink"
import Link from "next/link"

export function HeaderNavigation() {
    return <div className='flex justify-between bg-[#181d20] px-8 py-6'>
        <Link href="/">
            <Image src={logo} alt="logo" />
        </Link>
        <nav>
            <Link className="text-[13px] mx-[10px] my-0" href="/centric-planning">Centric Planning</Link>
            <Link className="text-[13px] mx-[10px] my-0" href="/posts">Posts</Link>
            <Link className="text-[13px] mx-[10px] my-0" href="/blog">Blog</Link>
        </nav>
        <ButtonLink link="https://www.centricsoftware.com/request-a-demo/">Request a demo</ButtonLink> 
    </div>
}
