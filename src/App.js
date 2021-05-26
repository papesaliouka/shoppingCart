import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './component/header/Header';
import HomePage from './component/page/Homepage';
import ShopPage from './component/page/ShopPage';
import CheckoutPage from './component/page/CheckoutPage';
import {useState} from 'react';
import {data} from './data';
import 'tachyons';
const App=()=> {
  const [count, setCount] = useState(0);
  const [id, setId]=useState([])
  const [items]= useState(data)
  const increment=()=> setCount(prevCount=> prevCount +1)
  const decrement=()=> setCount(prevCount=> prevCount -1)
  const takeTheId=(name)=> setId(prevId=> [name, ...prevId])
  return(
  <div className="App">
    <Router>
      <Header count={count}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={()=> <ShopPage increment={increment} decrement={decrement} items={items} takeTheId={takeTheId}  />} />
          <Route exact path='/checkout' component={ ()=> <CheckoutPage id={id} increment={increment} decrement={decrement} />}/>
        </Switch>
    </Router>
  </div>
);
}

export default App;
// prendre l'id
// prendre le state
// fusionner et filtrer le state et retourner selement la partie de state qui a les id 