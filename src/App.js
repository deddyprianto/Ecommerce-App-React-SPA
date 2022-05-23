import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./customcss/animasiCustom.css";
import Navbar from "components/Navbar";
const Home = lazy(() => import("pages/Home"));
const ProtectedRoute = lazy(() => import("pages/ProtectedRoute"));
const SharedLayout = lazy(() => import("pages/SharedLayout"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Shop = lazy(() => import("pages/Shop"));
const ProductDetail = lazy(() => import("pages/ProductDetail"));
const Cart = lazy(() => import("pages/Cart"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#EEF3F9] w-screen h-screen overflow-x-hidden">
        <Navbar />
        <Suspense
          fallback={
            <div className="text-rose-500 bg-[#EEF3F9] h-screen w-screen font-bold flex justify-center items-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <SharedLayout />
                </ProtectedRoute>
              }
            >
              <Route path="main" element={<Dashboard />} />
            </Route>
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/" index element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
