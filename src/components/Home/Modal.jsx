import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import { actionModal } from "features/root/appSlice";
import Chat from "./Chat";
const useTrackedSelector = createTrackedSelector(useSelector);
const Modal = () => {
  const dispatch = useDispatch();
  const state = useTrackedSelector();
  const { modal } = state.appSlice.stateModal;

  return (
    <Transition appear show={modal} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => dispatch(actionModal(!modal))}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-customblack opacity-80" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-start"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-popins font-medium leading-6 text-gray-900"
              >
                Realtime Chat With Customer Service
              </Dialog.Title>
              <hr className="w-full bg-gray-100" style={{ height: "1px" }} />
              <div className="mt-5">
                <Chat />
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => dispatch(actionModal(!modal))}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
