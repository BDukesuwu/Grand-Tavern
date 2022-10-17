import { useState } from 'react';
import './MenuPage.css'
import steakbites from '../../images/steakbites.jpg';
import pansear from '../../images/pansear.jpg';
import teriyaki from '../../images/teriyaki.jpg';
import sugarsteak from '../../images/sugarsteak.jpg';
import flank from '../../images/flank.jpg';
import sous from '../../images/sous.jpg';

export default function MenuPage() {
  return (
    <main className="MenuPage">
      <div className="row">
        <h1>Popular Dinners</h1>
      </div>

      <div className="column">
        <img src={steakbites} />
        <h3>Steak Bites</h3>
        <h5>25</h5>
      </div>

      <div className="column">
        <img src={pansear} />
        <h3>Pan-Fried Steak</h3>
        <h5>32</h5>
      </div>
      
      <div className="column">
        <img src={teriyaki} />
        <h3>Teriyaki Steak </h3>
        <h5>25</h5>
      </div>
      
      <div className="column">
        <img src={sugarsteak} />
        <h3>Vietnamese Sugar Steak</h3>
        <h5>30</h5>
      </div>
      
      <div className="column">
        <img src={flank} />
        <h3>Panfried Flank Steak</h3>
        <h5>28</h5>
      </div>
      
      <div className="column">
        <img src={sous} />
        <h3>Sous-vide steak</h3>
        <h5>30</h5>
      </div>

    <h2>For more Menu Items, see the order page!</h2>
    </main>
  );
}


