import homeStats from "../../shared/data/homeStats.json"

export function Stats() {
    return ( 
    <div>
        {homeStats.map(stat => {
            return (
                <div key={stat.amount} className="border-t-2 border-[#151F2C] py-[30px] px-0">
                    <div className="text-6xl text-(--blue) leading-[72px] font-[600]">{stat.amount}</div>
                    <div className="text-xl leading-[34px] text-grey font-[300] mt-[10px]">{stat.title}</div>
                </div>
            )
        })}
    </div>
    )
}
