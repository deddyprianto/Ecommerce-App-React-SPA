import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCart } from "features/root/counterSlice";

function Cart() {
  const [stockQty, setstockQty] = useState(0);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { products } = useSelector((state) => state.appSlice.product);
  const { val } = useSelector((state) => state.counter.cart);
  const { search } = useLocation();
  const { id } = useParams();
  const qty = search ? Number(search.split("=")[1]) : 1;

  useEffect(() => {
    const fnCheckDataInTheCart = () => {
      const isItemExistInTheCart = val.find((item) => item.id === Number(id));
      const dataSpesified = products?.filter((item) => item.id === Number(id));
      dispatch(
        actionCart({
          val: isItemExistInTheCart
            ? val.map((item) =>
                item.id === id ? { ...item, qty: item.stock + 1 } : item
              )
            : [...val, ...dataSpesified],
        })
      );
    };
    fnCheckDataInTheCart();
  }, []);

  return (
    <div>
      <div className="container">
        <div
          className="w-full mt-[4%] h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 "
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p
                    onClick={() => navigate("/shop", { replace: true })}
                    className="text-sm pl-2 leading-none"
                  >
                    Back
                  </p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                  Produk Detail
                </p>
                {val.map((item, i) => (
                  <div
                    key={i}
                    className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                  >
                    <div className="w-1/4">
                      <img
                        src={item.imgSrc}
                        alt="this is your pic"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                        RF293
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          North wolf bag
                        </p>
                        <select
                          onChange={(e) => setstockQty(e.target.value)}
                          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                        >
                          {[...Array(item.stock).keys()].map((a, i) => (
                            <option key={i} value={a + 1}>
                              {a + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Qty: {item.qty}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: Black
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Composition: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">
                      Summary Order
                    </p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $9,000
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $30
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Tax
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $35
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        $10,240
                      </p>
                    </div>
                    <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </div>
  );
}

export default Cart;
