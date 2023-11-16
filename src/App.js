import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Pages/Create/Create';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Recipe from './Pages/Recipe/Recipe';
import Navbar from './component/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>  
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
