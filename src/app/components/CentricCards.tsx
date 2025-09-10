import cards from "../../shared/data/cards.json"
import { Card } from "./Card"

export function CentricCards() {
    return (
    <section className="centric-cards pt-[60px]">
        <div className="heading-top text-center">
            <h2>Product Concept to Commercialization Platform</h2>
            <p className="intro-text">Unique, seamless experience from pre-season to in-season and end of season</p>
        </div>
        <div className="centric-cards-wrapper flex flex-wrap gap-3 mt-[100px]">
            {cards.map(card => {
                return <Card key={card.title} card={card} />
            })}
        </div>
    </section>
    )
}
