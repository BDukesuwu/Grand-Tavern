import { useState } from 'react';
import './MenuPage.css'
import steakbites from '../../images/steakbites.jpg';

export default function MenuPage() {
  return (
    <main className="MenuPage">
      <div className="row">
        <h1>Our Menu</h1>
      </div>

      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>

      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>
      
      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>
      
      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>
      
      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>
      
      <div className="column">
        <img src={steakbites} />
        <h3> Steak Bites</h3>
      </div>
    </main>
  );
}


