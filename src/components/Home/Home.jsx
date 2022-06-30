import React from "react";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import Footer from "components/Footer";
import Banner from "./Banner";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Product from "./Product";
import SlideShow from "./SlideShow";
import { actionModal } from "features/root/appSlice";
import Modal from "./Modal";
const useTrackedSelector = createTrackedSelector(useSelector);

export const PlaceHolderShimmer = () => {
  return (
    <div className="w-full flex flex-col py-32">
      <div className="w-full">
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-400 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 mt-5">
        <div className="flex flex-col w-full">
          <div className="border border-gray-300 shadow rounded-md p-4 w-[70%] mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-400 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 shadow rounded-md p-4 w-[70%] mx-auto mt-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-400 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* batas grid */}
        <div className="flex flex-col w-full">
          <div className="border border-gray-300 shadow rounded-md p-4 w-[70%] mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-400 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 shadow rounded-md p-4 w-[70%] mx-auto mt-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-400 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const state = useTrackedSelector();
  const dispatch = useDispatch();
  const { modal } = state.appSlice.stateModal;
  return (
    <>
      <SlideShow />
      <Banner />
      <LazyLoadComponent
        placeholder={<PlaceHolderShimmer />}
        afterLoad={() => console.log("render Blog")}
      >
        <Blog />
      </LazyLoadComponent>
      <Product />
      <LazyLoadComponent
        placeholder={<PlaceHolderShimmer />}
        afterLoad={() => console.log("render newsLetter")}
      >
        <NewsLetter />
      </LazyLoadComponent>
      <Footer />
      <div
        onClick={() => dispatch(actionModal({ modal: true }))}
        className="cursor-pointer absolute bottom-1 right-3  w-20 h-20 rounded-full bg-sky-500 flex justify-center items-center"
      >
        <ChatAlt2Icon className="text-white h-14 w-14" />
      </div>
      {modal && <Modal />}
    </>
  );
};

export default Home;
