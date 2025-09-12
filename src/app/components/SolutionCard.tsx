import Image, { StaticImageData } from "next/image"

type solutionCard = {
    image: StaticImageData,
    title: string,
    description: string
}

export function SolutionCard({ image, title, description }: solutionCard) {
    return (
        <div className="flex justify-evenly bg-[#F1F2F5] p-10 not-first:mt-10">
            <div className="w-[64]">
                <Image src={image} alt={title} />
            </div>
            <div className="w-3/4 ml-[25px]">
                <div className="text-lg text-[#212F41] font-[600] mb-3">{title}</div>
                <p className="text-base leading-[28px] text-[#212F41]">{description}</p>
            </div>
        </div>
    )
}
