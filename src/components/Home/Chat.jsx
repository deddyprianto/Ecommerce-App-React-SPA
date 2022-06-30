import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { mutate } from "swr";
import axios from "axios";
import { useChat } from "customHook/useChat";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";
const useTrackedSelector = createTrackedSelector(useSelector);
const Chat = () => {
  const state = useTrackedSelector();
  const { user } = state.appSlice.dataUser;

  const { chat, isLoading, isError } = useChat();
  const message = useRef(null);

  const handleClickMessage = async () => {
    const FAKE_DATA = {
      id: uuidv4(),
      name: "deddy",
      message: message.current.value,
      createdAt: "2022-05-05T14:51:30.394Z",
      updatedAt: "2022-05-05T14:51:30.394Z",
      clientOnly: true,
    };
    mutate(
      "http://localhost:3000/chat",
      (users) => [FAKE_DATA, ...users],
      false
    );
    await axios.post("http://localhost:3000/chat", {
      id: uuidv4(),
      name: "deddy",
      message: message.current.value,
      createdAt: "2022-05-05T14:51:30.394Z",
      updatedAt: "2022-05-05T14:51:30.394Z",
    });
    mutate("http://localhost:3000/chat");
  };
  console.log("render ulang chat");
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 h-96 bg-gray-100">
      <div className="flex flex-col flex-grow w-full  bg-white shadow-xl rounded-lg overflow-hidden">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="text-center">Error {isError.message}</p>
        ) : (
          <>
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              {chat.map((item, i) => (
                <div
                  key={i}
                  className={`flex w-full mt-2 space-x-3 max-w-xs ${
                    item.name === user.name && "ml-auto justify-end"
                  }`}
                >
                  <div>
                    <div className="bg-gray-200 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm text-gray-900">{item.name}</p>
                      <p className="text-gray-500 text-[14px]">
                        {item.message}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      {item.createdAt}
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                    <img
                      src="https://i.pinimg.com/550x/c1/06/0b/c1060bccb6c4040856d9ae5428358d8c.jpg"
                      alt="pic"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 flex">
              <input
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
                ref={message}
              />
              <button
                onClick={handleClickMessage}
                className="bg-blue-500 text-white rounded-lg ml-2 p-2"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
