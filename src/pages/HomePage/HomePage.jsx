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

    <div id="booking">
      <form>
      <h2>Book a table</h2>
    
      <label>Date</label>
      <input type="date" name="Date"/>
    
      <label>Time</label>
      <input type="time" name="book"/>
      <input type="submit"/>
    
      <label for="partysize" placeholder='party size'/>
        <select class="form-control">
          <option value="" disabled selected hidden>Party Size</option>
          <option>1 person</option>
          <option>2 people</option>
          <option>3 people</option>
          <option>4 people</option>
          <option>5 people</option>
        </select>
      </form>
  </div>
    </>
  );
}