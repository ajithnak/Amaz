import React from 'react'
import"./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {

    const [{basket, user}]= useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    };
    
    return <nav className="header" >
          {/*logo on the left img*/}
          <Link to="/">
          <img className="header__logo"
           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
           alt="" />
           </Link>

          {/*Search box*/}
          <div className="header__search">
          <input type="text" className="header__searchInput"/>
          <SearchIcon className="header__searchIcon" />
          </div>
          {/*3 links */}
          <div className="header__nav">
              {/* 1st link */}
              <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
              <span className="header__optionlineone">Hello{user ?.email}</span>
              <span className="header__optionlinetwo">{user ?'Sign Out' : 'Sign In'}</span>
              </div>
              </Link>
              {/* 2nd link */}
              <Link to="/" className="header__link">
              <div className="header__option">
              <span className="header__optionlineone">Returns</span>
              <span className="header__optionlinetwo">& Orders</span>
              </div>
              </Link>

              {/* 3rd link */}
              <Link to="/" className="header__link">
              <div className="header__option">
              <span className="header__optionlineone">Your</span>
              <span className="header__optionlinetwo">Prime</span>
              </div>
              </Link>

              {/* 4th link */}
              <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                      <ShoppingBasketIcon />
                      <span className="header__optionlinetwo header__basketcount">
                          {basket?.length}</span>
                      
                  </div>
              </Link>


          </div>
          {/* basket icon*/ }  
        </nav>
    
}

export default Header
