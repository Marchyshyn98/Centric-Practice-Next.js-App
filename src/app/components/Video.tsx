import type { Video } from "@/shared/types/Video.type"

interface Props {
    video: Video
}

export function Video({ video }: Props) {
    return (
        <video className="rounded-lg" controls preload="none" autoPlay loop muted>
            <source src={ video.fields.file.url } type={ video.fields.file.contentType } />
        </video>
    )
}
