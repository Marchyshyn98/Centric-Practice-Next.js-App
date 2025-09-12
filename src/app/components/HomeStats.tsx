"use client";

import { useState } from "react"
import { Stats } from "./Stats";

export function HomeStats() {
    const [theme, setDark] = useState(true);

    return ( 
    <section className="text-(--grey) px-0 py-25">
        <div className="w-280 m-auto">
            <div className="flex flex-col xl:flex-row justify-between">
                <div className="max-w-full xl:max-w-132 w-full xl:w-1/2">
                    <div className="mb-[70px]">
                        <button type="button" onClick={() => setDark(!theme)} className={`text-base ${theme ? 'text-(--foreground) border-blue' : 'text-(--grey) border-grey'} font-[600] pb-3 cursor-pointer`}>Market Leadership</button>
                    </div>
                    <h2>
                        <span className="inline-block text-(--foreground)">We are a key innovation partner</span>
                        <span className="inline-block"> for iconic and emerging brands across the world.</span>
                        <br />
                        <br />
                        <span>Best customers. </span>
                        <br />
                        <span>Best solutions. </span>
                        <br />
                        <span>Best team.</span>                  
                    </h2>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3">
                    <Stats />
                </div>
            </div>
        </div>
    </section>
    )
}
