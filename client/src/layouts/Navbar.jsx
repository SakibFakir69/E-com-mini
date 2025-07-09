import React, { useState, useContext } from "react";
import { Link, PrefetchPageLinks } from "react-router-dom";
import { ContextProviderApi } from "../context/ContextProvider";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const { cartItem, setCartItem } = useContext(ContextProviderApi);

  const handelSideBar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to={"/"}>Home</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Mini Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/"}>Home</Link>
          </ul>
        </div>

        <div className="navbar-end">
          <img
            onClick={() => handelSideBar(true)}
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />

          <section className="absolute top-14 w-full h-screen">
            {sidebar ? (
              <aside className="bg-white border border-black rounded md:w-72 w-40 h-2/3 ease-out duration-75 delay-100 right-4  fixed  z-50 overflow-x-scroll">
                <button className="btn fixed" onClick={()=> handelSideBar(false)}>Close</button>
                
              {
                cartItem.length===0 ? 
                (<div className="flex justify-center">No Items in Cart</div>) : (<div>


                  {
                    cartItem.map((item,key)=>(
                      <div key={key} className="flex justify-center items-center gap-y-4">

                        <div>
                          <img src={item.image} alt={item.title} className="h-12 w-12 rounded"/>
                        <p className="md:font-semibold">{item.title}</p>
                        <div className="flex w-full gap-x-2">
                          <button>-</button> 1 <button>+</button>

                        </div>
                        </div>

                      </div>
                    ))
                  }
                  <div className="flex justify-center items-center py-4">
                    
                  <button className="btn ">Checkout</button>
                  </div>

                </div>)
              }
              </aside>
            ) : (
              ""
            )}
          </section>
          {/* open cart slide */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
