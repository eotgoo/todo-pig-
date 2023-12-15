"use client";
import React, { useEffect, useState } from "react";

const Christmas = () => {
  const [word, setWord] = useState("");
  const [clientWord, setClientWord] = useState("");
  const [isFunctionWorking, setIsFunctionWorking] = useState(false);

  const alphabet_array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];

  const findAlphabet = ({ word }: any) => {
    const wordArr = word.split("");
    const returningWordArr = [""];
    let delay = 100;

    wordArr.map((wLetter: any) => {
      alphabet_array.map((aLetter) => {
        returningWordArr.push(aLetter);
        if (wLetter.toLowerCase() === aLetter.toLowerCase()) {
          returningWordArr.push(wLetter);
          console.log(wLetter);
        }
        delay += 20;

        const returningWord = returningWordArr.join("");
        setTimeout(() => {
          setWord(returningWord);
        }, delay);
        returningWordArr.pop();
      });
    });
  };
  useEffect(() => {
    console.log(word);
  }, [word]);
  return (
    <div className="flex flex-col items-center gap-2 justify-center  h-screen">
      {isFunctionWorking === true ? (
        <h1 className="text-5xl">{word}</h1>
      ) : (
        <>
          <p>ugee bich</p>
          <input
            className="bg-black border-white border-[1px]"
            onChange={(e) => {
              setClientWord(e.target.value);
            }}
          />
        </>
      )}
      <button
        onClick={() => {
          isFunctionWorking === false ? findAlphabet({ word: clientWord }) : {};
          setIsFunctionWorking((prev: any) => !prev);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Christmas;
