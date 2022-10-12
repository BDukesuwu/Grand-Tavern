import { useState, useEffect } from 'react';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]); //important when using api
  
  // fetch the menuItems from server via ajax
  useEffect (function (){
    console.log('order page is up')
  });

  // call setMenuItems to save the state after

  return (
    <h1>Your Order</h1>
  );
}


