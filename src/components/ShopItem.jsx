export const ShopItem = (card) => {
    const {name, price, color, img} = card.card;
  return (
    <div className="list">
        <div className="card-img">
             <img src={img} alt={name} />
         </div>
            <h2 className="card-title">{name}</h2>
            <h5 className="card-color">{color}</h5>
            <span className="card-prise">{price}$</span>
            <button className="card-btn">ADD TO CART</button>
        </div>
  )
}
