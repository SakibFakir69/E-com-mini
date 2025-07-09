import React, { useState, useContext } from "react";
import { Link, PrefetchPageLinks } from "react-router-dom";
import { ContextProviderApi } from "../context/ContextProvider";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const { cartItem, setCartItem } = useContext(ContextProviderApi);

  const handelSideBar = () => {
    setSidebar((prev) => !prev);
  };

  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item._id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    console.log("incrase");
  };

  const decreaseQuantity = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

    console.log("decrase");
  };

  return (
    <div>
      <ToastContainer />
      <div className="navbar bg-[#FFFFFF] shadow-sm border border-stone-300 p-4">
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
          <a className="btn btn-ghost text-xl"> <span className="text-[#6366F1]">Mini</span> Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/"}>Home</Link>
          </ul>
        </div>

        <div className="navbar-end">
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator" onClick={()=>handelSideBar(true)}>
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item text-[#6366F1]">
                  {cartItem.length}
                </span>
              </div>
            </div>
          </div>

          <section className="absolute top-14  h-screen">
            {sidebar && (
              <aside className=" border border-white bg-stone-100 rounded md:w-72 w-40 h-2/3 ease-out duration-75 delay-100 right-4  fixed  z-50 overflow-x-scroll">
                <button className="fixed p-2 cursor-pointer hover:text-red-500" onClick={() => handelSideBar(false)}>
                  <img
                    className="size-6"
                    src="https://img.icons8.com/ios/50/cancel.png"
                    alt="cancel"
                  />
                </button>

                {cartItem.length === 0 ? (
                  <div className="flex justify-center">No Items in Cart</div>
                ) : (
                  <div>
                    {cartItem.map((item, key) => (
                      <div
                        key={key}
                        className="flex justify-center items-center gap-y-4"
                      >
                        <div className="border border-stone-100 flex flex-col justify-center items-center mt-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-12 w-12 rounded"
                          />
                          <p className="md:font-semibold">{item.title}</p>

                          <div className="flex justify-center w-full gap-x-2">
                            <button
                              className="cursor-pointer"
                              onClick={() => increaseQuantity(item._id)}
                            >
                              +
                            </button>{" "}
                            {item.quantity}{" "}
                            <button
                              onClick={() => decreaseQuantity(item._id)}
                              className="cursor-pointer"
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="h-10  text-center p-4">
                      <p className=""> Total price {totalPrice}</p>
                    </div>

                    <div className="flex justify-center items-center py-4">
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn bg-[#6366F1] text-white"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        Check out
                      </button>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <section className="p-6">
                            <form
                              noValidate=""
                              action=""
                              className="container flex flex-col mx-auto space-y-12"
                            >
                              <fieldset className="flex flex-col gap-6 p-6 rounded-md ">
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                  <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="text-sm">
                                      Name
                                    </label>
                                    <input
                                      id="firstname"
                                      type="text"
                                      placeholder="Enter your name"
                                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border py-2 px-8 text-black"
                                    />
                                  </div>

                                  <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">
                                      Email
                                    </label>
                                    <input
                                      id="email"
                                      type="email"
                                      placeholder="Email"
                                      className="w-full rounded-md px-8 py-2 border"
                                    />
                                  </div>
                                  <div className="col-span-full">
                                    <label
                                      htmlFor="address"
                                      className="text-sm"
                                    >
                                      Address
                                    </label>
                                    <input
                                      id="address"
                                      type="text"
                                      placeholder=""
                                      className="w-full rounded-md border px-8 py-2"
                                    />
                                  </div>
                                  <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">
                                      City
                                    </label>
                                    <input
                                      id="city"
                                      type="text"
                                      placeholder=""
                                      className="w-full rounded-md border"
                                    />
                                  </div>
                                  <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">
                                      State / Province
                                    </label>
                                    <input
                                      id="state"
                                      type="text"
                                      placeholder=""
                                      className="w-full rounded-md border"
                                    />
                                  </div>
                                  <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">
                                      ZIP / Postal
                                    </label>
                                    <input
                                      id="zip"
                                      type="text"
                                      placeholder=""
                                      className="w-full rounded-md border"
                                    />
                                  </div>
                                </div>
                              </fieldset>
                            </form>
                          </section>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* thid modal show order placed */}
                              {/* after cart item will be empty */}
                              <button
                                onClick={() => {
                                  setCartItem([]),
                                    toast.success("Order placed");
                                }}
                                className="btn"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                )}
              </aside>
            )}
          </section>
          {/* open cart slide */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
