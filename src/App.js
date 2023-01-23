
// import React from 'react';
// import GlobalStyle from  './globalStyle';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import PricingPage from './pages/PricingPage';
// import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div >
//      <Router>
//        <GlobalStyle/>
//        <Switch>
//          <Route path='/' exact component={Home}/>
//          <Route path='/signup' exact component={SignUp}/>
//          <Route path='/pricingpage' exact component={PricingPage}/>
//        </Switch>
//      </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Pricing from './pages/PricingPage';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
