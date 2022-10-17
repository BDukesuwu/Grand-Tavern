import { useState, useEffect, useRef } from 'react'; // import these functions
import { Link } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';


export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]); //important when using api
  const [activeCat, setActiveCat] = useState('');
  //create and initialize the ref to
  const categoriesRef = useRef([]); // create and init the ref to an empty array
/*
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
    setActiveCat(categoriesRef.current[0]);
  }
    getItems();
  }, []); // empty dependency array to run the effect after the first render only

*/
  // call setMenuItems to save the state after

  return (
    <>
      <main className="NewOrderPage">
        
        <MenuList
          menuItems={menuItems.filter(item => item.category.name === activeCat)}
        />
      </main>
    </>
    );
}