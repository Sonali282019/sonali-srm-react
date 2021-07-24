

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Logout from './Components/Logout';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      
  <Switch>

  <Route exact path ="/" component={Login}/>
  <Route exact path ="/home" component={Home}/>
  
  <Route exact path ="/logout" component={Logout}/>
  </Switch>
  </BrowserRouter>
  {/*<Login/>*/}
    </div>
  );
}

export default App;
