import Image from "next/image";
import type { Author } from "@/shared/types/author.type";
import styles from "../styles/Author.module.css"

interface Props {
    author: Author
}

export function Author({ author }: Props) {
    return (
        <div className="flex items-center mt-[60px]">
            <div className={styles.authorImage + " mr-[25px]"} style={{ backgroundImage: "url(https:" + author.fields.picture.fields.file.url + ")" }}>
                {/* <Image
                    src={"https:" + author.fields.picture.fields.file.url}
                    alt={author.fields.name}
                    width={author.fields.picture.fields.file.details.image.width}
                    height={author.fields.picture.fields.file.details.image.height}
                /> */}
            </div>
            <div>
                <h5 className="mb-[5px]">{author.fields.name}</h5>
                <h5><i>{author.fields.position}</i></h5>
            </div>
        </div>
    )
}
