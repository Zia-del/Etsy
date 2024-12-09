'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import Image from 'next/image'
{/* {route ? router.push('/about') : route}<br /> */ }


const Navbar = ({handlePopUp}) => {
  const [route, setRoute] = useState(false)
  const router = useRouter()
  // className='light' onClick={() => setRoute(true)}
  // {/* {route ? router.push('/about') : route}<br /> */}

  return (

    <div>


      <div className='nav1'>
        <Link href={"/"} id='h1'>Etsy</Link>
        <div class="navigationBar">
          <div>
            <input type="checkbox" id='checkBtn' className='btn' />
            <label for="checkBtn" >Categories</label>

            <ul class="checker">
              <li id="checkItems" ><Link href={"/assessories "}>Accessories</Link></li>
              <li id="checkItems">Art & Collectibles</li>
              <li id="checkItems">Babys</li>
              <li id="checkItems">Bag & Purses</li>
              <li id="checkItems">Bath & Bueaty</li>
              <li id="checkItems">Book, Movies & Music</li>
              <li id="checkItems">Clothing</li>
              <li id="checkItems">Art supplies & Tools</li>
              <li id="checkItems">Gifts</li>
              <li id="checkItems">Home & Living</li>
              <li id="checkItems">Jewelry</li>
              <li id="checkItems">Paper and party supplies</li>
              <li id="checkItems">Pet supplies</li>
              <li id="checkItems">Shoes</li>
              <li id="checkItems">Toys & Games</li>
              <li id="checkItems">Weddings</li>
            </ul>
          </div>
        </div>
        <div className='inpute'><input type="text" className='fname' placeholder='Search for anything' /></div>
        <p id='p'
         onClick={handlePopUp}
        >sign in</p>

        <div className='pholder'>
          <p className='p w-96'><FaRegHeart /></p>
          <p className='p'><IoGiftOutline /></p>
          <p className='p'><FiShoppingCart /></p>
        </div>
      </div>

      <div className="nav2">
        <div className="nav2sub">
          <p className='nav2p'><FiGift />Gifts</p>
          <p className='nav2p' id='nav2p'>Halloween Shops</p>
          <p className='nav2p' id='nav2p'>Home Favourite</p>
          <p className='nav2p' id='nav2p'>Fashion Finds</p>
          <p className='nav2p' id='nav2p'>Registary</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar