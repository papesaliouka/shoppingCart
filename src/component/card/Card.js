const Card = ({name, imgUrl, price, increment, decrement, takeTheId})=>(
    <div class="fl w-50 w-25-m w-20-l pa2 tc">
            <p className='black'>{name}</p>
            <img src={imgUrl} alt={name} className="w-100 db outline black-10 db link dim tc"  style={{height: '25vh'}}/>
            <p>{price}$</p>
            <div class="flex items-center justify-center">
                <a onClick={decrement} href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa  border-box">
                    <svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
                        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                    </svg>
                </a>{ takeTheId ? (<button class="f6 link dim br2 ph3 pv2 mb2 dib white bg-black-80" onClick={()=>{takeTheId(name); increment()} }>Add</button>) : null 
                }
                <a onClick={increment} href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa  border-box">
                    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
                    <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                    </svg>
                </a>
            </div>
    </div>
)

export default Card