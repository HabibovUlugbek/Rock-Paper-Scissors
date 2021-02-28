import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS 
import Login from "./components/Login";
import Home from './components/Home'

const  App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
