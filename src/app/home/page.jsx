"use client";
import ChatInput from "@/components/custom/chatinput";
import ChatHistory from "@/components/custom/chathistory";
import SuggestionInput from "@/components/custom/suggestioninput";

import React, { useState } from "react";
import "./home.css";
import Image from "next/image";
import BeeLogo from "../bee.png";

var middle =
  "css-selector flex items-center justify-center h-screen w-screen flex-col gap-2 my-4";
var bottom =
  "css-selector absolute bottom-0 mx-auto flex items-center  w-full bg-red-400 mb-5 flex-col flex-col-reverse gap-4 h-screen py-4";

const Home = () => {
  const [userActive, setUserActive] = useState(false);
  const [userPrompt, setUserPrompt] = useState([]);
  const [systemResponse, setSystemResponse] = useState([]);

  const handleUserActiveChange = (isActive, userPrompt, systemResponse) => {
    setUserActive(isActive);
    setUserPrompt(userPrompt);
    if (systemResponse) setSystemResponse(systemResponse);
  };

  return (
    <div className={!userActive ? middle : bottom}>
      {/* <EmojiSection /> */}
      {!userActive && (
        <div className="font-serif text-3xl  p-2 text-white font-bold typewriter">
          <div className="flex items-baseline">
            Hello, I'm
            <span className="text-zinc-800 mx-2">
              <span className="relative left-3">
                <Image height={30} width={30} alt="bee" src={BeeLogo} />
              </span>
              <span>WellBee</span>
              {/* WellBee */}
            </span>
            . How can I help you today?
          </div>
        </div>
      )}

      <ChatInput onUserActiveChange={handleUserActiveChange} />
      {!userActive && <SuggestionInput />}
      {userActive && (
        <ChatHistory userPrompt={userPrompt} systemResponse={systemResponse} />
      )}
    </div>
  );
};

export default Home;

// in which country sharks are seen?
