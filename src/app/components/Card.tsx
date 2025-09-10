import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../../public/home-icon-optimize.svg";
import arrowNext from "../../../public/Arrow-6.svg";
import type { ICard } from "@/shared/types/card.interface";

interface Props {
    card: ICard
}

export function Card({card}: Props) {
    return (
        <div className="centric-card flex">
            <Link href={card.link} target="_blank" className="p-[26px] block transition duration-300 ease-in-out">
                <Image src={homeIcon} alt="home-icon" />
                <h3>{card.title}</h3>
                <p className="centric-card-text mb-[15px]">{card.description}</p>
                <div className="centric-card-learnmore hidden transition duration-300 ease-in-out">
                    <span className="uppercase font-[600]">learn more</span>
                    <Image src={arrowNext} alt="arrow-next" className="inline-block mb-[4px] ml-[10px]" />
                </div>
            </Link>
        </div>
    )
}
