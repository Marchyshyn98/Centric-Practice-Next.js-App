import homeStats from "../../shared/data/homeStats.json"
import styles from "../styles/Stats.module.css"

export function Stats() {
    return ( 
    <div>
        {homeStats.map(stat => {
            return (
                <div key={stat.amount} className={styles.statsItem + " py-[30px] px-0"}>
                    <div className={styles.statsAmount + " font-[600]"}>{stat.amount}</div>
                    <div className={styles.statsTitle + " text-grey font-[300] mt-[10px]"}>{stat.title}</div>
                </div>
            )
        })}
    </div>
    )
}
