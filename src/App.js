import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Comps/Main";
import Form from "./Comps/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense>
          <Switch>
            <Route path="/main" component={Main} exact></Route>
            <Route path="/form" component={Form} exact></Route>
            <Redirect from="/404" to="/notFound" strict />
            <Redirect from="/" to="/form" strict />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
