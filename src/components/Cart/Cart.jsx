import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import CursorZoom from "react-cursor-zoom";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { actionCart } from "features/root/counterSlice";

function Cart() {
  let allPrice = [0];
  const [stockQty, setstockQty] = useState(0);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { product } = useSelector((state) => state.appSlice.productDetail);
  const val = useSelector((state) => state.counter.cart);
  // const { search } = useLocation();
  // const qty = search ? Number(search.split("=")[1]) : 1;
  useEffect(() => {
    dispatch(actionCart(product));
  }, []);
  val.forEach((item) => {
    let multipleAllPriceAndQty = item.price * item.qty;
    allPrice.push(multipleAllPriceAndQty);
  });

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
                  Item di keranjang kamu
                </p>
                {val.map((item, i) => (
                  <div
                    key={i}
                    className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                  >
                    <div className="w-1/4">
                      <CursorZoom
                        image={{
                          src: item.imgSrc,
                          width: 400,
                          height: 300,
                        }}
                        zoomImage={{
                          src: item.imgSrc,
                          width: 2000,
                          height: 1600,
                        }}
                        cursorOffset={{ x: 0, y: 0 }}
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
                        <div className="flex items-center ">
                          <p className="mr-2">Stock Barang</p>
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
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Jumlah List Item yg di beli: {item.qty}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Warna: Hitam
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Terbuat dari: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Tambahkan ke Favorite
                          </p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                            Hapus
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          <CurrencyFormat
                            value={
                              stockQty < 1
                                ? item.price * item.qty
                                : item.price * item.qty * stockQty
                            }
                            displayType="text"
                            thousandSeparator={true}
                            prefix="Rp"
                          />
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
                      Ringkasan Pembayaran
                    </p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">
                        Sub Total
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $9,000
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Pengiriman
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        Rp30,00
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Pajak
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        Rp3,500
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        <CurrencyFormat
                          value={allPrice.reduce((a, b) => a + b)}
                          displayType="text"
                          thousandSeparator={true}
                          prefix="Rp"
                        />
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
