import React from 'react';
import './App.css';
// import WorkSlide from "./components/WorkSlide/WorkSlide";
import DrawingSlide from "./components/DrawingSlide/DrawingSlide";
import PaintingSlide from "./components/PaintingSlide/PaintingSlide"
import SculptureSlide from "./components/Sculpture/SculptureSlide"
import Contact from "./components/Contact/Contact";
import Cv from "./components/Cv/Cv";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  // something here needed for production?

const state = {
  name: "Austin"
};

function App() {
  return (
    <Router>
      <div className="main">
        <nav>
        <h2 className="jonathan">Jonathan Rajewski</h2>
          <ul id="x">
            {/* <li>
              <Link to="/Work" className="link">Work</Link>
            </li> */}
                        <li>
              <Link to="/Paintings" className="link">Paintings</Link>
            </li>
            <li>
              <Link to="/Drawings" className="link">Drawings</Link>
            </li>
            <li>
              <Link to="/Sculptures" className="link">Sculptures</Link>
            </li>
            <li>
              <Link to="/Contact" className="link">Contact</Link>
            </li>
            <li>
              <Link to="/Cv" className="link">CV</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/Work">
            <WorkSlide name={"work"}/>
          </Route> */}
          <Route path="/Drawings">
            <DrawingSlide name={"drawings"}/>
          </Route>
          <Route path="/Paintings">
            <PaintingSlide name={"paintings"}/>
          </Route>
          <Route path="/Sculptures">
            <SculptureSlide name={"sculptures"}/>
          </Route>
          <Route path="/Cv">
            <Cv name={state.name}/>
          </Route>
          <Route path="/Contact">
            <Contact name={state.name}/>
          </Route>
          <Route path="/">
            {/* <WorkSlide name={state.name}/> */}
            <PaintingSlide name={"paintings"}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;