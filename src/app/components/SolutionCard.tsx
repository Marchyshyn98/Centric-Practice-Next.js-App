import styles from "../styles/SolutionCard.module.css"
import Image, { StaticImageData } from "next/image"

type solutionCard = {
    image: StaticImageData,
    title: string,
    description: string
}

export function SolutionCard({ image, title, description }: solutionCard) {
    return (
        <div className={styles.solutinCardItem + " flex justify-evenly p-[40px]"}>
            <div className={styles.solutionCardImage}>
                <Image src={image} alt={title} />
            </div>
            <div className="w-3/4 ml-[25px]">
                <div className={styles.solutionCardTitle + " font-[600]"}>{title}</div>
                <p className={styles.solutionCardDescription}>{description}</p>
            </div>

        </div>
    )
}
