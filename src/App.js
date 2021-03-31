import './App.css';
import Main_router from './router/Route';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    
    <div>
     <Router>
      <Switch>
        <Route component={Main_router} />
      </Switch>
    </Router>
        
    </div>
      
  );
}

export default App;