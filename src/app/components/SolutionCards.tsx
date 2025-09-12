import { SolutionCard } from "./SolutionCard"
import balance from "../../../public/Balance.png"
import increase from "../../../public/Increase.png"
import gears from "../../../public/Gears.png"
import operations from "../../../public/smarter-retail-operations.png"

export function SolutionCards() {
    return (
        <section className="px-0 py-25">
            <div className="flex flex-col xl:flex-row justify-between">
                <div className="w-full mb-15 xl:w-[38%] xl:mb-0">
                    <h2 className="text-(--blue) general-title">Discover the most powerful retail planning solution</h2>
                    <p className="text-lg text-[#556171]">Drive smarter decisions with flexible, highly configurable tools that offer instant access to personalized views and real-time analyses. Leverage advanced AI and analytics to enhance retail planning accuracy and forecast for maximized margins. Scale effortlessly, ensuring faster reporting and seamless performance across operations.</p>
                </div>
                <div className="w-full xl:w-1/2">
                    <div>
                        <SolutionCard image={balance} title="Flexible, highly configurable and proven ease of adoption." description="Slice and dice through multiple layers of data in numerous directions, within a visually dynamic retail planning solution to fuel instant analysis​." />
                        <SolutionCard image={increase} title="Advanced Analytics, AI and ML capabilities." description="Drive smarter decisions with analytics that deliver precise demand forecasts. Predict and automate quickly across enormous quantities of SKUs." />
                        <SolutionCard image={gears} title="Robust performance and scalable." description="Enjoy faster reporting and quicker analysis time for more agile decision-making designed to leverage requirement changes and business growth.​" />
                        <SolutionCard image={operations} title="Integrated Solutions for smarter retail operations." description="Streamline workflows from concept to replenishment with Centric’s unified platform, driving efficiency, agility and smarter decision-making.​" />
                    </div>
                </div>
            </div>
        </section>

    )
}
