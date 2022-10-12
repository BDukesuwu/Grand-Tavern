import { useState, useEffect, useRef } from 'react'; // import these functions
import * as itemsAPI from '../../utilities/items.api' //import all functions from here

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]); //important when using api
  const categoriesRef = useRef([]); // create and init the red to an empty array

  // fetch the menuItems from server via ajax
  useEffect(function () {
    async function getItems() { 
      // get all menu items
      const items = await itemsAPI.getAll();
      // get all categories of foods 
      categoriesRef.current = items.reduce((cats, item)=> {
        // get an item from the category
        const cat = item.category.name;
      setMenuItems(items);
      // return the category, if not, then add a category
      return cats.includes(cat) ? cats : [...cats, cat];
    }, []);
    setMenuItems(items);
  }
    getItems();
  }, []);


  // call setMenuItems to save the state after

  return (
    <>
    
     <h1>Your Order</h1>
     <button onClick={() => setMenuItems(Date.now())}> Trigger re-render</button>
    </>
    );
}


