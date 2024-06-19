import { ShopCard } from "./ShopCard";

export const CardsView = ({ cards }) => {
    return (
      <div className="cards-view">
        {
          cards.map((card, index) => {
            return <ShopCard card = {card} key = {index}/>
          })
        }
      </div>
    )
  }