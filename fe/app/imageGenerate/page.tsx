"use client";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "@/variables";

const ImageGen = () => {
  const [prompt, setPrompt] = useState("");
  const [genedImg, setGenedImg] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // dall-e-2 Ai aar image gen hiih function
  const generateImg = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.post(`${BASE_URL}/generateImage`, {
        prompt,
      });
      setGenedImg(response.data.data);
    } catch (error) {
      // Handle the error
      console.error("Error:", error);
      alert("token duussan bololtoi hhe");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl">Image Generater with Dall-E-2</h1>
      <div className="flex gap-4">
        <input
          className="text-black"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button
          className="border-2 border-white px-2"
          onClick={() => {
            if (prompt) {
              generateImg();
            } else {
              alert("ymr negen utga oruulna uu!!!");
            }
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex justify-center items-center w-[800px] h-[800px]">
        {isGenerating === false ? (
          <>
            {genedImg ? (
              <img
                className="w-full h-full object-contain"
                src={genedImg}
                alt="generatedImg"
              />
            ) : (
              <div></div>
            )}
          </>
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
};

export default ImageGen;
