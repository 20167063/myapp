import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import SignUp from './component/pages/SignUp';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
