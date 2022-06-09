import React, { useRef } from "react";
import { mutate } from "swr";
import axios from "axios";
import { useUser } from "./useUser";

const Chat = () => {
  const { user, isLoading, isError } = useUser();
  const name = useRef(null);
  const handleClickMessage = async () => {
    const FAKE_DATA = {
      id: "266",
      name: name.current.value,
      createdAt: "2022-05-05T14:51:30.394Z",
      updatedAt: "2022-05-05T14:51:30.394Z",
      clientOnly: true,
    };
    mutate(
      "http://localhost:5000/api/backend/chat",
      (users) => [FAKE_DATA, ...users],
      false
    );
    await axios.post("http://localhost:5000/api/backend/chat", {
      name: name.current.value,
    });
    mutate("http://localhost:5000/api/backend/chat");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full  bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs ">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">{user?.name}</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                {user?.createdAt}
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end ">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
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
        </div>
        <div className="bg-gray-400 p-4 flex">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Type your message…"
            ref={name}
          />
          <button
            onClick={handleClickMessage}
            className="bg-blue-500 text-white rounded-lg ml-2 p-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
