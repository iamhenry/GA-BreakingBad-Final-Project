import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import Nav from "./Nav";
import BBHome from "./BBHome";
import ItemDetail from "./ItemDetail";

// React Router Tutorial | React For Beginners
// https://www.youtube.com/watch?v=Law7wfdg_ls&t=1139s

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={BBHome} />
            <Route path="/BBHome" exact component={BBHome} />
            <Route path="/BBHome/:id" component={ItemDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
