import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import SignUp from './component/pages/SignUp';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' exact component={Home}/>
        <Route exact path='/about' exact component={About}/>
        <Route exact path='/contact' exact component={Contact}/>
        <Route exact path='/sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
