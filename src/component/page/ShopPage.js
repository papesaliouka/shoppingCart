import Card from "../card/Card"

const ShopPage=({increment, decrement, items, takeTheId})=>{
    return(
        <article>
            <div class="cf pa2">
                {
                    items.map(item=> <Card  imgUrl={item.imgUrl} key={item.id} name={item.name}  price={item.price} increment={increment} decrement={decrement} takeTheId={takeTheId} />)
                }
            </div>
        </article>
    );
}


export default ShopPage