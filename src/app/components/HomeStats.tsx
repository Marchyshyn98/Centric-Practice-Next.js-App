"use client";

import { useEffect, useState } from "react"
import styles from "../styles/HomeStats.module.css"
import { Stats } from "./Stats";

export function HomeStats() {
    const [theme, setDark] = useState(true);

    return ( 
    <section className={styles.statsSection + " pt-[100px] pb-[100px]"}>
        <div className={styles.container}>
            <div className={styles.statsContent + " flex justify-between"}>
                <div className={styles.colLeft + " w-1/2"}>
                    <div className={styles.tab + " mb-[70px]"}>
                        <button type="button" onClick={() => setDark(!theme)} className={styles.btnTab + ` ${theme ? 'text-white border-blue' : 'text-grey border-grey'} font-[600] pb-[12px] cursor-pointer`}>Market Leadership</button>
                    </div>
                    <h2>
                        <span className="text-white">We are a key innovation partner</span>
                        <span> for iconic and emerging brands across the world.</span>
                        <br />
                        <br />
                        <span>Best customers. </span>
                        <br />
                        <span>Best solutions. </span>
                        <br />
                        <span>Best team.</span>                  
                    </h2>
                </div>
                <div className={styles.colRight + " w-full md:w-1/2 lg:w-1/3"}>
                    <Stats />
                </div>
            </div>
        </div>
    </section>
    )
}
