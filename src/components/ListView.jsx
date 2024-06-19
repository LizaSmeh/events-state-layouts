import { ShopItem } from "./ShopItem";

export const ListView = ({items}) => {

  return (
   <div className="list-view">
        {
          items.map((card, index) => {
            return <ShopItem card = {card} key = {index}/>
          })
        }
      </div>
  )
}
