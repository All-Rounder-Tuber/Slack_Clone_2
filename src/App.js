import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="App">
      <h1>Hello Pranshu.... Let's build the Slack Clone &#128640;</h1>
      <span className="fas fa-bars">Hello</span>

      <Header />
      <Sidebar />
      <div className="app_body">
        {/* SideBar */}
        {/* React Router -> Chat Screen */}
      </div>
    </div>
  );
}

export default App;
