import { useState } from 'react';
import chef from '../../images/chef.png';
import steak from '../../images/steak.png';
import season from '../../images/season.png';
import nutrition from '../../images/nutrition.png';
import './HomePage.css'

export default function Homepage() {
  return (
    <>
    <section>

      <h1>Fresh, delicious steak</h1>
      <img src={chef} />

      <p> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.</p>
          <button>Our Menu</button>
    </section>

    <section>
      <h2> Always Fresh</h2>
      <p> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Urna molestie at elementum eu facilisis
          sed odio morbi quis.</p>
          <button>Our Story</button>
          <img src={season} />
    </section>

    <section>
        <h2>Steak Special Menu!</h2>
        <p> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
            <img src={steak} />
    </section>

    <section>
        <h2>Nutrition</h2>
        <p> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
            <img src={nutrition} />
    </section>

    <section id="booking">
      <form>
        <h2>Book a table</h2>

        <label >Date</label>
          <input type="date" name="Date"/>

        <label placeholder='party size'/>
          <select className="form-control">
            <option value="partysize" disabled selected hidden>Party Size</option>
            <option>1 person</option>
            <option>2 people</option>
            <option>3 people</option>
            <option>4 people</option>
            <option>5 people</option>
          </select>
      
        <label>Time</label>
          <input type="time" name="book"/>
          <input type="submit"/>
      </form>
  </section>
    </>
  );
}