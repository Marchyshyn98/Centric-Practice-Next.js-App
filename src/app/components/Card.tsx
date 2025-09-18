import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../../public/home-icon-optimize.svg";
import arrowNext from "../../../public/Arrow-6.svg";
import type { ICard } from "@/shared/types/card.interface";
import { cn } from "@lib/utils";

interface Props {
    card: ICard
}

export function Card({card}: Props) {
    return (
        <div className="group flex h-[300px] md:h-[270px] md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)]">
            <Link href={card.link} target="_blank" className="bg-(--bg-card) hover:bg-(--bg-card-hover) p-[26px] block transition duration-300 ease-in-out">
                <Image src={homeIcon} alt="home-icon" />
                <h3>{card.title}</h3>
                <p className={cn("mb-100", "text-sm mb-[15px]")}>{card.description}</p>
                <div className="hidden group-hover:block transition duration-300 ease-in-out">
                    <span className="text-base uppercase font-[600]">learn more</span>
                    <Image src={arrowNext} alt="arrow-next" className={cn("block mb-20 ml-40", "inline-block mb-[4px] ml-[10px]")} />
                </div>
            </Link>
        </div>
    )
}
