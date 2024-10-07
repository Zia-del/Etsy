'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import Image from 'next/image'
{/* {route ? router.push('/about') : route}<br /> */ }


const Navbar = () => {
  const [route, setRoute] = useState(false)
  const router = useRouter()
  // className='light' onClick={() => setRoute(true)}
  // {/* {route ? router.push('/about') : route}<br /> */}

  return (

    <div>


      <div className='nav1'>

        <h1 id='h1'>Etsy</h1>
        <div class="navigationBar">
          <div>
            <input type="checkbox" id='checkBtn' className='btn' />
            <label for="checkBtn" > <GiHamburgerMenu />Categories</label>

            <ul class="checker">
              <li id="checkItems" ><Link href="/about">Accessories</Link></li>
              <Link href="/Art"><li id="checkItems">Art & Collectibles</li></Link>
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
        <p id='p'>sign in</p>

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


      {/* main starts here */}

      <div className="section1">
        <div className='section'>
          <div className="backgroundimage1 p-96">
            <div className="backgroundimage p-96">
              <p className='backgroundimagep' id='backgroundimagep'>USD 19.00</p>
            </div>

            <div className="backgroundimage2">
              <p className='backgroundimagep'>USD 19.00</p>
            </div>

            <div className="backgroundimage3">
              <p className='backgroundimagep'>USD 14.99</p>
            </div>

            <div className="backgroundimage4">
              <p className='backgroundimagep'>USD 19.00</p>
            </div>

            <div className="backgroundimage5">
              <p className='backgroundimagep'>USD 65.55</p>
            </div>
          </div>

          <div className='section'>
            <div className="backgroundimage1">
              <div className="backgroundimage" id='background'>
                <p className='backgroundimagep'>USD 19.00</p>
              </div>

              <div className="backgroundimage6">
                <p className='backgroundimagep'>USD 19.00</p>
              </div>

              <div className="backgroundimage7">
                <p className='backgroundimagep'>USD 14.99</p>
              </div>

              <div className="backgroundimage8">
                <p className='backgroundimagep'>USD 19.00</p>
              </div>

              <div className="backgroundimage9">
                <p className='backgroundimagep'>USD 65.55</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="section2">
        <div className="ssection2sub">
          <div>
            <Image
            src={"/.suedehadbag.avif"}
            width={20}
            height={20}
            alt='hadbag'
            />
          </div>
        </div>
      </div>
      {/* main ends here */}
    </div>
  )
}

export default Navbar