import React from "react";
import "./App.css";

const chats = [
  {
    id: 1,
    name: "홍길동",
    message: "안녕~ 잘 지내?",
    time: "오전 10:20",
    unread: 2,
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "엄마",
    message: "밥 챙겨먹었니?",
    time: "어제",
    unread: 0,
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "친구들 단톡",
    message: "오늘 영화 볼 사람~",
    time: "오후 5:40",
    unread: 5,
    avatar: "https://via.placeholder.com/50",
  },
];

function App() {
  return (
    <div className="max-w-sm mx-auto bg-white h-screen border shadow-md flex flex-col">
      <header className="p-4 font-bold text-lg border-b">채팅</header>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center p-4 border-b hover:bg-gray-100 transition"
          >
            <img
              src={chat.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{chat.name}</span>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-600 truncate w-40">{chat.message}</span>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="p-4 border-t flex justify-around text-gray-500">
        <span>친구</span>
        <span className="font-bold text-black">채팅</span>
        <span>더보기</span>
      </footer>
    </div>
  );
}

export default App;
