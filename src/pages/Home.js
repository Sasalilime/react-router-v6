import React from "react";
import Card from "../components/card/Card";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  let name = "Salim";

  return (
    <>
      <NavBar />
      <div className="flex-column flex-center mt-5 gap-5">
        <div>Home</div>
        <Card prenom={name} />
      </div>
    </>
  );
}

export default Home;
