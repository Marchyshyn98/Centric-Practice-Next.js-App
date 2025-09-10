export type Author = {
    fields: {
        name: string,
        picture: {
            fields: {
                file: {
                    details: {
                        image: {
                            width: number,
                            height: number
                        }
                    }
                    url: string
                }
            }
        },
        position: string
    }
}