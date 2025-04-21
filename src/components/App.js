import React from "react";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
