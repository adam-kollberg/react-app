import React from "react";
import CardList from "../cards/cardList";
import "./home.css";


function Home() {
  return (
    <main>
      <section className="hero">
      
        <h1> Boka din tid nedan</h1>
      </section>

      <CardList />
    </main>
  );
}

export default Home;
