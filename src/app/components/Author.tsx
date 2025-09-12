import type { Author } from "@/shared/types/author.type";

interface Props {
    author: Author
}

export function Author({ author }: Props) {
    return (
        <div className="flex items-center mt-15">
            <div className="w-[150px] h-[150px] rounded-[50%] bg-(--blue) bg-position-[50%] bg-no-repeat bg-cover mr-[25px]" style={{ backgroundImage: "url(https:" + author.fields.picture.fields.file.url + ")" }}>
            </div>
            <div>
                <h5 className="mb-[5px]">{author.fields.name}</h5>
                <h5><i>{author.fields.position}</i></h5>
            </div>
        </div>
    )
}
