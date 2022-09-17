import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import { Dashboard } from "./pages/dashboard";
import { Rey } from "./pages/Rey";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export const titleList =[
  "vb",
  "Birth time",
  "Birthplace ",
  "Sun ☉	",
  "Moon ☾",
  "Rising ↑",
  "Mercury ☿",
  "Venus ♀",
  "Mars ♂",
  "Jupiter ♃",
  "Saturn ♄",
  "Uranus ⛢",
  "Neptune ♆",
  "Pluto ♇"
]

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          "you have multiple routes"," but you want only one"
          of them to render at a time
        */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/rey' element={<Rey />} />
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/rey">Rey's Astro Page</Link>
          </li>
        </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
