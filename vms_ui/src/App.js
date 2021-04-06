import HeaderComponent from './components/layout/Header'
import FooterComponent from './components/layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DashboardComponent from './components/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddCandidate from "./components/Candidate/AddCandidate"
import getCandidate from "./components/Candidate/GetCandidate";
import DeleteCandidate from "./components/Candidate/DeleteCandidate"
import store from './store';
import { Provider } from 'react-redux';
import GetCandidate from './components/Candidate/GetCandidate';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <HeaderComponent />
          <Route exact path="/" component={DashboardComponent}/>
          <Route exact path="/dashboard" component={DashboardComponent}/>
          <Route exact path="/addCandidate" component={AddCandidate}/>
          <Route exact path="/getCandidate" component={GetCandidate}/>
          <Route exact path="/deleteCandidate" component={DeleteCandidate}/>
          
          <FooterComponent />
        </Router>
    </Provider>
  );
}

export default App;