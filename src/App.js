
import React from 'react';
import GlobalStyle from  './globalStyle';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import PricingPage from './pages/PricingPage';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
     <Router>
       <GlobalStyle/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/signup' exact component={SignUp}/>
         <Route path='/pricingpage' exact component={PricingPage}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
