import {Link} from 'react-router-dom';
import { FaWeightHanging } from "react-icons/fa";

const Header=({count})=>{

    return(
    <header className="sans-serif bg-black">
        <nav className="dt w-100 mw8 center "> 
        <Link to='/' class="dtc w2 v-mid pa3 white-70 link hover-white ">
            Psk's Shop
        </Link>
            <div className="dtc v-mid tr pa3">
                <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/shop" >Shop Page</Link>
                <span className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" >{count}</span>
                <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to='/checkout'><FaWeightHanging /></Link>
            </div>
        </nav>
    </header>  
)
}

export default Header