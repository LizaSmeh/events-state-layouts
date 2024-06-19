
export const ShopCard = (card) => {
    const {name, price, color, img} = card;

  return (
    <div className="card">
        <h2 className="card-title">{name}</h2>
        <h5 className="card-color">{color}</h5>
            <div className="card-img">
                 <img src={img} alt={name} />
             </div>
            <div className="card-add">
                <span className="card-prise">{price}$</span>
                <button className="card-btn">ADD TO CART</button>
            </div>
     </div>
  )
}



