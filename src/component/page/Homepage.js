import {Link} from 'react-router-dom'
const HomePage=()=>{


    return(
            <article class="athelas">
                <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style={{background: "url(https://images.unsplash.com/photo-1527600478564-488952effedb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) no-repeat center"}}>
                    <div class="dtc v-mid">
                    <h1 class="f1 f-headline-l fw1 i white">Welcome To The Tech Shop</h1>
                        <Link to='/shop' class="white link dib grow">
                           <h2>Shop Now</h2>
                        </Link>
                    </div>
                </div>
            </article>
    );
}


export default HomePage