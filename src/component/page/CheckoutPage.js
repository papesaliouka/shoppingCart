import Card from '../card/Card';
import {data} from '../../data'

const CheckoutPage=({id, increment,decrement})=>{
    console.log(id)
    return(
        <div className='tc'>
            <main>
                {
                    data.filter(item => id.includes(item.name)).map(item =><Card name={item.name} imgUrl={item.imgUrl} price={item.price} increment={increment} decrement={decrement} />)
                }
            </main>
            <a href="#0" className="f5 no-underline black mt4 bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                <span className="pl1">Purchase</span>
            </a>
            <div className='f5 no-underline black mt4 bg-animate items-center pa3 '>
                {`Total: ${data.filter(item => id.includes(item.name)).map(item => item.price).reduce((acc, curr)=> acc + curr, 0)}$`}
            </div>
        </div>
    );
}

export default CheckoutPage