export const ShopItem = (card) => {
    const {name, price, color, img} = card;
  return (
    <div>
        <div className="list-img">
             <img src={img} alt={name} />
         </div>
            <h2 className="list-title">{name}</h2>
            <h5 className="list-color">{color}</h5>
            <span className="card-prise">{price}$</span>
            <button className="card-btn">ADD TO CART</button>
        </div>
  )
}
