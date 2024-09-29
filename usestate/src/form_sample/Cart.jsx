import { useState } from "react"

export const Cart = () => {
    const [cartCount,setcart]=useState(0);
    const handclick =()=>setcart(cartCount + 1)
  return (
   <>
   <h1>number of items in the cart:{cartCount}</h1>
   <button onClick={handclick}>add to cart</button>
   </>
  )
}
