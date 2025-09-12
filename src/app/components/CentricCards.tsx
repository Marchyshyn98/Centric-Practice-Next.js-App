import cards from "../../shared/data/cards.json"
import { Card } from "./Card"

export function CentricCards() {
    return (
    <section className="pt-[60px]">
        <div className="text-center">
            <h2>Product Concept to Commercialization Platform</h2>
            <p className="text-lg">Unique, seamless experience from pre-season to in-season and end of season</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-25">
            {cards.map(card => {
                return <Card key={card.title} card={card} />
            })}
        </div>
    </section>
    )
}
