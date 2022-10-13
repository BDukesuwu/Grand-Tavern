import { useState } from 'react';
import chef from '../../images/chef.png';
import steak from '../../images/steak.png';
import season from '../../images/season.png';
import nutrition from '../../images/nutrition.png';

export default function Homepage() {
  return (
    <>
      <h1>Fresh, delicous steak</h1>
      <img src={chef} />

    <div>
      <p> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.</p>
          <button>Our Menu</button>
    </div>

    <div>
      <h2> Always Fresh</h2>
      <p> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Urna molestie at elementum eu facilisis
          sed odio morbi quis.</p>
          <button>Our Story</button>
          <img src={season} />
    </div>

    <div>
        <h2>Steak Special Menu!</h2>
        <p> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
            <img src={steak} />
    </div>

    <div>
        <h2>Nutrition</h2>
        <p> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
            <img src={nutrition} />
    </div>

    <div>
      <form>
      <h2>Book a table</h2>
    
      <label for="date">Date</label>
      <input type="date" name="Date"/>
    
      <label for="book">Time</label>
      <input type="time" name="book"/>
      <input type="submit"/>
    
      <label for="book">Party Size</label>
      <select>
          <option value="1 person">1 person</option>
          <option value="2 people">2 people</option>
          <option value="3 people">3 people</option>
          <option value="4 people">4 people</option>
          <option value="5 people">5 people</option>
          <option value="6 people">6 people</option>
      </select>
      </form>
  </div>
    </>
  );
}