import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from "../pages/search";
import SearchResult from "../pages/searchResult";
import RepositoryList from "../pages/repositoryList";
import RepositoryDetails from "../pages/repositoryDetails";

export default function Routes(){
  
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />

        <Route exact path="/result/:user" render={(props) => <SearchResult {...props} /> } />

        <Route exact path="/user/:user/repos" render={(props) => <RepositoryList {...props} /> } />

        <Route exact path="/user/:user/repos/:repo" render={(props) => <RepositoryDetails {...props} /> } />
      </Switch>
    </Router>
  )
}